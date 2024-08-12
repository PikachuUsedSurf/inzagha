import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Contact() {
    return(
        <div className="w-full">
            <section>
                <div className="container">
                    <div className="space-y-2">
                        <h1>Get In Touch</h1>
                        <p>We are here to help. Fill out the form below or give us a call and we will get back to you as soon as possible.</p>
                    </div>
                    <div>
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name"/>
                        </div>
                        <div>
                            <Label htmlFor="Email">Email</Label>
                            <Input id="Email" placeholder="Email"/>
                        </div>
                    </div>
                </div>
            </section>
        </div> 
    )
}