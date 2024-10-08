import Image from "next/image";

export default function About() {
<<<<<<< HEAD
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-rows-2 gap-6 lg:gap-12">
          <div className="space-y-4">
            <h1>About Us</h1>
            <h2 className="text-4xl sm:text-4xl md:text-5xl tracking-tighter font-bold">
              Our Farm Story
            </h2>
            {aboutList.map((item) => (
              <p className=" text-muted-foreground text-xl" key={item.story}>
                {item.story}
              </p>
            ))}
          </div>
          <Image
            src="/placeholder.svg"
            alt="people"
            height={310}
            width={550}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  );
=======
    return(
        <section id="about" className="w-full py-12 md:py-24 lg:py-24 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h1>About Us</h1>
                        <h2 className="text-4xl sm:text-4xl md:text-5xl tracking-tighter font-bold">Our Farm Story</h2>
                        {aboutList.map((item) => (
                            <p className=" text-muted-foreground text-xl" key={item.story}>{item.story}</p>
                        ))}
                    </div>
                    <Image src="/placeholder.svg"
                         alt="people"
                         height={310}
                         width={550}
                         className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                         />
                </div>
            </div>
        </section>
    )
>>>>>>> 6d90d988e126b871516f4385d417eb81d4083b43
}

const aboutList = [
<<<<<<< HEAD
  {
    story:
      "iNZAGHA Farm was founded in 2024 by Maulidi Banyani and Hawa Mkwela, who believed in the importance of sustainable, organic farming practices. Over the years, we've grown to become one of the leading producers of high-quality fruits and vegetables in the region.",
  },
  {
    story:
      "Our mission is to provide our community with the freshest, most nutritious produce while also protecting the environment. We're committed to using eco-friendly methods and supporting local businesses.",
  },
];
=======

    {
        story: "iNZAGHA Farm was founded in 2024 by the (founders*), who believed in the importance of sustainable, organic farming practices. We aspire to grow and become one of the leading producers of high-quality livestock, poultry and animal feed in the region."
    },
    {   

        story: "Our mission is to provide quality and affordable organic products to the markets."
    },
]
>>>>>>> 6d90d988e126b871516f4385d417eb81d4083b43
