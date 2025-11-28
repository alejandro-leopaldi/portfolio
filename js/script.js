document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FUNCIONALIDAD MODO OSCURO (Mantenida)
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const icon = themeToggle.querySelector('i');
    
    // Revisar preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    }

    // Alternar tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    // Actualizar icono
    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // 2. EFECTO DE ESCRITURA (Mantenido)
    const text = "Desarrollador Full Stack Jr.";
    const typingElement = document.getElementById('typing-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, Math.random() * 100 + 50); 
        }
    }
    setTimeout(typeWriter, 800);


    // ==========================================
    // 3. SISTEMA DE PESTAÑAS (TABS SYSTEM) - ¡NUEVO!
    // ==========================================
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // a) Quitar clase 'active' de todos los botones
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // b) Añadir clase 'active' al botón clickeado
            button.classList.add('active');

            // c) Ocultar todos los paneles (quitar clase active)
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // d) Obtener el ID del panel objetivo desde el atributo data-target
            const targetPanelId = button.getAttribute('data-target');
            const targetPanel = document.querySelector(targetPanelId);

            // e) Mostrar el panel objetivo (añadir clase active)
            // El pequeño timeout ayuda a que la animación CSS se reinicie suavemente
            setTimeout(() => {
                 if (targetPanel) {
                    targetPanel.classList.add('active');
                 }
            }, 10);
        });
    });

    // Inicialización de Vanilla Tilt en el header (opcional, si no lo detecta automáticamente)
    VanillaTilt.init(document.querySelector("header"), {
		max: 5,
		speed: 400
	});
});