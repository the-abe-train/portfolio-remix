import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import cjn from "~/images/media/cjn.jpg";
import forbes from "~/images/media/forbes.jpg";
import laTimes from "~/images/media/la_times.png";

export async function loader({ request, params }: LoaderArgs) {
  const url = new URL(request.url);
  const theme = url.searchParams.get("theme") || "light";
  const page = url.pathname;
  console.log("Current theme is", theme);
  return json({ theme, page });
}

export default function MediaPage() {
  // const laTimesLogo = getImage(data.laTimes);
  const { theme, page } = useLoaderData<typeof loader>();
  return (
    <Layout page={page} theme={theme}>
      <>
        <section className="space-y-2">
          <h2 className="font-header text-2xl">Globle in the news</h2>
          <a
            href="https://thecjn.ca/podcasts/meet-the-canadian-behind-globle-the-webs-hot-new-geography-game/"
            className="inline-block w-full"
          >
            <article className="bg-[#F5FEFF] dark:bg-[#002123] p-4 border rounded-md flex items-center shadow-md">
              <img
                src={cjn}
                alt="The CJN Daily"
                width={125}
                height={125}
                className="hidden md:block"
              />
              <div className="ml-4 mb">
                <h3 className="text-xl mb-2">
                  Meet the Canadian behind Globle, the web’s hot new geography
                  game
                </h3>
                <p>With Ellin Bessner, The CJN Daily, 4 August 2022</p>
              </div>
            </article>
          </a>
          <a
            href="https://www.latimes.com/entertainment-arts/story/2022-04-14/la-ent-globle-geography"
            className="inline-block w-full"
          >
            <article className="bg-[#F5FEFF] dark:bg-[#002123] p-4 border rounded-md flex items-center shadow-md">
              <img
                src={laTimes}
                alt="LA Times"
                width={125}
                height={125}
                className="hidden md:block"
              />
              <div className="ml-4 mb">
                <h3 className="text-xl mb-2">
                  Creating online geography game Globle was relatively simple.
                  Making it accurate is the real puzzle
                </h3>
                <p>By Matt Pearce, LA Times, 14 April 2022</p>
              </div>
            </article>
          </a>
          <a
            href="https://www.forbes.com/sites/erikkain/2022/02/07/learn-geography-with-this-wordle-spinoff-globle/?sh=3646cb0c47b5"
            className="inline-block w-full"
          >
            <article className="bg-[#F5FEFF] dark:bg-[#002123] p-4 border rounded-md flex items-center shadow-md">
              <img
                src={forbes}
                alt="Forbes"
                width={125}
                className="hidden md:block"
              />
              <div className="ml-4 mb">
                <h3 className="text-xl mb-2">
                  Learn Geography With This 'Wordle' Spinoff 'Globle'
                </h3>
                <p>By Erik Kain, Forbes, 7 February 2022</p>
              </div>
            </article>
          </a>
        </section>
      </>
    </Layout>
  );
}
