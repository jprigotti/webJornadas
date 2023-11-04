window.onload = () => {
    generatePorgramFromObject(programaDataArray);
}

const programaDataArray = [
    {
        date: "13 Lun",
        items: [
            {
                type: "Inscripciones",
                time: "8:00 a 9:00 hs",
                title: "Inscripciones en AMM",
                auditorium: "AMM 1er piso",
                description: "",
                streaming: false,
            },
            {
                type: "Apertura",
                time: "9:00 hs",
                title: "Apertura de las Jornadas",
                auditorium: "Definir auditorium",
                description: "",
                streaming: false,
            },
            {
                type: "Conferencia Central",
                time: "10:30 hs",
                title: "Equipos y Liderazgo. Nuevos paradigmas de conducción. Bioquímica Maria Inez Gonzalez",
                auditorium: "Definir auditorium",
                description: "",
                streaming: false,
            },
            {
                type: "Vino de honor",
                time: "12:00 hs",
                title: "",
                auditorium: "Definir auditorium",
                description: "",
                streaming: false,
            },
        ]
    },
    {
        date: "14 Mar",
        items: [
            {
                type: "Temas libres",
                time: "8:00",
                title: "",
                auditorium: "",
                description_tl: [
                    {
                        auditorium: "<b>AULA A 2do Piso</b>",
                        presidente: "Discutidores: Dra. Inés García, Dr. Carlos Daona",
                        secretario: "Secretaria: Dra. Lila Blanco",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            Tumor phyllodes maligno a propósito de un caso`,
                            abstract: `
                            <a class="ml-2" href="./docs/abstracts/Tumor Phyllodes maligno a propósito de un caso.pdf" 
                            download="Tumor Phyllodes maligno a propósito de un caso.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            Tumor gástrico de presentación infrecuente: adenoma gigante de glándulas oxínticas`,
                            abstract: `
                            <a href="./docs/abstracts/Tumor gástrico de presentación infrecuente adenoma gigante de glándulas oxínticas.pdf" 
                            download="Tumor gástrico de presentación infrecuente adenoma gigante de glándulas oxínticas.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            Carcinoma papilar in situ en el hombre. A propósito de un caso`,
                            abstract: `
                            <a href="./docs/abstracts/Carcinoma papilar in situ en el hombre. A propósito de un caso.pdf" 
                            download="Carcinoma papilar in situ en el hombre. A propósito de un caso.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            Cáncer de ano. Regresión completa tras radioquimioterapia, presentación de un caso.`,
                            abstract: `
                            <a href="./docs/abstracts/Cáncer de ano. Regresión completa tras radioquimioterapia, presentación de un caso..pdf" 
                            download="Cáncer de ano. Regresión completa tras radioquimioterapia, presentación de un caso..pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                    {
                        auditorium: "<b>AULA D 3er Piso</b>",
                        presidente: "Discutidores: Dra. Silvia Pechini, Dra. Yanina Rodríguez",
                        secretario: "Secreataria: Dra. Julieta Carou",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            Medicina reproductiva la consulta desde un hospital público`,
                            abstract: `
                            <a href="./docs/abstracts/Medicina reproductiva la consulta desde un hospital público.pdf" 
                            download="Medicina reproductiva la consulta desde un hospital público.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            A propósito de un caso: nefrocalcinosis y embarazo.`,
                            abstract: `
                            <a href="./docs/abstracts/A propósito de un caso: nefrocalcinosis y embarazo.pdf" 
                            download="A propósito de un caso: nefrocalcinosis y embarazo.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            Consultorías de salud sexual integral (SSI) en el Centro de Salud y Acción Comunitaria (CeSAC) N°7`,
                            abstract: `
                            <a href="./docs/abstracts/Consultorías de salud sexual integral (SSI) en el Centro de Salud y Acción Comunitaria (CeSAC) N°7.pdf" 
                            download="Consultorías de salud sexual integral (SSI) en el Centro de Salud y Acción Comunitaria (CeSAC) N°7.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            A propósito de un caso: embarazo y esclerosis múltiple`,
                            abstract: `
                            <a href="./docs/abstracts/A propósito de un caso: embarazo y esclerosis múltiple.pdf" 
                            download="A propósito de un caso: embarazo y esclerosis múltiple.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            Educación terapéutica de mujeres con diabetes gestacional (Edugest): datos correspondientes al período de reclutamiento en el Hospital Santojanni`,
                            abstract: `
                            <a href="./docs/abstracts/Educación terapéutica de mujeres con diabetes gestacional.pdf" 
                            download="Educación terapéutica de mujeres con diabetes gestacional.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            `,
                            abstract: `
                            <a href="./docs/abstracts/.pdf" 
                            download=".pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        ]
                    },
                ],
            },
            {
                type: "Conferencia",
                time: "9:30 a 10:30 hs",
                title: "Volviendo al futuro. La gestión de un servicio aplicando tecnología de vanguardia.",
                auditorium: "Aulas A-B 2do Piso",
                description: "Dr. Alejandro Villamil",
                streaming: false,
            },
            {
                type: "Break",
                time: "10:30 a 11:00 hs",
                title: '<span class="material-symbols-outlined">coffee</span>',
                auditorium: "",
                description: "",
                streaming: false,
            },
            {
                type: "Mesas redondas",
                time: "11:00 a 12:00 hs",
                title: "Primer consenso institucional de manejo de pie diabético.",
                auditorium: "Aulas A-B 2do Piso:",
                description_mr: [
                    "<b>Presidente:</b> Dra. Patricia Del Nero",
                    "<b>Secretario:</b>  Dr. Javier Castillo",
                    "",
                    "<b>Expositora:</b> Dra. Marcela Guralnik (Diabetes HDFS)",
                    "",
                    "<b>Discutidores:</b> Dra. Verónica Alonso (Cirugía vascular / Guardia HDFS), Dra. Ana Camporini  (Clínica Médica HDFS), Dr. Gabriel Dionisio (Hemodinamia HDFS), Dr. Lucas Landolfi (Diabetes HDFS), Dr. Luciano Mariani. (Traumatología HDFS), Dr. Gustavo Till  (Imágenes HDFS)"
                ],
                streaming: true,
            },
        ]
    },
    {
        date: "15 Mie",
        items: [
            {
                type: "Temas libres",
                time: "8:00 a 9:00 hs",
                title: "",
                auditorium: "",
                description_tl: [
                    {
                        auditorium: "Auditorio TL1 Pendiente",
                        presidente: "Presidente/a: TM1",
                        secretario: "Vide Presidente: TM1",
                        title: "Trabajos",
                        trabajos: [{
                            description: "TP1",
                            abstract: "link TP1"
                        },
                        {
                            description: "TP2",
                            abstract: "link TP2"
                        }]
                    },
                    {
                        auditorium: "Auditorio TL2 Pendiente",
                        presidente: "Presidente/a: TM2",
                        secretario: "Vide Presidente: TM2",
                        title: "Trabajos",
                        trabajos: [{
                            description: "TP1",
                            abstract: "link TP1"
                        },
                        {
                            description: "TP2",
                            abstract: "link TP2"
                        }
                        ]
                    },
                ],
            },
            {
                type: "Conferencia central",
                time: "9:30 a 10:30 hs",
                title: "Tecnología y liderazgo en la gestión médica del presente.",
                auditorium: "Aulas A-B 2 Piso",
                description: "Ingeniero José Luis Roces",
                streaming: false,
            },
            {
                type: "Break",
                time: "10:30 a 11:00 hs",
                title: '<span class="material-symbols-outlined">coffee</span>',
                auditorium: "",
                description: "",
                streaming: false,
            },
            {
                type: "Mesas redondas",
                time: "11:00 a 12:00 hs",
                title: "LGBTTTIQ y mucho más.  Mirada desde el INADI.  Abordaje integral de las personas trans y no binarias.  Conversatorio",
                auditorium: "Aulas A-B 2do Piso",
                description_mr: [
                    "<b>Presidente:</b> Dr. Matias Caradonti",
                    "<b>Secretaria:</b> Dra. Iael Altclas",
                    "",
                    "<b>Panelistas: </b>Dra. Greta Pena (Titular de INADI), Lic. Andrea Horton (Salud Mental HDFS), Dra. Laura Nieto (Pediatría HDFS), Lic. Nadia Rousselian (Trabajo Social HDFS)",
                ],
                streaming: true,
            },
            {
                type: "Mesas redondas",
                time: "11:00 a 12:00 hs",
                title: "Los costos de la no calidad",
                auditorium: "Aula E 4to Piso",
                description_mr: [
                    "<b>Presidenta:</b> Dra. Silvia Birnenbaum",
                    "<b>Secretario:</b> Dr. Celso Quevedo Figún",
                    "",
                    "<b>Temas:</b>",
                    "- Check-list en quirófano: importancia de la transdisciplina. Lic. Gabriela Bianchi (Instrumentación quirùrgica HDFS)",
                    "- Anestesia segura de principio a fin. Dra. Julieta Subotovsky (Anestesia HDFS)",
                    "- Identificación de pacientes: de los beneficios a la aplicación.  Lic. Jesica Condori (Enfermerìa HDFS)",
                ],
                streaming: false,
            },
        ]
    },
    {
        date: "16 Jue",
        items: [
            {
                type: "Temas libres",
                time: "8:00 a 9:00 hs",
                title: "",
                auditorium: "",
                description_tl: [
                    {
                        auditorium: "Auditorio TL1 Pendiente",
                        presidente: "Presidente/a: TM1",
                        secretario: "Vide Presidente: TM1",
                        title: "Trabajos",
                        trabajos: [{
                            description: "TP1",
                            abstract: "link TP1"
                        },
                        {
                            description: "TP2",
                            abstract: "link TP2"
                        }]
                    },
                    {
                        auditorium: "Auditorio TL2 Pendiente",
                        presidente: "Presidente/a: TM2",
                        secretario: "Vide Presidente: TM2",
                        title: "Trabajos",
                        trabajos: [{
                            description: "TP1",
                            abstract: "link TP1"
                        },
                        {
                            description: "TP2",
                            abstract: "link TP2"
                        }
                        ]
                    },
                ],
            },
            {
                type: "Conferencia",
                time: "9:30 a 10:30 hs",
                title: "Biotecnología y su aplicación en salud",
                auditorium: "Aulas A-B 2 Piso",
                description: "Profesora Tamara Rubilar",
                streaming: false,
            },
            {
                type: "Break",
                time: "10:30 a 11:00 hs",
                title: '<span class="material-symbols-outlined">coffee</span>',
                auditorium: "",
                description: "",
                streaming: false,
            },
            {
                type: "Mesas redondas",
                time: "11:00 a 12:00 hs",
                title: "Del CESAC al Hospital y del Hospital al CESAC: tendiendo puentes y mejorando la accesibilidad.  Conversatorio sobre las dificultades y los ejemplos virtuosos.",
                auditorium: "Aula E 4to Piso",
                description_mr: [
                    "<b>Presidenta:</b> Lic. Natalia Feuring (CESAC 28)",
                    "<b>Secretaria:</b> Dra. Clara Noceti (CESAC 28)",
                    "",
                    "Panelistas:",
                    "Dr. Pablo Scapellato (Infectología HDFS), Enf. Débora Esquivel (Enfermería CESAC 7), Lic. Guadalupe Aranda (Trabajo Social CESAC 4)",
                ],
                streaming: false,
            },
            {
                type: "Mesas redondas",
                time: "11:00 a 12:00 hs",
                title: "Impacto de la tecnología en el concepto de Una Salud",
                auditorium: "Aulas A-B 2do Piso",
                description_mr: [
                    "<b>Presidente:</b> Dr. Marcelo Kaloussek",
                    "<b>Secretaria:</b> Dra. Mónica Giacco",
                    "",
                    "<b>Temas:</b>",
                    "-Sobrecrecimiento bacteriano intestinal (SIBO): qué sabemos y cómo impacta en la salud humana.  Dra. Roxana Roatta. (Gastroenterología HDFS)",
                    "-Resistencia a antimicrobianos y programas de optimización de su uso.  Dra. Ana Kunst (Infectología HDFS)",
                    "-Salud ambiental y bioseguridad en el hospital.   Lic. Claudia Pereyra (Seguridad e Higiene HDFS)",
                ],
                streaming: true,
            },
        ]
    },
    {
        date: "17 Vie",
        items: [
            {
                type: "",
                time: "8:00 a 9:00 hs",
                title: "Presentación de trabajos a premio",
                auditorium: "Auditorium a definir",
                description: "",
                streaming: false,
            },
            {
                type: "Taller",
                time: "9:30 -10:30 hs",
                title: "RCP de alta calidad, desde una mirada interdisciplinaria",
                auditorium: "Aula 2 Piso",
                description_mr: [
                    "<b>Presidente:</b> Lic. Maria Lourdes Laurens",
                    "<b>Coordinadores:</b> Dra. Victoria De Siervi, Dra. Daniela Araujo",
                    "<b>Disertantes:</b> Dra. Mariela Bovone, Dra. Aldana Sarthes, Dra. Gabriela Serrano, Dra. Gabriela Lopez, Lic. Nicolas Suarez, Lic. Mariano Poletti, Lic. Milenka Mollericona",
                ],
                streaming: true,
            },
            {
                type: "Break",
                time: "10:30 a 11:00 hs",
                title: '<span class="material-symbols-outlined">coffee</span>',
                auditorium: "",
                description: "",
                streaming: false,
            },
            {
                type: "Taller",
                time: "11:00 a 12:00 hs",
                title: "De la teoría a la práctica: Resolviendo dudas sobre aislmaiendos de gérmenes multirresistentes",
                auditorium: "Aula 1er Piso (Aula de obstetricia)",
                description_mr: [
                    "<b>Presidente:</b> Dr. Martin Garcia",
                    "<b>Panelistas:</b> Trivisonno Leonel (UCO), Sarthes Aldana (SRS), Barbieri Gonzalo (Clínica), Herbas Pablo (Nefrologia)",
                ],
                streaming: false,
            },
            {
                type: "Mesa redonda",
                time: "11:00 a 12:00 hs",
                title: "¿Qué sabemos de accesibilidad? Desafìos y propuestas",
                auditorium: "Aula 2 Piso A y B",
                description_mr: [
                    "<b>Presidente:</b> Lic. en Sociología Coullery Antonella",
                    "<b>Coordinadores:</b> Lic Luciana Mennielli ",
                    "<b>Panel de discusión:</b> Dra. Caroprese Micaela, Dra. Benitez Sofia, Lic. Micaela Rodriguez",
                    "<b>3 turnos Expositores:</b> (Ramos Delfina, Bareille María Paula), (Gonzalez Rosa, Arias Rocio), (Pinto Jonathan)",
                ],
                streaming: false,
            },
            {
                type: "Mesa redonda",
                time: "11:00 a 12:00 hs",
                title: "Cuidados paliativos: que hacemos y que podríamos hacer",
                auditorium: "Aula 4to Piso  E",
                description_mr: [
                    "<b>Presidente:</b> Dr Bruno Licandro",
                    "<b>Coordinador:</b> Dra. Alvarado Daniela",
                    "<b>Disertantes:</b> Dra. Alba Rocio, Dra. Camila Zoanni, Lic. Sol Del Rosso , Dra. Maschio Melina",
                ],
                streaming: false,
            },
            {
                type: "Mesa redonda",
                time: "11:00 a 12:00 hs",
                title: "Cuidados paliativos: que hacemos y que podríamos hacer",
                auditorium: "Aula 4to Piso E",
                description_mr: [
                    "<b>Presidente:</b> Dr. Bruno Licandro",
                    "<b>Coordinador:</b> Dra. Alvarado Daniela",
                    "<b>Disertantes:</b> Dra. Alba Rocio, Dra. Camila Zoanni, Lic. Sol Del Rosso , Dra. Maschio Melina",
                ],
                streaming: false,
            },
            {
                type: "Mesa redonda",
                time: "11:00 a 12:00 hs",
                title: "Abdomen agudo",
                auditorium: "Aula 4to Piso F",
                description_mr: [
                    "<b>Presidenta:</b> Dra. Carou Julieta",
                    "<b>Coordinadora:</b> Dra. Gaona Victoria",
                    "<b>Disertantes:</b> Dra. Victoria Roca, Dra. Baltazar Alejandra, Dra. Candela Comezañia",
                ],
                streaming: false,
            },
            {
                type: "Mesa redonda",
                time: "11:00 a 12:00 hs",
                title: "Síndrome metabólico: nuevos enfoques terapeuticos",
                auditorium: "Aula 3er Piso D",
                description_mr: [
                    "<b>Presidenta:</b> Leila Eizaguirre",
                    "<b>Coordinadora:</b> Dra. Pastori Yanina",
                    "<b>Disertantes:</b> Dra. Rodas Leslie, Dr. Giovanni Avila Torres, Lic. Gisella Lazaro, Dr. Alvaro Quispe, Dra. Evelyn Gualino",
                ],
                streaming: false,
            },
            {
                type: "",
                time: "12:30 hs",
                title: "Entrega de premios, homenajes y cierre de jornadas",
                auditorium: "Auditorium a definir",
                description: "",
                streaming: false,
            },
            {
                type: "Agape",
                time: "13:00 hs",
                title: "",
                auditorium: "Auditorium a definir",
                description: "",
                streaming: false,
            },

        ]
    }
]


function generatePorgramFromObject(dataArray) {

    dataArray.forEach((data) => {
        let $outputContainer;

        switch (data.date) {
            case '13 Lun':
                $outputContainer = $('#programDay13');
                break;
            case '14 Mar':
                $outputContainer = $('#programDay14');
                break;
            case '15 Mie':
                $outputContainer = $('#programDay15');
                break;
            case '16 Jue':
                $outputContainer = $('#programDay16');
                break;
            case '17 Vie':
                $outputContainer = $('#programDay17');
                break;
        }

        const $dayContainer = $('<div class="program-date"></div>')
        const $day = $('<p>').text(data.date);

        $dayContainer.append($day);
        $outputContainer.append($dayContainer);


        data.items.forEach(data => {
            const { type, time, title, auditorium, description, description_mr, description_tl, streaming } = data;

            let $time_type;
            if (streaming == true) {
                $time_type = $('<p class="program-time">').html(`${time} | ${type} | <span class="program-streaming">STREAMING</span>`);
            } else {
                $time_type = $('<div class="program-time">').html(`<span class="material-symbols-outlined">schedule</span><p>${time} | ${type}</p>`);
            }

            let $auditorium;
            if (auditorium != "") {
                $auditorium = $('<div class="program-auditorium">').html(`<span class="material-symbols-outlined">meeting_room</span><p>${auditorium}</p>`);
            } else {
                $auditorium = $('<div class="program-auditorium">').html(`<p>${auditorium}</p>`);
            }

            let $title
            if (title != "") {
                $title = $('<p class="program-title">').html(`${title}`);
            }

            $description = $('<p>').text(`${description}`);

            if (Array.isArray(description_tl)) {
                $description = $('<div>');
                description_tl.forEach((description) => {
                    $tl_trabajos = $('<div>')
                    $tl_auditorio = $('<div class="program-auditorium">').html(`<span class="material-symbols-outlined">meeting_room</span><p>${description.auditorium}</p>`);
                    $tl_president = $('<p>').html(`${description.presidente}`);
                    $tl_secretario = $('<p>').html(`${description.secretario}`);
                    $tl_title = $('<p>').html(`${description.title}`);
                    description.trabajos.forEach((trabajo) => {
                        $trabajo_description = $('<p>').html(`${trabajo.description}`);
                        $trabajo_abstract = $('<p>').html(`${trabajo.abstract}`);
                        $tl_trabajos.append($trabajo_description, $trabajo_abstract);
                    });
                    $description.append($tl_auditorio, $tl_president, $tl_secretario, $tl_title, $tl_trabajos);
                })
            }

            if (Array.isArray(description_mr)) {
                $description = description_mr.map(item => $('<p>').html(item));
            }


            $outputContainer.append($time_type);
            $outputContainer.append($auditorium);
            $outputContainer.append($title);
            $outputContainer.append($description);
        });

    })


}




