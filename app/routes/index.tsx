import { Link, useLoaderData } from "@remix-run/react";
import portrait from "~/images/roo.jpg";
import { json, LoaderArgs } from "@remix-run/node";
import Layout from "~/components/Layout";

// TODO make page more centred on big screens

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const theme = url.searchParams.get("theme") || "light";
  const page = url.pathname;
  console.log("Current theme is", theme);
  return json({ theme, page });
}

export default function () {
  const { theme } = useLoaderData<typeof loader>();
  return (
    <Layout theme={theme} page={"me"}>
      <div className="space-y-6 sm:space-y-0 sm:grid gap-6 ">
        <p className="col-start-1">Hey there! Thanks for visiting my site.</p>
        <div className="row-span-4 sm:self-center col-start-2">
          <div
            className={`${theme}-gradient w-60 block mx-auto rounded-md p-2`}
          >
            <img
              src={portrait}
              alt="Abe with Roo, a dog he borrowed for this pic."
            />
          </div>
        </div>
        <p>
          I'm the CEO and Founder of{" "}
          <a href="https://trainwrecklabs.com" className="underline">
            Trainwreck Labs
          </a>
          , a small game studio that builds daily, free-to-play web apps. All of
          my games, such as Globle and Metazooa, have an educational component
          and aim to teach you something new every day.
        </p>
        <div className="w-full my-6 flex justify-center">
          <Link
            to={`/contact?theme=${theme}`}
            tabIndex={-1}
            className="w-max mx-auto"
          >
            <button
              className={`rounded-lg py-2 px-6 min-w-max ${theme}-gradient
        hover:drop-shadow-none transition-all mx-auto`}
            >
              <b>Contact</b> <br />{" "}
              <span className="text-sm">to hire or collab</span>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
