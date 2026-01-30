"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BodyClassSetter() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/info") {
      document.body.classList.add("bg-info-page");
    } else {
      document.body.classList.remove("bg-info-page");
    }
  }, [pathname]);

  return null;
}
