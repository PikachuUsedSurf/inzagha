import Link from "next/link";


export default function Footer() {
    return(
        <footer className="flex flex-col gap-2 py-6 px-4 sm:flex-row w-full shrink-0 items-center border-t">
            <p className="text-xs text-muted-foreground">&copy; 2024 iNZAGHA Farm. All rights reserved.</p>
        </footer>
    )
}