import { Link } from "@remix-run/react";

export default function ({ page, theme }: { page: string; theme: string }) {
  const pageName = (name: string) => (page === name ? <b>{name}</b> : name);
  return (
    <header
      className={`${theme}-gradient py-2 px-4 text-gray-900 dark:text-gray-200`}
    >
      <nav className="flex w-full sm:max-w-sm sm:mx-auto justify-around text-lg">
        <Link to="/">{pageName("Me")}</Link>
        <Link to="/games">{pageName("Games")}</Link>
        <Link to="/apps">{pageName("Apps")}</Link>
        <Link to="/media">{pageName("Media")}</Link>
      </nav>
    </header>
  );
}
