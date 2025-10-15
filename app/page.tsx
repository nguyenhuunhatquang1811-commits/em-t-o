import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Rooms } from "@/components/rooms"
import { Amenities } from "@/components/amenities"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Chatbox } from "@/components/chatbox"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Rooms />
      <Amenities />
      <Gallery />
      <Contact />
      <Footer />
      <Chatbox />
    </main>
  )
}
