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

  const subject = "New email from portfolio website";

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
        <p className="mb-8">
          Use this form to send me a message. It can be about anything, from
          feature requests on my projects, to collaboration opportunities, to
          how you're feeling today. I love to hear from people and I read every
          message!
        </p>
        <Form method="post">
          <label className="block mb-6">
            <span>Your name</span>
            <input
              type="text"
              name="name"
              className="block w-full mt-1 py-1 px-2 border-gray-500 border rounded-md 
              dark:bg-gray-200 dark:text-black"
              placeholder="The Joe Schmoe"
              required
            />
          </label>
          <label className="block mb-6">
            <span>Email address</span>
            <input
              name="email"
              type="email"
              className="block w-full mt-1 py-1 px-2 border-gray-500  border rounded-md 
              dark:bg-gray-200 dark:text-black"
              placeholder="joe.schmoe@example.com"
              required
            />
          </label>
          <label className="block mb-6">
            <span>Your message</span>
            <textarea
              name="message"
              className="block w-full mt-1 py-1 px-2 border-gray-500 rounded-md 
              dark:bg-gray-200 dark:text-black border "
              rows={3}
              placeholder="Please be polite with your message :)"
              minLength={20}
              required
            ></textarea>
          </label>
          <div className="space-x-6 text-center">
            <Link to={`/?theme=${theme}`}>
              <button
                type="button"
                className="border border-[#666666] rounded-lg py-2 px-6 min-w-max"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className={`rounded-lg py-2 px-6 min-w-max ${theme}-gradient
            hover:drop-shadow-none disabled:drop-shadow-none transition-all`}
              disabled={transition.state !== "idle"}
            >
              Send
            </button>
          </div>
        </Form>
        {actionData && <p className="text-center my-8">{actionData.message}</p>}
        {/* <p className="text-center my-8">{"Penis town"}</p> */}
      </div>
    </Layout>
  );
}
