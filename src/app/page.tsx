import Navbar from "@/components/web-ui/nav";
import Topsection from "@/components/web-ui/topsection";
import About from "@/components/web-ui/about"
import Productssection from "@/components/web-ui/products";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
       <Topsection />
       <About />
       <Productssection />
      </main>
      
    </>
  );
}
