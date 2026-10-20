
import "./globals.css";

export const metadata = {
  title: "Ngàn Hoa Gửi Yêu Thương | 20/11",
  description:
    "Một khu vườn hoa nhỏ với những lời chúc yêu thương dành riêng cho gia đình.",
  themeColor: "#08091c",
};

export default function RootLayout({ children }:any) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
