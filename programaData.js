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
                type: "Apertura de las Jornadas",
                time: "9:00 hs",
                title: "Definir Título",
                auditorium: "Definir auditorium",
                description: "",
                streaming: false,
            },
            {
                type: "Conferencia Central",
                time: "10:30 hs",
                title: "Equipos y Liderazgo. Nuevos paradigmas de conducción. Bioquimica Maria Inez Gonzalez",
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
                title: "Volviendo al futuro. La gestión de un servicio aplicando tecnología de vanguardia.",
                auditorium: "Aulas A-B 2 Piso",
                description: "",
                streaming: false,
            },
            {
                type: "Break",
                time: "10:30 a 11:00 hs",
                title: "",
                auditorium: "",
                description: "",
                streaming: false,
            },
            {
                type: "Mesas redondas",
                time: "11:00 a 12:00 hs",
                title: "Primer consenso institucional de manejo de pie diabético.",
                auditorium: "Aula 2 piso A y B:",
                description_mr: [
                    "Presidente : Dra. Patricia Del Nero",
                    "Secretario:  Dr. Javier Castillo",
                    "",
                    "Expositor:",
                    "Dra. Marcela Guralnik (Diabetes HDFS)",
                    "",
                    "Discutidores:",
                    "Dra. Verónica Alonso (Cirugía vascular / Guardia HDFS)",
                    "Dra. Ana Camporini  (Clínica Médica HDFS)",
                    "Dr. Gabriel Dionisio (Hemodinamia HDFS)",
                    "Dr. Lucas Landolfi (Diabetes HDFS)",
                    "Dr. Luciano Mariani. (Traumatología HDFS)",
                    "Dr. Gustavo Till  (Imágenes HDFS)"
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
                title: "Presentación mesas de temas libres (pendientes)",
                auditorium: "Pendiente",
                description: "Pendiente",
                streaming: false,
            },
            {
                type: "Conferencia",
                time: "9:30 a 10:30 hs",
                title: "Volviendo al futuro. La gestión de un servicio aplicando tecnología de vanguardia.",
                auditorium: "Aulas A-B 2 Piso",
                description: "",
                streaming: true,
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
                $time_type = $('<p class="program-time">').text(`${time} | ${type} | STREAMING`);
            } else {
                $time_type = $('<p class="program-time">').text(`${time} | ${type}`);
            }
            const $auditorium = $('<p>').text(`${auditorium}`);
            const $title = $('<p>').text(`${title}`);


            $description = $('<p>').text(`${description}`);


            if (Array.isArray(description_tl)) {
                $description = $('<div>');
                description_tl.forEach((description) => {
                    $tl_trabajos = $('<div>')
                    $tl_auditorio = $('<p>').text(`${description.auditorium}`);
                    $tl_president = $('<p>').text(`${description.presidente}`);
                    $tl_secretario = $('<p>').text(`${description.secretario}`);
                    $tl_title = $('<p>').text(`${description.title}`);
                    description.trabajos.forEach((trabajo) => {
                        $trabajo_description = $('<p>').text(`${trabajo.description}`);
                        $trabajo_abstract = $('<p>').text(`${trabajo.abstract}`);
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




