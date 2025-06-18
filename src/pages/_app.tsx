import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {


const router = useRouter()

   // List of routes where NavBar should be hidden
   const noNavBarRoutes = ["/Offer", "/404", "/Law"]; 

   // Check if the current route is in the list
   const shouldShowNavBar = !noNavBarRoutes.includes(router.pathname);

 
   return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {shouldShowNavBar && <NavBar />}
      <Component {...pageProps} />
    </>
  );
}
