import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"



export default function Contact() {
    return(
        <div className="">
            <section className="w-full py-12 md:py-24 lg:py-32 px-32">
                <div className="px-96">
                    <div>
                        <h1 className="text-6xl font-bold tracking-tighter">Contact Us</h1>
                        <p className="text-lg ">Contact us through the options bellow</p>
                    </div>
                    <form className="space-y-4 mt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" />
                        </div>
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" rows={5} placeholder="How can we help you?" />
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            </section>
        </div> 
    )
}