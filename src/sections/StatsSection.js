import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Section from '../components/Section';
const stats = [
    {
        title: 'Поступления в топ-вузы',
        value: 'РАНХиГС, СПбГУ, лицеи',
        description: 'Помощь с подготовкой к вступительным испытаниям и портфолио.'
    },
    {
        title: 'Рост отметки',
        value: 'от +1 балла',
        description: 'Большинство учеников выходят на более высокий уровень уже через месяц.'
    },
    {
        title: 'Экзамены без стресса',
        value: 'ВПР, ОГЭ, ЕГЭ',
        description: 'Чёткая тренировка формата заданий и уверенность на экзамене.'
    }
];
const StatsSection = () => (_jsx(Section, { id: "stats", title: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0443\u0447\u0435\u043D\u0438\u043A\u043E\u0432", children: _jsx("div", { className: "stats-grid", children: stats.map((stat) => (_jsxs("div", { className: "card stat-card", children: [_jsx("p", { className: "stat-card__value", children: stat.value }), _jsx("p", { className: "stat-card__title", children: stat.title }), _jsx("p", { className: "stat-card__description", children: stat.description })] }, stat.title))) }) }));
export default StatsSection;
