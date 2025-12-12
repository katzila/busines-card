import { jsx as _jsx } from "react/jsx-runtime";
const PrimaryButton = ({ href, children }) => {
    if (href) {
        return (_jsx("a", { className: "button", href: href, target: href.startsWith('http') ? '_blank' : undefined, rel: "noreferrer", children: children }));
    }
    return _jsx("button", { className: "button", children: children });
};
export default PrimaryButton;
