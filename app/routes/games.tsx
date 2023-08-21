import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import Project from "~/components/Project";
import projects from "~/data/projects.json";

export async function loader({ request, params }: LoaderArgs) {
  const url = new URL(request.url);
  const theme = url.searchParams.get("theme") || "light";
  const page = url.pathname;
  console.log("Current theme is", theme);
  return json({ theme, page });
}

export default function () {
  const { theme, page } = useLoaderData<typeof loader>();
  const games = projects.filter((proj) => proj.type === "game");
  return (
    <Layout theme={theme} page={page}>
      <p>
        For a full list of games, check out the official site for{" "}
        <a className="underline" href="https://trainwrecklabs.com">
          Trainwreck Labs!
        </a>
      </p>
    </Layout>
  );
}
