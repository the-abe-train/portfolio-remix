import { Form } from "@remix-run/react";
import Icon from "./Icon";

export default function ({ theme }: { theme: string }) {
  return (
    <footer
      className="w-full h-16 clear-both order-last flex-grow relative
  sm:max-w-sm sm:mx-auto sm:col-span-2
  "
    >
      <nav
        className="flex w-full justify-around text-lg absolute bottom-0 pt-4
    sm:max-w-sm sm:mx-auto text-gray-900 dark:text-gray-200"
      >
        <a href="https://twitter.com/theAbeTrain" aria-label="Twitter">
          <Icon name="twitter" width={24} />
        </a>
        <a href="https://github.com/the-abe-train" aria-label="GitHub">
          <Icon name="github" width={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/abe-train-81418714b/"
          aria-label="LinkedIn"
        >
          <Icon name="linkedin" width={24} />
        </a>
        <div
          onClick={() => console.log("change theme")}
          className="cursor-pointer"
        >
          <Form>
            <input
              className="hidden"
              type="text"
              value={theme !== "dark" ? "dark" : "light"}
              name="theme"
              readOnly
            />
            <button type="submit">
              <Icon name="lightswitch" width={40} />
            </button>
          </Form>
        </div>
      </nav>
    </footer>
  );
}
