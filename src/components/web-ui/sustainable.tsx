import { LuRecycle, LuMilk, LuLeaf } from "react-icons/lu";


export default function Practices(){
    return(
        <section className="bg-muted w-full lg:py-32 md:py-24 xl:py:48">
            <div className="container px-4 md:px-6">
                <div className="space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter">Sustainable Farming Practicies</h1>
                        <p className="text-muted-foreground md:text-xl">At iNZAGHA Farm, we&apos;re committed to sustainable and ethical farming methods that prioritize the health of our land, animals, and community.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PracticesList.map((item) => {
                            const IconComponent = item.icon;
                            return(
                                <div key={item.title} className="flex flex-col items-center space-y-4">
                                    <IconComponent size={ 50 } className="text-primary" /> 
                                    <div className="space-y-2 text-center">
                                        <h2 className="text-2xl font-bold tracking-tighter">{item.title}</h2>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

const PracticesList = [
    {
        icon: LuLeaf,
        title: "Organic farming",
        description: "We use only natural, non-synthetic fertilizers and pesticides to nurture our crops.",
    },
    {
        icon: LuRecycle,
        title: "Animal welfare",
        description: "Our animals are raised with the utmost care and compassion, roaming freely on our pastures.",
    },
    {
        icon: LuMilk,
        title: "Enviromental Stewardship",
        description: "We prioritize sustainable practices to minimize our environmental impact and preserve the land for future generations.",
    },
]