type ProjectProps = {
  index: number;
  title: string;
  description: string;
  href: string;
  setModal: ({ active, index }: { active: boolean; index: number }) => void;
};

export default function Project({
  index,
  title,
  description,
  href,
  setModal,
}: ProjectProps) {
  return (
    <a
      href={href}
      target="_blank"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="flex w-full justify-between items-center py-10 px-24 border-t border-foreground cursor-pointer transition-all duration-200 last-of-type:border-b hover:opacity-50 group/project"
    >
      <h3 className="group-hover/project:-translate-x-2 m-0 transition-all duration-300 text-4xl font-normal">
        {title}
      </h3>
      <p className="group-hover/project:-translate-x-2 font-light">
        {description}
      </p>
    </a>
  );
}
