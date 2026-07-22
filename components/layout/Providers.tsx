"use client";

import Preloader from "./Preloader";
import CustomCursor from "./CustomCursor";
import SmoothScroll from "./SmoothScroll";
import PageTransition from "./PageTransition";
import Header from "./Header";
import Footer from "./Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <SmoothScroll />
      <Header />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}
