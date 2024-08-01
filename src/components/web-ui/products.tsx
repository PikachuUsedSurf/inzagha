import Image from "next/image"

export default function Productssection() {
    return(
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
               <div className="space-y-6">
                    <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Fresh Products</h2>
                    <p className="
                        mx-auto
                        text-xl
                        text-muted-foreground
                        w-[650px]
                    ">Explore our selection of seasonal, organic fruits and vegetables, grown with care on our family farm.</p>
                    </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                {productList.map((item) => (
                    <div key={item.name} className="flex flex-col items-center space-y-2">
                    <Image src={item.src || "/placeholder.svg"}
                            alt={item.alt || item.name}
                            height={item.height || 300}
                            width={item.width || 300}
                            className=" aspect-square overflow-hidden rounded-xl object-cover"
                            />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        </div>
                    ))}
               </div>
            </div>
        </section>
    )
}

const productList = [
    {
        name: "Cows",
        description: "meaty cows yummy",
        src: "/placeholder.svg",
        alt: "cows",
        height: 300,
        width: 300,

    },
    {
        name: "Goat",
        description: "meaty goats yummy",
        src: "/placeholder.svg",
        alt: "goat",
        height: 300,
        width: 300,
    },
    {
        name: "Ducks",
        description: "meaty ducks yummy",
        src: "/placeholder.svg",
        alt: "ducks",
        height: 300,
        width: 300,
    },
]