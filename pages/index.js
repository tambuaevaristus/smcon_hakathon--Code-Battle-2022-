import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>SMCON | Code Battle</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <Services />
      <Cards/>
      <Gallery />
      <Team />
      
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
}
