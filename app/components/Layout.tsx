import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: ReactNode;
  theme: string;
  page: string;
};

export default function Layout({ children, theme, page }: Props) {
  return (
    <div
      className={`${theme} flex flex-col justify-between h-full min-h-screen`}
    >
      <Header page={page} theme={theme} />
      <div
        className={`${theme}-background flex-grow h-full flex flex-col 
text-gray-900 dark:text-gray-200`}
      >
        <main className="mx-auto px-4 max-w-4xl gap-5">
          <h1 className="text-5xl text-center mt-8 mb-6 font-header">
            The Abe Train
          </h1>
          <div>{children}</div>
        </main>
        <Footer theme={theme} />
      </div>
    </div>
  );
}
