interface PageTitleProps {
  alt?: boolean;
  color?: string;
  title: string;
}

function PageTitle({ alt, color, title }: PageTitleProps) {
  const alternateStyle: string | null = alt
    ? 'bg-neutral-800 text-white p-5 shadow-lg'
    : null;

  return (
    <h1
      style={{ color }}
      className={`text-center rounded-lg font-normal text-md uppercase tracking-(--page-title-tracking) ${alternateStyle} dark:text-pink-600`}
    >
      &lt;
      {title}
      /&gt;
    </h1>
  );
}

export default PageTitle;
