import "../styles/globals.css";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import store from "../store/store";
import Basket from "../components/Basket";
import Nav from "../components/Nav";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <Basket />
      <div className="pb-10 md:pb-0">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(MyApp);

MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      commercePublicKey: process.env.COMMERCE_PUBLIC_KEY,
    },
  };
};
