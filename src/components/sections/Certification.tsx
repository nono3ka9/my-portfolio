import SectionTitle from "../ui/SectionTitle";

export default function Certification() {
  return (
    <section className="py-[160px]">
      <SectionTitle title="Certification" sub="資格・認定" />

      <div className="grid grid-cols-2 gap-x-[100px] gap-y-[48px] mt-[110px]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="h-[78px] w-[380px] border rounded-[18px] mx-auto"
          />
        ))}
      </div>
    </section>
  );
}
