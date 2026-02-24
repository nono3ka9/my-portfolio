import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function Portfolio() {
  return (
    <section className="font-serif py-[170px]">
      <SectionTitle
        title="Portfolio"
        sub="これまでに制作したプロジェクト作品"
        titleClassName="text-[36px]"
        subClassName="text-[20px]"
      />

      <div className="flex justify-center gap-4 mt-8">
        {["ALL", "Web Design", "App Design"].map((t) => (
          <button
            key={t}
            className="border px-6 py-2 rounded-full text-[11px] tracking-widest"
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-x-[96px] gap-y-[92px] mt-[110px]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} />
        ))}
      </div>
    </section>
  );
}
