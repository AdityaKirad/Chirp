import {
  GoogleLogin,
  Separator
} from "/build/_shared/chunk-5GDYTT6A.js";
import {
  AuthLayout,
  Input
} from "/build/_shared/chunk-BUCYPBFO.js";
import {
  Button
} from "/build/_shared/chunk-EAOUDLNQ.js";
import {
  Form,
  Link
} from "/build/_shared/chunk-2LIS5FON.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-C6GUH67X.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/services/authenticator.server
var require_authenticator = __commonJS({
  "empty-module:~/services/authenticator.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/auth.login.tsx
var import_authenticator = __toESM(require_authenticator(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\auth.login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\auth.login.tsx"
  );
  import.meta.hot.lastModified = "1720032628040.8027";
}
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthLayout, { title: "Sign in to Twitter Clone", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleLogin, {}, void 0, false, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "text", placeholder: "Email or username", name: "user" }, void 0, false, {
          fileName: "app/routes/auth.login.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "password", placeholder: "Your Password", name: "password" }, void 0, false, {
          fileName: "app/routes/auth.login.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", className: "rounded-full", children: "Next" }, void 0, false, {
          fileName: "app/routes/auth.login.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "rounded-full", variant: "outline", children: "Forgot Password?" }, void 0, false, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.login.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-neutral-700", children: [
      "Don't have an account?",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "text-blue-500", variant: "link", asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/signup", children: "Sign up" }, void 0, false, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/auth.login.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.login.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.login.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_c = Page;
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default
};
//# sourceMappingURL=/build/routes/auth.login-BPPJTLAW.js.map
