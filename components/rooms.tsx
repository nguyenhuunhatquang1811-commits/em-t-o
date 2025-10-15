import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Users, Maximize } from "lucide-react"

const rooms = [
  {
    title: "Phòng Deluxe",
    description: "Không gian sang trọng với thiết kế hiện đại, view thành phố tuyệt đẹp",
    image: "/luxury-hotel-deluxe-room-modern-elegant.jpg",
    size: "35m²",
    guests: "2 người",
    beds: "1 giường King",
  },
  {
    title: "Phòng Suite",
    description: "Phòng rộng rãi với phòng khách riêng biệt, đầy đủ tiện nghi cao cấp",
    image: "/luxury-hotel-suite-room-spacious-elegant.jpg",
    size: "55m²",
    guests: "3 người",
    beds: "1 giường King + Sofa",
  },
  {
    title: "Phòng Executive",
    description: "Đẳng cấp thượng lưu với không gian làm việc và thư giãn hoàn hảo",
    image: "/luxury-hotel-executive-room-premium-workspace.jpg",
    size: "45m²",
    guests: "2 người",
    beds: "1 giường King",
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Phòng nghỉ đẳng cấp
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Mỗi phòng được thiết kế tỉ mỉ để mang đến trải nghiệm nghỉ dưỡng hoàn hảo nhất
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">{room.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{room.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{room.beds}</span>
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                  Xem Chi Tiết
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
