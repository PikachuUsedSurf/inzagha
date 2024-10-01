import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Product {
  name: string
  description: string
  src: string
  alt: string
  height: number
  width: number
}

const productList: Product[] = [
  {
    name: "Cows",
    description: "Premium quality beef from grass-fed cows",
    src: "/placeholder.svg",
    alt: "Cow grazing in a lush green field",
    height: 300,
    width: 300,
  },
  {
    name: "Goat",
    description: "Lean and flavorful goat meat from free-range animals",
    src: "/placeholder.svg",
    alt: "Mountain goat standing on a rocky outcrop",
    height: 300,
    width: 300,
  },
  {
    name: "Poultry",
    description: "Fresh, organic poultry products from our farm",
    src: "/placeholder.svg",
    alt: "Free-range chickens in a barnyard",
    height: 300,
    width: 300,
  },
  {
    name: "Crops",
    description: "Sustainably grown crops and fresh produce",
    src: "/placeholder.svg",
    alt: "Lush field of various crops",
    height: 300,
    width: 300,
  },
  {
    name: "Organic Fertilizers",
    description: "Eco-friendly fertilizers for optimal plant growth",
    src: "/placeholder.svg",
    alt: "Bags of organic fertilizer in a greenhouse",
    height: 300,
    width: 300,
  },
  {
    name: "Animal Feed",
    description: "Nutritious and balanced feed for livestock",
    src: "/placeholder.svg",
    alt: "Various types of animal feed in storage",
    height: 300,
    width: 300,
  },
]

export default function ProductsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products & Services</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover our range of high-quality agricultural products and services, from farm-fresh meats to sustainable crop solutions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {productList.map((product) => (
            <Card key={product.name} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={product.src}
                  alt={product.alt}
                  height={product.height}
                  width={product.width}
                  className="aspect-[4/3] w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold mb-2">{product.name}</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}