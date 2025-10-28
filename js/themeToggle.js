const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; 

const applyTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); 
};

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

export const initThemeToggle = () => {
    if (!toggleButton) return; 

    toggleButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });
};