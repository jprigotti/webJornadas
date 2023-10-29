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
                abstract: "",
                streaming: false,
            },
            {
                type: "Apertura de las Jornadas",
                time: "9:00 hs",
                title: "Definir Título",
                auditorium: "Definir auditorium",
                description: "",
                abstract: "",
                streaming: false,
            },
            {
                type: "Conferencia Central",
                time: "10:30 hs",
                title: "Equipos y Liderazgo. Nuevos paradigmas de conducción. Bioquimica Maria Inez Gonzalez",
                auditorium: "Definir auditorium",
                description: "",
                abstract: "",
                streaming: false,
            }
        ]
    },
    {
        date: "14 Mar",
        items: [
            {
                type: "Temas libres",
                time: "8:00 a 9:00 hs",
                title: "Presentación mesas de temas libres (pendientes)",
                auditorium: "Pendiente",
                description: "Pendiente",
                abstract: "Link pendiente",
                streaming: false,
            },
            {
                type: "Conferencia",
                time: "9:30 a 10:30 hs",
                title: "Volviendo al futuro. La gestión de un servicio aplicando tecnología de vanguardia.",
                auditorium: "Aulas A-B 2 Piso",
                description: "Pendiente",
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
                abstract: "Link pendiente",
                streaming: false,
            },
            {
                type: "Conferencia",
                time: "9:30 a 10:30 hs",
                title: "Volviendo al futuro. La gestión de un servicio aplicando tecnología de vanguardia.",
                auditorium: "Aulas A-B 2 Piso",
                description: "Pendiente",
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
            const { type, time, title, auditorium, description, abstract, streaming } = data;

            let $time_type;
            if (streaming == true) {
                $time_type = $('<p class="program-time">').text(`${time} | ${type} | STREAMING`);
            } else {
                $time_type = $('<p class="program-time">').text(`${time} | ${type}`);
            }
            const $auditorium = $('<p>').text(`${auditorium}`);
            const $title = $('<p>').text(`${title}`);
            const $description = $('<p>').text(`${description}`);
            const $abstract = $('<p>').text(`${abstract}`);
            // const $pElements = paragraphs.map(paragraph => $('<p>').html(paragraph));

            $outputContainer.append($time_type);
            $outputContainer.append($auditorium);
            $outputContainer.append($title);
            $outputContainer.append($description);
            $outputContainer.append($abstract);
        });

    })


}




