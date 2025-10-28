import { handleRoute } from './router.js';
import { initThemeToggle } from './themeToggle.js';

window.addEventListener('hashchange', handleRoute);

window.addEventListener('load', () => {
    handleRoute();
    initThemeToggle();
});