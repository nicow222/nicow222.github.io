const translations = {
    // Sidebar nav
    "nav-inicio": { es: "Inicio", en: "Home" },
    "nav-perfil": { es: "Perfil", en: "Profile" },
    "nav-experiencia": { es: "Experiencia", en: "Experience" },
    "nav-educacion": { es: "Educación", en: "Education" },
    "nav-habilidades": { es: "Habilidades", en: "Skills" },
    "nav-contacto": { es: "Contacto", en: "Contact" },

    // Hero
    "hero-title": { es: "Senior Backend Engineer", en: "Senior Backend Engineer" },
    "hero-subtitle": { es: "Desarrollador/Product Owner \u00a0·\u00a0 Fintech \u00a0·\u00a0 Sistemas Cloud-Native", en: "Developer/Product Owner \u00a0·\u00a0 Fintech \u00a0·\u00a0 Cloud-Native Systems" },
    "hero-micro": { es: "Microservicios", en: "Microservices" },

    // Perfil
    "perfil-titulo": { es: "Perfil Profesional", en: "Professional Profile" },
    "perfil-p1": {
        es: 'Senior Backend Engineer con más de <strong>5 años de experiencia</strong> en el desarrollo de <strong>sistemas backend monolíticos</strong>, <strong>arquitecturas de microservicios event-driven</strong> y <strong>sistemas distribuidos de alto rendimiento</strong>. Fuerte base técnica en <strong>Go y Python</strong>, con experiencia en el diseño y optimización de <strong>plataformas críticas, incluyendo entornos fintech</strong>.',
        en: 'Senior Backend Engineer with over <strong>5 years of experience</strong> building <strong>monolithic backend systems</strong>, <strong>event-driven microservices architectures</strong>, and <strong>high-performance distributed systems</strong>. Strong technical foundation in <strong>Go and Python</strong>, with experience designing and optimizing <strong>mission-critical platforms, including fintech environments</strong>.'
    },
    "perfil-p2": {
        es: "Como Tech Lead, he liderado equipos backend y participado en la definición y evolución de arquitecturas robustas, enfocadas en la estabilidad, mantenibilidad y mejora continua, alineando las decisiones técnicas con los objetivos del negocio.",
        en: "As a Tech Lead, I have led backend teams and participated in defining and evolving robust architectures focused on stability, maintainability, and continuous improvement, aligning technical decisions with business objectives."
    },
    "perfil-stack": {
        es: "<strong>Stack Principal:</strong> Go (Fiber) &bull; Python (Django, FastAPI) &bull; Java (Spring Boot) &bull; AWS Cloud Services &bull; Docker &bull; Docker Swarm &bull; Kubernetes &bull; RabbitMQ &bull; Kafka &bull; PostgreSQL &bull; MySQL &bull; MongoDB &bull; Redis &bull; OpenSearch &bull; Nginx &bull; CI/CD",
        en: "<strong>Main Stack:</strong> Go (Fiber) &bull; Python (Django, FastAPI) &bull; Java (Spring Boot) &bull; AWS Cloud Services &bull; Docker &bull; Docker Swarm &bull; Kubernetes &bull; RabbitMQ &bull; Kafka &bull; PostgreSQL &bull; MySQL &bull; MongoDB &bull; Redis &bull; OpenSearch &bull; Nginx &bull; CI/CD"
    },

    // Experiencia
    "exp-titulo": { es: "Experiencia Profesional", en: "Professional Experience" },

    // Exp 1 - PVS
    "exp1-role": { es: "Backend Developer & Product Owner", en: "Backend Developer & Product Owner" },
    "exp1-period": { es: "2025 - Presente", en: "2025 - Present" },
    "exp1-company": { es: "PVS - Billetera Digital", en: "PVS - Digital Wallet" },
    "exp1-desc": { es: "Desarrollo backend y gestión de producto en una billetera digital con flujos de criptomonedas.", en: "Backend development and product management for a digital wallet with cryptocurrency flows." },
    "exp1-label1": { es: "Features Desarrolladas:", en: "Developed Features:" },
    "exp1-li1": { es: "Implementación de flujos de retiro y depósito de criptomonedas con validaciones de seguridad y consistencia transaccional", en: "Implementation of cryptocurrency withdrawal and deposit flows with security validations and transactional consistency" },
    "exp1-li2": { es: "Integración con servicios externos para procesamiento de transacciones y gestión de activos digitales", en: "Integration with external services for transaction processing and digital asset management" },
    "exp1-li3": { es: "Diseño de lógica de negocio para gestión de estados, confirmaciones y reconciliación de operaciones cripto", en: "Business logic design for state management, confirmations, and crypto operations reconciliation" },
    "exp1-label2": { es: "Responsabilidades de Producto:", en: "Product Responsibilities:" },
    "exp1-li4": { es: "Definición y priorización del backlog alineado con objetivos de negocio", en: "Backlog definition and prioritization aligned with business objectives" },
    "exp1-li5": { es: "Coordinación con Program Manager para evolución del producto", en: "Coordination with Program Manager for product evolution" },
    "exp1-li6": { es: "Documentación funcional y técnica de features", en: "Functional and technical feature documentation" },

    // Exp 2 - TACH
    "exp2-role": { es: "Tech Lead & Senior Backend Engineer", en: "Tech Lead & Senior Backend Engineer" },
    "exp2-company": { es: "TACH Argentina - Fintech (Billetera Digital)", en: "TACH Argentina - Fintech (Digital Wallet)" },
    "exp2-desc": { es: "Liderazgo técnico del backend de una plataforma fintech. Construí y mentoré un equipo desde cero hasta operación autónoma con alto estándar técnico.", en: "Technical leadership of the backend of a fintech platform. Built and mentored a team from scratch to autonomous operation with high technical standards." },
    "exp2-label1": { es: "Impacto en Producto y Negocio:", en: "Product & Business Impact:" },
    "exp2-li1": { es: "Estabilicé un sistema crítico con incidentes recurrentes, mejorando significativamente la disponibilidad en producción", en: "Stabilized a critical system with recurring incidents, significantly improving production availability" },
    "exp2-li2": { es: "Diseñé e implementé una arquitectura de microservicios orientada a eventos con RabbitMQ, reduciendo el time-to-market", en: "Designed and implemented an event-driven microservices architecture with RabbitMQ, reducing time-to-market" },
    "exp2-li3": { es: "Optimicé operaciones backend críticas para acompañar el crecimiento de usuarios", en: "Optimized critical backend operations to support user growth" },
    "exp2-label2": { es: "Features Críticas:", en: "Critical Features:" },
    "exp2-li4": { es: "Plataformas de pago por QR con alta disponibilidad y consistencia transaccional", en: "QR payment platforms with high availability and transactional consistency" },
    "exp2-li5": { es: "Procesos de reversos y contracargos con máquinas de estado y validaciones complejas", en: "Reversal and chargeback processes with state machines and complex validations" },
    "exp2-li6": { es: "Reglas de acreditación configurables para distintos esquemas de medios de pago", en: "Configurable accreditation rules for different payment method schemes" },
    "exp2-li7": { es: "Eventos y webhooks para procesamiento y observabilidad en tiempo real", en: "Events and webhooks for real-time processing and observability" },
    "exp2-li8": { es: "Integración con redes de pago y entidades financieras (QR y transferencias electrónicas)", en: "Integration with payment networks and financial entities (QR and electronic transfers)" },
    "exp2-label3": { es: "Liderazgo:", en: "Leadership:" },
    "exp2-li9": { es: "Diseño de arquitectura de microservicios y definición de estándares técnicos", en: "Microservices architecture design and technical standards definition" },
    "exp2-li10": { es: "Reclutamiento, entrevistas técnicas y mentoring de equipo backend", en: "Recruitment, technical interviews, and backend team mentoring" },
    "exp2-li11": { es: "Code review, mejores prácticas y guidelines arquitectónicos", en: "Code review, best practices, and architectural guidelines" },
    "exp2-li12": { es: "Planificación técnica, priorización y delegación de tareas", en: "Technical planning, prioritization, and task delegation" },

    // Exp 3 - Cognitis
    "exp3-role": { es: "Backend Developer & Product Manager", en: "Backend Developer & Product Manager" },
    "exp3-company": { es: "Cognitis Software House - Cooperativa de Desarrollo", en: "Cognitis Software House - Development Cooperative" },
    "exp3-desc": { es: "Diseño y desarrollo de sistemas de gestión enterprise monolíticos, desde análisis hasta despliegue y evolución del producto.", en: "Design and development of monolithic enterprise management systems, from analysis to deployment and product evolution." },
    "exp3-label1": { es: "Proyectos Destacados:", en: "Key Projects:" },
    "exp3-li1": { es: "<strong>Sistema de Gestión para Óptica:</strong> ERP con inventario, ventas, facturación y gestión de recetas médicas", en: "<strong>Optical Shop Management System:</strong> ERP with inventory, sales, billing, and medical prescription management" },
    "exp3-li2": { es: "<strong>Sistema de Gestión para Hormigonera:</strong> Control de producción, despacho, logística y facturación", en: "<strong>Concrete Plant Management System:</strong> Production control, dispatch, logistics, and billing" },
    "exp3-li3": { es: "<strong>Sistema para Colegio de Escribanos:</strong> Gestión documental, matriculación y trámites administrativos", en: "<strong>Notary Association System:</strong> Document management, registration, and administrative procedures" },
    "exp3-li4": { es: "<strong>Monitor de Operaciones para Nasini:</strong> Seguimiento de operaciones con dólar MEP", en: "<strong>Operations Monitor for Nasini:</strong> MEP dollar operations tracking" },

    // Exp 4 - Gestión Comercio
    "exp4-role": { es: "Programador C# .NET & Soporte Técnico", en: "C# .NET Developer & Technical Support" },
    "exp4-li1": { es: "Desarrollo de módulos nuevos y mantenimiento de aplicaciones legacy en C# .NET", en: "Development of new modules and maintenance of legacy C# .NET applications" },
    "exp4-li2": { es: "Diseño y optimización de queries SQL Server", en: "SQL Server query design and optimization" },
    "exp4-li3": { es: "Soporte técnico en sitio y remoto, capacitación de usuarios finales", en: "On-site and remote technical support, end-user training" },

    // Exp 5 - BIOS
    "exp5-role": { es: "Técnico en Hardware y Software", en: "Hardware & Software Technician" },
    "exp5-desc": { es: "Soporte técnico integral, instalación y mantenimiento de equipos informáticos para clientes corporativos y particulares.", en: "Comprehensive technical support, installation and maintenance of computer equipment for corporate and individual clients." },

    // Educación
    "edu-titulo": { es: "Educación", en: "Education" },
    "edu1-title": { es: "Tecnicatura Universitaria en Informática", en: "University Degree in Computer Science" },
    "edu2-title": { es: "Ingeniería en Sistemas de Información", en: "Information Systems Engineering" },
    "edu3-title": { es: "Especialización en Data Analytics", en: "Data Analytics Specialization" },
    "edu3-period": { es: "Mayo - Agosto 2023 · 200hs", en: "May - August 2023 · 200hrs" },
    "edu4-title": { es: "Desarrollador Web Full Stack", en: "Full Stack Web Developer" },
    "edu4-period": { es: "Jun - Sep 2020 · 240hs", en: "Jun - Sep 2020 · 240hrs" },
    "edu5-title": { es: "Primeros Pasos del Desarrollo Frontend", en: "First Steps in Frontend Development" },
    "edu5-period": { es: "Marzo 2023", en: "March 2023" },
    "edu6-title": { es: "Desarrollo de Videojuegos con Godot Engine", en: "Game Development with Godot Engine" },
    "edu6-institution": { es: "Formación Especializada", en: "Specialized Training" },
    "edu6-period": { es: "2022 - 2023 · 4 meses", en: "2022 - 2023 · 4 months" },
    "badge-cert": { es: "Certificado", en: "Certified" },

    // Habilidades
    "skills-titulo": { es: "Competencias Técnicas", en: "Technical Skills" },
    "skills-lang": { es: "Lenguajes", en: "Languages" },
    "skills-fw": { es: "Frameworks & Herramientas", en: "Frameworks & Tools" },
    "skills-arch-title": { es: "Arquitectura & Diseño", en: "Architecture & Design" },
    "skills-soft-titulo": { es: "Habilidades Blandas", en: "Soft Skills" },
    "soft1-title": { es: "Liderazgo Técnico", en: "Technical Leadership" },
    "soft1-desc": { es: "Construcción y mentoring de equipos, decisiones arquitectónicas, gestión de prioridades", en: "Team building and mentoring, architectural decisions, priority management" },
    "soft2-title": { es: "Resolución de Problemas", en: "Problem Solving" },
    "soft2-desc": { es: "Troubleshooting de sistemas complejos y optimización de performance", en: "Complex systems troubleshooting and performance optimization" },
    "soft3-title": { es: "Comunicación", en: "Communication" },
    "soft3-desc": { es: "Traducir requerimientos de negocio en soluciones técnicas y viceversa", en: "Translating business requirements into technical solutions and vice versa" },
    "soft4-title": { es: "Aprendizaje Continuo", en: "Continuous Learning" },
    "soft4-desc": { es: "Autodidacta con pasión por nuevas tecnologías y mejores prácticas", en: "Self-taught with passion for new technologies and best practices" },

    // Idiomas
    "idioma-es": { es: "Español — Nativo", en: "Spanish — Native" },
    "idioma-en": { es: "Inglés — Técnico", en: "English — Technical" },

    // Arquitectura tags
    "arch-mono": { es: "Monolito Modular", en: "Modular Monolith" },
    "arch-micro": { es: "Microservicios Event-Driven", en: "Event-Driven Microservices" },
    "arch-hex": { es: "Arquitectura Hexagonal", en: "Hexagonal Architecture" },
    "arch-dist": { es: "Distributed Systems", en: "Distributed Systems" },

    // Contacto
    "contacto-titulo": { es: "Contacto", en: "Contact" },
    "contacto-ubicacion": { es: "Argentina — Disponible para trabajo remoto", en: "Argentina — Available for remote work" },

    // Mobile tabs
    "mob-exp": { es: "Exp.", en: "Exp." },
    "mob-edu": { es: "Edu.", en: "Edu." },
    "mob-contacto": { es: "Contacto", en: "Contact" },

    // Footer (same as nav)
    "foot-inicio": { es: "Inicio", en: "Home" },
    "foot-perfil": { es: "Perfil", en: "Profile" },
    "foot-experiencia": { es: "Experiencia", en: "Experience" },
    "foot-educacion": { es: "Educación", en: "Education" },
    "foot-habilidades": { es: "Habilidades", en: "Skills" },
    "foot-contacto": { es: "Contacto", en: "Contact" },
};

let currentLang = "es";

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key] && translations[key][lang]) {
            el.innerHTML = translations[key][lang];
        }
    });
    // Update toggle buttons
    document.querySelectorAll(".lang-toggle").forEach(btn => {
        btn.textContent = lang === "es" ? "EN" : "ES";
        btn.setAttribute("title", lang === "es" ? "Switch to English" : "Cambiar a Español");
    });
    localStorage.setItem("lang", lang);
}

function toggleLanguage() {
    setLanguage(currentLang === "es" ? "en" : "es");
}

// On load: restore saved language
document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang");
    if (saved && saved !== "es") {
        setLanguage(saved);
    }
});
