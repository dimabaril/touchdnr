"use client";

import HomeButton from "./HomeButton";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  // "/" — это главная страница
  if (pathname === "/") return null;

  return (
    <footer className="absolute bottom-[52px] right-[52px]">
      <HomeButton />
    </footer>
  );
}
