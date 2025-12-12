import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Section = ({ id, title, subtitle, children }) => (_jsxs("section", { id: id, className: "section", children: [_jsxs("div", { className: "section__header", children: [_jsx("h2", { children: title }), subtitle && _jsx("p", { className: "section__subtitle", children: subtitle })] }), children] }));
export default Section;
