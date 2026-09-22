// figma node: 1:3 tg (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Tg(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 133,
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
        display: "flex",
        flexDirection: "row",
        gap: 7.543652534484863,
        padding: "1.333px 1.333px 1.333px 1.333px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg width={13.333} height={13.333} viewBox="0 0 13.333 13.333" fill="none" style={{
          position: "relative",
          width: 13.333,
          height: 13.333,
          flexShrink: 0,
        }}>
          <path d={"M 10.23 0.09 C 11.197 -0.086 12.079 -0.047 12.73 0.604 C 13.38 1.254 13.419 2.137 13.244 3.103 C 13.067 4.07 12.636 5.327 12.095 6.914 L 11.35 9.104 C 10.934 10.324 10.605 11.289 10.29 11.958 C 10.131 12.293 9.958 12.595 9.751 12.827 C 9.538 13.066 9.262 13.261 8.908 13.314 C 8.627 13.355 8.34 13.33 8.07 13.244 C 7.738 13.137 7.491 12.912 7.301 12.653 C 7.115 12.399 6.96 12.078 6.818 11.719 C 6.537 11.004 6.255 9.991 5.896 8.704 C 5.765 8.231 5.704 8.037 5.647 7.929 L 5.589 7.842 C 5.575 7.824 5.559 7.807 5.543 7.79 L 5.492 7.744 C 5.394 7.663 5.26 7.613 4.63 7.437 C 3.343 7.078 2.329 6.797 1.614 6.515 C 1.255 6.374 0.935 6.219 0.68 6.032 C 0.421 5.843 0.196 5.595 0.09 5.264 C 0.003 4.993 -0.022 4.706 0.02 4.425 C 0.072 4.071 0.267 3.794 0.506 3.581 C 0.739 3.375 1.04 3.202 1.375 3.044 C 2.044 2.728 3.01 2.399 4.229 1.984 L 6.419 1.238 C 8.006 0.697 9.263 0.266 10.23 0.09 Z"} fill="currentColor" fillRule="nonzero" />
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
          letterSpacing: "0.010em",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "Телеграм"}</span>
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
      width: 133,
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
        display: "flex",
        flexDirection: "row",
        gap: 7.543652534484863,
        padding: "1.333px 1.333px 1.333px 1.333px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <svg width={13.333} height={13.333} viewBox="0 0 13.333 13.333" fill="none" style={{
          position: "relative",
          width: 13.333,
          height: 13.333,
          flexShrink: 0,
        }}>
          <path d={"M 10.23 0.09 C 11.197 -0.086 12.079 -0.047 12.73 0.604 C 13.38 1.254 13.419 2.137 13.244 3.103 C 13.067 4.07 12.636 5.327 12.095 6.914 L 11.35 9.104 C 10.934 10.324 10.605 11.289 10.29 11.958 C 10.131 12.293 9.958 12.595 9.751 12.827 C 9.538 13.066 9.262 13.261 8.908 13.314 C 8.627 13.355 8.34 13.33 8.07 13.244 C 7.738 13.137 7.491 12.912 7.301 12.653 C 7.115 12.399 6.96 12.078 6.818 11.719 C 6.537 11.004 6.255 9.991 5.896 8.704 C 5.765 8.231 5.704 8.037 5.647 7.929 L 5.589 7.842 C 5.575 7.824 5.559 7.807 5.543 7.79 L 5.492 7.744 C 5.394 7.663 5.26 7.613 4.63 7.437 C 3.343 7.078 2.329 6.797 1.614 6.515 C 1.255 6.374 0.935 6.219 0.68 6.032 C 0.421 5.843 0.196 5.595 0.09 5.264 C 0.003 4.993 -0.022 4.706 0.02 4.425 C 0.072 4.071 0.267 3.794 0.506 3.581 C 0.739 3.375 1.04 3.202 1.375 3.044 C 2.044 2.728 3.01 2.399 4.229 1.984 L 6.419 1.238 C 8.006 0.697 9.263 0.266 10.23 0.09 Z"} fill="currentColor" fillRule="nonzero" />
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
          letterSpacing: "0.010em",
          color: "rgb(255,255,255)",
          flexShrink: 0,
        }}>{props.text1 ?? "Телеграм"}</span>
      </div>
      <svg width={77} height={1} viewBox="0 -0.500 77 1" fill="none" style={{
        position: "absolute",
        left: 40,
        top: 32,
        width: 77,
        height: 1,
      }}>
        <path d={"M 0 -0.5 L 0 0 L 77 0 L 77 -0.5 L 77 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
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
export default Tg;
