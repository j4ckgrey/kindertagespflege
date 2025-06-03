// app/layout.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Image from "next/image";
import Logo from "@/assets/Image.png";
import "./globals.css";

export const metadata = {
  title: "Your Site Title",
  description: "Your description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex flex-col min-h-screen">
          <div className="bg-hands"></div>
          <Header />
          <main className="page-container flex-grow">
            <div className="relative w-96 h-auto mx-auto mb-6">
              <Image src={Logo} alt="logo" className="object-contain" />
            </div>
            {children}
          </main>
          <Footer />

          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
