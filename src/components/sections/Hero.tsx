import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-[100px] pb-[150px]">
      <div className="max-w-[1100px] mx-auto px-[50px] grid grid-cols-[300px_1fr] gap-[300px] items-center">
        {/* 写真 */}
        <div className="w-[450px] h-[600px] relative ">
          <Image
            src="/profile.jpg"
            alt="profile"
            fill
            className="object-cover"
          />
        </div>

        {/* タイトル */}
        <h1 className="font-serif text-[50px] leading-[1.9] tracking-[0.05em] text-center">
          Noa Kageyama
          <span className="block text-center">Portfolio</span>
        </h1>
      </div>
    </section>
  );
}
