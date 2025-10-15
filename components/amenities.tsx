import { Wifi, Coffee, Dumbbell, Utensils, Car, Waves } from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "WiFi Tốc Độ Cao",
    description: "Kết nối internet miễn phí trong toàn bộ khách sạn",
  },
  {
    icon: Utensils,
    title: "Nhà Hàng Cao Cấp",
    description: "Ẩm thực đa dạng từ Á đến Âu do đầu bếp chuyên nghiệp",
  },
  {
    icon: Dumbbell,
    title: "Phòng Gym Hiện Đại",
    description: "Trang thiết bị tập luyện đầy đủ, mở cửa 24/7",
  },
  {
    icon: Waves,
    title: "Hồ Bơi Vô Cực",
    description: "Hồ bơi trên tầng thượng với view toàn cảnh thành phố",
  },
  {
    icon: Coffee,
    title: "Quầy Bar & Lounge",
    description: "Không gian thư giãn sang trọng với đồ uống cao cấp",
  },
  {
    icon: Car,
    title: "Đỗ Xe Miễn Phí",
    description: "Bãi đỗ xe rộng rãi, an toàn với bảo vệ 24/7",
  },
]

export function Amenities() {
  return (
    <section id="amenities" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Tiện nghi đẳng cấp
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Trải nghiệm dịch vụ hoàn hảo với đầy đủ tiện nghi hiện đại
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <amenity.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{amenity.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
