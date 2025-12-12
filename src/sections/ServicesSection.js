import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Section from '../components/Section';
import Tag from '../components/Tag';
const services = [
    {
        category: 'Английский язык',
        items: [
            { title: 'Общий английский', price: '1000 ₽ / 60 мин.' },
            { title: 'ОГЭ по английскому', price: '1200 ₽ / 60 мин.' },
            { title: 'ЕГЭ по английскому', price: '1500 ₽ / 60 мин.' }
        ]
    },
    {
        category: 'История и обществознание',
        items: [
            { title: 'История, история России', price: '1000 ₽ / 60 мин.' },
            { title: 'ОГЭ по истории', price: '1200 ₽ / 60 мин.' },
            { title: 'ЕГЭ по истории', price: '1500 ₽ / 60 мин.' },
            { title: 'Обществознание', price: '1000 ₽ / 60 мин.' },
            { title: 'ЕГЭ по обществознанию', price: '1500 ₽ / 60 мин.' },
            { title: 'ВПР по истории / обществознанию', price: '1000–1200 ₽ / 60 мин.' }
        ]
    },
    {
        category: 'Углублённые запросы',
        items: [
            { title: 'История искусств, МХК, культурология', price: '1200 ₽ / 60 мин.' },
            { title: 'Проектная деятельность по истории/обществознанию', price: '1000–1200 ₽ / 60 мин.' },
            { title: 'Олимпиады, источниковедение, всемирная история', price: '1200–1500 ₽ / 60 мин.' }
        ]
    },
    {
        category: 'Математика для школьников',
        items: [
            { title: 'Алгебра', price: '1000 ₽ / 60 мин.' },
            { title: 'Геометрия', price: '1200 ₽ / 60 мин.' }
        ]
    }
];
const ServicesSection = () => (_jsx(Section, { id: "services", title: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0438 \u0446\u0435\u043D\u044B", subtitle: "\u0427\u0451\u0442\u043A\u0438\u0435 \u0446\u0435\u043B\u0438, \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F. \u041F\u0435\u0440\u0432\u043E\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0435 \u2014 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 30%.", children: _jsx("div", { className: "services-grid", children: services.map((service) => (_jsxs("div", { className: "card service-card", children: [_jsxs("div", { className: "service-card__header", children: [_jsx("p", { className: "service-card__title", children: service.category }), _jsx(Tag, { children: "\u041E\u043D\u043B\u0430\u0439\u043D" })] }), _jsx("ul", { className: "service-card__list", children: service.items.map((item) => (_jsxs("li", { children: [_jsx("span", { children: item.title }), _jsx("strong", { children: item.price })] }, item.title))) }), _jsx("p", { className: "service-card__note", children: "\u0413\u0438\u0431\u043A\u0438\u0439 \u0433\u0440\u0430\u0444\u0438\u043A \u0438 \u0444\u043E\u0440\u043C\u0430\u0442: \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434 \u0432\u0430\u0448 \u0442\u0435\u043C\u043F \u0438 \u0437\u0430\u0434\u0430\u0447\u0438." })] }, service.category))) }) }));
export default ServicesSection;
