import { LoaderArgs, json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Layout from "~/components/Layout";

export async function loader({ request, params }: LoaderArgs) {
  const url = new URL(request.url);
  const theme = url.searchParams.get("theme") || "light";
  const page = url.pathname;
  console.log("Current theme is", theme);
  return json({ theme, page });
}

export default function () {
  const { theme, page } = useLoaderData<typeof loader>();

  return (
    <Layout theme={theme} page={page}>
      <div className="max-w-xl">
        <p className="mb-8">
          Use this form to send me a message. It can be about anything, from
          feature requests on my projects, to collaboration opportunities, to
          how you're feeling today. I love to hear from people and I read every
          message!
        </p>
        <Form action="POST">
          <label className="block mb-6">
            <span>Your name</span>
            <input
              type="text"
              name="name"
              className=" block w-full mt-1 p-1 border-gray-300 rounded-md drop-shadow-[0_0_3px_rgba(0,0,0,0.4)]"
              placeholder="The Joe Schmoe"
              // value={name}
              // onChange={(e) => setName(e.currentTarget.value)}
              required
            />
          </label>
          <label className="block mb-6">
            <span>Email address</span>
            <input
              name="email"
              type="email"
              className=" block w-full mt-1 p-1 border-gray-300 rounded-md drop-shadow-[0_0_3px_rgba(0,0,0,0.4)]"
              placeholder="joe.schmoe@example.com"
              // value={email}
              // onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </label>
          <label className="block mb-6">
            <span>Your message</span>
            <textarea
              name="message"
              className="block w-full mt-1 p-1 border-gray-300 rounded-md drop-shadow-[0_0_3px_rgba(0,0,0,0.4)]"
              rows={3}
              placeholder="Please be polite with your message :)"
              // value={message}
              // onChange={(e) => setMessage(e.currentTarget.value)}
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
            hover:drop-shadow-none transition-all`}
            >
              Send
            </button>
          </div>
        </Form>
        {/* {received && <p className="text-center my-8">Message sent!</p>} */}
      </div>
    </Layout>
  );
}
