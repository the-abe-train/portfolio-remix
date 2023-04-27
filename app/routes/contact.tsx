import { LoaderArgs, json } from "@remix-run/node";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useTransition,
} from "@remix-run/react";

import Layout from "~/components/Layout";
import type { ActionArgs } from "@remix-run/node";
import { sendEmail } from "~/util/nodemailer";

export async function loader({ request, params }: LoaderArgs) {
  const url = new URL(request.url);
  const theme = url.searchParams.get("theme") || "light";
  const page = url.pathname;
  console.log("Current theme is", theme);
  return json({ theme, page });
}

export async function action({ request }: ActionArgs) {
  const getEntry = (formData: FormData, entry: string) => {
    const value = formData.get(entry);
    if (typeof value !== "string" || !value) {
      return "";
    }
    return value;
  };
  const formData = await request.formData();
  const email = getEntry(formData, "email");
  const name = getEntry(formData, "name");
  const text = getEntry(formData, "message");

  const errors = {
    email: email ? null : "Email is required",
    name: name ? null : "Name is required",
    text: text ? null : "Message is required",
  };
  const hasErrors = Object.values(errors).some(Boolean);
  if (hasErrors) {
    return json({
      ...errors,
      message: "Please make sure all fields are filled out.",
    });
  }

  const bannedNames = ["CrytoFoelm", "Foelm"];
  if (bannedNames.includes(name))
    return json({ message: "An error occurred, please try again later." });

  const subject = `Portfolio website email from: ${name}`;

  try {
    // Takes too long to actually wait for the response
    sendEmail({ name, email, text, subject });
    const finish = () => {
      return new Promise<Record<"message", string>>((res) => {
        setTimeout(() => res({ message: "Email sent!" }), 2000);
      });
    };
    const x = await finish();
    return json(x);
  } catch (e) {
    return json({ message: "An error occurred, please try again later." });
  }
}

export default function () {
  const { theme, page } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const transition = useTransition();

  return (
    <Layout theme={theme} page={page}>
      <div className="max-w-xl">
        <p>
          The contact form on this site is no longer active. Please use the form
          on the{" "}
          <a href="https://trainwrecklabs.com/contact" className="underline">
            Trainwreck Labs webiste
          </a>{" "}
          instead.
        </p>
        <form
          action="https://trainwrecklabs.com"
          className="mx-auto w-min my-10"
          style={{ width: "min-content", margin: "5rem auto" }}
        >
          <button
            className={`rounded-lg py-2 px-6 min-w-max ${theme}-gradient
        hover:drop-shadow-none transition-all mx-auto`}
          >
            Go to Trainwreck Labs
          </button>
        </form>
      </div>
    </Layout>
  );
}
