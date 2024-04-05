const translations = {
    'es': {
        'title': 'CodeSquad',
        'home': 'Inicio',
        'services': 'Servicios',
        'team': 'Equipo',
        'contact': 'Contacto',
        'about_title': 'Sobre Nosotros',
        'about_content': 'Ayudamos a la comunidad a arreglar pequeños errores en sus páginas web HTML, CSS y JS. Pronto nos expandiremos a TypeScript, Astro, PHP y más.',
        'services_title': 'Servicios',
        'services_list': ['Corrección de errores HTML', 'Corrección de errores CSS', 'Corrección de errores JavaScript']
    },
    'en': {
        'title': 'CodeSquad',
        'home': 'Home',
        'services': 'Services',
        'team': 'Team',
        'contact': 'Contact',
        'about_title': 'About Us',
        'about_content': 'We help the community fix small errors in their HTML, CSS, and JS web pages. We will soon expand to TypeScript, Astro, PHP, and more.',
        'services_title': 'Services',
        'services_list': ['HTML Error Fixing', 'CSS Error Fixing', 'JavaScript Error Fixing']
    }
};

function changeLanguage(lang) {
    const langData = translations[lang];
    document.getElementById('title').textContent = langData.title;
    document.getElementById('home-link').textContent = langData.home;
    document.getElementById('services-link').textContent = langData.services;
    document.getElementById('team-link').textContent = langData.team;
    document.getElementById('contact-link').textContent = langData.contact;
    document.getElementById('about-title').textContent = langData.about_title;
    document.getElementById('about-content').textContent = langData.about_content;
    document.getElementById('services-title').textContent = langData.services_title;
    const servicesList = document.getElementById('services-list');
    servicesList.innerHTML = '';
    langData.services_list.forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        servicesList.appendChild(li);
    });
    document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} CodeSquad V2. Todos los derechos reservados.`;
}

changeLanguage('es');