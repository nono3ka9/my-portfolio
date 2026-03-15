import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section className="py-[160px]">
      <SectionTitle title="About" />

      <div className="grid grid-cols-[1fr_480px] gap-[150px] mt-[130px]">
        {/* 左側自己紹介 */}
        <div>
          <h3 className="text-[13px] tracking-[0.18em]">蔭山 乃愛</h3>
          <p className="text-[10px] text-gray-500 mt-2">
            2008年3月20日生まれ / 兵庫県出身
          </p>

          <p className="text-[12px] leading-[2.2] mt-8">
            小学生の頃よりITおよびクリエイティブ分野に関心を持ち、高校ではWebデザインを専攻いたしました。
            デザイン思考と直感的操作の双方を活かし、プロジェクトに取り組む経験を積むとともに、
            起業活動を通じて、ホームページや広告デザインにより思いを具現化する重要性とその価値を実感いたしました。
            <br />
            大学ではマーケティング、心理学、AIなど、現代社会において実務的価値の高い知識を習得し、
            技術とビジネスを融合させながら、チームやプロジェクトの成功に寄与する能力を磨いております。
            <br />
            これまでの経験を基盤に、挑戦を厭わず、新たな価値創出に貢献できるデザインおよびサービスの提供に尽力してまいります。
          </p>
        </div>

        {/* 右側カード */}
        <div className="font-serif space-y-6">
          {[
            {
              t: "学歴",
              src: "/student.svg",
              detail: (
                <ul className="text-[10px] text-gray-500 list-disc ml-6 mt-1">
                  <li>
                    <span className="font-serif font-semibold text-gray-800">
                      KADOKAWAドワンゴ情報工科学院Webエンジニア専攻
                    </span>
                    <br />
                    <span className="font-serif text-[9px] text-gray-500">
                      2023年4月〜2026年3月 卒業
                    </span>
                  </li>
                </ul>
              ),
            },
            {
              t: "実務経験",
              src: "/bag.svg",
              detail: (
                <ul className="text-[10px] text-gray-500 list-disc ml-6 mt-1">
                  <li>起業活動を通したプロジェクト管理経験</li>
                  <li>HPデザイン・広告デザインの制作経験</li>
                </ul>
              ),
            },
            {
              t: "趣味・関心",
              src: "/heart.svg",
              scale: true,
              detail: (
                <ul className="text-[10px] text-gray-500 list-disc ml-6 mt-1">
                  <li>Web/アプリのUIデザイン</li>
                  <li>プログラミング・最新技術の学習</li>
                  <li>マネジメント・エンタメ分野への関心</li>
                </ul>
              ),
            },
          ].map((x) => (
            <div
              key={x.t}
              className="border rounded-[18px] p-4 flex flex-col gap-2 h-auto text-[12px]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={x.src}
                  alt={x.t}
                  className={`h-10 w-10 object-contain ${x.scale ? "scale-125" : ""}`}
                />
                <span className="text-[12px] font-medium">{x.t}</span>
              </div>
              {x.detail}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
