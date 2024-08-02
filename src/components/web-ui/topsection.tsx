import Image from "next/image";

export default function Topsection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                    <Image
                    src="/placeholder.svg" 
                    alt="farm image" 
                    height={1200} 
                    width={1000}
                    className=" mx-auto aspect-[21/9] overflow-hidden rounded-xl object-cover"/>
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Welcome to iNZAGHA farm</h1>
                        <p className="max-w-auto text-muted-foreground md:text-xl">We are a family-owned farm dedicated to growing the finest organic produce and raising happy, healthy animals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}