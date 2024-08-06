import {
  GoogleLogin,
  Separator
} from "/build/_shared/chunk-5GDYTT6A.js";
import {
  Button,
  logo_small_default
} from "/build/_shared/chunk-EAOUDLNQ.js";
import {
  Link,
  Outlet
} from "/build/_shared/chunk-2LIS5FON.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-C6GUH67X.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/auth.tsx
var import_react2 = __toESM(require_react(), 1);

// app/assets/logo.webp
var logo_default = "/build/_assets/logo-5BQBWCI6.webp";

// app/routes/auth.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\auth.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\auth.tsx"
  );
  import.meta.hot.lastModified = "1719985054160.5215";
}
var meta = () => [{
  title: "Happening Now"
}];
var Page = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 m-auto flex max-w-fit gap-8 px-4 max-lg:flex-col lg:max-h-fit", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "object-cover object-center max-lg:size-20", src: logo_default, srcSet: `${logo_small_default} 1024w, ${logo_default}`, height: 400, width: 400, alt: "brand logo", loading: "lazy", decoding: "async" }, void 0, false, {
        fileName: "app/routes/auth.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-bold", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl", children: "Happening now" }, void 0, false, {
          fileName: "app/routes/auth.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "my-12 text-3xl", children: "Join today" }, void 0, false, {
          fileName: "app/routes/auth.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex max-w-64 flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleLogin, {}, void 0, false, {
            fileName: "app/routes/auth.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, { className: "my-2" }, void 0, false, {
            fileName: "app/routes/auth.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "rounded-full bg-blue-500 text-white hover:bg-blue-600 focus-visible:bg-blue-600 focus-visible:ring-blue-600", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/signup", children: "Create Account" }, void 0, false, {
            fileName: "app/routes/auth.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-4 mt-12", children: "Already have an account?" }, void 0, false, {
            fileName: "app/routes/auth.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "rounded-full !text-blue-500 hover:bg-blue-500/10 focus-visible:bg-blue-500/10 focus-visible:ring-blue-500", variant: "outline", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/login", children: "Sign in" }, void 0, false, {
            fileName: "app/routes/auth.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/auth.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_c = Page;
var auth_default = Page;
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  auth_default as default,
  meta
};
//# sourceMappingURL=/build/routes/auth-UX6SZ3F7.js.map
