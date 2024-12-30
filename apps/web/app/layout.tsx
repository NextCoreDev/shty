import React from "react";
import { Header } from "./components/Header/Header";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B101B] relative min-h-screen">
        <div
          className="hidden  lg:block lg:absolute w-full inset-0 -z-10"
          style={{
            background:
              "conic-gradient(from 0deg at center, #1F2937 0%, transparent 90%)",
            WebkitMask: "radial-gradient(circle, transparent 0%, black 100%)",
            mask: "radial-gradient(circle, transparent 40%, black 100%)",
          }}
        ></div>

        {/* Mobile Background Elements */}
        <div className="absolute inset-0 -z-10 md:hidden  overflow-hidden">
          <div
            className="absolute top-36 right-14 w-[76.93px] h-[76.93px] origin-top-left -rotate-45 bg-[#0e131e] rounded-[17.44px] backdrop-blur-[25.37px]"
            style={{
              boxShadow: `0px -7.068px 11.486px rgba(4, 4, 6, 1.00)`,
            }}
          ></div>
          <div
            className="absolute top-[340px] sm:top-80 right-14 w-[98.88px] h-[98.88px] origin-top-left -rotate-45 bg-[#0e131e] rounded-[17.44px] backdrop-blur-[25.37px]"
            style={{
              boxShadow: `0px 3.171px 7.927px rgba(0, 0, 0, 0.10), 0px 7.363px 11.486px rgba(4, 4, 6, 1.00)`,
            }}
          ></div>
          <div
            className="absolute top-[340px] sm:top-80 left-1 w-[98.88px] h-[98.88px] origin-top-left -rotate-45 bg-[#0e131e] rounded-[17.44px] backdrop-blur-[25.37px]"
            style={{
              boxShadow: `0px 3.17px 7.93px rgba(0, 0, 0, 0.10), 0px -7.07px 11.49px rgba(4, 4, 6, 1.00)`,
            }}
          ></div>
        </div>

        {/* Desktop Background Elements */}
        <div className="absolute inset-0 -z-10 hidden md:block overflow-hidden">
          <div
            className="w-[261.21px] h-[261.21px] right-48 lg:right-[328px] top-[187.40px] absolute origin-top-left -rotate-45 bg-[#0e131e] rounded-[59.22px] backdrop-blur-[86.13px]"
            style={{
              boxShadow: `0px 10.767px 26.917px rgba(0, 0, 0, 0.10), 0px -24px 39px rgba(4, 4, 6, 1.00)`,
            }}
          ></div>
          <div className="absolute right-80 bottom-40 w-[335.74px] h-[335.74px]  -rotate-45 bg-[#0e131e] rounded-[59.22px] shadow-[0px_25px_39px_0px_rgba(4,4,6,1.00)] backdrop-blur-[86.13px]"></div>
          <div className="lg:block lg:absolute md:hidden  left-30 bottom-60 w-[335.74px] h-[335.74px] origin-top-left -rotate-45 bg-[#0e131e] rounded-[59.22px]  shadow-[0px_-24px_39px_0px_rgba(4,4,6,1.00)] backdrop-blur-[86.13px]"></div>
        </div>

        {/* Header and Main Content */}
        <header className="relative z-10">
          <Header />
        </header>
        <main className="relative z-10 px-6 py-6 md:px-14 md:py-2 ">
          {children}
        </main>
      </body>
    </html>
  );
}
