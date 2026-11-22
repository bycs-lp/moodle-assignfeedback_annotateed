var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
function splitIntoSegments(text, spans) {
  const boundaries = /* @__PURE__ */ new Set([0, text.length]);
  for (const span of spans) {
    boundaries.add(span.start);
    boundaries.add(span.end);
  }
  const sorted = [...boundaries].sort((a, b) => a - b);
  const segments = [];
  for (let i = 0; i < sorted.length - 1; i++) {
    const start = sorted[i];
    const end = sorted[i + 1];
    const covering = spans.filter((s) => s.start <= start && s.end >= end);
    segments.push({ start, end, spans: covering });
  }
  return segments;
}
__name(splitIntoSegments, "splitIntoSegments");
export {
  splitIntoSegments
};
//# sourceMappingURL=segments.dev.js.map
