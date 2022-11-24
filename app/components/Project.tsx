import Icon from "./Icon";
import images from "~/images/projects";

type Props = {
  title: string;
  description: string;
  alt: string;
  url: string;
  repo: string;
};

export default function Project({ title, description, alt, url, repo }: Props) {
  return (
    <div className="flex space-x-4">
      <a href={url} className="flex flex-col my-6 sm:my-8">
        <img
          src={images[title]}
          alt={alt}
          width={120}
          height={120}
          className="
          h-auto max-h-[150px] w-auto max-w-[120px]
        drop-shadow-[0_0_3px_rgba(0,0,0,0.4)]
        dark:drop-shadow-[0_0_5px_rgba(200,200,200,0.3)]"
        />
      </a>
      <div className="mb-4 flex flex-col space-y-3">
        <h2 className="text-2xl font-header">{title}</h2>
        <p>{description}</p>
        <div className="flex space-x-4">
          <a href={repo} aria-label="GitHub">
            <Icon name="github" width={24} />
          </a>
          <a href={url} aria-label="alt">
            <Icon name="link2" width={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
