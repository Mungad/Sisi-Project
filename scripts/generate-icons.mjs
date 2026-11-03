
import sharp from "sharp";

const source = "public/sisi-icon.svg";

await sharp(source)
  .resize(192, 192)
  .png()
  .toFile("public/pwa-192x192.png");

await sharp(source)
  .resize(512, 512)
  .png()
  .toFile("public/pwa-512x512.png");

console.log("Sisi PWA icons generated successfully.");
