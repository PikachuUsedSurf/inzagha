import Navbar from "@/components/web-ui/nav";
import Topsection from "@/components/web-ui/topsection";
import About from "@/components/web-ui/about"
import Productssection from "@/components/web-ui/products";
import Practices from "@/components/web-ui/sustainable";
import Footer from "@/components/web-ui/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
       <Topsection />
       <About />
       <Productssection />
       <Practices />
      </main>
      <Footer />
      
    </>
  );
}
