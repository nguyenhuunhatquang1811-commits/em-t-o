"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-serif font-bold tracking-tight text-foreground">
            KHÁCH SẠN ABC
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#rooms" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Phòng
            </a>
            <a href="#amenities" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Tiện Nghi
            </a>
            <a href="#gallery" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Thư Viện
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Liên Hệ
            </a>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Phone className="w-4 h-4 mr-2" />
              Đặt Phòng
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#rooms" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Phòng
              </a>
              <a href="#amenities" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Tiện Nghi
              </a>
              <a href="#gallery" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Thư Viện
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Liên Hệ
              </a>
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                <Phone className="w-4 h-4 mr-2" />
                Đặt Phòng
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
