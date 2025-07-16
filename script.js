// Preloader fade-out
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    gsap.to(preloader, { opacity: 0, duration: 0.8, onComplete: () => preloader.remove() });

    // Hero elements animation
    gsap.to('#profile-pic', { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' });
    gsap.to('#home .space-y-4', { opacity: 1, x: 0, duration: 1, delay: 0.7, stagger: 0.2, ease: 'power3.out' });

    // Navbar link entrance
    gsap.from('.nav-link', { opacity: 0, y: -20, duration: 0.8, delay: 1.2, stagger: 0.1 });

    // Fade in all section headings and content
    gsap.utils.toArray('section h2, section p, form, .project-card, #about div').forEach(el => {
        gsap.from(el, { opacity: 0, y: 40, duration: 1, delay: 0.5, stagger: 0.2, ease: 'power3.out' });
    });

    // Initialize VanillaTilt
    VanillaTilt.init(document.querySelectorAll('.project-card'), { glare: true, maxGlare: 0.3 });

    // Intersection Observer for About and Contact sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');
    if (aboutSection) observer.observe(aboutSection);
    if (contactSection) observer.observe(contactSection);
});