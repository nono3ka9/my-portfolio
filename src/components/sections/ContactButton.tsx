import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <section className="py-[160px] text-center">
      <SectionTitle title="Contact" sub="お気軽にお問い合わせください" />

      <button className="mt-[90px] px-20 py-5 bg-[#333] text-white rounded-full text-[12px] tracking-widest">
        お問い合わせをする
      </button>
    </section>
  );
}
