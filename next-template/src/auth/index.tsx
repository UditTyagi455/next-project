import { useEffect, useState } from "react";
import Router from "next/router";
import CookieStorage from "../services/cookieStorage";

const auth = (WrappedComponent:any) => {
  const Auth = (props:any) => {
    const { getLogin } = new CookieStorage();

    useEffect(() => {
      (async () => {
        if (!getLogin()) {
          Router.push("/login");
          return null;
        }
      })();
    });

    return <WrappedComponent {...props} />;
  };

  //   auth.getInitialProps = async (ctx) => {
  //     const wrappedComponentInitialProps = WrappedComponent.getInitialProps
  //       ? await WrappedComponent.getInitialProps(ctx)
  //       : {};

  //     return { ...wrappedComponentInitialProps };
  //   };

  return Auth;
};

export default auth;
