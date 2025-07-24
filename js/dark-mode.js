// Dark Mode Toggle Functionality
console.log('Dark mode script loaded!');

// Global variable for theme icon
let themeIcon;

// Test if button exists immediately
setTimeout(function() {
    const button = document.querySelector('.theme-toggle');
    console.log('Button found:', button);
    if (button) {
        console.log('Button styles:', window.getComputedStyle(button).display);
    }
}, 1000);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready, initializing dark mode...');
    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    themeIcon = document.getElementById('theme-icon');
    
    // Apply the saved theme on page load
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    console.log('Dark mode initialized, current theme:', currentTheme);
});

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    console.log('Toggling theme from', currentTheme, 'to', newTheme);
    
    // Apply new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    updateThemeIcon(newTheme);
    
    // Add a little animation feedback
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        toggleBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggleBtn.style.transform = 'scale(1)';
        }, 150);
    }
    
    console.log('Theme toggled, data-theme attribute:', document.documentElement.getAttribute('data-theme'));
}

function updateThemeIcon(theme) {
    // Get the icon element fresh each time if needed
    const iconElement = themeIcon || document.getElementById('theme-icon');
    if (iconElement) {
        iconElement.textContent = theme === 'dark' ? '☀️' : '🌙';
        console.log('Updated theme icon to:', iconElement.textContent);
    } else {
        console.log('Theme icon element not found');
    }
}

// Listen for system theme changes
if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Only auto-switch if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', systemTheme);
        updateThemeIcon(systemTheme);
    }
    
    // Listen for changes in system preference
    mediaQuery.addListener((e) => {
        if (!localStorage.getItem('theme')) {
            const systemTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', systemTheme);
            updateThemeIcon(systemTheme);
        }
    });
}