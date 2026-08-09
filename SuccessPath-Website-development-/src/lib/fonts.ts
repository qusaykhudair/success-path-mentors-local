import localFont from "next/font/local";

export const dinNext = localFont({
  src: [
    {
      path: "../assets/din-next-lt-arabic/DINNextLTArabic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/din-next-lt-arabic/DINNextLTArabic-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/din-next-lt-arabic/DINNextLTArabic-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-din",
  display: "swap",

  preload: true,

  fallback: [
    "system-ui",
    "Arial",
    "sans-serif",
  ],
});