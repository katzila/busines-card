import { jsx as _jsx } from "react/jsx-runtime";
import { renderToString } from 'react-dom/server';
import App from './App';
export function render() {
    return renderToString(_jsx(App, {}));
}
