const dataObjectArray = [
    {
        header: 'Autoridades',
        paragraphs: [
            '<b>Presidenta:</b> Dra. Rodriguez Brieschke Maria Teresa ',
            '<b>Vice Presidenta:</b> Dra. Vivona Maria ',
            '<b>Secretario General:</b> Dr. Cosso Daniel',
            '<b>Secretario Adjunto:</b> Dr. Saldarini Fernando',
            '<b>Tesorero:</b> Dr. Iturrieta Pablo',
            '<b>Presidente AMM:</b> Dr. Struminger Marcelo'
        ],
    },
    {
        header: 'Comité científico',
        paragraphs: [
            '<b>Presidente:</b> Dr. Bottaro Edgardo',
            '<b>Secretario:</b>  Dr. Katz Marcelo',
            '<b>Vocales:</b> Dr. Leiguarda Fernando, Lic. Vicenzino Mariana, Rossi Pamela, Dra. Greco Alejandra, Lic. Gregorio Florencia, Guazzaroni Carla, Dra. Geronaso Veronica,  Dr. Ochoa Fabricio, Dr. Gastón Gomez , Daher Jose Barrera Valeria, Dr. Daher Jose, Antonio Pilipek, Dra. Monica Giacco, Dr. Cordoba Pablo, Lini Marina',
        ],
    },
    {
        header: 'Comité de mesas redondas',
        paragraphs: [
            '<b>Presidente:</b> Dr. Alvaro Otreras',
            '<b>Secretario:</b> Dr. Scapellato Pablo',
            '<b>Vocales:</b> Dr. Carodonti Matias, Dr. Mariani Luciano, Dr. Keller Guillermo, Farmaceùtica Vaccaro Roxana,  Dra. Arakaki Haydee, Dra. Cortes Andrea',
        ],
    },
    {
        header: 'Comité de conferencias',
        paragraphs: [
            '<b>Presidente:</b> Dr. Kevorkian Ruben',
            '<b>Secretario:</b> Dr. Ariel Estevez',
            '<b>Vocales:</b> Bioquímica Clauida Alfonso, Dra. Scibeta Flavia, Dra. Teodora Sahores, Dr. Pablo Manjarín',
        ],
    },
    {
        header: 'Comité de temas libres',
        paragraphs: [
            '<b>Presidente:</b> Dr. Retamozo Caceres José',
            '<b>Secretaria:</b> Dra. Gil Daniela',
            '<b>Vocales:</b> Dr. Joaquin Saldaño, Dra. Lopez Dafne, Bioquimica Ormazabal Cecilia, Dra. Agustina Vendramini',
        ],
    },
    {
        header: 'Comité de relaciones públicas',
        paragraphs: [
            '<b>Presidenta:</b> Dra. Pechini Silvia',
            '<b>Secretaria:</b> Dra. Mazzeo Silvina',
            '<b>Vocales:</b>  Dra. Orrigo Carolina',
        ],
    },
    {
        header: 'Comité de informàtica y redes sociales',
        paragraphs: [
            '<b>Presidente:</b> Dr. Santangelo Pablo ',
            '<b>Secretario:</b> ',
            '<b>Vocales:</b> Dra. Del Giudice Gabriela, Dr. Ruben Correa, Dra. Evelina Makara, Marcelo Corigliano, Juan Pablo Rigotti, Julian Nardi, Santiago Miguel Fiorino, Lic. Lerner Melisa, Lic. Dainana Cichello',
        ],
    },
    {
        header: 'Comité de recepción y actos públicos',
        paragraphs: [
            '<b>Presidente:</b> Dr. Ahemd Sabra ',
            '<b>Secretaria:</b> Bioquímica Silvia Birnembaum',
            '<b>Vocales:</b> Dra. De Biasi Nancy, Dr. Szwarcman Oscar,  Lic. Maria Ines Marquez ',
        ],
    },
    {
        header: 'Comité de cultura',
        paragraphs: [
            '<b>Presidente:</b> Gachy Suarez',
            '<b>Secretaria:</b> Cecilia Ormazabal',
            '<b>Vocales:</b>  German Conde,  Osvaldo Sinchicay, Teodora Sahores, Carrizo Maria Esther',
        ],
    },
    {
        header: 'Comité asesor',
        paragraphs: [
            'Dr. Ruben Luca',
            'Dra. Guillermina Armestica',
        ],
    },
    {
        header: 'Comité de area programática',
        paragraphs: [
            '<b>Presidenta:</b> Dra. Florencia Visillac',
            '<b>Secretaria:</b> Dra. Claudia Falotico',
            '<b>Vocales:</b> Lic. Suban Cinthia,  Lic.Tiburi Daniela, Dra. Amalia Pasos'
        ],
    },
    {
        header: 'Comité residentes y concurrentes',
        paragraphs: [
            '<b>Presidenta:</b> Dra. Silvina Lucilli',
            '<b>Secretario:</b> Dr. Javier Castillo',
            '<b>Vocales:</b> Dr. Bruno Licandro, Dr. Martìn Garcia, Dra. Rocio Alba, Lic. Lourdes Laurens, Lic. Abigail Quiroga, Lic. Lourdes Belay, Dra. Maria Jose Butiler, Dra. Sofia Cribario, Dra. Julieta Carou, Dra. Daniela Araujo, Dra. Magali Vazquez, Dra. Victoria Di Siervi, Dr. Frank Garcia Mendoza, Lic. Moreira Del Corral Macarena, Lic. Arias Rocio, Socióloga Coullery Antonella, Lic. Ponce Sofia'
        ],
    },

];


function generateHTMLFromObject(dataArray) {

    dataArray.forEach(data => {
        const { header, paragraphs } = data;

        const $outputContainer = $('#comisiones');
        const $h1Element = $('<h3>').text(header);
        const $pElements = paragraphs.map(paragraph => $('<p>').html(paragraph));

        $outputContainer.append($h1Element);
        $outputContainer.append($pElements);
    });
}


generateHTMLFromObject(dataObjectArray);