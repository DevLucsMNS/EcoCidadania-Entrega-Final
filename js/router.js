import { homeView } from './views/home.js';
import { projetosView } from './views/projetos.js';
import { cadastroView } from './views/cadastro.js';
import { inicializarValidacao } from './validation.js';

const rootElement = document.getElementById('app-root');
const routes = {
    '/': homeView,
    '/projetos': projetosView,
    '/cadastro': cadastroView
};

export const handleRoute = () => {
    const fullHash = window.location.hash.substring(1) || '/';
    
    const [path, anchor] = fullHash.split('#');

    const html = routes[path] || `<h2>Página não encontrada</h2>`;

    rootElement.innerHTML = html;

    if (anchor) {
        const element = document.getElementById(anchor);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        }
    }

    if (path === '/cadastro') {
        inicializarValidacao();
    }
};