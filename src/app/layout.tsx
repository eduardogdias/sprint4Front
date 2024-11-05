"use client"
import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  const pathname = usePathname();

  const shouldShowNavbar = () => {
    return pathname !== "/Cadastre" && pathname !== "/Login";
  };
  

  return (
    <html lang="pt-br">
      <body>
        {shouldShowNavbar() && <Navbar />}
        {children}
      </body>
    </html>
  );
}
