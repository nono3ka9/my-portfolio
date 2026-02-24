import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Noto_Serif_JP } from "next/font/google";

const noto = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
