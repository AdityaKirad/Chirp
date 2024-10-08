// import { vite as MillionLint } from "@million/lint";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { flatRoutes } from "remix-flat-routes";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();
const _plugins = [
  remix({
    ignoredRouteFiles: ["**/*"],
    routes: async (defineRoutes) => flatRoutes("routes", defineRoutes),
  }),
  tsconfigPaths(),
];
// _plugins.unshift(MillionLint());
export default defineConfig({
  plugins: _plugins,
});
