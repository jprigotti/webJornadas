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
                auditorium: "Aulas A-B 2do Piso",
                description: "",
                streaming: false,
            },
            {
                type: "Conferencia Central",
                time: "10:30 hs",
                title: "Equipos y Liderazgo. Nuevos paradigmas de conducción. Bioquímica Maria Inez Gonzalez",
                auditorium: "Aulas A-B 2do Piso",
                description: "",
                streaming: false,
            },
            {
                type: "Vino de honor",
                time: "12:00 hs",
                title: "",
                auditorium: "Aulas A-B 2do Piso",
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
                            1. Tumor phyllodes maligno a propósito de un caso`,
                            abstract: `
                            <a href="./docs/abstracts/Tumor Phyllodes maligno a propósito de un caso.pdf" 
                            download="Tumor Phyllodes maligno a propósito de un caso.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Tumor gástrico de presentación infrecuente: adenoma gigante de glándulas oxínticas`,
                            abstract: `
                            <a href="./docs/abstracts/Tumor gástrico de presentación infrecuente adenoma gigante de glándulas oxínticas.pdf" 
                            download="Tumor gástrico de presentación infrecuente adenoma gigante de glándulas oxínticas.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Carcinoma papilar in situ en el hombre. A propósito de un caso`,
                            abstract: `
                            <a href="./docs/abstracts/Carcinoma papilar in situ en el hombre. A propósito de un caso.pdf" 
                            download="Carcinoma papilar in situ en el hombre. A propósito de un caso.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Cáncer de ano. Regresión completa tras radioquimioterapia, presentación de un caso.`,
                            abstract: `
                            <a href="./docs/abstracts/Cáncer de Ano. Regresión completa tras radioquimioterapia, presentación de un caso.pdf" 
                            download="Cáncer de Ano. Regresión completa tras radioquimioterapia, presentación de un caso.pdf">
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
                            1. Medicina reproductiva la consulta desde un hospital público`,
                            abstract: `
                            <a href="./docs/abstracts/Medicina reproductiva la consulta desde un hospital público.pdf" 
                            download="Medicina reproductiva la consulta desde un hospital público.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. A propósito de un caso: nefrocalcinosis y embarazo`,
                            abstract: `
                            <a href="./docs/abstracts/A propósito de un caso nefrocalcinosis y embarazo.pdf" 
                            download="A propósito de un caso nefrocalcinosis y embarazo.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Consultorías de salud sexual integral (SSI) en el Centro de Salud y Acción Comunitaria (CeSAC) N°7`,
                            abstract: `
                            <a href="./docs/abstracts/Consultorías de Salud Sexual Integral.pdf" 
                            download="Consultorías de Salud Sexual Integral.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. A propósito de un caso: embarazo y esclerosis múltiple`,
                            abstract: `
                            <a href="./docs/abstracts/A propósito de un caso Embarazo y Esclerosis Múltiple.pdf" 
                            download="A propósito de un caso Embarazo y Esclerosis Múltiple.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            5. Educación terapéutica de mujeres con diabetes gestacional (Edugest): datos correspondientes al período de reclutamiento en el Hospital Santojanni`,
                            abstract: `
                            <a href="./docs/abstracts/Educación terapéutica de mujeres con diabetes gestacional.pdf" 
                            download="Educación terapéutica de mujeres con diabetes gestacional.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                    {
                        auditorium: "<b>AULA E 4to Piso</b>",
                        presidente: "Discutidores: Dra. Gabriela Molina, Dra. Paula Ceriana",
                        secretario: "Secreataria: Dra. Nadia De Cárdenas",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            1. Fístula cutánea por oblito`,
                            abstract: `
                            <a href="./docs/abstracts/Fístula cutánea por oblito.pdf" 
                            download="Fístula cutánea por oblito.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Tratamiento percutáneo de bilirragia posoperatoria`,
                            abstract: `
                            <a href="./docs/abstracts/Tratamiento percutáneo de bilirragia posoperatoria.pdf" 
                            download="Tratamiento percutáneo de bilirragia posoperatoria.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Comparación de drenaje biliar percutáneo guiado con ﬂuoroscopía y con ecografía: nuestra experiencia`,
                            abstract: `
                            <a href="./docs/abstracts/Comparación de drenaje biliar percutáneo guiado con ﬂuoroscopía y con ecografía nuestra experiencia.pdf" 
                            download="Comparación de drenaje biliar percutáneo guiado con ﬂuoroscopía y con ecografía nuestra experiencia.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Neumoperitoneo espontáneo: presentación de un caso`,
                            abstract: `
                            <a href="./docs/abstracts/Neumoperitoneo espontaneo presentación de un caso.pdf" 
                            download="Neumoperitoneo espontaneo presentación de un caso.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            5. Pseudoquiste pancreático gigante postoperatorio: un caso de resolución percutánea `,
                            abstract: `
                            <a href="./docs/abstracts/Pseudoquiste pancreático gigante postoperatorio Un caso de resolución percutánea.pdf" 
                            download="Pseudoquiste pancreático gigante postoperatorio Un caso de resolución percutánea.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            6. Tratamiento percutáneo de absceso de psoas: nuestra experiencia `,
                            abstract: `
                            <a href="./docs/abstracts/Tratamiento percutáneo de Absceso de psoas Nuestra experiencia.pdf" 
                            download="Tratamiento percutáneo de Absceso de psoas Nuestra experiencia.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                    {
                        auditorium: "<b>AULA F 4to Piso</b>",
                        presidente: "Discutidores: Dra. Daniela D´Alessandro, Dra. Eugenia Wamba",
                        secretario: "Secreataria: Dra. Marina Lini",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            1. Mujeres migrantes viviendo con VIH. Vulnerabilidades e inequidades en salud`,
                            abstract: `
                            <a href="./docs/abstracts/Mujeres migrantes viviendo con VIH. Vulnerabilidades e inequidades en salud.pdf" 
                            download="Mujeres migrantes viviendo con VIH. Vulnerabilidades e inequidades en salud.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Dengue: situación del brote 2023 en el Hospital de Agudos Donación Francisco Santojanni`,
                            abstract: `
                            <a href="./docs/abstracts/Dengue situación del brote 2023 en el Hospital de Agudos Donación Francisco Santojanni.pdf" 
                            download="Dengue situación del brote 2023 en el Hospital de Agudos Donación Francisco Santojanni.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Consumo de tabaco en personas con VIH asistidas en el consultorio externo de infectología del Hospital General de Agudos Donación Francisco Santojanni.`,
                            abstract: `
                            <a href="./docs/abstracts/Consumo de tabaco en personas con VIH asistidas en el consultorio externo de infectología.pdf" 
                            download="Consumo de tabaco en personas con VIH asistidas en el consultorio externo de infectología.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Implementación del programa VIHDA, una herramienta tecnológica para la vigilancia de las infecciones asociadas a los cuidados de la salud`,
                            abstract: `
                            <a href="./docs/abstracts/Implementación del programa VIHDA.pdf" 
                            download="Implementación del programa VIHDA.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            5. Test rápido dúo. Un análisis sobre los resultados alcanzados respecto a la detección de sífilis en población general `,
                            abstract: `
                            <a href="./docs/abstracts/Test Rápido Dúo. Un análisis sobre los resultados alcanzados respecto a la detección de Sífilis en población general.pdf" 
                            download="Test Rápido Dúo. Un análisis sobre los resultados alcanzados respecto a la detección de Sífilis en población general.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            6. Análisis de frecuencia de VIH y sífilis en la población que acudió al CEPAD del CESAC 4`,
                            abstract: `
                            <a href="./docs/abstracts/Análisis de frecuencia de VIH y sífilis en la población que acudió al CEPAD del CESAC 4.pdf" 
                            download="Análisis de frecuencia de VIH y sífilis en la población que acudió al CEPAD del CESAC 4.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                ],
            },
            {
                type: "Apertura",
                time: "9:15 hs",
                title: "Dr. Fernán González Bernaldo de Quirós",
                auditorium: "Aulas A-B 2do Piso",
                description: "Ministro de Salud del GCABA",
                streaming: false,
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
                time: "8:00 hs",
                title: "",
                auditorium: "",
                description_tl: [
                    {
                        auditorium: "<b>AULA A 2do Piso</b>",
                        presidente: "Discutidores: Dra. Jimena Figoni, Dr. Bruno Licandro",
                        secretario: "Secreataria: Dra. Juliana Caccavo",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            1. Angiografía cerebral negativa en paciente con hemorragia subaracnoidea`,
                            abstract: `
                            <a href="./docs/abstracts/Angiografía cerebral negativa en paciente con hemorragia subaracnoidea.pdf" 
                            download="Angiografía cerebral negativa en paciente con hemorragia subaracnoidea.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Criptococosis meníngea e hidrocefalia como debut de HIV/SIDA`,
                            abstract: `
                            <a href="./docs/abstracts/Criptococosis meníngea e hidrocefalia como debut de HIV.pdf" 
                            download="Criptococosis meníngea e hidrocefalia como debut de HIV.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Rol de la biopsia por estereotaxia en lesión cerebral atípica en paciente HIV`,
                            abstract: `
                            <a href="./docs/abstracts/Rol de la biopsia por estereotaxia en lesión cerebral atípica en paciente HIV.pdf" 
                            download="Rol de la biopsia por estereotaxia en lesión cerebral atípica en paciente HIV.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Compromiso del sistema nervioso central por enfermedad de Chagas en paciente con síndrome de inmunodeficiencia adquirida de reciente diagnóstico`,
                            abstract: `
                            <a href="./docs/abstracts/Compromiso del sistema nervioso central por enfermedad de chagas.pdf" 
                            download="Compromiso del sistema nervioso central por enfermedad de chagas.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                    {
                        auditorium: "<b>AULA D 3er Piso</b>",
                        presidente: "Discutidores: Dra. Lucía Pez, Dra. Leticia Andina",
                        secretario: "Secreataria: Dra. María Fernanda Beccaglia",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            1. Incontinencia pigmenti serie de casos`,
                            abstract: `
                            <a href="./docs/abstracts/Incontinencia Pigmenti serie de casos.pdf" 
                            download="Incontinencia Pigmenti serie de casospdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Implementación de un consultorio de infectología para la diversidad sexual (CIDS) en un hospital público de CABA: Experiencia en los primeros 6 meses`,
                            abstract: `
                            <a href="./docs/abstracts/Implementación de un consultorio de infectología para la diversidad sexual.pdf" 
                            download="Implementación de un consultorio de infectología para la diversidad sexual.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Reporte de un caso clínico: penfigoide ocular cicatrizal en un paciente con artritis reumatoidea`,
                            abstract: `
                            <a href="./docs/abstracts/Reporte de un caso clínico penfigoide ocular cicatrizal en un paciente con artritis reumatoidea.pdf" 
                            download="Reporte de un caso clínico penfigoide ocular cicatrizal en un paciente con artritis reumatoidea.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Prevalencia de controles periódicos de salud en pacientes internados en Hospital Donación Francisco Santojanni en septiembre del 2023`,
                            abstract: `
                            <a href="./docs/abstracts/Prevalencia de controles periódicos de salud en pacientes internados en Hospital.pdf" 
                            download="Prevalencia de controles periódicos de salud en pacientes internados en Hospital.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            5. Mastocitosis cutánea difusa, desafío diagnóstico y terapéutico`,
                            abstract: `
                            <a href="./docs/abstracts/Mastocitosis cutánea difusa, desafío diagnóstico y terapéutico.pdf" 
                            download="Mastocitosis cutánea difusa, desafío diagnóstico y terapéutico.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            6. Actividad de consultorio externo y registro de la misma. Diferencias en los sistemas del Hospital  Santojanni. Desafío de calidad`,
                            abstract: `
                            <a href="./docs/abstracts/Actividad de consultorio externo y registro de la misma.pdf" 
                            download="Actividad de consultorio externo y registro de la misma.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                    {
                        auditorium: "<b>AULA E 4to Piso</b>",
                        presidente: "Discutidores: Dra. Sandra Eidner, Dra. Silvina Pasarin, Dr. Carlos Mangone",
                        secretario: "Secreataria: Lic. Nadia Roussilian",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            1. Acompañamiento a familias de niños, niñas y adolescentes con discapacidad`,
                            abstract: `
                            <a href="./docs/abstracts/Acompañamiento a familias de Niños, Niñas y Adolescentes con discapacidad.pdf" 
                            download="Acompañamiento a familias de Niños, Niñas y Adolescentes con discapacidad.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Evaluación del perfil sensorial en pacientes con sospecha de trastorno del desarrollo: a propósito de un caso`,
                            abstract: `
                            <a href="./docs/abstracts/Evaluación del perfil sensorial en pacientes con sospecha de trastorno del desarrollo a propósito de un caso.pdf" 
                            download="Evaluación del perfil sensorial en pacientes con sospecha de trastorno del desarrollo a propósito de un caso.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Salud escolar... ¿Sólo un screening?`,
                            abstract: `
                            <a href="./docs/abstracts/Salud Escolar.pdf" 
                            download="Salud Escolar.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Importancia de la evaluación neurocognitiva en los trastornos del desarrollo`,
                            abstract: `
                            <a href="./docs/abstracts/Importancia de la evaluación neurocognitiva en los trastornos del desarrollo.pdf" 
                            download="Importancia de la evaluación neurocognitiva en los trastornos del desarrollo.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            5. Problemas de salud prevalentes en niños/as de sala de 5 en el ámbito del Programa Escolar de Salud Escolar del GCBA, CeSAC n° 29, 2022`,
                            abstract: `
                            <a href="./docs/abstracts/Problemas de salud prevalentes CeSAC29.pdf" 
                            download="Problemas de salud prevalentes CeSAC29.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            6. Prevalencia de TEA en el consultorio de neurodesarrollo durante el período enero - agosto de 2023`,
                            abstract: `
                            <a href="./docs/abstracts/Prevalencia de TEA en el consultorio de neurodesarrollo durante el período enero - agosto de 2023.pdf" 
                            download="Prevalencia de TEA en el consultorio de neurodesarrollo durante el período enero - agosto de 2023.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                    {
                        auditorium: "<b>AULA F 4to Piso</b>",
                        presidente: "Discutidores: Dr. Luis Parada, Dr. Sebastián Lima",
                        secretario: "Secreatario: Dr. Lucas Sánchez",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            1. Clasificación de Copeland para heridas de arma de fuego de extremidades: experiencia interdisciplinaria inicial`,
                            abstract: `
                            <a href="./docs/abstracts/Clasificación de Copeland para heridas de arma de fuego de extremidades experiencia interdisciplinaria inicial.pdf" 
                            download="Clasificación de Copeland para heridas de arma de fuego de extremidades experiencia interdisciplinaria inicial.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Ejercicio físico en una cohorte de pacientes que asisten a un consultorio de reumatología`,
                            abstract: `
                            <a href="./docs/abstracts/Ejercicio físico en una cohorte de pacientes que asisten a un consultorio de Reumatología.pdf" 
                            download="Ejercicio físico en una cohorte de pacientes que asisten a un consultorio de Reumatología.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Qué conocemos sobre absceso de psoas ilíaco?: Serie de once casos en el Hospital Santojanni`,
                            abstract: `
                            <a href="./docs/abstracts/Qué conocemos sobre absceso de psoas ilíaco Serie de once casos en el Hospital Santojanni.pdf" 
                            download="Qué conocemos sobre absceso de psoas ilíaco Serie de once casos en el Hospital Santojanni.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Actividad física en una cohorte de pacientes con osteoartritis de rodilla y/o cadera`,
                            abstract: `
                            <a href="./docs/abstracts/Actividad física en una cohorte de pacientes con osteoartritis de rodilla.pdf" 
                            download="Actividad física en una cohorte de pacientes con osteoartritis de rodilla.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            5. Sindrome de Brown-Séquard como consecuencia de contusión medular`,
                            abstract: `
                            <a href="./docs/abstracts/Sindrome de Brown-Séquard como consecuencia de contusión medular.pdf" 
                            download="Sindrome de Brown-Séquard como consecuencia de contusión medular.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            6. Fístula perianal: Nuestra experiencia en su tratamiento con fistulotomía más sedal`,
                            abstract: `
                            <a href="./docs/abstracts/Fístula perianal Nuestra experiencia en su tratamiento con fistulotomía más sedal.pdf" 
                            download="Fístula perianal Nuestra experiencia en su tratamiento con fistulotomía más sedal.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                ],
            },
            {
                type: "Conferencia central",
                time: "9:30 hs",
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
                        auditorium: "<b>AULA A 2do Piso</b>",
                        presidente: "Discutidores: Dra. Gabriela Cortés, Dra. Beatriz Lauge",
                        secretario: "Secreataria: Dra. Daniela Araujo",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            1. A propósito de un caso: Enfermedad invasiva por Streptococcus pyogenes, complicación inusual en pediatría`,
                            abstract: `
                            <a href="./docs/abstracts/A propósito de un caso Enfermedad invasiva por Streptococcus pyogenes, complicación inusual en Pediatría.pdf" 
                            download="A propósito de un caso Enfermedad invasiva por Streptococcus pyogenes, complicación inusual en Pediatría.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Prevalencia de alteraciones clínico metabólicas en niños y adolescentes obesos`,
                            abstract: `
                            <a href="./docs/abstracts/Prevalencia de alteraciones clínico metabólicas en niños y adolescentes obesos.pdf" 
                            download="Prevalencia de alteraciones clínico metabólicas en niños y adolescentes obesos.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. A propósito de un caso: meningitis por Haemophilus inﬂuenzae en lactante menor de 3 meses`,
                            abstract: `
                            <a href="./docs/abstracts/A propósito de un caso Meningitis por Haemophilus inﬂuenzae en lactante menor de 3 meses.pdf" 
                            download="A propósito de un caso Meningitis por Haemophilus inﬂuenzae en lactante menor de 3 meses.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Tamizaje de Infección congénita por citomegalovirus. Diagnóstico oportuno en neonatos`,
                            abstract: `
                            <a href="./docs/abstracts/Tamizaje de Infección congénita por citomegalovirus. Diagnóstico oportuno en neonatos.pdf" 
                            download="Tamizaje de Infección congénita por citomegalovirus. Diagnóstico oportuno en neonatos.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                    {
                        auditorium: "<b>AULA D 3er Piso</b>",
                        presidente: "Discutidores: Dr. Eduardo Fiore, Dr. Gustavo Lanosa",
                        secretario: "Secreataria: Dra. Sofía Cibrario",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            1. Enfermedad coronaria y consumo de cocaína: registro de pacientes y sus características`,
                            abstract: `
                            <a href="./docs/abstracts/Enfermedad coronaria y consumo de cocaína registro de pacientes y sus características.pdf" 
                            download="Enfermedad coronaria y consumo de cocaína registro de pacientes y sus características.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Estenosis aórtica y embarazo`,
                            abstract: `
                            <a href="./docs/abstracts/Estenosis aortica y embarazo.pdf" 
                            download="Estenosis aortica y embarazo.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Mortalidad intrahospitalaria según la clasificación de SCAI Shock en pacientes ingresados a unidad coronaria durante el 2022`,
                            abstract: `
                            <a href="./docs/abstracts/Mortalidad intrahospitalaria según la clasificación de SCAI Shock en pacientes ingresados a unidad coronaria durante el 2022.pdf" 
                            download="Mortalidad intrahospitalaria según la clasificación de SCAI Shock en pacientes ingresados a unidad coronaria durante el 2022.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Trastornos hipertensivos del embarazo y factores de riesgo`,
                            abstract: `
                            <a href="./docs/abstracts/Trastornos hipertensivos del embarazo y factores de riesgo.pdf" 
                            download="Trastornos hipertensivos del embarazo y factores de riesgo.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            5. Determinación de la velocidad de onda de pulso en individuos postpandemia`,
                            abstract: `
                            <a href="./docs/abstracts/Determinacion de la velocidad de onda de pulso en individuos pos pandemia.pdf" 
                            download="Determinacion de la velocidad de onda de pulso en individuos pos pandemia.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                    {
                        auditorium: "<b>AULA E 4to Piso</b>",
                        presidente: "Discutidores: Dra. Pamela Rossi, Lic. Lourdes Laurenz",
                        secretario: "Secreatario: Dr. Giovanni Avila Torres",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            1. Secuelas respiratorias clínicas, funcionales y tomográficas de pacientes hospitalizados por COVID-19 al año del diagnóstico: estudio Secuelar-19`,
                            abstract: `
                            <a href="./docs/abstracts/Secuelas respiratorias clínicas, funcionales y tomográficas de pacientes hospitalizados por covid-19.pdf" 
                            download="Secuelas respiratorias clínicas, funcionales y tomográficas de pacientes hospitalizados por covid-19.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Rehabilitación respiratoria`,
                            abstract: `
                            <a href="./docs/abstracts/Rehabilitación respiratoria.pdf" 
                            download="Rehabilitación respiratoria.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Un nuevo programa de tuberculosis centrado en la atención del paciente para favorecer la adherencia al tratamiento`,
                            abstract: `
                            <a href="./docs/abstracts/Un nuevo programa de Tuberculosis centrado en la atención del paciente, para favorecer la adherencia al tratamiento.pdf" 
                            download="Un nuevo programa de Tuberculosis centrado en la atención del paciente, para favorecer la adherencia al tratamiento.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Estudio descriptivo de la atención de pacientes asmáticos graves en consultorio especializado`,
                            abstract: `
                            <a href="./docs/abstracts/Estudio descriptivo de la atención de pacientes asmáticos graves en consultorio especializado.pdf" 
                            download="Estudio descriptivo de la atención de pacientes asmáticos graves en consultorio especializado.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            5. ¿Cómo llega el paciente asmático al servicio de emergencia del Hospital Santojanni?`,
                            abstract: `
                            <a href="./docs/abstracts/Cómo llega el paciente asmático al servicio de emergencia del Hospital Santojanni.pdf" 
                            download="Cómo llega el paciente asmático al servicio de emergencia del Hospital Santojanni.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                    {
                        auditorium: "<b>AULA F 4to Piso</b>",
                        presidente: "Discutidores: Dra. Elizabeth Sanguinetti, Dra. Nancy Di Biasi",
                        secretario: "Secreataria: Dra. Paola Villán Ozuna",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            1. Urgencias hematológicas: púrpura trombocitopénica trombótica (PTT), a propósito de un caso`,
                            abstract: `
                            <a href="./docs/abstracts/Urgencias hematológicas púrpura trombocitopénica trombótica (PTT), a propósito de un caso.pdf" 
                            download="Urgencias hematológicas púrpura trombocitopénica trombótica (PTT), a propósito de un caso.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Infiltración del sistema nervioso central por linfoma de Burkitt en paciente con VIH/sida`,
                            abstract: `
                            <a href="./docs/abstracts/Infiltración del sistema nervioso central por Linfoma de Burkitt en paciente con VIH.pdf" 
                            download="Infiltración del sistema nervioso central por Linfoma de Burkitt en paciente con VIH.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Evaluación de la calidad de los concentrados de glóbulos rojos producidos en un banco de sangre  intrahospitalario de acuerdo a las normas internacionales`,
                            abstract: `
                            <a href="./docs/abstracts/Evaluación de la calidad de los concentrados de glóbulos rojos.pdf" 
                            download="Evaluación de la calidad de los concentrados de glóbulos rojos.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Cefalea síntoma frecuente en la consulta ¿cómo abordarlo? a propósito de un caso`,
                            abstract: `
                            <a href="./docs/abstracts/Cefalea síntoma frecuente en la consulta.pdf" 
                            download="Cefalea síntoma frecuente en la consulta.pdf">
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
                title: "Biotecnología y su aplicación en salud",
                auditorium: "Aulas A-B 2 Piso",
                description: "Profesora Tamara Rubilar",
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
                    "-Salud ambiental y bioseguridad en el hospital. Lic. Claudia Reynoso (Seguridad e Higiene HDFS)",
                ],
                streaming: true,
            },
        ]
    },
    {
        date: "17 Vie",
        items: [
            {
                type: "Trabajos a Premio",
                time: "8:00 hs",
                title: "",
                auditorium: "",
                description_tl: [
                    {
                        auditorium: "<b>Aula D 3er Piso - Mesa 1</b>",
                        presidente: "Discutidores: Dr. Marcelo Katz, Dra. Jimena Figoni, Lic. Esteban Orsini",
                        secretario: "",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            1. Información, opinión y acceso a la vacunación contra COVID-19 en adolescentes. Estudio cualitativo en adolescentes que asisten al CeSAC 28`,
                            abstract: `
                            <a href="./docs/abstracts/Información, opinión y acceso a la vacunación contra COVID-19 en adolescentes.pdf" 
                            download="Información, opinión y acceso a la vacunación contra COVID-19 en adolescentes.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Características y resultados de la evaluación de la deglución en sujetos con accidente cerebro vascular isquémico: estudio descriptivo`,
                            abstract: `
                            <a href="./docs/abstracts/Características y resultados de la evaluación de la deglución en sujetos con accidente cerebro vascular isquémico.pdf" 
                            download="Características y resultados de la evaluación de la deglución en sujetos con accidente cerebro vascular isquémico.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Predictores de outcome en aneurismas cerebrales rotos`,
                            abstract: `
                            <a href="./docs/abstracts/Predictores de outcome en aneurismas cerebrales rotos.pdf" 
                            download="Predictores de outcome en aneurismas cerebrales rotos.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Técnica alternativa low-cost para el diagnóstico de síndrome de Hakim-Adams: nota técnica y reporte de un caso`,
                            abstract: `
                            <a href="./docs/abstracts/Técnica alternativa low-cost para el diagnóstico de síndrome de Hakim-Adams nota técnica y reporte de un caso.pdf" 
                            download="Técnica alternativa low-cost para el diagnóstico de síndrome de Hakim-Adams nota técnica y reporte de un caso.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            5. Movilización prequirúrgica en sujetos con fractura medial de cadera en un hospital público de Ciudad Autónoma de Buenos Aires: estudio descriptivo retrospectivo`,
                            abstract: `
                            <a href="./docs/abstracts/Movilización prequirúrgica en sujetos con fractura medial de cadera en un hospital público.pdf" 
                            download="Movilización prequirúrgica en sujetos con fractura medial de cadera en un hospital público.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                    {
                        auditorium: "<b>AULA E 4to Piso - Mesa 2</b>",
                        presidente: "Discutidores: Dra. Daniela D’Alessandro, Dra. Elizabeth Sanguinetti, Dr. Eduardo Saravia",
                        secretario: "",
                        title: "<b>Trabajos</b>",
                        trabajos: [{
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            1. Diagnóstico tardío de infección por VIH: mayor prevalencia en migrantes. estudio observacional en un hospital general de la Ciudad Autónoma de Buenos Aires`,
                            abstract: `
                            <a href="./docs/abstracts/Diagnóstico tardío de infección por VIH mayor prevalencia en migrantes.pdf" 
                            download="Diagnóstico tardío de infección por VIH mayor prevalencia en migrantes.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            2. Presentación atípica de una leucemia mieloide aguda: leucemia cutis, descripción de un caso`,
                            abstract: `
                            <a href="./docs/abstracts/Presentación atípica de una leucemia mieloide aguda leucemia cutis, descripción de un caso.pdf" 
                            download="Presentación atípica de una leucemia mieloide aguda leucemia cutis, descripción de un caso.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            3. Respuesta al tratamiento de PTI, rituximab vs eltrombopag (la experiencia de nuestro hospital)`,
                            abstract: `
                            <a href="./docs/abstracts/RESPUESTA AL TRATAMIENTO DE PTI, RITUXIMAB VS ELTROMBOPAG.pdf" 
                            download="RESPUESTA AL TRATAMIENTO DE PTI, RITUXIMAB VS ELTROMBOPAG.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            4. Implementación de técnicas moleculares para la optimización del diagnóstico de virus respiratorios en pacientes pediátricos con criterio de internación`,
                            abstract: `
                            <a href="./docs/abstracts/Implementación de técnicas moleculares para la optimización del diagnóstico de virus respiratorios.pdf" 
                            download="Implementación de técnicas moleculares para la optimización del diagnóstico de virus respiratorios.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                        {
                            description: `
                            <span class="material-symbols-outlined">description</span>
                            5. Abordaje multidisciplinario de los melanomas de localizaciones especiales. desafío diagnóstico y terapéutico`,
                            abstract: `
                            <a href="./docs/abstracts/Abordaje multidisciplinario de los melanomas de localizaciones especiales. desafío diagnóstico y terapéutico.pdf" 
                            download="Abordaje multidisciplinario de los melanomas de localizaciones especiales. desafío diagnóstico y terapéutico.pdf">
                            <span class="material-symbols-outlined">download</span></a>
                            <span>Abstract</span>`
                        },
                    ]
                    },
                ],
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
                title: "De la teoría a la práctica: Resolviendo dudas sobre aislamientos de gérmenes multirresistentes",
                auditorium: "Aula 1er Piso (Aula de obstetricia)",
                description_mr: [
                    "<b>Presidente:</b> Dr. Martin Garcia",
                    "<b>Coordinadora:</b> Dra. Sofia Moss",
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
                auditorium: "Aulas A-B 2do Piso",
                description: "",
                streaming: false,
            },
            {
                type: "Agape",
                time: "13:00 hs",
                title: "",
                auditorium: "Aulas 4to Piso",
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
                    $tl_header = $('<div class="tl-header">')
                    $tl_auditorio = $('<div class="program-auditorium">').html(`<span class="material-symbols-outlined">meeting_room</span><p>${description.auditorium}</p>`);
                    $tl_president = $('<p>').html(`${description.presidente}`);
                    $tl_secretario = $('<p>').html(`${description.secretario}`);
                    $tl_header.append($tl_auditorio, $tl_president, $tl_secretario)
                    $tl_title = $('<p>').html(`${description.title}`);
                    description.trabajos.forEach((trabajo) => {
                        $trabajo_description = $('<p>').html(`${trabajo.description}`);
                        $trabajo_abstract = $('<p>').html(`${trabajo.abstract}`);
                        $tl_trabajos.append($trabajo_description, $trabajo_abstract);
                    });
                    // $description.append($tl_auditorio, $tl_president, $tl_secretario, $tl_title, $tl_trabajos);
                    $description.append($tl_header, $tl_title, $tl_trabajos);
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




