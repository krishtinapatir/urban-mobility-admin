import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Car } from "lucide-react"

interface SiteHeaderProps {
  isLoggedIn?: boolean
  userRole?: "admin" | "client" | null
}

export function SiteHeader({ isLoggedIn = false, userRole = null }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <div className="flex items-center gap-2">
  <div className="h-10 w-10 flex items-center justify-center border-2 border-blue-700 rounded-md ">
    <Car className="h-6 w-6 text-blue-700" />
  </div>
  <Link href="/" className="flex items-center space-x-2">
    <span className="font-bold text-xl">SmartTransport</span>
  </Link>
</div>


        {/* <div className="flex items-center gap-2">
          <Car className="h-6 w-6 text-primary" />
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">SmartTransport</span>
          </Link>
        </div> */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden md:flex">
            <MainNav isLoggedIn={isLoggedIn} userRole={userRole} />
          </div>
          <div className="flex items-center space-x-1">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

