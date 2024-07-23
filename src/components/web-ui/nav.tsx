import Link from "next/link"
import { FaLeaf } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link
                href="#"
                className="flex items-center justify-center"
                >
                <FaLeaf className="h-6 w-6" />
                <span className="sr-only">iNZAGHA FARM</span>
                </Link>
                <nav>
                    {NavbarList.map((item) => (
                        <div key={item.name}>
                            <Link href={item.url}>
                                {item.name}
                            </Link>
                        </div>
                    ))

                    }
                </nav>
        </header>
    )
}

const NavbarList = [
    {
        name: 'about',
        url: '/about'
    },
    {
        name: 'products',
        url: '/products'
    },
    {
        name: 'contact us',
        url: '/contact'
    }
]