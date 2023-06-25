import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({children, title}) => {
  return (
    <>
      <Helmet>
      <meta charSet="utf-8" />
        <meta name="description" content="React app" />
        <title>{title}</title>
      </Helmet>

      <Header />
      <main>
        <div>{children}</div>
        {/* <Toaster
          toastOptions={{
            success: { style: { background: "green", color: "white" } },
            error: { style: { background: "red", color: "white" } },
          }}
        /> */}
      </main>
      <Footer />

    </>
  );
};

export default Layout;
