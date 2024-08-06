import {
  require_db
} from "/build/_shared/chunk-YECSVSRA.js";
import {
  Field,
  FieldError,
  Label,
  Loader,
  PasswordInput,
  conformZodMessage,
  getInputProps,
  parseWithZod,
  useForm,
  z
} from "/build/_shared/chunk-GTKX7IJD.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  AuthLayout,
  Input
} from "/build/_shared/chunk-BUCYPBFO.js";
import {
  Button
} from "/build/_shared/chunk-EAOUDLNQ.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/auth.signup_.finalize/credentials.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\auth.signup_.finalize\\\\credentials.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\auth.signup_.finalize\\credentials.tsx"
  );
  import.meta.hot.lastModified = "1720178127438.473";
}
function Credentials({
  fields
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: fields.username.id, children: "Username" }, void 0, false, {
        fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { ...getInputProps(fields.username, {
        type: "text"
      }), placeholder: "Username" }, void 0, false, {
        fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldError, { children: fields.username.errors?.join(", ") }, void 0, false, {
        fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: fields.password.id, children: "Password" }, void 0, false, {
        fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, { ...getInputProps(fields.password, {
        type: "text"
      }), placeholder: "Password" }, void 0, false, {
        fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldError, { children: fields.password.errors?.join(", ") }, void 0, false, {
        fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: fields.confirmPassword.id, children: "Confirm Password" }, void 0, false, {
        fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, { ...getInputProps(fields.confirmPassword, {
        type: "text"
      }), placeholder: "Confirm Password" }, void 0, false, {
        fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FieldError, { children: fields.confirmPassword.errors?.join(", ") }, void 0, false, {
        fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.signup_.finalize/credentials.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = Credentials;
var _c;
$RefreshReg$(_c, "Credentials");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/auth.signup_.finalize/schema.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\auth.signup_.finalize\\schema.ts"
  );
  import.meta.hot.lastModified = "1720166776253.8508";
}
var usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]*$/;
var passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?])/;
function createSchema(intent, options) {
  return z.object({
    username: z.string().min(4, "Must be at least 4 characters").max(15, "Cannot exceed 15 characters").regex(usernameRegex, "Must start with letter, only letters, numbers & underscores allowed").refine((val) => !val.toLowerCase().includes("twitter"), "Cannot contain 'twitter'").refine((val) => !val.toLowerCase().includes("admin"), "Cannot contain 'admin'").refine((val) => !val.toLowerCase().endsWith("com"), "Cannot end with 'com'").pipe(
      z.string().superRefine((username, ctx) => {
        const isValidatingUsername = intent === null || intent.type === "validate" && intent.payload.name === "username";
        if (!isValidatingUsername) {
          ctx.addIssue({
            code: "custom",
            message: conformZodMessage.VALIDATION_SKIPPED
          });
          return;
        }
        if (typeof options?.isUsernameTaken !== "function") {
          ctx.addIssue({
            code: "custom",
            message: conformZodMessage.VALIDATION_UNDEFINED,
            fatal: true
          });
          return;
        }
        return options.isUsernameTaken(username).then((isTaken) => {
          if (isTaken) {
            ctx.addIssue({
              code: "custom",
              message: "Username already taken"
            });
          }
        });
      })
    ),
    password: z.string().min(8, "Must be at least 8 characters").regex(passwordRegex, "Must contain at least one uppercase letter, one number, and one special character"),
    confirmPassword: z.string()
  }).refine((data) => !(data.password !== data.confirmPassword), {
    message: "Password's don't match",
    path: ["confirmPassword"]
  });
}

// app/routes/auth.signup_.finalize/route.tsx
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\auth.signup_.finalize\\\\route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\auth.signup_.finalize\\route.tsx"
  );
  import.meta.hot.lastModified = "1720178203439.7688";
}
function Page() {
  _s();
  const loaderData = useLoaderData();
  console.log(loaderData);
  const lastResult = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [form, fields] = useForm({
    id: "signup",
    lastResult,
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    onValidate({
      formData
    }) {
      return parseWithZod(formData, {
        schema: (intent) => createSchema(intent)
      });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthLayout, { title: "Setup your account", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { className: "flex flex-col gap-2", method: "POST", id: form.id, onSubmit: form.onSubmit, autoComplete: "off", noValidate: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Credentials, { fields }, void 0, false, {
      fileName: "app/routes/auth.signup_.finalize/route.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { className: "rounded-full", type: "submit", disabled: !form.valid || isSubmitting, children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Loader, {}, void 0, false, {
      fileName: "app/routes/auth.signup_.finalize/route.tsx",
      lineNumber: 89,
      columnNumber: 27
    }, this) : "Next" }, void 0, false, {
      fileName: "app/routes/auth.signup_.finalize/route.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.signup_.finalize/route.tsx",
    lineNumber: 86,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/auth.signup_.finalize/route.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
}
_s(Page, "nyFcvVE/WCXCyHygkJSAJR9sJHU=", false, function() {
  return [useLoaderData, useActionData, useNavigation, useForm];
});
_c2 = Page;
var _c2;
$RefreshReg$(_c2, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default
};
//# sourceMappingURL=/build/routes/auth.signup_.finalize-F6KIKDIE.js.map
