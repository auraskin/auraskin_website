// Auraskin JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const entrerBtn = document.querySelector('.btn-entrer');
    const landingScreen = document.querySelector('.landing-screen');

    if (entrerBtn) {
        entrerBtn.addEventListener('click', (e) => {
            e.preventDefault();

            // Start the expansion animation
            entrerBtn.classList.add('expanding');

            // Wait for the expansion animation to cover the screen
            setTimeout(() => {
                landingScreen.classList.add('fade-out');

                // Allow body to scroll after entering
                document.body.style.overflow = 'auto';

                // Scroll to top of shop just in case
                window.scrollTo(0, 0);
            }, 700); // Wait for circle expansion
        });
    }

    // Prevent scrolling strictly on landing
    if (!landingScreen.classList.contains('fade-out')) {
        document.body.style.overflow = 'hidden';
    }

    // Navbar background change on scroll
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.boxShadow = 'var(--shadow-soft)';
            } else {
                nav.style.boxShadow = 'none';
            }
        });
    }
});

