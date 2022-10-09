import { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwind from "./styles/tailwind.css";
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
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: themes },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Acme&family=Lato&display=swap",
    },
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
