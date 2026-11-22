var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsxDEV } from "react/jsx-dev-runtime";
function AnnotationCard({ annotation, text, categories, active, onActivate, onDelete, onEdit }) {
  const quote = text.slice(annotation.start, annotation.end);
  const category = categories.find((c) => c.name === annotation.category);
  const style = { "--atd-card-color": category?.color };
  const className = active ? "atd-card atd-card--active card mb-2" : "atd-card card mb-2";
  return /* @__PURE__ */ jsxDEV("div", { className, style, onMouseEnter: () => onActivate(annotation.id), onMouseLeave: () => onActivate(null), children: /* @__PURE__ */ jsxDEV("div", { className: "card-body", children: [
    /* @__PURE__ */ jsxDEV("q", { children: quote }, void 0, false, {
      fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationCard.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: annotation.comment }, void 0, false, {
      fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationCard.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      annotation.weight,
      " F"
    ] }, void 0, true, {
      fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationCard.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "d-flex gap-2 mt-2", children: [
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-sm btn-outline-secondary", onClick: () => onEdit(annotation.id), children: "Bearbeiten" }, void 0, false, {
        fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationCard.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-sm btn-outline-danger", "aria-label": "L\xF6schen", onClick: () => onDelete(annotation.id), children: "x" }, void 0, false, {
        fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationCard.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationCard.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationCard.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationCard.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
__name(AnnotationCard, "AnnotationCard");
var AnnotationCard_default = AnnotationCard;
export {
  AnnotationCard_default as default
};
//# sourceMappingURL=AnnotationCard.dev.js.map
