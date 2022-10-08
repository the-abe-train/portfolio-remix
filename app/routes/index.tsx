import { Link, useLoaderData } from "@remix-run/react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import portrait from "~/images/roo.jpg";
import { json, LoaderArgs } from "@remix-run/node";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const theme = url.searchParams.get("theme") || "light";
  return json({ theme });
}

export default function IndexPage() {
  const { theme } = useLoaderData<typeof loader>();
  return (
    <div
      className={`${theme} flex flex-col justify-between h-full min-h-screen`}
    >
      <Header page="Me" theme={theme} />
      <div
        className={`${theme}-background flex-grow h-full flex flex-col 
        text-gray-900 dark:text-gray-200`}
      >
        <main className="sm:grid mx-auto max-w-3xl gap-5">
          <h1 className="text-5xl text-center mt-8 mb-4 font-header col-span-2">
            The Abe Train
          </h1>
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
            I'm a{" "}
            <a
              className="underline"
              href="https://www.credly.com/badges/bc1d5730-f739-44ad-8024-b717f036cb56/public_url"
            >
              cloud-certified
            </a>{" "}
            <b>Full-stack Web Developer</b>. I'm best known for building web
            games that are played by hundreds of thousands of people around the
            world every day, including Globle and Plurality. I've also done
            freelance projects to promote indpendent films and small businesses.
          </p>
          <p>
            Looking for a freelancer to build your website, or a technical
            co-founder for you startup? Let's connect!
          </p>
          <Link to="/contact" tabIndex={-1}>
            <button className="rounded-lg py-2 px-4 min-w-max ">
              <b>Contact</b> <br />{" "}
              <span className="text-sm">to hire or collab</span>
            </button>
          </Link>
        </main>
        <Footer theme={theme} />
      </div>
    </div>
  );
}
