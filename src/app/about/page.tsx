import Navbar from "@/components/web-ui/nav"
import Image from "next/image"

export default function AboutUs(){
    return(
        <div className="flex flex-col">
            <section className="w-full h-[500px] relative">
                <Image 
                 src="/placeholder.svg"
                 alt="farm image"
                 width={500}
                 height={500}
                 className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white gap-4">
                    <h1 className="text-4xl font-bold">Welcome To Our Farm</h1>
                    <p className="text-lg font-semibold max-w-3xl text-center">We are a family-owned farm dedicated to sustainable and ethical agriculture, providing high-quality produce.</p>
                </div>
            </section>
            {AboutList.map((item, index) => (
                <section key={item.title}>
                    <div className={`py-12 md:py-24 lg:py-32 ${index % 2 !== 0 ? 'bg-muted' : ''}`}>
                        <div className="container px-6 space-y-4">
                            <h1 className="text-4xl font-bold">{item.title}</h1>
                            <p className="text-lg font-normal">{item.description}</p>
                        </div>
                    </div>
                </section>
            ))}
            <section className="py-16 px-4 md:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8">Board of Directors</h1>
                    <div className="grid grid-grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-36">
                        {TeamList.map((item) => (
                                    <div key={item.name} className="flex flex-col items-center">
                                        <Image 
                                        src={item.src}
                                        width={item.Weight}
                                        height={item.height}
                                        alt={item.alt}
                                        className="rounded-full mb-4"
                                        />
                                        <h1 className="text-xl font-bold mb-2">{item.name}</h1>
                                        <p className="text-muted-foreground">{item.title}</p>
                                    </div>
                        ))}
                        </div>
                        <h1 className="text-3xl font-bold mb-8">Management Team</h1>
                        <div className="grid grid-grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-36">
                        {TeamList.map((item) => (
                                    <div key={item.name} className="flex flex-col items-center">
                                        <Image 
                                        src={item.src}
                                        width={item.Weight}
                                        height={item.height}
                                        alt={item.alt}
                                        className="rounded-full mb-4"
                                        />
                                        <h1 className="text-xl font-bold mb-2">{item.name}</h1>
                                        <p className="text-muted-foreground">{item.title}</p>
                                    </div>
                        ))}
                        </div>
                        <h1 className="text-3xl font-bold mb-8">Departments of...</h1>
                        <div className="grid grid-grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-36">
                        {TeamList.map((item) => (
                                    <div key={item.name} className="flex flex-col items-center">
                                        <Image 
                                        src={item.src}
                                        width={item.Weight}
                                        height={item.height}
                                        alt={item.alt}
                                        className="rounded-full mb-4"
                                        />
                                        <h1 className="text-xl font-bold mb-2">{item.name}</h1>
                                        <p className="text-muted-foreground">{item.title}</p>
                                    </div>
                        ))}
                        </div>
                </div>
            </section>
        </div>
    )
}

const AboutList = [
    {
        title: "Our History",
        description: "Our farm has been in the family for over 50 years, passed down through generations. We take great pride in our rich history and the hard work that has gone into building this farm. From humble beginnings, we've grown to become a respected source of high-quality produce in our local community.",
    },
    {
        title: 'Our Vision',
        description: 'To become innovative and reliable breeding and farming center for variaties of products in the local and international markets'
    },
    {
        title: "Our Mission",
        description: "At the heart of our farm is a deep commitment to sustainable and ethical agriculture. We believe in preserving the land, respecting the environment, and providing our community with the freshest, most nutritious produce possible. Our mission is to be a model of responsible farming, inspiring others to join us in this important work."
    },
    {
        title: "Our Core Values",
        description: "At the core of our farm are a set of values that guide everything we do. We are committed to sustainability, transparency, and community. We believe in treating our land, our animals, and our workers with the utmost care and respect. These values are the foundation upon which our farm is built, and they inform every decision we make."
    },

]

const TeamList = [
    {
        name: "Maulidi Banyani",
        title: "Owner",
        src: "/placeholder.svg",
        alt: "ceo",
        Weight: 500,
        height: 500,
    },
    {
        name: "Hawa Mkwela",
        title: "Owner",
        src: "/placeholder.svg",
        alt: "ceo",
        Weight: 500,
        height: 500,
    },
]