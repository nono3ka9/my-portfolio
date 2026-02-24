type SectionTitleProps = {
  title: string;
  sub: string;
  titleClassName?: string;
  subClassName?: string;
};

export default function SectionTitle({
  title,
  sub,
  titleClassName = "",
  subClassName = "",
}: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className={`font-bold ${titleClassName}`}>{title}</h2>
      <p className={`mt-2 ${subClassName}`}>{sub}</p>
    </div>
  );
}
