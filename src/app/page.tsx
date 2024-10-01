import Topsection from "@/components/web-ui/topsection";
import About from "@/components/web-ui/about"
import Productssection from "@/components/web-ui/products";
import Practices from "@/components/web-ui/sustainable";
import React from "react";

export default function Home() {
  return (
    <>
      <main className="flex-1">
       <Topsection />
       <About />
       <Productssection />
       <Practices />
      </main>
    </>
  );
}
