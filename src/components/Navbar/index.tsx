"use client"

import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="h-[150px] w-full mx-auto flex justify-center items-center navbar-gradient">
      <div className="w-full max-w-[1089px] mx-auto">
      <div className="sm:container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Integration Social" width={190} height={60} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-[42px]">
          <Link href="/" className={cn("text-primary", pathname === "/" && "font-bold text-emerald-500")}>
            Home
          </Link>
          <Link href="/about" className={cn("text-primary", pathname === "/about" && "font-bold text-emerald-500")}>
            About Us
          </Link>
          <Link href="/product" className={cn("text-primary", pathname === "/product" && "font-bold text-emerald-500")}>
          Capabilities
          </Link>
          <Link href="/c-reputation-scan" className={cn("text-primary", pathname === "/c-reputation-scan" && "font-bold text-emerald-500")}>
          Past Performance
          </Link>
          <Link href="/demo" className={cn("text-primary", pathname === "/demo" && "font-bold text-emerald-500")}>
          Contact Us
          </Link>
         
        </nav>

        <div className="flex items-center md:hidden">
         

          {/* Mobile Menu Button */}
          <button className="md:hidden " onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X color="#56AD37" size={24} /> : <Menu color="#56AD37" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 h-screen mt-5">
          <div className="sm:container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/" className="text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/about"
              className="text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/product"
              className="text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/c-reputation-scan"
              className="text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Company Reputation Scan
            </Link>
            <Link
              href="/demo"
              className="text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Demo
            </Link>
            <Link
              href="/articles"
              className="text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Publications
            </Link>
            <Link
              href="/contact"
              className="text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="https://leadis.integrationsocial.com/"
              className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-2 rounded-md flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
      </div>
    </header>
  )
}