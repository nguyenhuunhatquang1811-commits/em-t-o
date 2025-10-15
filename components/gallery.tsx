export function Gallery() {
  const images = [
    "/luxury-hotel-restaurant-fine-dining.jpg",
    "/luxury-hotel-spa-wellness-center.jpg",
    "/luxury-hotel-rooftop-pool-sunset.jpg",
    "/luxury-hotel-lobby-chandelier-elegant.jpg",
    "/luxury-hotel-bar-lounge-sophisticated.jpg",
    "/luxury-hotel-meeting-room-modern.jpg",
  ]

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Khám phá không gian
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Hình ảnh chân thực về không gian sang trọng tại Khách Sạn ABC
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
              <img
                src={image || "/placeholder.svg"}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
