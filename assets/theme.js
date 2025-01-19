document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    document.documentElement.dataset.theme = initialTheme;

    if (initialTheme === 'dark') {
        themeToggle.classList.add('theme-toggle--toggled');
    } else {
        themeToggle.classList.remove('theme-toggle--toggled');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        themeToggle.classList.toggle('theme-toggle--toggled');
    });
});
