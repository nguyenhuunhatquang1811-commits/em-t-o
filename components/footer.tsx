export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">KHÁCH SẠN ABC</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Trải nghiệm sang trọng đẳng cấp quốc tế tại trung tâm Sài Gòn
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên Kết</h4>
            <ul className="space-y-2">
              <li>
                <a href="#rooms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Phòng
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Tiện Nghi
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Thư Viện
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Dịch Vụ</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Đặt Phòng Online</li>
              <li>Tổ Chức Sự Kiện</li>
              <li>Dịch Vụ Spa</li>
              <li>Tour Du Lịch</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên Hệ</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>13 Nguyễn Trọng Tuyển</li>
              <li>TP. Hồ Chí Minh</li>
              <li>
                <a href="tel:09999888777" className="hover:text-primary-foreground transition-colors">
                  0999 988 8777
                </a>
              </li>
              <li>
                <a href="mailto:info@khachsanabc.vn" className="hover:text-primary-foreground transition-colors">
                  info@khachsanabc.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; 2025 Khách Sạn ABC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
