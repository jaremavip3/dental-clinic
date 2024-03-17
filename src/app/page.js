import Image from "next/image";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Team from "@/components/team";
import ContactUs from "@/components/contact";
import Footer from "@/components/footer";
import Head from "next/head";
import Wellcome from "@/components/wellcome";

export default function Home() {
  return (
    <>
      <Head />
      <div className="flex flex-col min-h-[100dvh] overflow-y-auto">
        <Navbar />
        <Wellcome />
        <main>
          <Services />
          <Team />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </>
  );
}
