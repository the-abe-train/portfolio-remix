import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";
import themes from "./styles/themes.css";

export const meta: MetaFunction = () => {
  const htmlAttributes = {
    title: "The Abe Train",
    viewport: "width=device-width,initial-scale=1",
    description: "The Abe Train's portfolio website",
    "theme-color": "#FDFAF6",
  };
  // TODO preview picture
  // TODO favicon
  // TODO Error and catch boundaries
  const twitter = {
    "twitter:site": "@theAbeTrain",
    "twitter:creator": "@theAbeTrain",
    "twitter:card": "summary",
    "twitter:image": "https://the-abe-train.com/preview.png",
  };
  const og = {
    "og:url": "https://the-abe-train.com",
    "og:title": "The Abe Train",
    "og:description": "The Abe Train's portfolio website",
    "og:site_name": "The Abe Train",
    "og:image": "https://the-abe-train.com/preview.png",
    "og:image:alt": "The Abe Train's portfolio website",
  };
  return { ...htmlAttributes, ...twitter, ...og };
};

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: themes },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
