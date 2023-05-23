import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import CookieStorage from "../services/cookieStorage";

const auth = (WrappedComponent:any) => {
  const Auth = (props:any) => {
    const { getLogin } = new CookieStorage();
    const router =useRouter();
    const isAuthenticated = getLogin();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login'); 
      }
    }, [router, isAuthenticated]);
 
    console.log("alerting...",isAuthenticated)
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
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
