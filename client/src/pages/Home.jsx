import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchWidget from "../components/SearchWidget";
import DestinationSection from "../components/DestinationSection";
import PackageSection from "../components/PackageSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchWidget />
      <DestinationSection />
      <PackageSection />
      <Footer />
    </>
  );
}