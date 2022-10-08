import paths from "~/data/icons.json";

type Props = {
  name: string;
  width: number;
};

function getPath(name: string) {
  const foundPath = paths.find((p) => p.name === name);
  const path = foundPath?.path || "";
  if (typeof path === "object") {
    return path.map((p: any, idx: number) => {
      return <path key={idx} {...p} />;
    });
  }
  return <path d={path} />;
}

function getFill(name: string) {
  const foundPath = paths.find((p) => p.name === name);
  const type = foundPath?.type || "";
  if (type === "fill") {
    return { fill: "currentColor" };
  } else {
    return {
      stroke: "currentColor",
      strokeWidth: 2,
      fill: "none",
    };
  }
}

export default function Icon({ name, width }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 24 24"
      {...getFill(name)}
    >
      {getPath(name)}
    </svg>
  );
}
