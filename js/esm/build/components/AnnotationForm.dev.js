var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsxDEV } from "react/jsx-dev-runtime";
import { useState } from "react";
const emptyValues = { category: "none", weight: 1, comment: "" };
function AnnotationForm({ categories, disabled, initialValues = emptyValues, onSave, onCancel }) {
  const [values, setValues] = useState(initialValues);
  function handleSave() {
    onSave(values);
    setValues(emptyValues);
  }
  __name(handleSave, "handleSave");
  function handleCancel() {
    setValues(initialValues);
    onCancel();
  }
  __name(handleCancel, "handleCancel");
  return /* @__PURE__ */ jsxDEV("div", { className: "mb-2", children: [
    /* @__PURE__ */ jsxDEV(
      "select",
      {
        className: "form-select mb-2",
        "aria-label": "Kategorie",
        value: values.category,
        onChange: (event) => setValues({ ...values, category: event.target.value }),
        children: categories.map((category) => /* @__PURE__ */ jsxDEV("option", { value: category.name, children: category.title }, category.name, false, {
          fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationForm.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this))
      },
      void 0,
      false,
      {
        fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationForm.tsx",
        lineNumber: 35,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "d-flex align-items-center gap-2 mb-2", children: [
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "range",
          className: "form-range",
          min: 0,
          max: 3,
          step: 0.5,
          "aria-label": "Gewichtung",
          value: values.weight,
          onChange: (event) => setValues({ ...values, weight: Number(event.target.value) })
        },
        void 0,
        false,
        {
          fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationForm.tsx",
          lineNumber: 49,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("span", { className: "text-nowrap", children: [
        values.weight,
        " F"
      ] }, void 0, true, {
        fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationForm.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationForm.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "textarea",
      {
        className: "form-control mb-2",
        rows: 2,
        placeholder: "Feedback...",
        "aria-label": "Kommentar",
        value: values.comment,
        onChange: (event) => setValues({ ...values, comment: event.target.value })
      },
      void 0,
      false,
      {
        fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationForm.tsx",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "d-flex gap-2", children: [
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-primary", disabled, onClick: handleSave, children: "Speichern" }, void 0, false, {
        fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationForm.tsx",
        lineNumber: 70,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-outline-secondary", disabled, onClick: handleCancel, children: "Abbrechen" }, void 0, false, {
        fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationForm.tsx",
        lineNumber: 73,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationForm.tsx",
      lineNumber: 69,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "public/mod/assign/feedback/annotateed/js/esm/src/components/AnnotationForm.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
__name(AnnotationForm, "AnnotationForm");
var AnnotationForm_default = AnnotationForm;
export {
  AnnotationForm_default as default
};
//# sourceMappingURL=AnnotationForm.dev.js.map
