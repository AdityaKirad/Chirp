import MillionLint from "@million/lint";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { remixDevTools } from "remix-development-tools";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();
const _plugins = [remixDevTools(), remix(), tsconfigPaths(), Inspect()];
_plugins.unshift(MillionLint.vite());
export default defineConfig({
  plugins: _plugins,
});
