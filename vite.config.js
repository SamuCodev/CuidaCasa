import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] }),
        VitePWA({
            registerType: "autoUpdate",
            manifest: {
                name: "CuidaCasa",
                short_name: "CuidaCasa",
                description: "El cuidado de tu hogar en un solo lugar",
                theme_color: "hsl(193, 54%, 23%)",
                background_color: "hsl(36, 33%, 97%)",
                display: "standalone",
                start_url: "/",
                icons: [
                    {
                        src: "/home-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/home-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
});
