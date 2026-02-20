import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

function spaFallback(): Plugin {
  return {
    name: "spa-fallback",
    configureServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          if (
            req.url &&
            !req.url.startsWith("/assets") &&
            !req.url.startsWith("/images") &&
            !req.url.startsWith("/@") &&
            !req.url.includes(".") &&
            req.method === "GET"
          ) {
            req.url = "/index.html";
          }
          next();
        });
      };
    },
  };
}

function performanceOptimizer(): Plugin {
  return {
    name: "performance-optimizer",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (!ctx.bundle) {
          return html;
        }

        const jsLinks: string[] = [];

        Object.values(ctx.bundle).forEach((chunk) => {
          if (chunk.type === "chunk" && chunk.isEntry) {
            jsLinks.push(`/${chunk.fileName}`);
          }
        });

        let preloadTags = "";

        jsLinks.forEach((src) => {
          preloadTags += `<link rel="modulepreload" href="${src}">\n    `;
        });

        if (preloadTags) {
          const headEndIndex = html.indexOf("</head>");

          if (headEndIndex !== -1) {
            return html.slice(0, headEndIndex) + preloadTags + html.slice(headEndIndex);
          }
        }

        return html;
      },
    },
  };
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    spaFallback(),
    mode === "development" && componentTagger(),
    performanceOptimizer(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2015",
    minify: "esbuild",
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router"],
          i18n: ["i18next", "react-i18next"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-label",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-slot",
            "@radix-ui/react-toast",
            "@radix-ui/react-tooltip",
          ],
          animations: ["framer-motion"],
        },
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "assets/[name]-[hash].css";
          }
          if (assetInfo.name?.match(/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i)) {
            return "/images/[name]-[hash][extname]";
          }
          if (assetInfo.name?.match(/\.(woff2?|eot|ttf|otf)$/i)) {
            return "assets/fonts/[name]-[hash][extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router"],
    exclude: [],
  },
}));
