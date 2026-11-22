var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsxDEV } from "react/jsx-dev-runtime";
import { useState } from "react";
import TextView from "./components/TextView";
import AnnotationCard from "./components/AnnotationCard";
import AnnotationForm from "./components/AnnotationForm";
function Editor({ text, categories, initialAnnotations = [] }) {
  const [activeId, setActiveId] = useState(null);
  const [selection, setSelection] = useState(null);
  const [annotations, setAnnotations] = useState(initialAnnotations);
  const [editingId, setEditingId] = useState(null);
  function addAnnotation(values) {
    if (!selection) return;
    const newAnnotation = {
      id: crypto.randomUUID(),
      start: selection.start,
      end: selection.end,
      ...values
    };
    setAnnotations([...annotations, newAnnotation]);
    setSelection(null);
    window.getSelection()?.removeAllRanges();
  }
  __name(addAnnotation, "addAnnotation");
  function deleteAnnotation(id) {
    setAnnotations(annotations.filter((a) => a.id !== id));
    if (id === editingId) setEditingId(null);
  }
  __name(deleteAnnotation, "deleteAnnotation");
  function updateAnnotation(values) {
    setAnnotations(annotations.map((a) => a.id === editingId ? { ...a, ...values } : a));
    setEditingId(null);
  }
  __name(updateAnnotation, "updateAnnotation");
  function cancelForm() {
    setEditingId(null);
    setSelection(null);
    window.getSelection()?.removeAllRanges();
  }
  __name(cancelForm, "cancelForm");
  const editingAnnotation = annotations.find((a) => a.id === editingId);
  return /* @__PURE__ */ jsxDEV("div", { className: "atd-editor row", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "col-8", children: /* @__PURE__ */ jsxDEV(TextView, { text, annotations, categories, activeId, onActivate: setActiveId, onSelect: setSelection }, void 0, false, {
      fileName: "public/mod/assign/feedback/annotateed/js/esm/src/Editor.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "public/mod/assign/feedback/annotateed/js/esm/src/Editor.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "col-4", children: [
      /* @__PURE__ */ jsxDEV(
        AnnotationForm,
        {
          categories,
          disabled: selection === null && editingId === null,
          initialValues: editingAnnotation,
          onSave: editingId === null ? addAnnotation : updateAnnotation,
          onCancel: cancelForm
        },
        editingId ?? "new",
        false,
        {
          fileName: "public/mod/assign/feedback/annotateed/js/esm/src/Editor.tsx",
          lineNumber: 66,
          columnNumber: 9
        },
        this
      ),
      annotations.map((annotation) => /* @__PURE__ */ jsxDEV(
        AnnotationCard,
        {
          annotation,
          text,
          categories,
          active: activeId === annotation.id,
          onActivate: setActiveId,
          onDelete: deleteAnnotation,
          onEdit: setEditingId
        },
        annotation.id,
        false,
        {
          fileName: "public/mod/assign/feedback/annotateed/js/esm/src/Editor.tsx",
          lineNumber: 75,
          columnNumber: 13
        },
        this
      ))
    ] }, void 0, true, {
      fileName: "public/mod/assign/feedback/annotateed/js/esm/src/Editor.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "public/mod/assign/feedback/annotateed/js/esm/src/Editor.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this);
}
__name(Editor, "Editor");
var Editor_default = Editor;
export {
  Editor_default as default
};
//# sourceMappingURL=Editor.dev.js.map
