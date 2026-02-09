import "./globals.css";
import { StoreProvider } from "./components/StoreProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Bliblablu Atelier | Perfume Boutique",
  description: "Luxury perfume e-commerce experience inspired by bliblablu.com."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
