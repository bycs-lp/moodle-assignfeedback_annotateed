var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsxDEV } from "react/jsx-dev-runtime";
import { splitIntoSegments } from "../lib/segments";
import { Fragment } from "react";
import { getSelectedSpan } from "../lib/selection";
function TextView({ text, annotations, categories, activeId, onActivate, onSelect }) {
  const segments = splitIntoSegments(text, annotations);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "atd-text-view",
      onMouseUp: (event) => onSelect(getSelectedSpan(event.currentTarget)),
      children: segments.map((segment) => {
        const content = text.slice(segment.start, segment.end);
        if (segment.spans.length > 0) {
          const last = segment.spans[segment.spans.length - 1];
          const shown = segment.spans.find((a) => a.id === activeId) ?? last;
          const category = categories.find((c) => c.name === shown.category);
          const style = {
            "--atd-mark-color": category?.color,
            // 20% per annotation, at most 100%.
            "--atd-mark-alpha": `${Math.min(20 * segment.spans.length, 100)}%`
          };
          const active = shown.id === activeId;
          const className = active ? "atd-mark atd-mark--active" : "atd-mark";
          return /* @__PURE__ */ jsxDEV(
            "mark",
            {
              className,
              style,
              onMouseEnter: () => onActivate(shown.id),
              onMouseLeave: () => onActivate(null),
              children: content
            },
            segment.start,
            false,
            {
              fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/TextView.tsx",
              lineNumber: 39,
              columnNumber: 13
            },
            this
          );
        }
        return /* @__PURE__ */ jsxDEV(Fragment, { children: content }, segment.start, false, {
          fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/TextView.tsx",
          lineNumber: 50,
          columnNumber: 16
        }, this);
      })
    },
    void 0,
    false,
    {
      fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/TextView.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}
__name(TextView, "TextView");
var TextView_default = TextView;
export {
  TextView_default as default
};
//# sourceMappingURL=TextView.dev.js.map
