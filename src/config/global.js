export default {
  global: {
    componenteFormativo: 'Planificación de la evaluación de la seguridad digital',
    descripcionCurso:
      'Mediante este componente, el aprendiz se capacitará en la identificación de aspectos clave del proceso de evaluación de estrategias de seguridad en organizaciones, fase orientada por el estándar ISO/IEC 27001:2013. Se afianzará en verificar la efectividad de controles de seguridad implementados y, a partir de esta evaluación, establecer propuestas de mejoramiento de la seguridad de activos de información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fases Sistema de gestión de seguridad de la información',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de auditoría',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipos de auditoría',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Definiciones y elementos fundamentales de la auditoría',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Consideraciones importantes para una auditoría',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Principios de auditoría',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Fases de la auditoría',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Clasificación de auditoría informáticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Perfil del auditor',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Metodología para la auditoría en sistemas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Aplicación de mediciones de seguridad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228124_CF09_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Principios de auditoría',
      referencia: 'Organización Internacional de Normalización (2013). <em>Seguridad de la información, ciberseguridad y protección de la privacidad.</em> (ISO 27001).',
      tipo: 'Norma técnica',
      link: 'https://www.iso.org/standard/54534.html',
    },
  ],
  glosario: [
    {
      termino: 'Atributo',
      significado: 'cualquier propiedad o característica que permite distinguir un objeto de otro.',
    },
    {
      termino: 'Escala',
      significado: 'rango de valores organizados con los cuales se evalúa un atributo.',
    },
    {
      termino: 'Evidencia',
      significado: 'información suficiente que respalda alguna acción.',
    },
    {
      termino: 'Indicador',
      significado: 'son unidades que permiten medir el desempeño o desarrollo de alguna acción o de algún control.',
    },
    {
      termino: 'Métrica',
      significado: 'conjunto de criterios y condiciones necesarios para medir un control o una acción.',
    },
    {
      termino: 'SGSI',
      significado: ' Sistema de Gestión de la Seguridad de la Información.',
    },
  ],
  referencias: [
    {
      referencia: 'Instituto Nacional de Ciberseguridad (2015). <em>¿Sabes cómo se mide la seguridad de la información en tu empresa?</em> INCIBE. ',
      link: 'https://www.incibe.es/protege-tu-empresa/blog/mide-seguridad-informacion',
    },
    {
      referencia: 'ISO (2020). <em>Evaluación del desempeño en ISO 27001.</em> (ISO 27001).',
      link: 'https://normaiso27001.es/evaluacion-del-desempeno-en-iso-27001/',
    },
    {
      referencia: 'ISO (2020). <em>Fase 8 auditoría interna según ISO 27001.</em> (ISO 27001).',
      link: 'https://normaiso27001.es/fase-8-auditoría-interna-segun-iso-27001/',
    },
    {
      referencia: 'ISO (2018). <em>Directrices para la auditoría de los sistemas de gestión.</em> (ISO 19011)',
      link: 'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=75245',
    },
    {
      referencia: 'Ministerio de Tecnologías de la Información y Comunicaciones (2016). <em>Guía de Auditoría.</em> MINTIC.',
      link: 'https://www.mintic.gov.co/gestionti/615/articles-5482_G15_Auditoría.pdf',
    },
    {
      referencia: 'Organización Internacional de Normalización (ISO, 2013). <em>Tecnología de la información - Técnicas de seguridad - Sistemas de gestión de seguridad de la información - Requisitos.</em> (ISO 27001).',
      link: 'https://www.iso.org/standard/54534.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eddy Cárdenas',
          cargo: 'Experto temático',
          centro:
            'Regional Quindío - Centro de comercio, industria y turismo',
        },
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Experto temático',
          centro:
            'Regional Tolima - Centro Comercio y Servicios',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseño instruccional',
          centro:
            'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrección de estilo',
          centro:
            'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suarez Eljure',
          cargo: 'Diseño web',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Adriana Marcela Suarez Eljure',
          cargo: 'Ilustración',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
