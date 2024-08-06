import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Field,
  FieldError,
  Label,
  Loader,
  getInputProps,
  parseWithZod,
  useForm,
  z
} from "/build/_shared/chunk-GTKX7IJD.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  AuthLayout,
  Minus
} from "/build/_shared/chunk-BUCYPBFO.js";
import {
  Button,
  cn
} from "/build/_shared/chunk-EAOUDLNQ.js";
import {
  Form,
  useActionData,
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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/auth.signup_.verify.tsx
var import_node = __toESM(require_node(), 1);

// node_modules/input-otp/dist/index.mjs
var n = __toESM(require_react(), 1);
var Z = __toESM(require_react(), 1);
var R = __toESM(require_react(), 1);
var Wt = Object.defineProperty;
var Bt = Object.defineProperties;
var At = Object.getOwnPropertyDescriptors;
var U = Object.getOwnPropertySymbols;
var Rt = Object.prototype.hasOwnProperty;
var vt = Object.prototype.propertyIsEnumerable;
var pt = (r, s, e) => s in r ? Wt(r, s, { enumerable: true, configurable: true, writable: true, value: e }) : r[s] = e;
var gt = (r, s) => {
  for (var e in s || (s = {}))
    Rt.call(s, e) && pt(r, e, s[e]);
  if (U)
    for (var e of U(s))
      vt.call(s, e) && pt(r, e, s[e]);
  return r;
};
var Et = (r, s) => Bt(r, At(s));
var St = (r, s) => {
  var e = {};
  for (var u in r)
    Rt.call(r, u) && s.indexOf(u) < 0 && (e[u] = r[u]);
  if (r != null && U)
    for (var u of U(r))
      s.indexOf(u) < 0 && vt.call(r, u) && (e[u] = r[u]);
  return e;
};
var bt = "^\\d+$";
function Pt(r) {
  let s = setTimeout(r, 0), e = setTimeout(r, 10), u = setTimeout(r, 50);
  return [s, e, u];
}
function ht(r) {
  let s = Z.useRef();
  return Z.useEffect(() => {
    s.current = r;
  }), s.current;
}
var kt = 18;
var _t = 40;
var Ot = `${_t}px`;
var Gt = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function wt({ containerRef: r, inputRef: s, pushPasswordManagerStrategy: e, isFocused: u }) {
  let h = R.useRef({ done: false, refocused: false }), [W, B] = R.useState(false), [z2, q] = R.useState(false), [j, A] = R.useState(false), V = R.useMemo(() => e === "none" ? false : (e === "increase-width" || e === "experimental-no-flickering") && W && z2, [W, z2, e]), c = R.useCallback(() => {
    let v = r.current, m = s.current;
    if (!v || !m || j || e === "none")
      return;
    let g = v, k = g.getBoundingClientRect().left + g.offsetWidth, M = g.getBoundingClientRect().top + g.offsetHeight / 2, a = k - kt, b = M;
    if (!(document.querySelectorAll(Gt).length === 0 && document.elementFromPoint(a, b) === v) && (B(true), A(true), !h.current.refocused && document.activeElement === m)) {
      let d = [m.selectionStart, m.selectionEnd];
      m.blur(), m.focus(), m.setSelectionRange(d[0], d[1]), h.current.refocused = true;
    }
  }, [r, s, j, e]);
  return R.useEffect(() => {
    let v = r.current;
    if (!v || e === "none")
      return;
    function m() {
      let M = window.innerWidth - v.getBoundingClientRect().right;
      q(M >= _t);
    }
    m();
    let g = setInterval(m, 1e3);
    return () => {
      clearInterval(g);
    };
  }, [r, e]), R.useEffect(() => {
    let v = u || document.activeElement === s.current;
    if (e === "none" || !v)
      return;
    let m = setTimeout(c, 0), g = setTimeout(c, 2e3), k = setTimeout(c, 5e3), M = setTimeout(() => {
      A(true);
    }, 6e3);
    return () => {
      clearTimeout(m), clearTimeout(g), clearTimeout(k), clearTimeout(M);
    };
  }, [s, u, e, c]), { hasPWMBadge: W, willPushPWMBadge: V, PWM_BADGE_SPACE_WIDTH: Ot };
}
var xt = n.createContext({});
var jt = n.forwardRef((m, v) => {
  var g = m, { value: r, onChange: s, maxLength: e, textAlign: u = "left", pattern: h = bt, inputMode: W = "numeric", onComplete: B, pushPasswordManagerStrategy: z2 = "increase-width", containerClassName: q, noScriptCSSFallback: j = Lt, render: A, children: V } = g, c = St(g, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "containerClassName", "noScriptCSSFallback", "render", "children"]);
  var Y, it, lt, ut, dt;
  let [k, M] = n.useState(typeof c.defaultValue == "string" ? c.defaultValue : ""), a = r != null ? r : k, b = ht(a), O = n.useCallback((t) => {
    s == null || s(t), M(t);
  }, [s]), d = n.useMemo(() => h ? typeof h == "string" ? new RegExp(h) : h : null, [h]), i = n.useRef(null), K = n.useRef(null), J = n.useRef({ value: a, onChange: O, isIOS: typeof window != "undefined" && ((it = (Y = window == null ? void 0 : window.CSS) == null ? void 0 : Y.supports) == null ? void 0 : it.call(Y, "-webkit-touch-callout", "none")) }), X = n.useRef({ prev: [(lt = i.current) == null ? void 0 : lt.selectionStart, (ut = i.current) == null ? void 0 : ut.selectionEnd, (dt = i.current) == null ? void 0 : dt.selectionDirection] });
  n.useImperativeHandle(v, () => i.current, []), n.useEffect(() => {
    let t = i.current, o = K.current;
    if (!t || !o)
      return;
    J.current.value !== t.value && J.current.onChange(t.value), X.current.prev = [t.selectionStart, t.selectionEnd, t.selectionDirection];
    function f() {
      if (document.activeElement !== t) {
        N(null), $(null);
        return;
      }
      let l = t.selectionStart, S = t.selectionEnd, w = t.selectionDirection, y = t.maxLength, D = t.value, P = X.current.prev, E = -1, T = -1, I;
      if (D.length !== 0 && l !== null && S !== null) {
        let yt = l === S, Dt = l === D.length && D.length < y;
        if (yt && !Dt) {
          let H = l;
          if (H === 0)
            E = 0, T = 1, I = "forward";
          else if (H === y)
            E = H - 1, T = H, I = "backward";
          else if (y > 1 && D.length > 1) {
            let et = 0;
            if (P[0] !== null && P[1] !== null) {
              I = H < P[1] ? "backward" : "forward";
              let Ht = P[0] === P[1] && P[0] < y;
              I === "backward" && !Ht && (et = -1);
            }
            E = et + H, T = et + H + 1;
          }
        }
        E !== -1 && T !== -1 && E !== T && i.current.setSelectionRange(E, T, I);
      }
      let ft = E !== -1 ? E : l, mt = T !== -1 ? T : S, Ct = I != null ? I : w;
      N(ft), $(mt), X.current.prev = [ft, mt, Ct];
    }
    if (document.addEventListener("selectionchange", f, { capture: true }), f(), document.activeElement === t && Q(true), !document.getElementById("input-otp-style")) {
      let l = document.createElement("style");
      if (l.id = "input-otp-style", document.head.appendChild(l), l.sheet) {
        let S = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        F(l.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), F(l.sheet, `[data-input-otp]:autofill { ${S} }`), F(l.sheet, `[data-input-otp]:-webkit-autofill { ${S} }`), F(l.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), F(l.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let p = () => {
      o && o.style.setProperty("--root-height", `${t.clientHeight}px`);
    };
    p();
    let _ = new ResizeObserver(p);
    return _.observe(t), () => {
      document.removeEventListener("selectionchange", f, { capture: true }), _.disconnect();
    };
  }, []);
  let [nt, ot] = n.useState(false), [L, Q] = n.useState(false), [C, N] = n.useState(null), [G, $] = n.useState(null);
  n.useEffect(() => {
    Pt(() => {
      var p, _, l, S;
      (p = i.current) == null || p.dispatchEvent(new Event("input"));
      let t = (_ = i.current) == null ? void 0 : _.selectionStart, o = (l = i.current) == null ? void 0 : l.selectionEnd, f = (S = i.current) == null ? void 0 : S.selectionDirection;
      t !== null && o !== null && (N(t), $(o), X.current.prev = [t, o, f]);
    });
  }, [a, L]), n.useEffect(() => {
    b !== void 0 && a !== b && b.length < e && a.length === e && (B == null || B(a));
  }, [e, B, b, a]);
  let x = wt({ containerRef: K, inputRef: i, pushPasswordManagerStrategy: z2, isFocused: L }), rt = n.useCallback((t) => {
    let o = t.currentTarget.value.slice(0, e);
    if (o.length > 0 && d && !d.test(o)) {
      t.preventDefault();
      return;
    }
    typeof b == "string" && o.length < b.length && document.dispatchEvent(new Event("selectionchange")), O(o);
  }, [e, O, b, d]), st = n.useCallback(() => {
    var t;
    if (i.current) {
      let o = Math.min(i.current.value.length, e - 1), f = i.current.value.length;
      (t = i.current) == null || t.setSelectionRange(o, f), N(o), $(f);
    }
    Q(true);
  }, [e]), ct = n.useCallback((t) => {
    var P, E;
    let o = i.current;
    if (!J.current.isIOS || !t.clipboardData || !o)
      return;
    let f = t.clipboardData.getData("text/plain");
    t.preventDefault();
    let p = (P = i.current) == null ? void 0 : P.selectionStart, _ = (E = i.current) == null ? void 0 : E.selectionEnd, w = (p !== _ ? a.slice(0, p) + f + a.slice(_) : a.slice(0, p) + f + a.slice(p)).slice(0, e);
    if (w.length > 0 && d && !d.test(w))
      return;
    o.value = w, O(w);
    let y = Math.min(w.length, e - 1), D = w.length;
    o.setSelectionRange(y, D), N(y), $(D);
  }, [e, O, d, a]), Tt = n.useMemo(() => ({ position: "relative", cursor: c.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [c.disabled]), at = n.useMemo(() => ({ position: "absolute", inset: 0, width: x.willPushPWMBadge ? `calc(100% + ${x.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: x.willPushPWMBadge ? `inset(0 ${x.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: u, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [x.PWM_BADGE_SPACE_WIDTH, x.willPushPWMBadge, u]), It = n.useMemo(() => n.createElement("input", Et(gt({ autoComplete: c.autoComplete || "one-time-code" }, c), { "data-input-otp": true, "data-input-otp-mss": C, "data-input-otp-mse": G, inputMode: W, pattern: d == null ? void 0 : d.source, style: at, maxLength: e, value: a, ref: i, onPaste: (t) => {
    var o;
    ct(t), (o = c.onPaste) == null || o.call(c, t);
  }, onChange: rt, onMouseOver: (t) => {
    var o;
    ot(true), (o = c.onMouseOver) == null || o.call(c, t);
  }, onMouseLeave: (t) => {
    var o;
    ot(false), (o = c.onMouseLeave) == null || o.call(c, t);
  }, onFocus: (t) => {
    var o;
    st(), (o = c.onFocus) == null || o.call(c, t);
  }, onBlur: (t) => {
    var o;
    Q(false), (o = c.onBlur) == null || o.call(c, t);
  } })), [rt, st, ct, W, at, e, G, C, c, d == null ? void 0 : d.source, a]), tt = n.useMemo(() => ({ slots: Array.from({ length: e }).map((t, o) => {
    let f = L && C !== null && G !== null && (C === G && o === C || o >= C && o < G), p = a[o] !== void 0 ? a[o] : null;
    return { char: p, isActive: f, hasFakeCaret: f && p === null };
  }), isFocused: L, isHovering: !c.disabled && nt }), [L, nt, e, G, C, c.disabled, a]), Mt = n.useMemo(() => A ? A(tt) : n.createElement(xt.Provider, { value: tt }, V), [V, tt, A]);
  return n.createElement(n.Fragment, null, j !== null && n.createElement("noscript", null, n.createElement("style", null, j)), n.createElement("div", { ref: K, "data-input-otp-container": true, style: Tt, className: q }, Mt, n.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, It)));
});
jt.displayName = "Input";
function F(r, s) {
  try {
    r.insertRule(s);
  } catch (e) {
    console.error("input-otp could not insert CSS rule:", s);
  }
}
var Lt = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;

// app/components/ui/input-otp.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\input-otp.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\input-otp.tsx"
  );
  import.meta.hot.lastModified = "1720114261846.5962";
}
var InputOTP = (0, import_react.forwardRef)(_c = ({
  className,
  containerClassName,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(jt, { ref, containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName), className: cn("disabled:cursor-not-allowed", className), ...props }, void 0, false, {
  fileName: "app/components/ui/input-otp.tsx",
  lineNumber: 31,
  columnNumber: 12
}, this));
_c2 = InputOTP;
InputOTP.displayName = "InputOTP";
var InputOTPGroup = (0, import_react.forwardRef)(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("flex items-center", className), ...props }, void 0, false, {
  fileName: "app/components/ui/input-otp.tsx",
  lineNumber: 37,
  columnNumber: 12
}, this));
_c4 = InputOTPGroup;
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = _s((0, import_react.forwardRef)(_c5 = _s(({
  index,
  className,
  ...props
}, ref) => {
  _s();
  const inputOTPContext = (0, import_react.useContext)(xt);
  const {
    char,
    hasFakeCaret,
    isActive
  } = inputOTPContext.slots[index];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-2 ring-ring ring-offset-background", className), ...props, children: [
    char,
    hasFakeCaret && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }, void 0, false, {
      fileName: "app/components/ui/input-otp.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/ui/input-otp.tsx",
      lineNumber: 54,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/input-otp.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}, "JNxNoU/M6j9IpCTBZ1gkBzu503s=")), "JNxNoU/M6j9IpCTBZ1gkBzu503s=");
_c6 = InputOTPSlot;
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = (0, import_react.forwardRef)(_c7 = ({
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, role: "separator", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, {}, void 0, false, {
  fileName: "app/components/ui/input-otp.tsx",
  lineNumber: 64,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "app/components/ui/input-otp.tsx",
  lineNumber: 63,
  columnNumber: 12
}, this));
_c8 = InputOTPSeparator;
InputOTPSeparator.displayName = "InputOTPSeparator";
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
$RefreshReg$(_c, "InputOTP$forwardRef");
$RefreshReg$(_c2, "InputOTP");
$RefreshReg$(_c3, "InputOTPGroup$forwardRef");
$RefreshReg$(_c4, "InputOTPGroup");
$RefreshReg$(_c5, "InputOTPSlot$forwardRef");
$RefreshReg$(_c6, "InputOTPSlot");
$RefreshReg$(_c7, "InputOTPSeparator$forwardRef");
$RefreshReg$(_c8, "InputOTPSeparator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/auth.signup_.verify.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\auth.signup_.verify.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\auth.signup_.verify.tsx"
  );
  import.meta.hot.lastModified = "1720084975038.7744";
}
var schema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits")
});
function Page() {
  _s2();
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
        schema
      });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthLayout, { title: "We have sent you a code", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "POST", id: form.id, onSubmit: form.onSubmit, autoComplete: "off", noValidate: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: fields.otp.id, children: "Enter it below to verify your email" }, void 0, false, {
        fileName: "app/routes/auth.signup_.verify.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputOTP, { maxLength: 6, ...getInputProps(fields.otp, {
        type: "text"
      }), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputOTPGroup, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputOTPSlot, { index: 0 }, void 0, false, {
            fileName: "app/routes/auth.signup_.verify.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputOTPSlot, { index: 1 }, void 0, false, {
            fileName: "app/routes/auth.signup_.verify.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputOTPSlot, { index: 2 }, void 0, false, {
            fileName: "app/routes/auth.signup_.verify.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.signup_.verify.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputOTPSeparator, {}, void 0, false, {
          fileName: "app/routes/auth.signup_.verify.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputOTPGroup, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputOTPSlot, { index: 3 }, void 0, false, {
            fileName: "app/routes/auth.signup_.verify.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputOTPSlot, { index: 4 }, void 0, false, {
            fileName: "app/routes/auth.signup_.verify.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputOTPSlot, { index: 5 }, void 0, false, {
            fileName: "app/routes/auth.signup_.verify.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.signup_.verify.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.signup_.verify.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FieldError, { children: fields.otp.errors }, void 0, false, {
        fileName: "app/routes/auth.signup_.verify.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.signup_.verify.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { className: "w-full rounded-full", type: "submit", disabled: !form.valid || isSubmitting, children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Loader, {}, void 0, false, {
      fileName: "app/routes/auth.signup_.verify.tsx",
      lineNumber: 84,
      columnNumber: 27
    }, this) : "Next" }, void 0, false, {
      fileName: "app/routes/auth.signup_.verify.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.signup_.verify.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/auth.signup_.verify.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s2(Page, "aQjrDJLs/643E3AE6Om1qZ+vcRI=", false, function() {
  return [useActionData, useNavigation, useForm];
});
_c9 = Page;
var _c9;
$RefreshReg$(_c9, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default
};
//# sourceMappingURL=/build/routes/auth.signup_.verify-G4ZLMHG4.js.map
