import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AboutList = [
  {
    title: "Our History",
    description: "Our farm has been in the family for over 50 years, passed down through generations. We take great pride in our rich history and the hard work that has gone into building this farm. From humble beginnings, we've grown to become a respected source of high-quality produce in our local community.",
    icon: "🌱"
  },
  {
    title: 'Our Vision',
    description: 'To become an innovative and reliable breeding and farming center for varieties of products in the local and international markets.',
    icon: "🔭"
  },
  {
    title: "Our Mission",
    description: "At the heart of our farm is a deep commitment to sustainable and ethical agriculture. We believe in preserving the land, respecting the environment, and providing our community with the freshest, most nutritious produce possible. Our mission is to be a model of responsible farming, inspiring others to join us in this important work.",
    icon: "🎯"
  },
  {
    title: "Our Core Values",
    description: "At the core of our farm are a set of values that guide everything we do. We are committed to sustainability, transparency, and community. We believe in treating our land, our animals, and our workers with the utmost care and respect. These values are the foundation upon which our farm is built, and they inform every decision we make.",
    icon: "💎"
  },
]

const BoardList = [
  {
    name: "Maulidi Banyani",
    title: "Owner",
    src: "/placeholder.svg",
    alt: "Maulidi Banyani",
    weight: 200,
    height: 200,
  },
  {
    name: "Hawa Mkwela",
    title: "Owner",
    src: "/placeholder.svg",
    alt: "Hawa Mkwela",
    weight: 200,
    height: 200,
  },
]

const ManagementList = [
    {
    name: "Maulidi Banyani",
    title: "Manager",
    src: "/placeholder.svg",
    alt: "Maulidi Banyani",
    weight: 200,
    height: 200,
    },
]

const DepartmentList = [
  { name: "Crop Production", icon: "🌾" },
  { name: "Livestock Management", icon: "🐄" },
  { name: "Sustainable Practices", icon: "♻️" },
  { name: "Research & Development", icon: "🔬" },
  { name: "Marketing & Sales", icon: "📊" },
  { name: "Community Outreach", icon: "🤝" },
]

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image 
          src="/placeholder.svg"
          alt="Panoramic view of our farm"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">Welcome To Our Farm</h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl text-center">
            We are a family-owned farm dedicated to sustainable and ethical agriculture, providing high-quality produce for generations.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-12 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Our Farm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AboutList.map((item, index) => (
              <Card key={item.title} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <span className="text-3xl">{item.icon}</span>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-12 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <Tabs defaultValue="board" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="board">Board of Directors</TabsTrigger>
              <TabsTrigger value="management">Management Team</TabsTrigger>
            </TabsList>
            <TabsContent value="board">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {BoardList .map((member) => (
                  <Card key={member.name} className="text-center">
                    <CardContent className="pt-6">
                      <Image 
                        src={member.src}
                        width={member.weight}
                        height={member.height}
                        alt={member.alt}
                        className="rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-muted-foreground">{member.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="management">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {ManagementList.map((member) => (
                  <Card key={member.name} className="text-center">
                    <CardContent className="pt-6">
                      <Image 
                        src={member.src}
                        width={member.weight}
                        height={member.height}
                        alt={member.alt}
                        className="rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-muted-foreground">{member.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-12 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Departments</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {DepartmentList.map((dept) => (
              <Card key={dept.name} className="text-center hover:bg-muted transition-colors duration-300">
                <CardContent className="p-4">
                  <span className="text-4xl mb-2 block">{dept.icon}</span>
                  <h3 className="font-medium">{dept.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}