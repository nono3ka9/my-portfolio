import SectionTitle from "../ui/SectionTitle";

export default function Skills() {
  return (
    <section className="py-[160px]">
      <SectionTitle title="Skills" />

      <div className="grid grid-cols-3 gap-[95px] mt-[110px]">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-[200px] w-[260px] border rounded-[22px] mx-auto"
          />
        ))}
      </div>
    </section>
  );
}
