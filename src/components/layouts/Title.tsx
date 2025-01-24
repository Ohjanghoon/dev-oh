interface Props {
  title: string;
  description: string;
}

function Title({ title, description }: Props) {
  return (
    <div className="my-8 text-center md:mx-20">
      <h3 className="h3 bg-gradient-to-r from-accent/90 to-accent-400 bg-clip-text uppercase tracking-wider text-transparent">
        {title}
      </h3>
      <p className="mx-auto my-2 h-[2px] w-full bg-gradient-to-r from-transparent via-accent-hover to-transparent"></p>
      <p className="text-[11px] text-text-secondary md:text-sm">
        {description}
      </p>
    </div>
  );
}

export default Title;
