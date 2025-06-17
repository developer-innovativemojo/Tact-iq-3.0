"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header className="md:h-[150px] w-full mx-auto flex justify-center items-center navbar-gradient">
      <div className="w-full max-w-[1089px] mx-auto">
      <div className="sm:container mx-auto px-4 flex items-center justify-between pt-5 md:pt-0">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Integration Social" width={190} height={60} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-[42px]">
          <Link href="/" className={cn("text-primary", pathname === "/" && "font-bold text-emerald-500")}>
            Home
          </Link>
          <Link href="/" className={cn("text-primary", pathname === "/about" && "font-bold text-emerald-500")}>
            About Us
          </Link>
          <Link href="/" className={cn("text-primary", pathname === "/product" && "font-bold text-emerald-500")}>
          Capabilities
          </Link>
          <Link href="/" className={cn("text-primary", pathname === "/c-reputation-scan" && "font-bold text-emerald-500")}>
          Past Performance
          </Link>
          <Link href="/" className={cn("text-primary", pathname === "/demo" && "font-bold text-emerald-500")}>
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
        <>
          {/* Overlay to cover the whole page */}
          <div className="fixed inset-0 bg-white z-[9999]" />
          <div className="fixed inset-0 md:hidden bg-white border-t border-gray-100 py-4 h-screen mt-0 z-[10000] overflow-y-auto">
            <div className="sm:container mx-auto px-4 flex flex-col space-y-4">
              <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Integration Social" width={190} height={60} priority />
        </Link>
        <button className="md:hidden " onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X color="#56AD37" size={24} /> : <Menu color="#56AD37" size={24} />}
          </button>
          </div>
              <Link href="/" className="text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/"
                className="text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/"
                className="text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Capabilities
              </Link>
              <Link
                href="/"
                className="text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Past Performance
              </Link>
              <Link
                href="/demo"
                className="text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
             
            </div>
          </div>
        </>
      )}
      </div>
    </header>
  )
}