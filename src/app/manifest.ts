import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Liberty Baptist Academy",
    short_name: "LBA Sarasota",
    description:
      "Liberty Baptist Academy — a K-12 Christian school ministry in Sarasota, Florida.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9fcfd",
    theme_color: "#0b2740",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
