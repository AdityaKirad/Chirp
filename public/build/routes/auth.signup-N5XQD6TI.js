import {
  require_db
} from "/build/_shared/chunk-YECSVSRA.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Field,
  FieldError,
  Label,
  Loader,
  conformZodMessage,
  getInputProps,
  parseWithZod,
  useControl,
  useForm,
  z
} from "/build/_shared/chunk-GTKX7IJD.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-B43JI2TA.js";
import {
  AuthLayout,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Input
} from "/build/_shared/chunk-BUCYPBFO.js";
import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $8927f6f2acc4f386$export$6d1a0317bde7de7f,
  Button,
  _extends,
  addDays,
  addMonths,
  addWeeks,
  addYears,
  buttonVariants,
  cn,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInYears,
  en_US_default,
  endOfISOWeek,
  endOfMonth,
  endOfWeek,
  format,
  getISOWeek,
  getUnixTime,
  getWeek,
  getWeeksInMonth,
  isAfter,
  isBefore,
  isDate,
  isSameDay,
  isSameMonth,
  isSameYear,
  max,
  min,
  setMonth,
  setYear,
  startOfDay,
  startOfISOWeek,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays
} from "/build/_shared/chunk-EAOUDLNQ.js";
import {
  Form,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-2LIS5FON.js";
import {
  require_react_dom
} from "/build/_shared/chunk-U4FRFQSK.js";
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

// app/routes/auth.signup/personal-info.tsx
var import_react23 = __toESM(require_react(), 1);

// node_modules/react-day-picker/dist/index.esm.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function isDayPickerMultiple(props) {
  return props.mode === "multiple";
}
function isDayPickerRange(props) {
  return props.mode === "range";
}
function isDayPickerSingle(props) {
  return props.mode === "single";
}
var defaultClassNames = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function formatCaption(month, options) {
  return format(month, "LLLL y", options);
}
function formatDay(day, options) {
  return format(day, "d", options);
}
function formatMonthCaption(month, options) {
  return format(month, "LLLL", options);
}
function formatWeekNumber(weekNumber) {
  return "".concat(weekNumber);
}
function formatWeekdayName(weekday, options) {
  return format(weekday, "cccccc", options);
}
function formatYearCaption(year, options) {
  return format(year, "yyyy", options);
}
var formatters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption,
  formatDay,
  formatMonthCaption,
  formatWeekNumber,
  formatWeekdayName,
  formatYearCaption
});
var labelDay = function(day, activeModifiers, options) {
  return format(day, "do MMMM (EEEE)", options);
};
var labelMonthDropdown = function() {
  return "Month: ";
};
var labelNext = function() {
  return "Go to next month";
};
var labelPrevious = function() {
  return "Go to previous month";
};
var labelWeekday = function(day, options) {
  return format(day, "cccc", options);
};
var labelWeekNumber = function(n) {
  return "Week n. ".concat(n);
};
var labelYearDropdown = function() {
  return "Year: ";
};
var labels = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay,
  labelMonthDropdown,
  labelNext,
  labelPrevious,
  labelWeekNumber,
  labelWeekday,
  labelYearDropdown
});
function getDefaultContextValues() {
  var captionLayout = "buttons";
  var classNames = defaultClassNames;
  var locale = en_US_default;
  var modifiersClassNames = {};
  var modifiers = {};
  var numberOfMonths = 1;
  var styles = {};
  var today = /* @__PURE__ */ new Date();
  return {
    captionLayout,
    classNames,
    formatters,
    labels,
    locale,
    modifiersClassNames,
    modifiers,
    numberOfMonths,
    styles,
    today,
    mode: "default"
  };
}
function parseFromToProps(props) {
  var fromYear = props.fromYear, toYear = props.toYear, fromMonth = props.fromMonth, toMonth = props.toMonth;
  var fromDate = props.fromDate, toDate = props.toDate;
  if (fromMonth) {
    fromDate = startOfMonth(fromMonth);
  } else if (fromYear) {
    fromDate = new Date(fromYear, 0, 1);
  }
  if (toMonth) {
    toDate = endOfMonth(toMonth);
  } else if (toYear) {
    toDate = new Date(toYear, 11, 31);
  }
  return {
    fromDate: fromDate ? startOfDay(fromDate) : void 0,
    toDate: toDate ? startOfDay(toDate) : void 0
  };
}
var DayPickerContext = (0, import_react.createContext)(void 0);
function DayPickerProvider(props) {
  var _a;
  var initialProps = props.initialProps;
  var defaultContextValues = getDefaultContextValues();
  var _b = parseFromToProps(initialProps), fromDate = _b.fromDate, toDate = _b.toDate;
  var captionLayout = (_a = initialProps.captionLayout) !== null && _a !== void 0 ? _a : defaultContextValues.captionLayout;
  if (captionLayout !== "buttons" && (!fromDate || !toDate)) {
    captionLayout = "buttons";
  }
  var onSelect;
  if (isDayPickerSingle(initialProps) || isDayPickerMultiple(initialProps) || isDayPickerRange(initialProps)) {
    onSelect = initialProps.onSelect;
  }
  var value = __assign(__assign(__assign({}, defaultContextValues), initialProps), { captionLayout, classNames: __assign(__assign({}, defaultContextValues.classNames), initialProps.classNames), components: __assign({}, initialProps.components), formatters: __assign(__assign({}, defaultContextValues.formatters), initialProps.formatters), fromDate, labels: __assign(__assign({}, defaultContextValues.labels), initialProps.labels), mode: initialProps.mode || defaultContextValues.mode, modifiers: __assign(__assign({}, defaultContextValues.modifiers), initialProps.modifiers), modifiersClassNames: __assign(__assign({}, defaultContextValues.modifiersClassNames), initialProps.modifiersClassNames), onSelect, styles: __assign(__assign({}, defaultContextValues.styles), initialProps.styles), toDate });
  return (0, import_jsx_runtime.jsx)(DayPickerContext.Provider, { value, children: props.children });
}
function useDayPicker() {
  var context = (0, import_react.useContext)(DayPickerContext);
  if (!context) {
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  }
  return context;
}
function CaptionLabel(props) {
  var _a = useDayPicker(), locale = _a.locale, classNames = _a.classNames, styles = _a.styles, formatCaption2 = _a.formatters.formatCaption;
  return (0, import_jsx_runtime.jsx)("div", { className: classNames.caption_label, style: styles.caption_label, "aria-live": "polite", role: "presentation", id: props.id, children: formatCaption2(props.displayMonth, { locale }) });
}
function IconDropdown(props) {
  return (0, import_jsx_runtime.jsx)("svg", __assign({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, props, { children: (0, import_jsx_runtime.jsx)("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Dropdown(props) {
  var _a, _b;
  var onChange = props.onChange, value = props.value, children = props.children, caption = props.caption, className = props.className, style = props.style;
  var dayPicker = useDayPicker();
  var IconDropdownComponent = (_b = (_a = dayPicker.components) === null || _a === void 0 ? void 0 : _a.IconDropdown) !== null && _b !== void 0 ? _b : IconDropdown;
  return (0, import_jsx_runtime.jsxs)("div", { className, style, children: [(0, import_jsx_runtime.jsx)("span", { className: dayPicker.classNames.vhidden, children: props["aria-label"] }), (0, import_jsx_runtime.jsx)("select", { name: props.name, "aria-label": props["aria-label"], className: dayPicker.classNames.dropdown, style: dayPicker.styles.dropdown, value, onChange, children }), (0, import_jsx_runtime.jsxs)("div", { className: dayPicker.classNames.caption_label, style: dayPicker.styles.caption_label, "aria-hidden": "true", children: [caption, (0, import_jsx_runtime.jsx)(IconDropdownComponent, { className: dayPicker.classNames.dropdown_icon, style: dayPicker.styles.dropdown_icon })] })] });
}
function MonthsDropdown(props) {
  var _a;
  var _b = useDayPicker(), fromDate = _b.fromDate, toDate = _b.toDate, styles = _b.styles, locale = _b.locale, formatMonthCaption2 = _b.formatters.formatMonthCaption, classNames = _b.classNames, components = _b.components, labelMonthDropdown2 = _b.labels.labelMonthDropdown;
  if (!fromDate)
    return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
  if (!toDate)
    return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
  var dropdownMonths = [];
  if (isSameYear(fromDate, toDate)) {
    var date = startOfMonth(fromDate);
    for (var month = fromDate.getMonth(); month <= toDate.getMonth(); month++) {
      dropdownMonths.push(setMonth(date, month));
    }
  } else {
    var date = startOfMonth(/* @__PURE__ */ new Date());
    for (var month = 0; month <= 11; month++) {
      dropdownMonths.push(setMonth(date, month));
    }
  }
  var handleChange = function(e) {
    var selectedMonth = Number(e.target.value);
    var newMonth = setMonth(startOfMonth(props.displayMonth), selectedMonth);
    props.onChange(newMonth);
  };
  var DropdownComponent = (_a = components === null || components === void 0 ? void 0 : components.Dropdown) !== null && _a !== void 0 ? _a : Dropdown;
  return (0, import_jsx_runtime.jsx)(DropdownComponent, { name: "months", "aria-label": labelMonthDropdown2(), className: classNames.dropdown_month, style: styles.dropdown_month, onChange: handleChange, value: props.displayMonth.getMonth(), caption: formatMonthCaption2(props.displayMonth, { locale }), children: dropdownMonths.map(function(m) {
    return (0, import_jsx_runtime.jsx)("option", { value: m.getMonth(), children: formatMonthCaption2(m, { locale }) }, m.getMonth());
  }) });
}
function YearsDropdown(props) {
  var _a;
  var displayMonth = props.displayMonth;
  var _b = useDayPicker(), fromDate = _b.fromDate, toDate = _b.toDate, locale = _b.locale, styles = _b.styles, classNames = _b.classNames, components = _b.components, formatYearCaption2 = _b.formatters.formatYearCaption, labelYearDropdown2 = _b.labels.labelYearDropdown;
  var years = [];
  if (!fromDate)
    return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
  if (!toDate)
    return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
  var fromYear = fromDate.getFullYear();
  var toYear = toDate.getFullYear();
  for (var year = fromYear; year <= toYear; year++) {
    years.push(setYear(startOfYear(/* @__PURE__ */ new Date()), year));
  }
  var handleChange = function(e) {
    var newMonth = setYear(startOfMonth(displayMonth), Number(e.target.value));
    props.onChange(newMonth);
  };
  var DropdownComponent = (_a = components === null || components === void 0 ? void 0 : components.Dropdown) !== null && _a !== void 0 ? _a : Dropdown;
  return (0, import_jsx_runtime.jsx)(DropdownComponent, { name: "years", "aria-label": labelYearDropdown2(), className: classNames.dropdown_year, style: styles.dropdown_year, onChange: handleChange, value: displayMonth.getFullYear(), caption: formatYearCaption2(displayMonth, { locale }), children: years.map(function(year2) {
    return (0, import_jsx_runtime.jsx)("option", { value: year2.getFullYear(), children: formatYearCaption2(year2, { locale }) }, year2.getFullYear());
  }) });
}
function useControlledValue(defaultValue, controlledValue) {
  var _a = (0, import_react.useState)(defaultValue), uncontrolledValue = _a[0], setValue = _a[1];
  var value = controlledValue === void 0 ? uncontrolledValue : controlledValue;
  return [value, setValue];
}
function getInitialMonth(context) {
  var month = context.month, defaultMonth = context.defaultMonth, today = context.today;
  var initialMonth = month || defaultMonth || today || /* @__PURE__ */ new Date();
  var toDate = context.toDate, fromDate = context.fromDate, _a = context.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a;
  if (toDate && differenceInCalendarMonths(toDate, initialMonth) < 0) {
    var offset4 = -1 * (numberOfMonths - 1);
    initialMonth = addMonths(toDate, offset4);
  }
  if (fromDate && differenceInCalendarMonths(initialMonth, fromDate) < 0) {
    initialMonth = fromDate;
  }
  return startOfMonth(initialMonth);
}
function useNavigationState() {
  var context = useDayPicker();
  var initialMonth = getInitialMonth(context);
  var _a = useControlledValue(initialMonth, context.month), month = _a[0], setMonth2 = _a[1];
  var goToMonth = function(date) {
    var _a2;
    if (context.disableNavigation)
      return;
    var month2 = startOfMonth(date);
    setMonth2(month2);
    (_a2 = context.onMonthChange) === null || _a2 === void 0 ? void 0 : _a2.call(context, month2);
  };
  return [month, goToMonth];
}
function getDisplayMonths(month, _a) {
  var reverseMonths = _a.reverseMonths, numberOfMonths = _a.numberOfMonths;
  var start = startOfMonth(month);
  var end = startOfMonth(addMonths(start, numberOfMonths));
  var monthsDiff = differenceInCalendarMonths(end, start);
  var months = [];
  for (var i = 0; i < monthsDiff; i++) {
    var nextMonth = addMonths(start, i);
    months.push(nextMonth);
  }
  if (reverseMonths)
    months = months.reverse();
  return months;
}
function getNextMonth(startingMonth, options) {
  if (options.disableNavigation) {
    return void 0;
  }
  var toDate = options.toDate, pagedNavigation = options.pagedNavigation, _a = options.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a;
  var offset4 = pagedNavigation ? numberOfMonths : 1;
  var month = startOfMonth(startingMonth);
  if (!toDate) {
    return addMonths(month, offset4);
  }
  var monthsDiff = differenceInCalendarMonths(toDate, startingMonth);
  if (monthsDiff < numberOfMonths) {
    return void 0;
  }
  return addMonths(month, offset4);
}
function getPreviousMonth(startingMonth, options) {
  if (options.disableNavigation) {
    return void 0;
  }
  var fromDate = options.fromDate, pagedNavigation = options.pagedNavigation, _a = options.numberOfMonths, numberOfMonths = _a === void 0 ? 1 : _a;
  var offset4 = pagedNavigation ? numberOfMonths : 1;
  var month = startOfMonth(startingMonth);
  if (!fromDate) {
    return addMonths(month, -offset4);
  }
  var monthsDiff = differenceInCalendarMonths(month, fromDate);
  if (monthsDiff <= 0) {
    return void 0;
  }
  return addMonths(month, -offset4);
}
var NavigationContext = (0, import_react.createContext)(void 0);
function NavigationProvider(props) {
  var dayPicker = useDayPicker();
  var _a = useNavigationState(), currentMonth = _a[0], goToMonth = _a[1];
  var displayMonths = getDisplayMonths(currentMonth, dayPicker);
  var nextMonth = getNextMonth(currentMonth, dayPicker);
  var previousMonth = getPreviousMonth(currentMonth, dayPicker);
  var isDateDisplayed = function(date) {
    return displayMonths.some(function(displayMonth) {
      return isSameMonth(date, displayMonth);
    });
  };
  var goToDate = function(date, refDate) {
    if (isDateDisplayed(date)) {
      return;
    }
    if (refDate && isBefore(date, refDate)) {
      goToMonth(addMonths(date, 1 + dayPicker.numberOfMonths * -1));
    } else {
      goToMonth(date);
    }
  };
  var value = {
    currentMonth,
    displayMonths,
    goToMonth,
    goToDate,
    previousMonth,
    nextMonth,
    isDateDisplayed
  };
  return (0, import_jsx_runtime.jsx)(NavigationContext.Provider, { value, children: props.children });
}
function useNavigation2() {
  var context = (0, import_react.useContext)(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
function CaptionDropdowns(props) {
  var _a;
  var _b = useDayPicker(), classNames = _b.classNames, styles = _b.styles, components = _b.components;
  var goToMonth = useNavigation2().goToMonth;
  var handleMonthChange = function(newMonth) {
    goToMonth(addMonths(newMonth, props.displayIndex ? -props.displayIndex : 0));
  };
  var CaptionLabelComponent = (_a = components === null || components === void 0 ? void 0 : components.CaptionLabel) !== null && _a !== void 0 ? _a : CaptionLabel;
  var captionLabel = (0, import_jsx_runtime.jsx)(CaptionLabelComponent, { id: props.id, displayMonth: props.displayMonth });
  return (0, import_jsx_runtime.jsxs)("div", { className: classNames.caption_dropdowns, style: styles.caption_dropdowns, children: [(0, import_jsx_runtime.jsx)("div", { className: classNames.vhidden, children: captionLabel }), (0, import_jsx_runtime.jsx)(MonthsDropdown, { onChange: handleMonthChange, displayMonth: props.displayMonth }), (0, import_jsx_runtime.jsx)(YearsDropdown, { onChange: handleMonthChange, displayMonth: props.displayMonth })] });
}
function IconLeft(props) {
  return (0, import_jsx_runtime.jsx)("svg", __assign({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, props, { children: (0, import_jsx_runtime.jsx)("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function IconRight(props) {
  return (0, import_jsx_runtime.jsx)("svg", __assign({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, props, { children: (0, import_jsx_runtime.jsx)("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Button2 = (0, import_react.forwardRef)(function(props, ref) {
  var _a = useDayPicker(), classNames = _a.classNames, styles = _a.styles;
  var classNamesArr = [classNames.button_reset, classNames.button];
  if (props.className) {
    classNamesArr.push(props.className);
  }
  var className = classNamesArr.join(" ");
  var style = __assign(__assign({}, styles.button_reset), styles.button);
  if (props.style) {
    Object.assign(style, props.style);
  }
  return (0, import_jsx_runtime.jsx)("button", __assign({}, props, { ref, type: "button", className, style }));
});
function Navigation(props) {
  var _a, _b;
  var _c19 = useDayPicker(), dir = _c19.dir, locale = _c19.locale, classNames = _c19.classNames, styles = _c19.styles, _d = _c19.labels, labelPrevious2 = _d.labelPrevious, labelNext2 = _d.labelNext, components = _c19.components;
  if (!props.nextMonth && !props.previousMonth) {
    return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
  }
  var previousLabel = labelPrevious2(props.previousMonth, { locale });
  var previousClassName = [
    classNames.nav_button,
    classNames.nav_button_previous
  ].join(" ");
  var nextLabel = labelNext2(props.nextMonth, { locale });
  var nextClassName = [
    classNames.nav_button,
    classNames.nav_button_next
  ].join(" ");
  var IconRightComponent = (_a = components === null || components === void 0 ? void 0 : components.IconRight) !== null && _a !== void 0 ? _a : IconRight;
  var IconLeftComponent = (_b = components === null || components === void 0 ? void 0 : components.IconLeft) !== null && _b !== void 0 ? _b : IconLeft;
  return (0, import_jsx_runtime.jsxs)("div", { className: classNames.nav, style: styles.nav, children: [!props.hidePrevious && (0, import_jsx_runtime.jsx)(Button2, { name: "previous-month", "aria-label": previousLabel, className: previousClassName, style: styles.nav_button_previous, disabled: !props.previousMonth, onClick: props.onPreviousClick, children: dir === "rtl" ? (0, import_jsx_runtime.jsx)(IconRightComponent, { className: classNames.nav_icon, style: styles.nav_icon }) : (0, import_jsx_runtime.jsx)(IconLeftComponent, { className: classNames.nav_icon, style: styles.nav_icon }) }), !props.hideNext && (0, import_jsx_runtime.jsx)(Button2, { name: "next-month", "aria-label": nextLabel, className: nextClassName, style: styles.nav_button_next, disabled: !props.nextMonth, onClick: props.onNextClick, children: dir === "rtl" ? (0, import_jsx_runtime.jsx)(IconLeftComponent, { className: classNames.nav_icon, style: styles.nav_icon }) : (0, import_jsx_runtime.jsx)(IconRightComponent, { className: classNames.nav_icon, style: styles.nav_icon }) })] });
}
function CaptionNavigation(props) {
  var numberOfMonths = useDayPicker().numberOfMonths;
  var _a = useNavigation2(), previousMonth = _a.previousMonth, nextMonth = _a.nextMonth, goToMonth = _a.goToMonth, displayMonths = _a.displayMonths;
  var displayIndex = displayMonths.findIndex(function(month) {
    return isSameMonth(props.displayMonth, month);
  });
  var isFirst = displayIndex === 0;
  var isLast = displayIndex === displayMonths.length - 1;
  var hideNext = numberOfMonths > 1 && (isFirst || !isLast);
  var hidePrevious = numberOfMonths > 1 && (isLast || !isFirst);
  var handlePreviousClick = function() {
    if (!previousMonth)
      return;
    goToMonth(previousMonth);
  };
  var handleNextClick = function() {
    if (!nextMonth)
      return;
    goToMonth(nextMonth);
  };
  return (0, import_jsx_runtime.jsx)(Navigation, { displayMonth: props.displayMonth, hideNext, hidePrevious, nextMonth, previousMonth, onPreviousClick: handlePreviousClick, onNextClick: handleNextClick });
}
function Caption(props) {
  var _a;
  var _b = useDayPicker(), classNames = _b.classNames, disableNavigation = _b.disableNavigation, styles = _b.styles, captionLayout = _b.captionLayout, components = _b.components;
  var CaptionLabelComponent = (_a = components === null || components === void 0 ? void 0 : components.CaptionLabel) !== null && _a !== void 0 ? _a : CaptionLabel;
  var caption;
  if (disableNavigation) {
    caption = (0, import_jsx_runtime.jsx)(CaptionLabelComponent, { id: props.id, displayMonth: props.displayMonth });
  } else if (captionLayout === "dropdown") {
    caption = (0, import_jsx_runtime.jsx)(CaptionDropdowns, { displayMonth: props.displayMonth, id: props.id });
  } else if (captionLayout === "dropdown-buttons") {
    caption = (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(CaptionDropdowns, { displayMonth: props.displayMonth, displayIndex: props.displayIndex, id: props.id }), (0, import_jsx_runtime.jsx)(CaptionNavigation, { displayMonth: props.displayMonth, displayIndex: props.displayIndex, id: props.id })] });
  } else {
    caption = (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(CaptionLabelComponent, { id: props.id, displayMonth: props.displayMonth, displayIndex: props.displayIndex }), (0, import_jsx_runtime.jsx)(CaptionNavigation, { displayMonth: props.displayMonth, id: props.id })] });
  }
  return (0, import_jsx_runtime.jsx)("div", { className: classNames.caption, style: styles.caption, children: caption });
}
function Footer(props) {
  var _a = useDayPicker(), footer = _a.footer, styles = _a.styles, tfoot = _a.classNames.tfoot;
  if (!footer)
    return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
  return (0, import_jsx_runtime.jsx)("tfoot", { className: tfoot, style: styles.tfoot, children: (0, import_jsx_runtime.jsx)("tr", { children: (0, import_jsx_runtime.jsx)("td", { colSpan: 8, children: footer }) }) });
}
function getWeekdays(locale, weekStartsOn, ISOWeek) {
  var start = ISOWeek ? startOfISOWeek(/* @__PURE__ */ new Date()) : startOfWeek(/* @__PURE__ */ new Date(), { locale, weekStartsOn });
  var days = [];
  for (var i = 0; i < 7; i++) {
    var day = addDays(start, i);
    days.push(day);
  }
  return days;
}
function HeadRow() {
  var _a = useDayPicker(), classNames = _a.classNames, styles = _a.styles, showWeekNumber = _a.showWeekNumber, locale = _a.locale, weekStartsOn = _a.weekStartsOn, ISOWeek = _a.ISOWeek, formatWeekdayName2 = _a.formatters.formatWeekdayName, labelWeekday2 = _a.labels.labelWeekday;
  var weekdays = getWeekdays(locale, weekStartsOn, ISOWeek);
  return (0, import_jsx_runtime.jsxs)("tr", { style: styles.head_row, className: classNames.head_row, children: [showWeekNumber && (0, import_jsx_runtime.jsx)("td", { style: styles.head_cell, className: classNames.head_cell }), weekdays.map(function(weekday, i) {
    return (0, import_jsx_runtime.jsx)("th", { scope: "col", className: classNames.head_cell, style: styles.head_cell, "aria-label": labelWeekday2(weekday, { locale }), children: formatWeekdayName2(weekday, { locale }) }, i);
  })] });
}
function Head() {
  var _a;
  var _b = useDayPicker(), classNames = _b.classNames, styles = _b.styles, components = _b.components;
  var HeadRowComponent = (_a = components === null || components === void 0 ? void 0 : components.HeadRow) !== null && _a !== void 0 ? _a : HeadRow;
  return (0, import_jsx_runtime.jsx)("thead", { style: styles.head, className: classNames.head, children: (0, import_jsx_runtime.jsx)(HeadRowComponent, {}) });
}
function DayContent(props) {
  var _a = useDayPicker(), locale = _a.locale, formatDay2 = _a.formatters.formatDay;
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: formatDay2(props.date, { locale }) });
}
var SelectMultipleContext = (0, import_react.createContext)(void 0);
function SelectMultipleProvider(props) {
  if (!isDayPickerMultiple(props.initialProps)) {
    var emptyContextValue = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return (0, import_jsx_runtime.jsx)(SelectMultipleContext.Provider, { value: emptyContextValue, children: props.children });
  }
  return (0, import_jsx_runtime.jsx)(SelectMultipleProviderInternal, { initialProps: props.initialProps, children: props.children });
}
function SelectMultipleProviderInternal(_a) {
  var initialProps = _a.initialProps, children = _a.children;
  var selected = initialProps.selected, min3 = initialProps.min, max3 = initialProps.max;
  var onDayClick = function(day, activeModifiers, e) {
    var _a2, _b;
    (_a2 = initialProps.onDayClick) === null || _a2 === void 0 ? void 0 : _a2.call(initialProps, day, activeModifiers, e);
    var isMinSelected = Boolean(activeModifiers.selected && min3 && (selected === null || selected === void 0 ? void 0 : selected.length) === min3);
    if (isMinSelected) {
      return;
    }
    var isMaxSelected = Boolean(!activeModifiers.selected && max3 && (selected === null || selected === void 0 ? void 0 : selected.length) === max3);
    if (isMaxSelected) {
      return;
    }
    var selectedDays = selected ? __spreadArray([], selected, true) : [];
    if (activeModifiers.selected) {
      var index2 = selectedDays.findIndex(function(selectedDay) {
        return isSameDay(day, selectedDay);
      });
      selectedDays.splice(index2, 1);
    } else {
      selectedDays.push(day);
    }
    (_b = initialProps.onSelect) === null || _b === void 0 ? void 0 : _b.call(initialProps, selectedDays, day, activeModifiers, e);
  };
  var modifiers = {
    disabled: []
  };
  if (selected) {
    modifiers.disabled.push(function(day) {
      var isMaxSelected = max3 && selected.length > max3 - 1;
      var isSelected = selected.some(function(selectedDay) {
        return isSameDay(selectedDay, day);
      });
      return Boolean(isMaxSelected && !isSelected);
    });
  }
  var contextValue = {
    selected,
    onDayClick,
    modifiers
  };
  return (0, import_jsx_runtime.jsx)(SelectMultipleContext.Provider, { value: contextValue, children });
}
function useSelectMultiple() {
  var context = (0, import_react.useContext)(SelectMultipleContext);
  if (!context) {
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  }
  return context;
}
function addToRange(day, range) {
  var _a = range || {}, from = _a.from, to = _a.to;
  if (from && to) {
    if (isSameDay(to, day) && isSameDay(from, day)) {
      return void 0;
    }
    if (isSameDay(to, day)) {
      return { from: to, to: void 0 };
    }
    if (isSameDay(from, day)) {
      return void 0;
    }
    if (isAfter(from, day)) {
      return { from: day, to };
    }
    return { from, to: day };
  }
  if (to) {
    if (isAfter(day, to)) {
      return { from: to, to: day };
    }
    return { from: day, to };
  }
  if (from) {
    if (isBefore(day, from)) {
      return { from: day, to: from };
    }
    return { from, to: day };
  }
  return { from: day, to: void 0 };
}
var SelectRangeContext = (0, import_react.createContext)(void 0);
function SelectRangeProvider(props) {
  if (!isDayPickerRange(props.initialProps)) {
    var emptyContextValue = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return (0, import_jsx_runtime.jsx)(SelectRangeContext.Provider, { value: emptyContextValue, children: props.children });
  }
  return (0, import_jsx_runtime.jsx)(SelectRangeProviderInternal, { initialProps: props.initialProps, children: props.children });
}
function SelectRangeProviderInternal(_a) {
  var initialProps = _a.initialProps, children = _a.children;
  var selected = initialProps.selected;
  var _b = selected || {}, selectedFrom = _b.from, selectedTo = _b.to;
  var min3 = initialProps.min;
  var max3 = initialProps.max;
  var onDayClick = function(day, activeModifiers, e) {
    var _a2, _b2;
    (_a2 = initialProps.onDayClick) === null || _a2 === void 0 ? void 0 : _a2.call(initialProps, day, activeModifiers, e);
    var newRange = addToRange(day, selected);
    (_b2 = initialProps.onSelect) === null || _b2 === void 0 ? void 0 : _b2.call(initialProps, newRange, day, activeModifiers, e);
  };
  var modifiers = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (selectedFrom) {
    modifiers.range_start = [selectedFrom];
    if (!selectedTo) {
      modifiers.range_end = [selectedFrom];
    } else {
      modifiers.range_end = [selectedTo];
      if (!isSameDay(selectedFrom, selectedTo)) {
        modifiers.range_middle = [
          {
            after: selectedFrom,
            before: selectedTo
          }
        ];
      }
    }
  } else if (selectedTo) {
    modifiers.range_start = [selectedTo];
    modifiers.range_end = [selectedTo];
  }
  if (min3) {
    if (selectedFrom && !selectedTo) {
      modifiers.disabled.push({
        after: subDays(selectedFrom, min3 - 1),
        before: addDays(selectedFrom, min3 - 1)
      });
    }
    if (selectedFrom && selectedTo) {
      modifiers.disabled.push({
        after: selectedFrom,
        before: addDays(selectedFrom, min3 - 1)
      });
    }
    if (!selectedFrom && selectedTo) {
      modifiers.disabled.push({
        after: subDays(selectedTo, min3 - 1),
        before: addDays(selectedTo, min3 - 1)
      });
    }
  }
  if (max3) {
    if (selectedFrom && !selectedTo) {
      modifiers.disabled.push({
        before: addDays(selectedFrom, -max3 + 1)
      });
      modifiers.disabled.push({
        after: addDays(selectedFrom, max3 - 1)
      });
    }
    if (selectedFrom && selectedTo) {
      var selectedCount = differenceInCalendarDays(selectedTo, selectedFrom) + 1;
      var offset4 = max3 - selectedCount;
      modifiers.disabled.push({
        before: subDays(selectedFrom, offset4)
      });
      modifiers.disabled.push({
        after: addDays(selectedTo, offset4)
      });
    }
    if (!selectedFrom && selectedTo) {
      modifiers.disabled.push({
        before: addDays(selectedTo, -max3 + 1)
      });
      modifiers.disabled.push({
        after: addDays(selectedTo, max3 - 1)
      });
    }
  }
  return (0, import_jsx_runtime.jsx)(SelectRangeContext.Provider, { value: { selected, onDayClick, modifiers }, children });
}
function useSelectRange() {
  var context = (0, import_react.useContext)(SelectRangeContext);
  if (!context) {
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  }
  return context;
}
function matcherToArray(matcher) {
  if (Array.isArray(matcher)) {
    return __spreadArray([], matcher, true);
  } else if (matcher !== void 0) {
    return [matcher];
  } else {
    return [];
  }
}
function getCustomModifiers(dayModifiers) {
  var customModifiers = {};
  Object.entries(dayModifiers).forEach(function(_a) {
    var modifier = _a[0], matcher = _a[1];
    customModifiers[modifier] = matcherToArray(matcher);
  });
  return customModifiers;
}
var InternalModifier;
(function(InternalModifier2) {
  InternalModifier2["Outside"] = "outside";
  InternalModifier2["Disabled"] = "disabled";
  InternalModifier2["Selected"] = "selected";
  InternalModifier2["Hidden"] = "hidden";
  InternalModifier2["Today"] = "today";
  InternalModifier2["RangeStart"] = "range_start";
  InternalModifier2["RangeEnd"] = "range_end";
  InternalModifier2["RangeMiddle"] = "range_middle";
})(InternalModifier || (InternalModifier = {}));
var Selected = InternalModifier.Selected;
var Disabled = InternalModifier.Disabled;
var Hidden = InternalModifier.Hidden;
var Today = InternalModifier.Today;
var RangeEnd = InternalModifier.RangeEnd;
var RangeMiddle = InternalModifier.RangeMiddle;
var RangeStart = InternalModifier.RangeStart;
var Outside = InternalModifier.Outside;
function getInternalModifiers(dayPicker, selectMultiple, selectRange) {
  var _a;
  var internalModifiers = (_a = {}, _a[Selected] = matcherToArray(dayPicker.selected), _a[Disabled] = matcherToArray(dayPicker.disabled), _a[Hidden] = matcherToArray(dayPicker.hidden), _a[Today] = [dayPicker.today], _a[RangeEnd] = [], _a[RangeMiddle] = [], _a[RangeStart] = [], _a[Outside] = [], _a);
  if (dayPicker.fromDate) {
    internalModifiers[Disabled].push({ before: dayPicker.fromDate });
  }
  if (dayPicker.toDate) {
    internalModifiers[Disabled].push({ after: dayPicker.toDate });
  }
  if (isDayPickerMultiple(dayPicker)) {
    internalModifiers[Disabled] = internalModifiers[Disabled].concat(selectMultiple.modifiers[Disabled]);
  } else if (isDayPickerRange(dayPicker)) {
    internalModifiers[Disabled] = internalModifiers[Disabled].concat(selectRange.modifiers[Disabled]);
    internalModifiers[RangeStart] = selectRange.modifiers[RangeStart];
    internalModifiers[RangeMiddle] = selectRange.modifiers[RangeMiddle];
    internalModifiers[RangeEnd] = selectRange.modifiers[RangeEnd];
  }
  return internalModifiers;
}
var ModifiersContext = (0, import_react.createContext)(void 0);
function ModifiersProvider(props) {
  var dayPicker = useDayPicker();
  var selectMultiple = useSelectMultiple();
  var selectRange = useSelectRange();
  var internalModifiers = getInternalModifiers(dayPicker, selectMultiple, selectRange);
  var customModifiers = getCustomModifiers(dayPicker.modifiers);
  var modifiers = __assign(__assign({}, internalModifiers), customModifiers);
  return (0, import_jsx_runtime.jsx)(ModifiersContext.Provider, { value: modifiers, children: props.children });
}
function useModifiers() {
  var context = (0, import_react.useContext)(ModifiersContext);
  if (!context) {
    throw new Error("useModifiers must be used within a ModifiersProvider");
  }
  return context;
}
function isDateInterval(matcher) {
  return Boolean(matcher && typeof matcher === "object" && "before" in matcher && "after" in matcher);
}
function isDateRange(value) {
  return Boolean(value && typeof value === "object" && "from" in value);
}
function isDateAfterType(value) {
  return Boolean(value && typeof value === "object" && "after" in value);
}
function isDateBeforeType(value) {
  return Boolean(value && typeof value === "object" && "before" in value);
}
function isDayOfWeekType(value) {
  return Boolean(value && typeof value === "object" && "dayOfWeek" in value);
}
function isDateInRange(date, range) {
  var _a;
  var from = range.from, to = range.to;
  if (from && to) {
    var isRangeInverted = differenceInCalendarDays(to, from) < 0;
    if (isRangeInverted) {
      _a = [to, from], from = _a[0], to = _a[1];
    }
    var isInRange = differenceInCalendarDays(date, from) >= 0 && differenceInCalendarDays(to, date) >= 0;
    return isInRange;
  }
  if (to) {
    return isSameDay(to, date);
  }
  if (from) {
    return isSameDay(from, date);
  }
  return false;
}
function isDateType(value) {
  return isDate(value);
}
function isArrayOfDates(value) {
  return Array.isArray(value) && value.every(isDate);
}
function isMatch(day, matchers) {
  return matchers.some(function(matcher) {
    if (typeof matcher === "boolean") {
      return matcher;
    }
    if (isDateType(matcher)) {
      return isSameDay(day, matcher);
    }
    if (isArrayOfDates(matcher)) {
      return matcher.includes(day);
    }
    if (isDateRange(matcher)) {
      return isDateInRange(day, matcher);
    }
    if (isDayOfWeekType(matcher)) {
      return matcher.dayOfWeek.includes(day.getDay());
    }
    if (isDateInterval(matcher)) {
      var diffBefore = differenceInCalendarDays(matcher.before, day);
      var diffAfter = differenceInCalendarDays(matcher.after, day);
      var isDayBefore = diffBefore > 0;
      var isDayAfter = diffAfter < 0;
      var isClosedInterval = isAfter(matcher.before, matcher.after);
      if (isClosedInterval) {
        return isDayAfter && isDayBefore;
      } else {
        return isDayBefore || isDayAfter;
      }
    }
    if (isDateAfterType(matcher)) {
      return differenceInCalendarDays(day, matcher.after) > 0;
    }
    if (isDateBeforeType(matcher)) {
      return differenceInCalendarDays(matcher.before, day) > 0;
    }
    if (typeof matcher === "function") {
      return matcher(day);
    }
    return false;
  });
}
function getActiveModifiers(day, modifiers, displayMonth) {
  var matchedModifiers = Object.keys(modifiers).reduce(function(result, key) {
    var modifier = modifiers[key];
    if (isMatch(day, modifier)) {
      result.push(key);
    }
    return result;
  }, []);
  var activeModifiers = {};
  matchedModifiers.forEach(function(modifier) {
    return activeModifiers[modifier] = true;
  });
  if (displayMonth && !isSameMonth(day, displayMonth)) {
    activeModifiers.outside = true;
  }
  return activeModifiers;
}
function getInitialFocusTarget(displayMonths, modifiers) {
  var firstDayInMonth = startOfMonth(displayMonths[0]);
  var lastDayInMonth = endOfMonth(displayMonths[displayMonths.length - 1]);
  var firstFocusableDay;
  var today;
  var date = firstDayInMonth;
  while (date <= lastDayInMonth) {
    var activeModifiers = getActiveModifiers(date, modifiers);
    var isFocusable = !activeModifiers.disabled && !activeModifiers.hidden;
    if (!isFocusable) {
      date = addDays(date, 1);
      continue;
    }
    if (activeModifiers.selected) {
      return date;
    }
    if (activeModifiers.today && !today) {
      today = date;
    }
    if (!firstFocusableDay) {
      firstFocusableDay = date;
    }
    date = addDays(date, 1);
  }
  if (today) {
    return today;
  } else {
    return firstFocusableDay;
  }
}
var MAX_RETRY = 365;
function getNextFocus(focusedDay, options) {
  var moveBy = options.moveBy, direction = options.direction, context = options.context, modifiers = options.modifiers, _a = options.retry, retry = _a === void 0 ? { count: 0, lastFocused: focusedDay } : _a;
  var weekStartsOn = context.weekStartsOn, fromDate = context.fromDate, toDate = context.toDate, locale = context.locale;
  var moveFns = {
    day: addDays,
    week: addWeeks,
    month: addMonths,
    year: addYears,
    startOfWeek: function(date) {
      return context.ISOWeek ? startOfISOWeek(date) : startOfWeek(date, { locale, weekStartsOn });
    },
    endOfWeek: function(date) {
      return context.ISOWeek ? endOfISOWeek(date) : endOfWeek(date, { locale, weekStartsOn });
    }
  };
  var newFocusedDay = moveFns[moveBy](focusedDay, direction === "after" ? 1 : -1);
  if (direction === "before" && fromDate) {
    newFocusedDay = max([fromDate, newFocusedDay]);
  } else if (direction === "after" && toDate) {
    newFocusedDay = min([toDate, newFocusedDay]);
  }
  var isFocusable = true;
  if (modifiers) {
    var activeModifiers = getActiveModifiers(newFocusedDay, modifiers);
    isFocusable = !activeModifiers.disabled && !activeModifiers.hidden;
  }
  if (isFocusable) {
    return newFocusedDay;
  } else {
    if (retry.count > MAX_RETRY) {
      return retry.lastFocused;
    }
    return getNextFocus(newFocusedDay, {
      moveBy,
      direction,
      context,
      modifiers,
      retry: __assign(__assign({}, retry), { count: retry.count + 1 })
    });
  }
}
var FocusContext = (0, import_react.createContext)(void 0);
function FocusProvider(props) {
  var navigation = useNavigation2();
  var modifiers = useModifiers();
  var _a = (0, import_react.useState)(), focusedDay = _a[0], setFocusedDay = _a[1];
  var _b = (0, import_react.useState)(), lastFocused = _b[0], setLastFocused = _b[1];
  var initialFocusTarget = getInitialFocusTarget(navigation.displayMonths, modifiers);
  var focusTarget = (focusedDay !== null && focusedDay !== void 0 ? focusedDay : lastFocused && navigation.isDateDisplayed(lastFocused)) ? lastFocused : initialFocusTarget;
  var blur = function() {
    setLastFocused(focusedDay);
    setFocusedDay(void 0);
  };
  var focus = function(date) {
    setFocusedDay(date);
  };
  var context = useDayPicker();
  var moveFocus = function(moveBy, direction) {
    if (!focusedDay)
      return;
    var nextFocused = getNextFocus(focusedDay, {
      moveBy,
      direction,
      context,
      modifiers
    });
    if (isSameDay(focusedDay, nextFocused))
      return void 0;
    navigation.goToDate(nextFocused, focusedDay);
    focus(nextFocused);
  };
  var value = {
    focusedDay,
    focusTarget,
    blur,
    focus,
    focusDayAfter: function() {
      return moveFocus("day", "after");
    },
    focusDayBefore: function() {
      return moveFocus("day", "before");
    },
    focusWeekAfter: function() {
      return moveFocus("week", "after");
    },
    focusWeekBefore: function() {
      return moveFocus("week", "before");
    },
    focusMonthBefore: function() {
      return moveFocus("month", "before");
    },
    focusMonthAfter: function() {
      return moveFocus("month", "after");
    },
    focusYearBefore: function() {
      return moveFocus("year", "before");
    },
    focusYearAfter: function() {
      return moveFocus("year", "after");
    },
    focusStartOfWeek: function() {
      return moveFocus("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return moveFocus("endOfWeek", "after");
    }
  };
  return (0, import_jsx_runtime.jsx)(FocusContext.Provider, { value, children: props.children });
}
function useFocusContext() {
  var context = (0, import_react.useContext)(FocusContext);
  if (!context) {
    throw new Error("useFocusContext must be used within a FocusProvider");
  }
  return context;
}
function useActiveModifiers(day, displayMonth) {
  var modifiers = useModifiers();
  var activeModifiers = getActiveModifiers(day, modifiers, displayMonth);
  return activeModifiers;
}
var SelectSingleContext = (0, import_react.createContext)(void 0);
function SelectSingleProvider(props) {
  if (!isDayPickerSingle(props.initialProps)) {
    var emptyContextValue = {
      selected: void 0
    };
    return (0, import_jsx_runtime.jsx)(SelectSingleContext.Provider, { value: emptyContextValue, children: props.children });
  }
  return (0, import_jsx_runtime.jsx)(SelectSingleProviderInternal, { initialProps: props.initialProps, children: props.children });
}
function SelectSingleProviderInternal(_a) {
  var initialProps = _a.initialProps, children = _a.children;
  var onDayClick = function(day, activeModifiers, e) {
    var _a2, _b, _c19;
    (_a2 = initialProps.onDayClick) === null || _a2 === void 0 ? void 0 : _a2.call(initialProps, day, activeModifiers, e);
    if (activeModifiers.selected && !initialProps.required) {
      (_b = initialProps.onSelect) === null || _b === void 0 ? void 0 : _b.call(initialProps, void 0, day, activeModifiers, e);
      return;
    }
    (_c19 = initialProps.onSelect) === null || _c19 === void 0 ? void 0 : _c19.call(initialProps, day, day, activeModifiers, e);
  };
  var contextValue = {
    selected: initialProps.selected,
    onDayClick
  };
  return (0, import_jsx_runtime.jsx)(SelectSingleContext.Provider, { value: contextValue, children });
}
function useSelectSingle() {
  var context = (0, import_react.useContext)(SelectSingleContext);
  if (!context) {
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  }
  return context;
}
function useDayEventHandlers(date, activeModifiers) {
  var dayPicker = useDayPicker();
  var single = useSelectSingle();
  var multiple = useSelectMultiple();
  var range = useSelectRange();
  var _a = useFocusContext(), focusDayAfter = _a.focusDayAfter, focusDayBefore = _a.focusDayBefore, focusWeekAfter = _a.focusWeekAfter, focusWeekBefore = _a.focusWeekBefore, blur = _a.blur, focus = _a.focus, focusMonthBefore = _a.focusMonthBefore, focusMonthAfter = _a.focusMonthAfter, focusYearBefore = _a.focusYearBefore, focusYearAfter = _a.focusYearAfter, focusStartOfWeek = _a.focusStartOfWeek, focusEndOfWeek = _a.focusEndOfWeek;
  var onClick = function(e) {
    var _a2, _b, _c19, _d;
    if (isDayPickerSingle(dayPicker)) {
      (_a2 = single.onDayClick) === null || _a2 === void 0 ? void 0 : _a2.call(single, date, activeModifiers, e);
    } else if (isDayPickerMultiple(dayPicker)) {
      (_b = multiple.onDayClick) === null || _b === void 0 ? void 0 : _b.call(multiple, date, activeModifiers, e);
    } else if (isDayPickerRange(dayPicker)) {
      (_c19 = range.onDayClick) === null || _c19 === void 0 ? void 0 : _c19.call(range, date, activeModifiers, e);
    } else {
      (_d = dayPicker.onDayClick) === null || _d === void 0 ? void 0 : _d.call(dayPicker, date, activeModifiers, e);
    }
  };
  var onFocus = function(e) {
    var _a2;
    focus(date);
    (_a2 = dayPicker.onDayFocus) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onBlur = function(e) {
    var _a2;
    blur();
    (_a2 = dayPicker.onDayBlur) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onMouseEnter = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayMouseEnter) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onMouseLeave = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayMouseLeave) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onPointerEnter = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayPointerEnter) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onPointerLeave = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayPointerLeave) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onTouchCancel = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayTouchCancel) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onTouchEnd = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayTouchEnd) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onTouchMove = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayTouchMove) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onTouchStart = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayTouchStart) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onKeyUp = function(e) {
    var _a2;
    (_a2 = dayPicker.onDayKeyUp) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var onKeyDown = function(e) {
    var _a2;
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        e.stopPropagation();
        dayPicker.dir === "rtl" ? focusDayAfter() : focusDayBefore();
        break;
      case "ArrowRight":
        e.preventDefault();
        e.stopPropagation();
        dayPicker.dir === "rtl" ? focusDayBefore() : focusDayAfter();
        break;
      case "ArrowDown":
        e.preventDefault();
        e.stopPropagation();
        focusWeekAfter();
        break;
      case "ArrowUp":
        e.preventDefault();
        e.stopPropagation();
        focusWeekBefore();
        break;
      case "PageUp":
        e.preventDefault();
        e.stopPropagation();
        e.shiftKey ? focusYearBefore() : focusMonthBefore();
        break;
      case "PageDown":
        e.preventDefault();
        e.stopPropagation();
        e.shiftKey ? focusYearAfter() : focusMonthAfter();
        break;
      case "Home":
        e.preventDefault();
        e.stopPropagation();
        focusStartOfWeek();
        break;
      case "End":
        e.preventDefault();
        e.stopPropagation();
        focusEndOfWeek();
        break;
    }
    (_a2 = dayPicker.onDayKeyDown) === null || _a2 === void 0 ? void 0 : _a2.call(dayPicker, date, activeModifiers, e);
  };
  var eventHandlers = {
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    onTouchCancel,
    onTouchEnd,
    onTouchMove,
    onTouchStart
  };
  return eventHandlers;
}
function useSelectedDays() {
  var dayPicker = useDayPicker();
  var single = useSelectSingle();
  var multiple = useSelectMultiple();
  var range = useSelectRange();
  var selectedDays = isDayPickerSingle(dayPicker) ? single.selected : isDayPickerMultiple(dayPicker) ? multiple.selected : isDayPickerRange(dayPicker) ? range.selected : void 0;
  return selectedDays;
}
function isInternalModifier(modifier) {
  return Object.values(InternalModifier).includes(modifier);
}
function getDayClassNames(dayPicker, activeModifiers) {
  var classNames = [dayPicker.classNames.day];
  Object.keys(activeModifiers).forEach(function(modifier) {
    var customClassName = dayPicker.modifiersClassNames[modifier];
    if (customClassName) {
      classNames.push(customClassName);
    } else if (isInternalModifier(modifier)) {
      var internalClassName = dayPicker.classNames["day_".concat(modifier)];
      if (internalClassName) {
        classNames.push(internalClassName);
      }
    }
  });
  return classNames;
}
function getDayStyle(dayPicker, activeModifiers) {
  var style = __assign({}, dayPicker.styles.day);
  Object.keys(activeModifiers).forEach(function(modifier) {
    var _a;
    style = __assign(__assign({}, style), (_a = dayPicker.modifiersStyles) === null || _a === void 0 ? void 0 : _a[modifier]);
  });
  return style;
}
function useDayRender(day, displayMonth, buttonRef) {
  var _a;
  var _b, _c19;
  var dayPicker = useDayPicker();
  var focusContext = useFocusContext();
  var activeModifiers = useActiveModifiers(day, displayMonth);
  var eventHandlers = useDayEventHandlers(day, activeModifiers);
  var selectedDays = useSelectedDays();
  var isButton = Boolean(dayPicker.onDayClick || dayPicker.mode !== "default");
  (0, import_react.useEffect)(function() {
    var _a2;
    if (activeModifiers.outside)
      return;
    if (!focusContext.focusedDay)
      return;
    if (!isButton)
      return;
    if (isSameDay(focusContext.focusedDay, day)) {
      (_a2 = buttonRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
    }
  }, [
    focusContext.focusedDay,
    day,
    buttonRef,
    isButton,
    activeModifiers.outside
  ]);
  var className = getDayClassNames(dayPicker, activeModifiers).join(" ");
  var style = getDayStyle(dayPicker, activeModifiers);
  var isHidden = Boolean(activeModifiers.outside && !dayPicker.showOutsideDays || activeModifiers.hidden);
  var DayContentComponent = (_c19 = (_b = dayPicker.components) === null || _b === void 0 ? void 0 : _b.DayContent) !== null && _c19 !== void 0 ? _c19 : DayContent;
  var children = (0, import_jsx_runtime.jsx)(DayContentComponent, { date: day, displayMonth, activeModifiers });
  var divProps = {
    style,
    className,
    children,
    role: "gridcell"
  };
  var isFocusTarget = focusContext.focusTarget && isSameDay(focusContext.focusTarget, day) && !activeModifiers.outside;
  var isFocused = focusContext.focusedDay && isSameDay(focusContext.focusedDay, day);
  var buttonProps = __assign(__assign(__assign({}, divProps), (_a = { disabled: activeModifiers.disabled, role: "gridcell" }, _a["aria-selected"] = activeModifiers.selected, _a.tabIndex = isFocused || isFocusTarget ? 0 : -1, _a)), eventHandlers);
  var dayRender = {
    isButton,
    isHidden,
    activeModifiers,
    selectedDays,
    buttonProps,
    divProps
  };
  return dayRender;
}
function Day(props) {
  var buttonRef = (0, import_react.useRef)(null);
  var dayRender = useDayRender(props.date, props.displayMonth, buttonRef);
  if (dayRender.isHidden) {
    return (0, import_jsx_runtime.jsx)("div", { role: "gridcell" });
  }
  if (!dayRender.isButton) {
    return (0, import_jsx_runtime.jsx)("div", __assign({}, dayRender.divProps));
  }
  return (0, import_jsx_runtime.jsx)(Button2, __assign({ name: "day", ref: buttonRef }, dayRender.buttonProps));
}
function WeekNumber(props) {
  var weekNumber = props.number, dates = props.dates;
  var _a = useDayPicker(), onWeekNumberClick = _a.onWeekNumberClick, styles = _a.styles, classNames = _a.classNames, locale = _a.locale, labelWeekNumber2 = _a.labels.labelWeekNumber, formatWeekNumber2 = _a.formatters.formatWeekNumber;
  var content = formatWeekNumber2(Number(weekNumber), { locale });
  if (!onWeekNumberClick) {
    return (0, import_jsx_runtime.jsx)("span", { className: classNames.weeknumber, style: styles.weeknumber, children: content });
  }
  var label = labelWeekNumber2(Number(weekNumber), { locale });
  var handleClick = function(e) {
    onWeekNumberClick(weekNumber, dates, e);
  };
  return (0, import_jsx_runtime.jsx)(Button2, { name: "week-number", "aria-label": label, className: classNames.weeknumber, style: styles.weeknumber, onClick: handleClick, children: content });
}
function Row(props) {
  var _a, _b;
  var _c19 = useDayPicker(), styles = _c19.styles, classNames = _c19.classNames, showWeekNumber = _c19.showWeekNumber, components = _c19.components;
  var DayComponent = (_a = components === null || components === void 0 ? void 0 : components.Day) !== null && _a !== void 0 ? _a : Day;
  var WeeknumberComponent = (_b = components === null || components === void 0 ? void 0 : components.WeekNumber) !== null && _b !== void 0 ? _b : WeekNumber;
  var weekNumberCell;
  if (showWeekNumber) {
    weekNumberCell = (0, import_jsx_runtime.jsx)("td", { className: classNames.cell, style: styles.cell, children: (0, import_jsx_runtime.jsx)(WeeknumberComponent, { number: props.weekNumber, dates: props.dates }) });
  }
  return (0, import_jsx_runtime.jsxs)("tr", { className: classNames.row, style: styles.row, children: [weekNumberCell, props.dates.map(function(date) {
    return (0, import_jsx_runtime.jsx)("td", { className: classNames.cell, style: styles.cell, role: "presentation", children: (0, import_jsx_runtime.jsx)(DayComponent, { displayMonth: props.displayMonth, date }) }, getUnixTime(date));
  })] });
}
function daysToMonthWeeks(fromDate, toDate, options) {
  var toWeek = (options === null || options === void 0 ? void 0 : options.ISOWeek) ? endOfISOWeek(toDate) : endOfWeek(toDate, options);
  var fromWeek = (options === null || options === void 0 ? void 0 : options.ISOWeek) ? startOfISOWeek(fromDate) : startOfWeek(fromDate, options);
  var nOfDays = differenceInCalendarDays(toWeek, fromWeek);
  var days = [];
  for (var i = 0; i <= nOfDays; i++) {
    days.push(addDays(fromWeek, i));
  }
  var weeksInMonth = days.reduce(function(result, date) {
    var weekNumber = (options === null || options === void 0 ? void 0 : options.ISOWeek) ? getISOWeek(date) : getWeek(date, options);
    var existingWeek = result.find(function(value) {
      return value.weekNumber === weekNumber;
    });
    if (existingWeek) {
      existingWeek.dates.push(date);
      return result;
    }
    result.push({
      weekNumber,
      dates: [date]
    });
    return result;
  }, []);
  return weeksInMonth;
}
function getMonthWeeks(month, options) {
  var weeksInMonth = daysToMonthWeeks(startOfMonth(month), endOfMonth(month), options);
  if (options === null || options === void 0 ? void 0 : options.useFixedWeeks) {
    var nrOfMonthWeeks = getWeeksInMonth(month, options);
    if (nrOfMonthWeeks < 6) {
      var lastWeek = weeksInMonth[weeksInMonth.length - 1];
      var lastDate = lastWeek.dates[lastWeek.dates.length - 1];
      var toDate = addWeeks(lastDate, 6 - nrOfMonthWeeks);
      var extraWeeks = daysToMonthWeeks(addWeeks(lastDate, 1), toDate, options);
      weeksInMonth.push.apply(weeksInMonth, extraWeeks);
    }
  }
  return weeksInMonth;
}
function Table(props) {
  var _a, _b, _c19;
  var _d = useDayPicker(), locale = _d.locale, classNames = _d.classNames, styles = _d.styles, hideHead = _d.hideHead, fixedWeeks = _d.fixedWeeks, components = _d.components, weekStartsOn = _d.weekStartsOn, firstWeekContainsDate = _d.firstWeekContainsDate, ISOWeek = _d.ISOWeek;
  var weeks = getMonthWeeks(props.displayMonth, {
    useFixedWeeks: Boolean(fixedWeeks),
    ISOWeek,
    locale,
    weekStartsOn,
    firstWeekContainsDate
  });
  var HeadComponent = (_a = components === null || components === void 0 ? void 0 : components.Head) !== null && _a !== void 0 ? _a : Head;
  var RowComponent = (_b = components === null || components === void 0 ? void 0 : components.Row) !== null && _b !== void 0 ? _b : Row;
  var FooterComponent = (_c19 = components === null || components === void 0 ? void 0 : components.Footer) !== null && _c19 !== void 0 ? _c19 : Footer;
  return (0, import_jsx_runtime.jsxs)("table", { id: props.id, className: classNames.table, style: styles.table, role: "grid", "aria-labelledby": props["aria-labelledby"], children: [!hideHead && (0, import_jsx_runtime.jsx)(HeadComponent, {}), (0, import_jsx_runtime.jsx)("tbody", { className: classNames.tbody, style: styles.tbody, children: weeks.map(function(week) {
    return (0, import_jsx_runtime.jsx)(RowComponent, { displayMonth: props.displayMonth, dates: week.dates, weekNumber: week.weekNumber }, week.weekNumber);
  }) }), (0, import_jsx_runtime.jsx)(FooterComponent, { displayMonth: props.displayMonth })] });
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var useIsomorphicLayoutEffect = canUseDOM() ? import_react.useLayoutEffect : import_react.useEffect;
var serverHandoffComplete = false;
var id = 0;
function genId() {
  return "react-day-picker-".concat(++id);
}
function useId(providedId) {
  var _a;
  var initialId = providedId !== null && providedId !== void 0 ? providedId : serverHandoffComplete ? genId() : null;
  var _b = (0, import_react.useState)(initialId), id2 = _b[0], setId = _b[1];
  useIsomorphicLayoutEffect(function() {
    if (id2 === null) {
      setId(genId());
    }
  }, []);
  (0, import_react.useEffect)(function() {
    if (serverHandoffComplete === false) {
      serverHandoffComplete = true;
    }
  }, []);
  return (_a = providedId !== null && providedId !== void 0 ? providedId : id2) !== null && _a !== void 0 ? _a : void 0;
}
function Month(props) {
  var _a;
  var _b;
  var dayPicker = useDayPicker();
  var dir = dayPicker.dir, classNames = dayPicker.classNames, styles = dayPicker.styles, components = dayPicker.components;
  var displayMonths = useNavigation2().displayMonths;
  var captionId = useId(dayPicker.id ? "".concat(dayPicker.id, "-").concat(props.displayIndex) : void 0);
  var tableId = dayPicker.id ? "".concat(dayPicker.id, "-grid-").concat(props.displayIndex) : void 0;
  var className = [classNames.month];
  var style = styles.month;
  var isStart = props.displayIndex === 0;
  var isEnd = props.displayIndex === displayMonths.length - 1;
  var isCenter = !isStart && !isEnd;
  if (dir === "rtl") {
    _a = [isStart, isEnd], isEnd = _a[0], isStart = _a[1];
  }
  if (isStart) {
    className.push(classNames.caption_start);
    style = __assign(__assign({}, style), styles.caption_start);
  }
  if (isEnd) {
    className.push(classNames.caption_end);
    style = __assign(__assign({}, style), styles.caption_end);
  }
  if (isCenter) {
    className.push(classNames.caption_between);
    style = __assign(__assign({}, style), styles.caption_between);
  }
  var CaptionComponent = (_b = components === null || components === void 0 ? void 0 : components.Caption) !== null && _b !== void 0 ? _b : Caption;
  return (0, import_jsx_runtime.jsxs)("div", { className: className.join(" "), style, children: [(0, import_jsx_runtime.jsx)(CaptionComponent, { id: captionId, displayMonth: props.displayMonth, displayIndex: props.displayIndex }), (0, import_jsx_runtime.jsx)(Table, { id: tableId, "aria-labelledby": captionId, displayMonth: props.displayMonth })] }, props.displayIndex);
}
function Months(props) {
  var _a = useDayPicker(), classNames = _a.classNames, styles = _a.styles;
  return (0, import_jsx_runtime.jsx)("div", { className: classNames.months, style: styles.months, children: props.children });
}
function Root(_a) {
  var _b, _c19;
  var initialProps = _a.initialProps;
  var dayPicker = useDayPicker();
  var focusContext = useFocusContext();
  var navigation = useNavigation2();
  var _d = (0, import_react.useState)(false), hasInitialFocus = _d[0], setHasInitialFocus = _d[1];
  (0, import_react.useEffect)(function() {
    if (!dayPicker.initialFocus)
      return;
    if (!focusContext.focusTarget)
      return;
    if (hasInitialFocus)
      return;
    focusContext.focus(focusContext.focusTarget);
    setHasInitialFocus(true);
  }, [
    dayPicker.initialFocus,
    hasInitialFocus,
    focusContext.focus,
    focusContext.focusTarget,
    focusContext
  ]);
  var classNames = [dayPicker.classNames.root, dayPicker.className];
  if (dayPicker.numberOfMonths > 1) {
    classNames.push(dayPicker.classNames.multiple_months);
  }
  if (dayPicker.showWeekNumber) {
    classNames.push(dayPicker.classNames.with_weeknumber);
  }
  var style = __assign(__assign({}, dayPicker.styles.root), dayPicker.style);
  var dataAttributes = Object.keys(initialProps).filter(function(key) {
    return key.startsWith("data-");
  }).reduce(function(attrs, key) {
    var _a2;
    return __assign(__assign({}, attrs), (_a2 = {}, _a2[key] = initialProps[key], _a2));
  }, {});
  var MonthsComponent = (_c19 = (_b = initialProps.components) === null || _b === void 0 ? void 0 : _b.Months) !== null && _c19 !== void 0 ? _c19 : Months;
  return (0, import_jsx_runtime.jsx)("div", __assign({ className: classNames.join(" "), style, dir: dayPicker.dir, id: dayPicker.id, nonce: initialProps.nonce, title: initialProps.title, lang: initialProps.lang }, dataAttributes, { children: (0, import_jsx_runtime.jsx)(MonthsComponent, { children: navigation.displayMonths.map(function(month, i) {
    return (0, import_jsx_runtime.jsx)(Month, { displayIndex: i, displayMonth: month }, i);
  }) }) }));
}
function RootProvider(props) {
  var children = props.children, initialProps = __rest(props, ["children"]);
  return (0, import_jsx_runtime.jsx)(DayPickerProvider, { initialProps, children: (0, import_jsx_runtime.jsx)(NavigationProvider, { children: (0, import_jsx_runtime.jsx)(SelectSingleProvider, { initialProps, children: (0, import_jsx_runtime.jsx)(SelectMultipleProvider, { initialProps, children: (0, import_jsx_runtime.jsx)(SelectRangeProvider, { initialProps, children: (0, import_jsx_runtime.jsx)(ModifiersProvider, { children: (0, import_jsx_runtime.jsx)(FocusProvider, { children }) }) }) }) }) }) });
}
function DayPicker(props) {
  return (0, import_jsx_runtime.jsx)(RootProvider, __assign({}, props, { children: (0, import_jsx_runtime.jsx)(Root, { initialProps: props }) }));
}

// app/components/ui/select.tsx
var React9 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-select/dist/index.mjs
var import_react19 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/number/dist/index.mjs
function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min3, max3]) {
  return Math.min(max3, Math.max(min3, value));
}

// node_modules/@radix-ui/primitive/dist/index.mjs
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/@radix-ui/react-collection/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-context/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ (0, import_react2.createContext)(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = (0, import_react2.useMemo)(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0, import_react2.createElement)(Context.Provider, {
        value
      }, children);
    }
    function useContext2(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = (0, import_react2.useContext)(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext2
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ (0, import_react2.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react2.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae1109,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react2.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/@radix-ui/react-collection/dist/index.mjs
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  });
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = import_react3.default.useRef(null);
    const itemMap = import_react3.default.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ import_react3.default.createElement(CollectionProviderImpl, {
      scope,
      itemMap,
      collectionRef: ref
    }, children);
  };
  /* @__PURE__ */ Object.assign(CollectionProvider, {
    displayName: PROVIDER_NAME
  });
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = /* @__PURE__ */ import_react3.default.forwardRef((props, forwardedRef) => {
    const { scope, children } = props;
    const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
    return /* @__PURE__ */ import_react3.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      ref: composedRefs
    }, children);
  });
  /* @__PURE__ */ Object.assign(CollectionSlot, {
    displayName: COLLECTION_SLOT_NAME
  });
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = /* @__PURE__ */ import_react3.default.forwardRef((props, forwardedRef) => {
    const { scope, children, ...itemData } = props;
    const ref = import_react3.default.useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const context = useCollectionContext(ITEM_SLOT_NAME, scope);
    import_react3.default.useEffect(() => {
      context.itemMap.set(ref, {
        ref,
        ...itemData
      });
      return () => void context.itemMap.delete(ref);
    });
    return /* @__PURE__ */ import_react3.default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
      [ITEM_DATA_ATTR]: "",
      ref: composedRefs
    }, children);
  });
  /* @__PURE__ */ Object.assign(CollectionItemSlot, {
    displayName: ITEM_SLOT_NAME
  });
  function useCollection(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = import_react3.default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode)
        return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [
      context.collectionRef,
      context.itemMap
    ]);
    return getItems;
  }
  return [
    {
      Provider: CollectionProvider,
      Slot: CollectionSlot,
      ItemSlot: CollectionItemSlot
    },
    useCollection,
    createCollectionScope
  ];
}

// node_modules/@radix-ui/react-direction/dist/index.mjs
var import_react4 = __toESM(require_react(), 1);
var $f631663db3294ace$var$DirectionContext = /* @__PURE__ */ (0, import_react4.createContext)(void 0);
function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
  const globalDir = (0, import_react4.useContext)($f631663db3294ace$var$DirectionContext);
  return localDir || globalDir || "ltr";
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = (0, import_react5.useRef)(callback);
  (0, import_react5.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react5.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var import_react6 = __toESM(require_react(), 1);
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  (0, import_react6.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown,
    ownerDocument
  ]);
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ (0, import_react7.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
  var _node$ownerDocument;
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react7.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react7.useState)(null);
  const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
  const [, force] = (0, import_react7.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index2 = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  }, ownerDocument);
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index2 === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  }, ownerDocument);
  (0, import_react7.useEffect)(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
        ownerDocument.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    ownerDocument,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react7.useEffect)(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react7.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ (0, import_react7.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react7.useRef)(false);
  const handleClickRef = (0, import_react7.useRef)(() => {
  });
  (0, import_react7.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent();
      } else
        ownerDocument.removeEventListener("click", handleClickRef.current);
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [
    ownerDocument,
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react7.useRef)(false);
  (0, import_react7.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [
    ownerDocument,
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var import_react8 = __toESM(require_react(), 1);
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  (0, import_react8.useEffect)(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var import_react9 = __toESM(require_react(), 1);
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = (0, import_react9.useState)(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = (0, import_react9.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = (0, import_react9.useRef)({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  (0, import_react9.useEffect)(() => {
    if (trapped) {
      let handleFocusIn = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut = function(event) {
        if (focusScope.paused || !container1)
          return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null)
          return;
        if (!container1.contains(relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleMutations = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body)
          return;
        for (const mutation of mutations)
          if (mutation.removedNodes.length > 0)
            $d3863c46a17e8a28$var$focus(container1);
      };
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);
      const mutationObserver = new MutationObserver(handleMutations);
      if (container1)
        mutationObserver.observe(container1, {
          childList: true,
          subtree: true
        });
      return () => {
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
        mutationObserver.disconnect();
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  (0, import_react9.useEffect)(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = (0, import_react9.useCallback)((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ (0, import_react9.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1)
    updatedArray.splice(index2, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}

// node_modules/@radix-ui/react-id/dist/index.mjs
var $2AODx$react = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var import_react10 = __toESM(require_react(), 1);
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react10.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-id/dist/index.mjs
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id2, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id2 ? `radix-${id2}` : "");
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max2(start, min2(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min2(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min2(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max3 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(min$1, center, max3);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max3 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min2(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min2(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        availableWidth = alignment || noShift ? min2(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        availableHeight = alignment || noShift ? min2(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max2(overflow.left, 0);
        const xMax = max2(overflow.right, 0);
        const yMin = max2(overflow.top, 0);
        const yMax = max2(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max2(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max2(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max2(0, min2(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react11.useLayoutEffect : import_react11.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React.useState(null);
  const [_floating, _setFloating] = React.useState(null);
  const setReference = React.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const dataRef = React.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var limitShift3 = (options, deps) => ({
  ...limitShift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});
var hide3 = (options, deps) => ({
  ...hide2(options),
  options: [options, deps]
});
var arrow3 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var import_react12 = __toESM(require_react(), 1);
function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
  const [size4, setSize] = (0, import_react12.useState)(void 0);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries))
          return;
        if (!entries.length)
          return;
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else
      setSize(void 0);
  }, [
    element
  ]);
  return size4;
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var $cf1ac5d9fe0e8206$var$POPPER_NAME = "Popper";
var [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
var [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
var $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = (0, import_react13.useState)(null);
  return /* @__PURE__ */ (0, import_react13.createElement)($cf1ac5d9fe0e8206$var$PopperProvider, {
    scope: __scopePopper,
    anchor,
    onAnchorChange: setAnchor
  }, children);
};
var $cf1ac5d9fe0e8206$var$ANCHOR_NAME = "PopperAnchor";
var $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /* @__PURE__ */ (0, import_react13.forwardRef)((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
  const ref = (0, import_react13.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react13.useEffect)(() => {
    context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
  });
  return virtualRef ? null : /* @__PURE__ */ (0, import_react13.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, anchorProps, {
    ref: composedRefs
  }));
});
var $cf1ac5d9fe0e8206$var$CONTENT_NAME = "PopperContent";
var [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
var $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /* @__PURE__ */ (0, import_react13.forwardRef)((props, forwardedRef) => {
  var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
  const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
  const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
  const [content, setContent] = (0, import_react13.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [arrow4, setArrow] = (0, import_react13.useState)(null);
  const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow4);
  const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
  const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
  const desiredPlacement = side + (align !== "center" ? "-" + align : "");
  const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...collisionPaddingProp
  };
  const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
    collisionBoundary
  ];
  const hasExplicitBoundaries = boundary.length > 0;
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
  };
  const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: desiredPlacement,
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: updatePositionStrategy === "always"
      });
      return cleanup;
    },
    elements: {
      reference: context.anchor
    },
    middleware: [
      offset3({
        mainAxis: sideOffset + arrowHeight,
        alignmentAxis: alignOffset
      }),
      avoidCollisions && shift3({
        mainAxis: true,
        crossAxis: false,
        limiter: sticky === "partial" ? limitShift3() : void 0,
        ...detectOverflowOptions
      }),
      avoidCollisions && flip3({
        ...detectOverflowOptions
      }),
      size3({
        ...detectOverflowOptions,
        apply: ({ elements, rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          const contentStyle = elements.floating.style;
          contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
          contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
          contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
          contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
        }
      }),
      arrow4 && arrow3({
        element: arrow4,
        padding: arrowPadding
      }),
      $cf1ac5d9fe0e8206$var$transformOrigin({
        arrowWidth,
        arrowHeight
      }),
      hideWhenDetached && hide3({
        strategy: "referenceHidden",
        ...detectOverflowOptions
      })
    ]
  });
  const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
  const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (isPositioned)
      handlePlaced === null || handlePlaced === void 0 || handlePlaced();
  }, [
    isPositioned,
    handlePlaced
  ]);
  const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
  const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
  const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
  const [contentZIndex, setContentZIndex] = (0, import_react13.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  return /* @__PURE__ */ (0, import_react13.createElement)("div", {
    ref: refs.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...floatingStyles,
      transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
        (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
      ].join(" ")
    },
    dir: props.dir
  }, /* @__PURE__ */ (0, import_react13.createElement)($cf1ac5d9fe0e8206$var$PopperContentProvider, {
    scope: __scopePopper,
    placedSide,
    onArrowChange: setArrow,
    arrowX,
    arrowY,
    shouldHideArrow: cannotCenterArrow
  }, /* @__PURE__ */ (0, import_react13.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-side": placedSide,
    "data-align": placedAlign
  }, contentProps, {
    ref: composedRefs,
    style: {
      ...contentProps.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: !isPositioned ? "none" : void 0,
      // hide the content if using the hide middleware and should be hidden
      opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : void 0
    }
  }))));
});
function $cf1ac5d9fe0e8206$var$isNotNull(value) {
  return value !== null;
}
var $cf1ac5d9fe0e8206$var$transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const noArrowAlign = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[placedAlign];
    const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
    const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return {
      data: {
        x,
        y
      }
    };
  }
});
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [
    side,
    align
  ];
}
var $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
var $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
var $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;

// node_modules/@radix-ui/react-portal/dist/index.mjs
var import_react14 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);
var $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? /* @__PURE__ */ import_react_dom2.default.createPortal(/* @__PURE__ */ (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var import_react15 = __toESM(require_react(), 1);
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = (0, import_react15.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react15.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react15.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  (0, import_react15.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react16 = __toESM(require_react(), 1);
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = (0, import_react16.useRef)({
    value,
    previous: value
  });
  return (0, import_react16.useMemo)(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var import_react17 = __toESM(require_react(), 1);
var $ea1ef594cf570d83$export$439d29a4e110a164 = /* @__PURE__ */ (0, import_react17.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react17.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, props, {
    ref: forwardedRef,
    style: {
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...props.style
    }
  }));
});

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/tslib/tslib.es6.mjs
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
function __rest2(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray2(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React8 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React4 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react18 = __toESM(require_react());
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react18.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React2 = __toESM(require_react());
var useIsomorphicLayoutEffect2 = typeof window !== "undefined" ? React2.useLayoutEffect : React2.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect2(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign2({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/exports.js
var React3 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest2(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React3.createElement(Target, __assign2({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React4.forwardRef(function(props, parentRef) {
  var ref = React4.useRef(null);
  var _a = React4.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest2(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign2(__assign2({}, rest), callbacks);
  return React4.createElement(
    React4.Fragment,
    null,
    enabled && React4.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React4.cloneElement(React4.Children.only(children), __assign2(__assign2({}, containerProps), { ref: containerRef })) : React4.createElement(Container, __assign2({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React7 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React6 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React5 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React5.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse2 = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse2(left), parse2(top), parse2(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React6.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React6.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React6.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id2) {
  return "\n  .block-interactivity-".concat(id2, " {pointer-events: none;}\n  .allow-interactivity-").concat(id2, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React7.useRef([]);
  var touchStartRef = React7.useRef([0, 0]);
  var activeAxis = React7.useRef();
  var id2 = React7.useState(idCounter++)[0];
  var Style2 = React7.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React7.useRef(props);
  React7.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React7.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id2));
      var allow_1 = __spreadArray2([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id2));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id2));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id2));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React7.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React7.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React7.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React7.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React7.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React7.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React7.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React7.createElement(
    React7.Fragment,
    null,
    inert ? React7.createElement(Style2, { styles: generateStyle(id2) }) : null,
    removeScrollBar ? React7.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React8.forwardRef(function(props, ref) {
  return React8.createElement(RemoveScroll, __assign2({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/@radix-ui/react-select/dist/index.mjs
var $cc7e05a45900e73f$var$OPEN_KEYS = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
];
var $cc7e05a45900e73f$var$SELECTION_KEYS = [
  " ",
  "Enter"
];
var $cc7e05a45900e73f$var$SELECT_NAME = "Select";
var [$cc7e05a45900e73f$var$Collection, $cc7e05a45900e73f$var$useCollection, $cc7e05a45900e73f$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($cc7e05a45900e73f$var$SELECT_NAME);
var [$cc7e05a45900e73f$var$createSelectContext, $cc7e05a45900e73f$export$286727a75dc039bd] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cc7e05a45900e73f$var$SELECT_NAME, [
  $cc7e05a45900e73f$var$createCollectionScope,
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $cc7e05a45900e73f$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var [$cc7e05a45900e73f$var$SelectProvider, $cc7e05a45900e73f$var$useSelectContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
var [$cc7e05a45900e73f$var$SelectNativeOptionsProvider, $cc7e05a45900e73f$var$useSelectNativeOptionsContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
var $cc7e05a45900e73f$export$ef9b1a59e592288f = (props) => {
  const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  const [trigger, setTrigger] = (0, import_react19.useState)(null);
  const [valueNode, setValueNode] = (0, import_react19.useState)(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = (0, import_react19.useState)(false);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const triggerPointerDownPosRef = (0, import_react19.useRef)(null);
  const isFormControl = trigger ? Boolean(trigger.closest("form")) : true;
  const [nativeOptionsSet, setNativeOptionsSet] = (0, import_react19.useState)(/* @__PURE__ */ new Set());
  const nativeSelectKey = Array.from(nativeOptionsSet).map(
    (option) => option.props.value
  ).join(";");
  return /* @__PURE__ */ (0, import_react19.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$SelectProvider, {
    required,
    scope: __scopeSelect,
    trigger,
    onTriggerChange: setTrigger,
    valueNode,
    onValueNodeChange: setValueNode,
    valueNodeHasChildren,
    onValueNodeHasChildrenChange: setValueNodeHasChildren,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    value,
    onValueChange: setValue,
    open,
    onOpenChange: setOpen,
    dir: direction,
    triggerPointerDownPosRef,
    disabled
  }, /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$Collection.Provider, {
    scope: __scopeSelect
  }, /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$SelectNativeOptionsProvider, {
    scope: props.__scopeSelect,
    onNativeOptionAdd: (0, import_react19.useCallback)((option) => {
      setNativeOptionsSet(
        (prev) => new Set(prev).add(option)
      );
    }, []),
    onNativeOptionRemove: (0, import_react19.useCallback)((option) => {
      setNativeOptionsSet((prev) => {
        const optionsSet = new Set(prev);
        optionsSet.delete(option);
        return optionsSet;
      });
    }, [])
  }, children)), isFormControl ? /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$BubbleSelect, {
    key: nativeSelectKey,
    "aria-hidden": true,
    required,
    tabIndex: -1,
    name,
    autoComplete,
    value,
    onChange: (event) => setValue(event.target.value),
    disabled
  }, value === void 0 ? /* @__PURE__ */ (0, import_react19.createElement)("option", {
    value: ""
  }) : null, Array.from(nativeOptionsSet)) : null));
};
var $cc7e05a45900e73f$var$TRIGGER_NAME = "SelectTrigger";
var $cc7e05a45900e73f$export$3ac1e88a1c0b9f1 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, disabled = false, ...triggerProps } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$TRIGGER_NAME, __scopeSelect);
  const isDisabled = context.disabled || disabled;
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onTriggerChange);
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const [searchRef, handleTypeaheadSearch, resetTypeahead] = $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
    const enabledItems = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = enabledItems.find(
      (item) => item.value === context.value
    );
    const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
    if (nextItem !== void 0)
      context.onValueChange(nextItem.value);
  });
  const handleOpen = () => {
    if (!isDisabled) {
      context.onOpenChange(true);
      resetTypeahead();
    }
  };
  return /* @__PURE__ */ (0, import_react19.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "combobox",
    "aria-controls": context.contentId,
    "aria-expanded": context.open,
    "aria-required": context.required,
    "aria-autocomplete": "none",
    dir: context.dir,
    "data-state": context.open ? "open" : "closed",
    disabled: isDisabled,
    "data-disabled": isDisabled ? "" : void 0,
    "data-placeholder": $cc7e05a45900e73f$var$shouldShowPlaceholder(context.value) ? "" : void 0
  }, triggerProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onClick, (event) => {
      event.currentTarget.focus();
    }),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onPointerDown, (event) => {
      const target = event.target;
      if (target.hasPointerCapture(event.pointerId))
        target.releasePointerCapture(event.pointerId);
      if (event.button === 0 && event.ctrlKey === false) {
        handleOpen();
        context.triggerPointerDownPosRef.current = {
          x: Math.round(event.pageX),
          y: Math.round(event.pageY)
        };
        event.preventDefault();
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onKeyDown, (event) => {
      const isTypingAhead = searchRef.current !== "";
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      if (!isModifierKey && event.key.length === 1)
        handleTypeaheadSearch(event.key);
      if (isTypingAhead && event.key === " ")
        return;
      if ($cc7e05a45900e73f$var$OPEN_KEYS.includes(event.key)) {
        handleOpen();
        event.preventDefault();
      }
    })
  })));
});
var $cc7e05a45900e73f$export$99b400cabb58c515 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, children, ...iconProps } = props;
  return /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "aria-hidden": true
  }, iconProps, {
    ref: forwardedRef
  }), children || "\u25BC");
});
var $cc7e05a45900e73f$export$b2af6c9944296213 = (props) => {
  return /* @__PURE__ */ (0, import_react19.createElement)($f1701beae083dbae$export$602eac185826482c, _extends({
    asChild: true
  }, props));
};
var $cc7e05a45900e73f$var$CONTENT_NAME = "SelectContent";
var $cc7e05a45900e73f$export$c973a4b3cb86a03d = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, props.__scopeSelect);
  const [fragment, setFragment] = (0, import_react19.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    setFragment(new DocumentFragment());
  }, []);
  if (!context.open) {
    const frag = fragment;
    return frag ? /* @__PURE__ */ (0, import_react_dom3.createPortal)(/* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$SelectContentProvider, {
      scope: props.__scopeSelect
    }, /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$Collection.Slot, {
      scope: props.__scopeSelect
    }, /* @__PURE__ */ (0, import_react19.createElement)("div", null, props.children))), frag) : null;
  }
  return /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$SelectContentImpl, _extends({}, props, {
    ref: forwardedRef
  }));
});
var $cc7e05a45900e73f$var$CONTENT_MARGIN = 10;
var [$cc7e05a45900e73f$var$SelectContentProvider, $cc7e05a45900e73f$var$useSelectContentContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME);
var $cc7e05a45900e73f$var$SelectContentImpl = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const {
    __scopeSelect,
    position = "item-aligned",
    onCloseAutoFocus,
    onEscapeKeyDown,
    onPointerDownOutside,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions,
    //
    ...contentProps
  } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const [content, setContent] = (0, import_react19.useState)(null);
  const [viewport, setViewport] = (0, import_react19.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const [selectedItem, setSelectedItem] = (0, import_react19.useState)(null);
  const [selectedItemText, setSelectedItemText] = (0, import_react19.useState)(null);
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const [isPositioned, setIsPositioned] = (0, import_react19.useState)(false);
  const firstValidItemFoundRef = (0, import_react19.useRef)(false);
  (0, import_react19.useEffect)(() => {
    if (content)
      return hideOthers(content);
  }, [
    content
  ]);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  const focusFirst = (0, import_react19.useCallback)((candidates) => {
    const [firstItem, ...restItems] = getItems().map(
      (item) => item.ref.current
    );
    const [lastItem] = restItems.slice(-1);
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
        return;
      candidate === null || candidate === void 0 || candidate.scrollIntoView({
        block: "nearest"
      });
      if (candidate === firstItem && viewport)
        viewport.scrollTop = 0;
      if (candidate === lastItem && viewport)
        viewport.scrollTop = viewport.scrollHeight;
      candidate === null || candidate === void 0 || candidate.focus();
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
        return;
    }
  }, [
    getItems,
    viewport
  ]);
  const focusSelectedItem = (0, import_react19.useCallback)(
    () => focusFirst([
      selectedItem,
      content
    ]),
    [
      focusFirst,
      selectedItem,
      content
    ]
  );
  (0, import_react19.useEffect)(() => {
    if (isPositioned)
      focusSelectedItem();
  }, [
    isPositioned,
    focusSelectedItem
  ]);
  const { onOpenChange, triggerPointerDownPosRef } = context;
  (0, import_react19.useEffect)(() => {
    if (content) {
      let pointerMoveDelta = {
        x: 0,
        y: 0
      };
      const handlePointerMove = (event) => {
        var _triggerPointerDownPo, _triggerPointerDownPo2, _triggerPointerDownPo3, _triggerPointerDownPo4;
        pointerMoveDelta = {
          x: Math.abs(Math.round(event.pageX) - ((_triggerPointerDownPo = (_triggerPointerDownPo2 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo2 === void 0 ? void 0 : _triggerPointerDownPo2.x) !== null && _triggerPointerDownPo !== void 0 ? _triggerPointerDownPo : 0)),
          y: Math.abs(Math.round(event.pageY) - ((_triggerPointerDownPo3 = (_triggerPointerDownPo4 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo4 === void 0 ? void 0 : _triggerPointerDownPo4.y) !== null && _triggerPointerDownPo3 !== void 0 ? _triggerPointerDownPo3 : 0))
        };
      };
      const handlePointerUp = (event) => {
        if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10)
          event.preventDefault();
        else if (!content.contains(event.target))
          onOpenChange(false);
        document.removeEventListener("pointermove", handlePointerMove);
        triggerPointerDownPosRef.current = null;
      };
      if (triggerPointerDownPosRef.current !== null) {
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp, {
          capture: true,
          once: true
        });
      }
      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp, {
          capture: true
        });
      };
    }
  }, [
    content,
    onOpenChange,
    triggerPointerDownPosRef
  ]);
  (0, import_react19.useEffect)(() => {
    const close = () => onOpenChange(false);
    window.addEventListener("blur", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("blur", close);
      window.removeEventListener("resize", close);
    };
  }, [
    onOpenChange
  ]);
  const [searchRef, handleTypeaheadSearch] = $cc7e05a45900e73f$var$useTypeaheadSearch((search) => {
    const enabledItems = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = enabledItems.find(
      (item) => item.ref.current === document.activeElement
    );
    const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
    if (nextItem)
      setTimeout(
        () => nextItem.ref.current.focus()
      );
  });
  const itemRefCallback = (0, import_react19.useCallback)((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem) {
      setSelectedItem(node);
      if (isFirstValidItem)
        firstValidItemFoundRef.current = true;
    }
  }, [
    context.value
  ]);
  const handleItemLeave = (0, import_react19.useCallback)(
    () => content === null || content === void 0 ? void 0 : content.focus(),
    [
      content
    ]
  );
  const itemTextRefCallback = (0, import_react19.useCallback)((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem)
      setSelectedItemText(node);
  }, [
    context.value
  ]);
  const SelectPosition = position === "popper" ? $cc7e05a45900e73f$var$SelectPopperPosition : $cc7e05a45900e73f$var$SelectItemAlignedPosition;
  const popperContentProps = SelectPosition === $cc7e05a45900e73f$var$SelectPopperPosition ? {
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions
  } : {};
  return /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$SelectContentProvider, {
    scope: __scopeSelect,
    content,
    viewport,
    onViewportChange: setViewport,
    itemRefCallback,
    selectedItem,
    onItemLeave: handleItemLeave,
    itemTextRefCallback,
    focusSelectedItem,
    selectedItemText,
    position,
    isPositioned,
    searchRef
  }, /* @__PURE__ */ (0, import_react19.createElement)(Combination_default, {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  }, /* @__PURE__ */ (0, import_react19.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    trapped: context.open,
    onMountAutoFocus: (event) => {
      event.preventDefault();
    },
    onUnmountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onCloseAutoFocus, (event) => {
      var _context$trigger;
      (_context$trigger = context.trigger) === null || _context$trigger === void 0 || _context$trigger.focus({
        preventScroll: true
      });
      event.preventDefault();
    })
  }, /* @__PURE__ */ (0, import_react19.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents: true,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside: (event) => event.preventDefault(),
    onDismiss: () => context.onOpenChange(false)
  }, /* @__PURE__ */ (0, import_react19.createElement)(SelectPosition, _extends({
    role: "listbox",
    id: context.contentId,
    "data-state": context.open ? "open" : "closed",
    dir: context.dir,
    onContextMenu: (event) => event.preventDefault()
  }, contentProps, popperContentProps, {
    onPlaced: () => setIsPositioned(true),
    ref: composedRefs,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...contentProps.style
    },
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      if (event.key === "Tab")
        event.preventDefault();
      if (!isModifierKey && event.key.length === 1)
        handleTypeaheadSearch(event.key);
      if ([
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(event.key)) {
        const items = getItems().filter(
          (item) => !item.disabled
        );
        let candidateNodes = items.map(
          (item) => item.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(event.key))
          candidateNodes = candidateNodes.slice().reverse();
        if ([
          "ArrowUp",
          "ArrowDown"
        ].includes(event.key)) {
          const currentElement = event.target;
          const currentIndex = candidateNodes.indexOf(currentElement);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => focusFirst(candidateNodes)
        );
        event.preventDefault();
      }
    })
  }))))));
});
var $cc7e05a45900e73f$var$SelectItemAlignedPosition = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, onPlaced, ...popperProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
  const [contentWrapper, setContentWrapper] = (0, import_react19.useState)(null);
  const [content, setContent] = (0, import_react19.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContent(node)
  );
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const shouldExpandOnScrollRef = (0, import_react19.useRef)(false);
  const shouldRepositionRef = (0, import_react19.useRef)(true);
  const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
  const position = (0, import_react19.useCallback)(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
        const clampedLeft = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(left, [
          $cc7e05a45900e73f$var$CONTENT_MARGIN,
          rightEdge - contentWidth
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
        const clampedRight = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(right, [
          $cc7e05a45900e73f$var$CONTENT_MARGIN,
          leftEdge - contentWidth
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - $cc7e05a45900e73f$var$CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${$cc7e05a45900e73f$var$CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced === null || onPlaced === void 0 || onPlaced();
      requestAnimationFrame(
        () => shouldExpandOnScrollRef.current = true
      );
    }
  }, [
    getItems,
    context.trigger,
    context.valueNode,
    contentWrapper,
    content,
    viewport,
    selectedItem,
    selectedItemText,
    context.dir,
    onPlaced
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(
    () => position(),
    [
      position
    ]
  );
  const [contentZIndex, setContentZIndex] = (0, import_react19.useState)();
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (content)
      setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [
    content
  ]);
  const handleScrollButtonChange = (0, import_react19.useCallback)((node) => {
    if (node && shouldRepositionRef.current === true) {
      position();
      focusSelectedItem === null || focusSelectedItem === void 0 || focusSelectedItem();
      shouldRepositionRef.current = false;
    }
  }, [
    position,
    focusSelectedItem
  ]);
  return /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$SelectViewportProvider, {
    scope: __scopeSelect,
    contentWrapper,
    shouldExpandOnScrollRef,
    onScrollButtonChange: handleScrollButtonChange
  }, /* @__PURE__ */ (0, import_react19.createElement)("div", {
    ref: setContentWrapper,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: contentZIndex
    }
  }, /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, popperProps, {
    ref: composedRefs,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...popperProps.style
    }
  }))));
});
var $cc7e05a45900e73f$var$SelectPopperPosition = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, align = "start", collisionPadding = $cc7e05a45900e73f$var$CONTENT_MARGIN, ...popperProps } = props;
  const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
  return /* @__PURE__ */ (0, import_react19.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({}, popperScope, popperProps, {
    ref: forwardedRef,
    align,
    collisionPadding,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...popperProps.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
var [$cc7e05a45900e73f$var$SelectViewportProvider, $cc7e05a45900e73f$var$useSelectViewportContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, {});
var $cc7e05a45900e73f$var$VIEWPORT_NAME = "SelectViewport";
var $cc7e05a45900e73f$export$9ed6e7b40248d36d = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...viewportProps } = props;
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
  const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentContext.onViewportChange);
  const prevScrollTopRef = (0, import_react19.useRef)(0);
  return /* @__PURE__ */ (0, import_react19.createElement)(import_react19.Fragment, null, /* @__PURE__ */ (0, import_react19.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
    }
  }), /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$Collection.Slot, {
    scope: __scopeSelect
  }, /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, viewportProps, {
    ref: composedRefs,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...viewportProps.style
    },
    onScroll: $e42e1063c40fb3ef$export$b9ecd428b558ff10(viewportProps.onScroll, (event) => {
      const viewport = event.currentTarget;
      const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
      if (shouldExpandOnScrollRef !== null && shouldExpandOnScrollRef !== void 0 && shouldExpandOnScrollRef.current && contentWrapper) {
        const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
        if (scrolledBy > 0) {
          const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
          const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
          const cssHeight = parseFloat(contentWrapper.style.height);
          const prevHeight = Math.max(cssMinHeight, cssHeight);
          if (prevHeight < availableHeight) {
            const nextHeight = prevHeight + scrolledBy;
            const clampedNextHeight = Math.min(availableHeight, nextHeight);
            const heightDiff = nextHeight - clampedNextHeight;
            contentWrapper.style.height = clampedNextHeight + "px";
            if (contentWrapper.style.bottom === "0px") {
              viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
              contentWrapper.style.justifyContent = "flex-end";
            }
          }
        }
      }
      prevScrollTopRef.current = viewport.scrollTop;
    })
  }))));
});
var $cc7e05a45900e73f$var$GROUP_NAME = "SelectGroup";
var [$cc7e05a45900e73f$var$SelectGroupContextProvider, $cc7e05a45900e73f$var$useSelectGroupContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$GROUP_NAME);
var $cc7e05a45900e73f$var$LABEL_NAME = "SelectLabel";
var $cc7e05a45900e73f$export$f67338d29bd972f8 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...labelProps } = props;
  const groupContext = $cc7e05a45900e73f$var$useSelectGroupContext($cc7e05a45900e73f$var$LABEL_NAME, __scopeSelect);
  return /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    id: groupContext.id
  }, labelProps, {
    ref: forwardedRef
  }));
});
var $cc7e05a45900e73f$var$ITEM_NAME = "SelectItem";
var [$cc7e05a45900e73f$var$SelectItemContextProvider, $cc7e05a45900e73f$var$useSelectItemContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$ITEM_NAME);
var $cc7e05a45900e73f$export$13ef48a934230896 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
  const isSelected = context.value === value;
  const [textValue, setTextValue] = (0, import_react19.useState)(textValueProp !== null && textValueProp !== void 0 ? textValueProp : "");
  const [isFocused, setIsFocused] = (0, import_react19.useState)(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node) => {
    var _contentContext$itemR;
    return (_contentContext$itemR = contentContext.itemRefCallback) === null || _contentContext$itemR === void 0 ? void 0 : _contentContext$itemR.call(contentContext, node, value, disabled);
  });
  const textId = $1746a345f3d73bb7$export$f680877a34711e37();
  const handleSelect = () => {
    if (!disabled) {
      context.onValueChange(value);
      context.onOpenChange(false);
    }
  };
  if (value === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$SelectItemContextProvider, {
    scope: __scopeSelect,
    value,
    disabled,
    textId,
    isSelected,
    onItemTextChange: (0, import_react19.useCallback)((node) => {
      setTextValue((prevTextValue) => {
        var _node$textContent;
        return prevTextValue || ((_node$textContent = node === null || node === void 0 ? void 0 : node.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$Collection.ItemSlot, {
    scope: __scopeSelect,
    value,
    disabled,
    textValue
  }, /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "option",
    "aria-labelledby": textId,
    "data-highlighted": isFocused ? "" : void 0,
    "aria-selected": isSelected && isFocused,
    "data-state": isSelected ? "checked" : "unchecked",
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0,
    tabIndex: disabled ? void 0 : -1
  }, itemProps, {
    ref: composedRefs,
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      itemProps.onFocus,
      () => setIsFocused(true)
    ),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      itemProps.onBlur,
      () => setIsFocused(false)
    ),
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerUp, handleSelect),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerMove, (event) => {
      if (disabled) {
        var _contentContext$onIte;
        (_contentContext$onIte = contentContext.onItemLeave) === null || _contentContext$onIte === void 0 || _contentContext$onIte.call(contentContext);
      } else
        event.currentTarget.focus({
          preventScroll: true
        });
    }),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerLeave, (event) => {
      if (event.currentTarget === document.activeElement) {
        var _contentContext$onIte2;
        (_contentContext$onIte2 = contentContext.onItemLeave) === null || _contentContext$onIte2 === void 0 || _contentContext$onIte2.call(contentContext);
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onKeyDown, (event) => {
      var _contentContext$searc;
      const isTypingAhead = ((_contentContext$searc = contentContext.searchRef) === null || _contentContext$searc === void 0 ? void 0 : _contentContext$searc.current) !== "";
      if (isTypingAhead && event.key === " ")
        return;
      if ($cc7e05a45900e73f$var$SELECTION_KEYS.includes(event.key))
        handleSelect();
      if (event.key === " ")
        event.preventDefault();
    })
  }))));
});
var $cc7e05a45900e73f$var$ITEM_TEXT_NAME = "SelectItemText";
var $cc7e05a45900e73f$export$3572fb0fb821ff49 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, className, style, ...itemTextProps } = props;
  const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const nativeOptionsContext = $cc7e05a45900e73f$var$useSelectNativeOptionsContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
  const [itemTextNode, setItemTextNode] = (0, import_react19.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setItemTextNode(node),
    itemContext.onItemTextChange,
    (node) => {
      var _contentContext$itemT;
      return (_contentContext$itemT = contentContext.itemTextRefCallback) === null || _contentContext$itemT === void 0 ? void 0 : _contentContext$itemT.call(contentContext, node, itemContext.value, itemContext.disabled);
    }
  );
  const textContent = itemTextNode === null || itemTextNode === void 0 ? void 0 : itemTextNode.textContent;
  const nativeOption = (0, import_react19.useMemo)(
    () => /* @__PURE__ */ (0, import_react19.createElement)("option", {
      key: itemContext.value,
      value: itemContext.value,
      disabled: itemContext.disabled
    }, textContent),
    [
      itemContext.disabled,
      itemContext.value,
      textContent
    ]
  );
  const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onNativeOptionAdd(nativeOption);
    return () => onNativeOptionRemove(nativeOption);
  }, [
    onNativeOptionAdd,
    onNativeOptionRemove,
    nativeOption
  ]);
  return /* @__PURE__ */ (0, import_react19.createElement)(import_react19.Fragment, null, /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    id: itemContext.textId
  }, itemTextProps, {
    ref: composedRefs
  })), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? /* @__PURE__ */ (0, import_react_dom3.createPortal)(itemTextProps.children, context.valueNode) : null);
});
var $cc7e05a45900e73f$var$ITEM_INDICATOR_NAME = "SelectItemIndicator";
var $cc7e05a45900e73f$export$6b9198de19accfe6 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...itemIndicatorProps } = props;
  const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_INDICATOR_NAME, __scopeSelect);
  return itemContext.isSelected ? /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "aria-hidden": true
  }, itemIndicatorProps, {
    ref: forwardedRef
  })) : null;
});
var $cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var $cc7e05a45900e73f$export$d8117927658af6d7 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const [canScrollUp1, setCanScrollUp] = (0, import_react19.useState)(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, viewportContext.onScrollButtonChange);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const canScrollUp = viewport.scrollTop > 0;
        setCanScrollUp(canScrollUp);
      };
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [
    contentContext.viewport,
    contentContext.isPositioned
  ]);
  return canScrollUp1 ? /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$SelectScrollButtonImpl, _extends({}, props, {
    ref: composedRefs,
    onAutoScroll: () => {
      const { viewport, selectedItem } = contentContext;
      if (viewport && selectedItem)
        viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
    }
  })) : null;
});
var $cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var $cc7e05a45900e73f$export$ff951e476c12189 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const [canScrollDown1, setCanScrollDown] = (0, import_react19.useState)(false);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, viewportContext.onScrollButtonChange);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function() {
        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
        const canScrollDown = Math.ceil(viewport.scrollTop) < maxScroll;
        setCanScrollDown(canScrollDown);
      };
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [
    contentContext.viewport,
    contentContext.isPositioned
  ]);
  return canScrollDown1 ? /* @__PURE__ */ (0, import_react19.createElement)($cc7e05a45900e73f$var$SelectScrollButtonImpl, _extends({}, props, {
    ref: composedRefs,
    onAutoScroll: () => {
      const { viewport, selectedItem } = contentContext;
      if (viewport && selectedItem)
        viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
    }
  })) : null;
});
var $cc7e05a45900e73f$var$SelectScrollButtonImpl = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
  const contentContext = $cc7e05a45900e73f$var$useSelectContentContext("SelectScrollButton", __scopeSelect);
  const autoScrollTimerRef = (0, import_react19.useRef)(null);
  const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
  const clearAutoScrollTimer = (0, import_react19.useCallback)(() => {
    if (autoScrollTimerRef.current !== null) {
      window.clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);
  (0, import_react19.useEffect)(() => {
    return () => clearAutoScrollTimer();
  }, [
    clearAutoScrollTimer
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    var _activeItem$ref$curre;
    const activeItem = getItems().find(
      (item) => item.ref.current === document.activeElement
    );
    activeItem === null || activeItem === void 0 || (_activeItem$ref$curre = activeItem.ref.current) === null || _activeItem$ref$curre === void 0 || _activeItem$ref$curre.scrollIntoView({
      block: "nearest"
    });
  }, [
    getItems
  ]);
  return /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-hidden": true
  }, scrollIndicatorProps, {
    ref: forwardedRef,
    style: {
      flexShrink: 0,
      ...scrollIndicatorProps.style
    },
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerDown, () => {
      if (autoScrollTimerRef.current === null)
        autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerMove, () => {
      var _contentContext$onIte3;
      (_contentContext$onIte3 = contentContext.onItemLeave) === null || _contentContext$onIte3 === void 0 || _contentContext$onIte3.call(contentContext);
      if (autoScrollTimerRef.current === null)
        autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
    }),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerLeave, () => {
      clearAutoScrollTimer();
    })
  }));
});
var $cc7e05a45900e73f$export$eba4b1df07cb1d3 = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { __scopeSelect, ...separatorProps } = props;
  return /* @__PURE__ */ (0, import_react19.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-hidden": true
  }, separatorProps, {
    ref: forwardedRef
  }));
});
function $cc7e05a45900e73f$var$shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
var $cc7e05a45900e73f$var$BubbleSelect = /* @__PURE__ */ (0, import_react19.forwardRef)((props, forwardedRef) => {
  const { value, ...selectProps } = props;
  const ref = (0, import_react19.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value);
  (0, import_react19.useEffect)(() => {
    const select = ref.current;
    const selectProto = window.HTMLSelectElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("change", {
        bubbles: true
      });
      setValue.call(select, value);
      select.dispatchEvent(event);
    }
  }, [
    prevValue,
    value
  ]);
  return /* @__PURE__ */ (0, import_react19.createElement)($ea1ef594cf570d83$export$439d29a4e110a164, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react19.createElement)("select", _extends({}, selectProps, {
    ref: composedRefs,
    defaultValue: value
  })));
});
$cc7e05a45900e73f$var$BubbleSelect.displayName = "BubbleSelect";
function $cc7e05a45900e73f$var$useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onSearchChange);
  const searchRef = (0, import_react19.useRef)("");
  const timerRef = (0, import_react19.useRef)(0);
  const handleTypeaheadSearch = (0, import_react19.useCallback)((key) => {
    const search = searchRef.current + key;
    handleSearchChange(search);
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(
          () => updateSearch(""),
          1e3
        );
    })(search);
  }, [
    handleSearchChange
  ]);
  const resetTypeahead = (0, import_react19.useCallback)(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  (0, import_react19.useEffect)(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [
    searchRef,
    handleTypeaheadSearch,
    resetTypeahead
  ];
}
function $cc7e05a45900e73f$var$findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every(
    (char) => char === search[0]
  );
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = $cc7e05a45900e73f$var$wrapArray(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem)
    wrappedItems = wrappedItems.filter(
      (v) => v !== currentItem
    );
  const nextItem = wrappedItems.find(
    (item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextItem !== currentItem ? nextItem : void 0;
}
function $cc7e05a45900e73f$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index2) => array[(startIndex + index2) % array.length]
  );
}
var $cc7e05a45900e73f$export$be92b6f5f03c0fe9 = $cc7e05a45900e73f$export$ef9b1a59e592288f;
var $cc7e05a45900e73f$export$41fb9f06171c75f4 = $cc7e05a45900e73f$export$3ac1e88a1c0b9f1;
var $cc7e05a45900e73f$export$f04a61298a47a40f = $cc7e05a45900e73f$export$99b400cabb58c515;
var $cc7e05a45900e73f$export$602eac185826482c = $cc7e05a45900e73f$export$b2af6c9944296213;
var $cc7e05a45900e73f$export$7c6e2c02157bb7d2 = $cc7e05a45900e73f$export$c973a4b3cb86a03d;
var $cc7e05a45900e73f$export$d5c6c08dc2d3ca7 = $cc7e05a45900e73f$export$9ed6e7b40248d36d;
var $cc7e05a45900e73f$export$b04be29aa201d4f5 = $cc7e05a45900e73f$export$f67338d29bd972f8;
var $cc7e05a45900e73f$export$6d08773d2e66f8f2 = $cc7e05a45900e73f$export$13ef48a934230896;
var $cc7e05a45900e73f$export$d6e5bf9c43ea9319 = $cc7e05a45900e73f$export$3572fb0fb821ff49;
var $cc7e05a45900e73f$export$c3468e2714d175fa = $cc7e05a45900e73f$export$6b9198de19accfe6;
var $cc7e05a45900e73f$export$2f60d3ec9ad468f2 = $cc7e05a45900e73f$export$d8117927658af6d7;
var $cc7e05a45900e73f$export$bf1aedc3039c8d63 = $cc7e05a45900e73f$export$ff951e476c12189;
var $cc7e05a45900e73f$export$1ff3c3f08ae963c0 = $cc7e05a45900e73f$export$eba4b1df07cb1d3;

// app/components/ui/select.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id2) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\select.tsx"' + id2);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\select.tsx"
  );
  import.meta.hot.lastModified = "1717572742935.1465";
}
var Select = $cc7e05a45900e73f$export$be92b6f5f03c0fe9;
var SelectTrigger = React9.forwardRef(_c = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$41fb9f06171c75f4, { ref, className: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className), ...props, children: [
  children,
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$f04a61298a47a40f, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4 opacity-50" }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 32,
  columnNumber: 12
}, this));
_c2 = SelectTrigger;
SelectTrigger.displayName = $cc7e05a45900e73f$export$41fb9f06171c75f4.displayName;
var SelectScrollUpButton = React9.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$2f60d3ec9ad468f2, { ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronUp, { className: "h-4 w-4" }, void 0, false, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 44,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 43,
  columnNumber: 12
}, this));
_c4 = SelectScrollUpButton;
SelectScrollUpButton.displayName = $cc7e05a45900e73f$export$2f60d3ec9ad468f2.displayName;
var SelectScrollDownButton = React9.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$bf1aedc3039c8d63, { ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4" }, void 0, false, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 52,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 51,
  columnNumber: 12
}, this));
_c6 = SelectScrollDownButton;
SelectScrollDownButton.displayName = $cc7e05a45900e73f$export$bf1aedc3039c8d63.displayName;
var SelectContent = React9.forwardRef(_c7 = ({
  className,
  children,
  position = "popper",
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$7c6e2c02157bb7d2, { ref, className: cn("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position, ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollUpButton, {}, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$d5c6c08dc2d3ca7, { className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollDownButton, {}, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 62,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 61,
  columnNumber: 12
}, this));
_c8 = SelectContent;
SelectContent.displayName = $cc7e05a45900e73f$export$7c6e2c02157bb7d2.displayName;
var SelectLabel = React9.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$b04be29aa201d4f5, { ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className), ...props }, void 0, false, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 75,
  columnNumber: 12
}, this));
_c10 = SelectLabel;
SelectLabel.displayName = $cc7e05a45900e73f$export$b04be29aa201d4f5.displayName;
var SelectItem = React9.forwardRef(_c11 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$6d08773d2e66f8f2, { ref, className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$c3468e2714d175fa, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 85,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$d6e5bf9c43ea9319, { children }, void 0, false, {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 82,
  columnNumber: 12
}, this));
_c12 = SelectItem;
SelectItem.displayName = $cc7e05a45900e73f$export$6d08773d2e66f8f2.displayName;
var SelectSeparator = React9.forwardRef(_c13 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($cc7e05a45900e73f$export$1ff3c3f08ae963c0, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }, void 0, false, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 96,
  columnNumber: 12
}, this));
_c14 = SelectSeparator;
SelectSeparator.displayName = $cc7e05a45900e73f$export$1ff3c3f08ae963c0.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
var _c14;
$RefreshReg$(_c, "SelectTrigger$React.forwardRef");
$RefreshReg$(_c2, "SelectTrigger");
$RefreshReg$(_c3, "SelectScrollUpButton$React.forwardRef");
$RefreshReg$(_c4, "SelectScrollUpButton");
$RefreshReg$(_c5, "SelectScrollDownButton$React.forwardRef");
$RefreshReg$(_c6, "SelectScrollDownButton");
$RefreshReg$(_c7, "SelectContent$React.forwardRef");
$RefreshReg$(_c8, "SelectContent");
$RefreshReg$(_c9, "SelectLabel$React.forwardRef");
$RefreshReg$(_c10, "SelectLabel");
$RefreshReg$(_c11, "SelectItem$React.forwardRef");
$RefreshReg$(_c12, "SelectItem");
$RefreshReg$(_c13, "SelectSeparator$React.forwardRef");
$RefreshReg$(_c14, "SelectSeparator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/calendar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id2) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\calendar.tsx"' + id2);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\calendar.tsx"
  );
  import.meta.hot.lastModified = "1717611715352.4695";
}
function Calendar2({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  var _s3 = $RefreshSig$();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DayPicker, { showOutsideDays, className: cn("p-3", className), classNames: {
    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
    month: "space-y-4",
    caption: "flex justify-center pt-1 relative items-center",
    caption_label: "text-sm font-medium",
    vhidden: "sr-only",
    nav: "space-x-1 flex items-center",
    nav_button: cn(buttonVariants({
      variant: "outline"
    }), "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
    nav_button_previous: "absolute left-1",
    nav_button_next: "absolute right-1",
    table: "w-full border-collapse space-y-1",
    head_row: "flex",
    head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
    row: "flex w-full mt-2",
    cell: "size-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
    day: cn(buttonVariants({
      variant: "ghost"
    }), "size-9 p-0 font-normal aria-selected:opacity-100"),
    day_range_end: "day-range-end",
    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
    day_today: "bg-accent text-accent-foreground",
    day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
    day_disabled: "text-muted-foreground opacity-50",
    day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
    day_hidden: "invisible",
    ...classNames
  }, components: {
    IconLeft: ({
      ...props2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronLeft, { className: "size-4", ...props2 }, void 0, false, {
      fileName: "app/components/ui/calendar.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this),
    IconRight: ({
      ...props2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRight, { className: "size-4", ...props2 }, void 0, false, {
      fileName: "app/components/ui/calendar.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this),
    // eslint-disable-next-line react/prop-types
    Dropdown: _s3(({
      name,
      value
    }) => {
      _s3();
      const {
        fromDate,
        fromMonth,
        fromYear,
        toDate,
        toMonth,
        toYear
      } = useDayPicker();
      const {
        currentMonth,
        goToMonth
      } = useNavigation2();
      if (name === "months") {
        const months = Array.from({
          length: 12
        }, (_, i) => ({
          index: i.toString(),
          value: format(new Date(2024, i, 1), "MMM")
        }));
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { value: value?.toString(), onValueChange: (date) => {
          const newDate = new Date(currentMonth);
          newDate.setMonth(parseInt(date));
          goToMonth(newDate);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectTrigger, { className: "h-fit gap-2 py-1 opacity-50 transition-[colors,opacity] hover:bg-accent hover:text-accent-foreground hover:opacity-100 [&>svg]:data-[state=open]:rotate-180", title: "select-month", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: format(currentMonth, "MMM") }, void 0, false, {
            fileName: "app/components/ui/calendar.tsx",
            lineNumber: 100,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/ui/calendar.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectContent, { className: "bg-background", children: months.map((month) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectItem, { value: month.index, children: month.value }, month.index, false, {
            fileName: "app/components/ui/calendar.tsx",
            lineNumber: 103,
            columnNumber: 40
          }, this)) }, void 0, false, {
            fileName: "app/components/ui/calendar.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ui/calendar.tsx",
          lineNumber: 94,
          columnNumber: 16
        }, this);
      } else {
        const startYear = fromYear || fromDate?.getFullYear() || fromMonth?.getFullYear();
        const endingYear = toYear || toDate?.getFullYear() || toMonth?.getFullYear();
        if (startYear && endingYear) {
          const years = Array.from({
            length: endingYear - startYear + 1
          }, (_, i) => ({
            index: (startYear + i).toString(),
            value: (startYear + i).toString()
          }));
          return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { value: value?.toString(), onValueChange: (date) => {
            const newDate = new Date(currentMonth);
            newDate.setFullYear(parseInt(date));
            goToMonth(newDate);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectTrigger, { className: "h-fit gap-2 py-1 opacity-50 transition-[colors,opacity] hover:bg-accent hover:text-accent-foreground hover:opacity-100 [&>svg]:data-[state=open]:rotate-180", title: "select-year", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: currentMonth.getFullYear() }, void 0, false, {
              fileName: "app/components/ui/calendar.tsx",
              lineNumber: 124,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/ui/calendar.tsx",
              lineNumber: 123,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectContent, { className: "bg-background", children: years.map((year) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectItem, { value: year.index, children: year.value }, year.index, false, {
              fileName: "app/components/ui/calendar.tsx",
              lineNumber: 127,
              columnNumber: 40
            }, this)) }, void 0, false, {
              fileName: "app/components/ui/calendar.tsx",
              lineNumber: 126,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ui/calendar.tsx",
            lineNumber: 118,
            columnNumber: 18
          }, this);
        }
        return null;
      }
    }, "M0RvXBUvd2LiuU9E0bQI2bjvFkI=", false, function() {
      return [useDayPicker, useNavigation2];
    })
  }, ...props }, void 0, false, {
    fileName: "app/components/ui/calendar.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c15 = Calendar2;
Calendar2.displayName = "Calendar";
var _c15;
$RefreshReg$(_c15, "Calendar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/@radix-ui/react-presence/dist/index.mjs
var import_react20 = __toESM(require_react(), 1);
var import_react_dom4 = __toESM(require_react_dom(), 1);
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react20.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react20.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ (0, import_react20.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react20.useState)();
  const stylesRef = (0, import_react20.useRef)({});
  const prevPresentRef = (0, import_react20.useRef)(present);
  const prevAnimationNameRef = (0, import_react20.useRef)("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react20.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom4.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react20.useCallback)((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// app/components/ui/popover.tsx
var React10 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-popover/dist/index.mjs
var import_react21 = __toESM(require_react(), 1);
var $cb5cc270b50c6fcd$var$POPOVER_NAME = "Popover";
var [$cb5cc270b50c6fcd$var$createPopoverContext, $cb5cc270b50c6fcd$export$c8393c9e73286932] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cb5cc270b50c6fcd$var$POPOVER_NAME, [
  $cf1ac5d9fe0e8206$export$722aac194ae923
]);
var $cb5cc270b50c6fcd$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var [$cb5cc270b50c6fcd$var$PopoverProvider, $cb5cc270b50c6fcd$var$usePopoverContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$POPOVER_NAME);
var $cb5cc270b50c6fcd$export$5b6b19405a83ff9d = (props) => {
  const { __scopePopover, children, open: openProp, defaultOpen, onOpenChange, modal = false } = props;
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  const triggerRef = (0, import_react21.useRef)(null);
  const [hasCustomAnchor, setHasCustomAnchor] = (0, import_react21.useState)(false);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react21.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ (0, import_react21.createElement)($cb5cc270b50c6fcd$var$PopoverProvider, {
    scope: __scopePopover,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerRef,
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react21.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    hasCustomAnchor,
    onCustomAnchorAdd: (0, import_react21.useCallback)(
      () => setHasCustomAnchor(true),
      []
    ),
    onCustomAnchorRemove: (0, import_react21.useCallback)(
      () => setHasCustomAnchor(false),
      []
    ),
    modal
  }, children));
};
var $cb5cc270b50c6fcd$var$TRIGGER_NAME = "PopoverTrigger";
var $cb5cc270b50c6fcd$export$7dacb05d26466c3 = /* @__PURE__ */ (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, ...triggerProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$TRIGGER_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
  const trigger = /* @__PURE__ */ (0, import_react21.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": $cb5cc270b50c6fcd$var$getState(context.open)
  }, triggerProps, {
    ref: composedTriggerRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
  return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_react21.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({
    asChild: true
  }, popperScope), trigger);
});
var $cb5cc270b50c6fcd$var$PORTAL_NAME = "PopoverPortal";
var [$cb5cc270b50c6fcd$var$PortalProvider, $cb5cc270b50c6fcd$var$usePortalContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, {
  forceMount: void 0
});
var $cb5cc270b50c6fcd$export$dd679ffb4362d2d4 = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, __scopePopover);
  return /* @__PURE__ */ (0, import_react21.createElement)($cb5cc270b50c6fcd$var$PortalProvider, {
    scope: __scopePopover,
    forceMount
  }, /* @__PURE__ */ (0, import_react21.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react21.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
var $cb5cc270b50c6fcd$var$CONTENT_NAME = "PopoverContent";
var $cb5cc270b50c6fcd$export$d7e1f420b25549ff = /* @__PURE__ */ (0, import_react21.forwardRef)((props, forwardedRef) => {
  const portalContext = $cb5cc270b50c6fcd$var$usePortalContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  return /* @__PURE__ */ (0, import_react21.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ (0, import_react21.createElement)($cb5cc270b50c6fcd$var$PopoverContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react21.createElement)($cb5cc270b50c6fcd$var$PopoverContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $cb5cc270b50c6fcd$var$PopoverContentModal = /* @__PURE__ */ (0, import_react21.forwardRef)((props, forwardedRef) => {
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const contentRef = (0, import_react21.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  const isRightClickOutsideRef = (0, import_react21.useRef)(false);
  (0, import_react21.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react21.createElement)(Combination_default, {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  }, /* @__PURE__ */ (0, import_react21.createElement)($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      if (!isRightClickOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      isRightClickOutsideRef.current = isRightClick;
    }, {
      checkForDefaultPrevented: false
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
var $cb5cc270b50c6fcd$var$PopoverContentNonModal = /* @__PURE__ */ (0, import_react21.forwardRef)((props, forwardedRef) => {
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
  const hasInteractedOutsideRef = (0, import_react21.useRef)(false);
  const hasPointerDownOutsideRef = (0, import_react21.useRef)(false);
  return /* @__PURE__ */ (0, import_react21.createElement)($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
var $cb5cc270b50c6fcd$var$PopoverContentImpl = /* @__PURE__ */ (0, import_react21.forwardRef)((props, forwardedRef) => {
  const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
  const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, __scopePopover);
  const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ (0, import_react21.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react21.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onInteractOutside,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onDismiss: () => context.onOpenChange(false)
  }, /* @__PURE__ */ (0, import_react21.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    "data-state": $cb5cc270b50c6fcd$var$getState(context.open),
    role: "dialog",
    id: context.contentId
  }, popperScope, contentProps, {
    ref: forwardedRef,
    style: {
      ...contentProps.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function $cb5cc270b50c6fcd$var$getState(open) {
  return open ? "open" : "closed";
}
var $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9 = $cb5cc270b50c6fcd$export$5b6b19405a83ff9d;
var $cb5cc270b50c6fcd$export$41fb9f06171c75f4 = $cb5cc270b50c6fcd$export$7dacb05d26466c3;
var $cb5cc270b50c6fcd$export$602eac185826482c = $cb5cc270b50c6fcd$export$dd679ffb4362d2d4;
var $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2 = $cb5cc270b50c6fcd$export$d7e1f420b25549ff;

// app/components/ui/popover.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id2) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\popover.tsx"' + id2);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\popover.tsx"
  );
  import.meta.hot.lastModified = "1715050455209.8313";
}
var Popover = $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9;
var PopoverTrigger = $cb5cc270b50c6fcd$export$41fb9f06171c75f4;
var PopoverContent = React10.forwardRef(_c16 = ({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($cb5cc270b50c6fcd$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($cb5cc270b50c6fcd$export$7c6e2c02157bb7d2, { ref, align, sideOffset, className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/popover.tsx",
  lineNumber: 32,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/popover.tsx",
  lineNumber: 31,
  columnNumber: 12
}, this));
_c22 = PopoverContent;
PopoverContent.displayName = $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2.displayName;
var _c16;
var _c22;
$RefreshReg$(_c16, "PopoverContent$React.forwardRef");
$RefreshReg$(_c22, "PopoverContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/auth.signup/personal-info.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id2) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\auth.signup\\\\personal-info.tsx"' + id2);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\auth.signup\\personal-info.tsx"
  );
  import.meta.hot.lastModified = "1720113730169.2512";
}
function PersonalInfo({
  fields
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { htmlFor: fields.name.id, children: "Name" }, void 0, false, {
        fileName: "app/routes/auth.signup/personal-info.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { ...getInputProps(fields.name, {
        type: "text"
      }), placeholder: "Your name" }, void 0, false, {
        fileName: "app/routes/auth.signup/personal-info.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FieldError, { children: fields.name.errors }, void 0, false, {
        fileName: "app/routes/auth.signup/personal-info.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.signup/personal-info.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Field, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { htmlFor: fields.email.id, children: "Email" }, void 0, false, {
        fileName: "app/routes/auth.signup/personal-info.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { ...getInputProps(fields.email, {
        type: "email"
      }), placeholder: "Your email" }, void 0, false, {
        fileName: "app/routes/auth.signup/personal-info.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FieldError, { children: fields.email.errors }, void 0, false, {
        fileName: "app/routes/auth.signup/personal-info.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.signup/personal-info.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DOBField, { field: fields.dob }, void 0, false, {
      fileName: "app/routes/auth.signup/personal-info.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.signup/personal-info.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c17 = PersonalInfo;
function DOBField({
  field
}) {
  _s();
  const triggerRef = (0, import_react23.useRef)(null);
  const control = useControl(field);
  const controlValue = control.value;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Field, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Label, { htmlFor: field.name, children: "Date of birth" }, void 0, false, {
      fileName: "app/routes/auth.signup/personal-info.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else." }, void 0, false, {
      fileName: "app/routes/auth.signup/personal-info.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { type: "hidden", id: field.name, ref: control.register, name: field.name, defaultValue: controlValue ? format(new Date(controlValue), "yyyy-MM-dd") : field.initialValue ? format(new Date(field.initialValue), "yyyy-MM-dd") : "", onFocus: () => triggerRef.current?.focus(), tabIndex: -1, "aria-hidden": true }, void 0, false, {
      fileName: "app/routes/auth.signup/personal-info.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Popover, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { ref: triggerRef, className: cn("w-full justify-between", {
        "text-muted-foreground": !controlValue
      }), variant: "outline", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: controlValue ? format(new Date(controlValue), "MMM d, yyyy") : "Pick a date" }, void 0, false, {
          fileName: "app/routes/auth.signup/personal-info.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Calendar, {}, void 0, false, {
          fileName: "app/routes/auth.signup/personal-info.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.signup/personal-info.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/auth.signup/personal-info.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PopoverContent, { className: "w-auto bg-background p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Calendar2, { mode: "single", captionLayout: "dropdown", fromYear: 1900, toYear: (/* @__PURE__ */ new Date()).getFullYear(), selected: new Date(controlValue ?? ""), onSelect: (e) => control.change(e?.toISOString() ?? ""), className: "", classNames: {
        caption_dropdowns: "flex items-center gap-2",
        dropdown: "absolute inset-0 appearance-none border-0 border-none bg-background opacity-0 [&>option]:p-2 hover:[&>option]:bg-accent-foreground focus-visible:[&>option]:bg-accent-foreground",
        dropdown_month: "relative",
        dropdown_year: "relative",
        caption_label: "inline-flex items-center gap-2 text-sm font-medium"
      } }, void 0, false, {
        fileName: "app/routes/auth.signup/personal-info.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/auth.signup/personal-info.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.signup/personal-info.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FieldError, { children: field.errors }, void 0, false, {
      fileName: "app/routes/auth.signup/personal-info.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.signup/personal-info.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(DOBField, "5JmumFrXi5+4jZHZEqEerIfLEk0=", false, function() {
  return [useControl];
});
_c23 = DOBField;
var _c17;
var _c23;
$RefreshReg$(_c17, "PersonalInfo");
$RefreshReg$(_c23, "DOBField");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/auth.signup/schema.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\auth.signup\\schema.ts"
  );
  import.meta.hot.lastModified = "1720113090388.6367";
}
function createSchema(intent, options) {
  return z.object({
    name: z.string().trim().min(1, "What's your name").max(50, "Your name is too long"),
    email: z.string().email().pipe(
      z.string().superRefine((email, ctx) => {
        const isValidatingEmail = intent === null || intent.type === "validate" && intent.payload.name === "email";
        if (!isValidatingEmail) {
          ctx.addIssue({
            code: "custom",
            message: conformZodMessage.VALIDATION_SKIPPED
          });
          return;
        }
        if (typeof options?.isEmailUnique !== "function") {
          ctx.addIssue({
            code: "custom",
            message: conformZodMessage.VALIDATION_UNDEFINED,
            fatal: true
          });
          return;
        }
        return options.isEmailUnique(email).then((isUnique) => {
          if (isUnique) {
            ctx.addIssue({
              code: "custom",
              message: "Email already taken"
            });
          }
        });
      })
    ),
    dob: z.date().refine((val) => differenceInYears(/* @__PURE__ */ new Date(), val) >= 13, "You must be at least 13 years old")
  });
}

// app/routes/auth.signup/route.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id2) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\auth.signup\\\\route.tsx"' + id2);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\auth.signup\\route.tsx"
  );
  import.meta.hot.lastModified = "1720149515785.6223";
}
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
        schema: (intent) => createSchema(intent)
      });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AuthLayout, { title: "Create your account", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { className: "flex flex-col gap-2", method: "POST", id: form.id, onSubmit: form.onSubmit, autoComplete: "off", noValidate: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PersonalInfo, { fields }, void 0, false, {
      fileName: "app/routes/auth.signup/route.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { className: "rounded-full", type: "submit", disabled: !form.valid || isSubmitting, children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Loader, {}, void 0, false, {
      fileName: "app/routes/auth.signup/route.tsx",
      lineNumber: 78,
      columnNumber: 27
    }, this) : "Next" }, void 0, false, {
      fileName: "app/routes/auth.signup/route.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.signup/route.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/auth.signup/route.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s2(Page, "aQjrDJLs/643E3AE6Om1qZ+vcRI=", false, function() {
  return [useActionData, useNavigation, useForm];
});
_c18 = Page;
var _c18;
$RefreshReg$(_c18, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default
};
//# sourceMappingURL=/build/routes/auth.signup-N5XQD6TI.js.map
