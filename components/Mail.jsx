// figma node: 1:16 mail (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Mail(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 273,
      height: 40,
      borderRadius: 16,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 16,
        top: 12,
        width: 16,
        height: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={13.333} height={10.667} viewBox="0 0 13.333 10.667" fill="none" style={{
          position: "relative",
          width: 13.333,
          height: 10.667,
          flexShrink: 0,
        }}>
          <path d={"M 8 0 C 9.867 0 10.801 0 11.514 0.332 C 12.141 0.624 12.651 1.09 12.97 1.664 C 13.334 2.316 13.333 3.17 13.333 4.876 L 13.333 5.79 C 13.333 7.497 13.334 8.351 12.97 9.003 C 12.651 9.576 12.141 10.043 11.514 10.335 C 10.801 10.667 9.867 10.667 8 10.667 L 5.334 10.667 C 3.467 10.667 2.533 10.667 1.82 10.335 C 1.193 10.043 0.683 9.576 0.363 9.003 C 0 8.351 0 7.497 0 5.79 L 0 4.876 C 0 3.17 0 2.316 0.363 1.664 C 0.683 1.09 1.193 0.624 1.82 0.332 C 2.533 0 3.467 0 5.334 0 L 8 0 Z M 11.37 2.754 C 11.192 2.483 10.808 2.395 10.512 2.557 L 8.06 3.903 C 7.202 4.373 6.131 4.373 5.273 3.903 L 2.821 2.557 C 2.525 2.395 2.141 2.483 1.964 2.754 C 1.786 3.024 1.883 3.376 2.179 3.538 L 4.63 4.882 C 5.883 5.57 7.45 5.57 8.704 4.882 L 11.155 3.538 C 11.451 3.376 11.547 3.024 11.37 2.754 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 40,
        top: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 4px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Geologica, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "den-mndenisova@yandex.ru"}</span>
      </div>
      <svg width={0} height={1} viewBox="0 -0.500 0 1" fill="none" style={{
        position: "absolute",
        left: 40,
        top: 32,
        width: 0.00009999999747378752,
        height: 1,
      }}>
        <path d={"M 0 -0.5 L 0 0 L 0 0 L 0 -0.5 L 0 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 273,
      height: 40,
      borderRadius: 16,
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 16,
        top: 12,
        width: 16,
        height: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <svg width={13.333} height={10.667} viewBox="0 0 13.333 10.667" fill="none" style={{
          position: "relative",
          width: 13.333,
          height: 10.667,
          flexShrink: 0,
        }}>
          <path d={"M 8 0 C 9.867 0 10.801 0 11.514 0.332 C 12.141 0.624 12.651 1.09 12.97 1.664 C 13.334 2.316 13.333 3.17 13.333 4.876 L 13.333 5.79 C 13.333 7.497 13.334 8.351 12.97 9.003 C 12.651 9.576 12.141 10.043 11.514 10.335 C 10.801 10.667 9.867 10.667 8 10.667 L 5.334 10.667 C 3.467 10.667 2.533 10.667 1.82 10.335 C 1.193 10.043 0.683 9.576 0.363 9.003 C 0 8.351 0 7.497 0 5.79 L 0 4.876 C 0 3.17 0 2.316 0.363 1.664 C 0.683 1.09 1.193 0.624 1.82 0.332 C 2.533 0 3.467 0 5.334 0 L 8 0 Z M 11.37 2.754 C 11.192 2.483 10.808 2.395 10.512 2.557 L 8.06 3.903 C 7.202 4.373 6.131 4.373 5.273 3.903 L 2.821 2.557 C 2.525 2.395 2.141 2.483 1.964 2.754 C 1.786 3.024 1.883 3.376 2.179 3.538 L 4.63 4.882 C 5.883 5.57 7.45 5.57 8.704 4.882 L 11.155 3.538 C 11.451 3.376 11.547 3.024 11.37 2.754 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 40,
        top: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 0px 4px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Geologica, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "den-mndenisova@yandex.ru"}</span>
      </div>
      <svg width={217} height={1} viewBox="0 -0.500 217 1" fill="none" style={{
        position: "absolute",
        left: 40,
        top: 32,
        width: 217,
        height: 1,
      }}>
        <path d={"M 0 -0.5 L 0 0 L 217 0 L 217 -0.5 L 217 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Mail;
