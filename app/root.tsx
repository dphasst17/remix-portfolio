import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import React from "react";
import "./tailwind.css";
import Layouts from "./layouts";
import { ApiProvider } from "~/contexts/api";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as process from "node:process";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.F_KEY,
    authDomain: "remix-porfolio.firebaseapp.com",
    projectId: "remix-porfolio",
    storageBucket: "remix-porfolio.firebasestorage.app",
    messagingSenderId: "509926632707",
    appId: process.env.APP_ID,
    measurementId: "G-0EETV3S9GQ"
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let analytics;

if (typeof window !== 'undefined') {
    // Initialize Firebase only on the client side
    const app = initializeApp(firebaseConfig);
    import('firebase/analytics').then(({ getAnalytics }) => {
        analytics = getAnalytics(app);
    });
}
export const links: LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tourney:ital,wght@0,100..900;1,100..900&display=swap",
    },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ApiProvider>
          <Layouts>
            {children}
          </Layouts>
        </ApiProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
