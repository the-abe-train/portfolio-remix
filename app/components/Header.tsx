import { Link } from "@remix-run/react";

export default function ({ page, theme }: { page: string; theme: string }) {
  const pageName = (name: string) => {
    const matchArray = page.match(/\w+/);
    if (!matchArray) return name;
    const n = name.toLowerCase();
    return matchArray[0] === n ? <b>{name}</b> : name;
  };
  return (
    <header
      className={`${theme}-gradient py-2 px-4 text-gray-900 dark:text-gray-200`}
    >
      <nav className="flex w-full sm:max-w-sm sm:mx-auto justify-around text-lg">
        <Link to={`/?theme=${theme}`}>{pageName("Me")}</Link>
        <Link to={`/games?theme=${theme}`}>{pageName("Games")}</Link>
        <Link to={`/apps?theme=${theme}`}>{pageName("Apps")}</Link>
        <Link to={`/media?theme=${theme}`}>{pageName("Media")}</Link>
      </nav>
    </header>
  );
}
