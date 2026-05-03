const translations = {
    es: {
        nav_about: "Sobre Nosotros",
        nav_solution: "Solución",
        nav_roi: "Calculadora ROI",
        nav_subsidies: "Subvenciones",
        nav_contact: "Contactar",
        
        team_title: "Nuestro Equipo Directivo",
        ods_title: "Nuestro Compromiso con la Agenda 2030 (ODS)",
        ods_7_title: "Energía Asequible y No Contaminante",
        ods_7_desc: "Generación continua 24/7 de hasta 1.000 kWh mensuales aprovechando flujos hídricos residuales.",
        ods_9_title: "Industria, Innovación e Infraestructura",
        ods_9_desc: "Innovación nacida en la ETSIT para integrar energía renovable en infraestructuras ya existentes sin impacto visual.",
        ods_11_title: "Ciudades y Comunidades Sostenibles",
        ods_11_desc: "Transformación de edificios y complejos industriales en activos hídricos eficientes y autónomos.",
        ods_13_title: "Acción por el Clima",
        ods_13_desc: "Reducción directa de 3,5 toneladas de CO2 anuales por cada unidad instalada, impulsando la descarbonización.",

        roi_title: "Simulador de Impacto Financiero",
        roi_amort: "Amortización ~2.5 años",
        roi_input_label: "Consumo Diario (m³/día)",
        roi_hint: '"Rentable para consumos mayores a 500 m³/día".',
        roi_monthly_gen: "Generación Mensual Est.",
        roi_annual_sav: "Ahorro Anual Estimado",
        roi_calc_note: "Cálculo basado en 0,30€/kWh y generación continua 24/7.",
        roi_how_title: "¿Cómo calculamos tu ahorro?",
        roi_tech_title: "Variables Técnicas",
        roi_tech_desc: "El retorno de ~2.5 años se basa en la constancia del flujo hídrico, la presión nominal de la red y la volatilidad del mercado eléctrico OMIE.",
        roi_env_title: "Impacto Ambiental",
        roi_env_desc: "1.000 kWh/mes equivalen a evitar la emisión de 3.5 toneladas de CO2 anuales, acelerando la obtención de sellos LEED."
    },
    val: {
        nav_about: "Sobre Nosaltres",
        nav_solution: "Solució",
        nav_roi: "Calculadora ROI",
        nav_subsidies: "Subvencions",
        nav_contact: "Contactar",
        
        team_title: "El Nostre Equip Directiu",
        ods_title: "El Nostre Compromís amb l'Agenda 2030 (ODS)",
        ods_7_title: "Energia Assequible i No Contaminant",
        ods_7_desc: "Generació contínua 24/7 de fins a 1.000 kWh mensuals aprofitant fluxos hídrics residuals.",
        ods_9_title: "Indústria, Innovació i Infraestructura",
        ods_9_desc: "Innovació nascuda a la ETSIT per integrar energia renovable en infraestructures ja existents sense impacte visual.",
        ods_11_title: "Ciutats i Comunitats Sostenibles",
        ods_11_desc: "Transformació d'edificis i complexos industrials en actius hídrics eficients i autònoms.",
        ods_13_title: "Acció pel Clima",
        ods_13_desc: "Reducció directa de 3,5 tones de CO2 anuals per cada unitat instal·lada, impulsant la descarbonització.",

        roi_title: "Simulador d'Impacte Financer",
        roi_amort: "Amortització ~2.5 anys",
        roi_input_label: "Consum Diari (m³/dia)",
        roi_hint: '"Rendible per a consums majors a 500 m³/dia".',
        roi_monthly_gen: "Generació Mensual Est.",
        roi_annual_sav: "Estalvi Anual Estimat",
        roi_calc_note: "Càlcul basat en 0,30€/kWh i generació contínua 24/7.",
        roi_how_title: "Com calculem el teu estalvi?",
        roi_tech_title: "Variables Tècniques",
        roi_tech_desc: "El retorn de ~2.5 anys es basa en la constància del flux hídric, la pressió nominal de la xarxa i la volatilitat del mercat elèctric OMIE.",
        roi_env_title: "Impacte Ambiental",
        roi_env_desc: "1.000 kWh/mes equivalen a evitar l'emissió de 3.5 tones de CO2 anuals, accelerant l'obtenció de segells LEED."
    },
    en: {
        nav_about: "About Us",
        nav_solution: "Solution",
        nav_roi: "ROI Calculator",
        nav_subsidies: "Subsidies",
        nav_contact: "Contact",
        
        team_title: "Our Executive Team",
        ods_title: "Our Commitment to the 2030 Agenda (SDGs)",
        ods_7_title: "Affordable and Clean Energy",
        ods_7_desc: "Continuous 24/7 generation of up to 1,000 kWh monthly by harnessing residual water flows.",
        ods_9_title: "Industry, Innovation and Infrastructure",
        ods_9_desc: "Innovation born at ETSIT to integrate renewable energy into existing infrastructures with no visual impact.",
        ods_11_title: "Sustainable Cities and Communities",
        ods_11_desc: "Transformation of buildings and industrial complexes into efficient and autonomous water assets.",
        ods_13_title: "Climate Action",
        ods_13_desc: "Direct reduction of 3.5 tons of annual CO2 per installed unit, driving decarbonization.",

        roi_title: "Financial Impact Simulator",
        roi_amort: "Amortization ~2.5 years",
        roi_input_label: "Daily Consumption (m³/day)",
        roi_hint: '"Profitable for consumption greater than 500 m³/day".',
        roi_monthly_gen: "Est. Monthly Generation",
        roi_annual_sav: "Estimated Annual Savings",
        roi_calc_note: "Calculation based on 0.30€/kWh and continuous 24/7 generation.",
        roi_how_title: "How do we calculate your savings?",
        roi_tech_title: "Technical Variables",
        roi_tech_desc: "The return of ~2.5 years is based on the consistency of the water flow, the nominal pressure of the grid, and the volatility of the OMIE electricity market.",
        roi_env_title: "Environmental Impact",
        roi_env_desc: "1,000 kWh/month is equivalent to avoiding the emission of 3.5 tons of CO2 annually, accelerating the achievement of LEED certifications."
    }
};

function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    applyTranslations(lang);
    updateActiveButton(lang);

    // Lógica para cambiar la imagen en solucion.html
    const mainSchematic = document.getElementById('main-schematic');
    if (mainSchematic) {
        if (lang === 'es') mainSchematic.src = 'Esquema_ES.png';
        if (lang === 'val') mainSchematic.src = 'Esquema_VAL.png';
        if (lang === 'en') mainSchematic.src = 'Esquema_EN.png';
    }
}

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

function updateActiveButton(lang) {
    const buttons = document.querySelectorAll('button[data-lang-btn]');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-lang-btn') === lang) {
            btn.classList.remove('text-gray-500');
            btn.classList.add('text-brand-orange');
            btn.classList.add('font-black');
            btn.classList.remove('font-bold');
        } else {
            btn.classList.remove('text-brand-orange');
            btn.classList.add('text-gray-500');
            btn.classList.add('font-bold');
            btn.classList.remove('font-black');
        }
    });
}

window.onload = () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'es';
    changeLanguage(savedLang);
};
