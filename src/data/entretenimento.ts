// Concurso de Cosplay
// Evento onde as pessoas se fantasiam e fazem uma apresentação no palco para concorrer a premiação. Cosplay individuais ou em dupla
// Premiação
// 1° - Combo de ingresso Sana 2025
// 2° - Ingresso de sexta Sana 2025
// 3° - Ingresso de sexta Sana 2025
// https://drive.google.com/file/d/1CJO_gi_Avj50XdqPHjwAA0fJtGpJR7Ba/view?usp=drive_link

// Competição de Desenho
// Os participantes entregarão seu desenho, que ficarão desenhos ficarão expostos na sala geek com uma urna embaixo para votação. O mais votado ganha o prêmio.
// Premiação
// 1 kit da Geek Dungeon
// https://drive.google.com/file/d/1-7w0VdvrAcgWTOIhQQKHK7tQG9BoahN3/view?usp=sharing

// Show de Prompt
// O participante deve utilizar a plataforma Seelab para colocar os prompts que gerem a imagem mais semelhante à ideia da SESCOMP 24: IA e Ética.
// Premiação:
// 1° - R$250,00
// 2° - R$150,00
// 3° - R$100,00
// https://drive.google.com/file/d/1UYjPEa4nV_QZe7QR5cPQjssmZkkaw_hB/view?usp=drive_link

// Maratona de Programação
// Uma equipe de até três pessoas recebem a missão de resolver o máximo de questão que conseguirem em até 3 horas. As questões possuem níveis de dificuldade difirentes e quanto maior a dificuldade, mais pontos a equipe que acertar faz.
// Premiação
// R$500,00
// https://drive.google.com/file/d/129zw12vfVSSuwtKxK0MGPRyn1XNOBdid/view?usp=drive_link

// Codando às Cegas
// O evento consiste em um desafio onde os competidores desenvolvem códigos do zero em apenas 20 minutos sem poder ver o resultado, haverá 3 rodadas, os ganhadores de cada uma se enfrentam na final. Estimulando a rapidez e a capacidade dos estudantes ao trabalharem sob pressão.
// Premiação
// 1 Bolsa Alura (Licença Plus - 6 meses)
// https://drive.google.com/file/d/1EBnLNFDBXgSyeuP06_lo3cfinXrN5hCr/view?usp=sharing

// Gamificação
// Acumule adesivos participando de atividades e visitando espaços do evento e troqe seus adesivos por prêmios
// Premiação
// Adesivos, Chaveiros, Carnetas e Copos
// https://drive.google.com/file/d/1A92c1Vqo6k9qk-jwxFKErpQNCcC952-8/view?usp=drivesdk

// Circuito de Atividades
// Gincana de atividades intelectuais e de habilidades manuais. Em duplas, uma para cada atividade. Inscrições vão ser na hora no Hall.
// Premiação:
// 2 ingressos pro Ipark

// Escape Room
// Evento onde uma equipe de até 3 pessoas entram em uma sala e possuem até 15 minutos para desvendar o enigma e apresentar o código final para o “porteiro” e sair da sala. A equipe que fizer em menos tempo ganha. Inscrições na hora.
// Premiação:
// R$200,00 em produtos na Padaria Nossa senhora de Fátima

// Exibição do curta - O milagre da santa Rita
// Diretor: Nathan Martins.  
// SINOPSE:  Em 1944, na cidade de Russas, Ceará, uma epidemia de febre amarela assola o povo, trazendo medo e muitas perdas. Raimundo, homem simples e devoto de Santa Rita, faz uma promessa: se a epidemia cessar, ele erguerá uma capela no serrote mais alto da cidade. Em meio à luta contra a doença e a fé do sertanejo, sua promessa se torna um fio de esperança.

// Sala Cultural
// A Sala Cultural é o lugar perfeito para relaxar, se divertir e registrar momentos inesquecíveis. Aproveite para realizar atividades culturais, soltar a voz no karaokê e tirar fotos incríveis no cenário especialmente montado para capturar as melhores lembranças!

// Sala Geek
// A Sala Geek é o ponto de encontro perfeito para quem ama filmes, animes e RPG! Com uma decoração imersiva e temática, esse ambiente foi pensado para transportar você diretamente para os mundos da cultura pop.
interface Entretenimento {
    title: string;
    description: string;
    prize: string[];
    link: string;
}

export const entretenimento: Entretenimento[] = [
    {
        title: "Concurso de Cosplay",
        description: "Evento onde as pessoas se fantasiam e fazem uma apresentação no palco para concorrer a premiação. Cosplay individuais ou em dupla",
        prize: [
            "1° - Combo de ingresso Sana 2025",
            "2° - Ingresso de sexta Sana 2025",
            "3° - Ingresso de sexta Sana 2025",
        ],
        link: "https://drive.google.com/file/d/1CJO_gi_Avj50XdqPHjwAA0fJtGpJR7Ba/view?usp=drive_link",
    },
    {
        title: "Competição de Desenho",
        description: "Os participantes entregarão seu desenho, que ficarão desenhos ficarão expostos na sala geek com uma urna embaixo para votação. O mais votado ganha o prêmio.",
        prize: [
            "1 kit da Geek Dungeon",
        ],
        link: "https://drive.google.com/file/d/1-7w0VdvrAcgWTOIhQQKHK7tQG9BoahN3/view?usp=sharing",
    },
    {
        title: "Show de Prompt",
        description: "O participante deve utilizar a plataforma Seelab para colocar os prompts que gerem a imagem mais semelhante à ideia da SESCOMP 24: IA e Ética.",
        prize: [
            "1° - R$250,00",
            "2° - R$150,00",
            "3° - R$100,00",
        ],
        link: "https://drive.google.com/file/d/1UYjPEa4nV_QZe7QR5cPQjssmZkkaw_hB/view?usp=drive_link",
    },
    {
        title: "Maratona de Programação",
        description: "Uma equipe de até três pessoas recebem a missão de resolver o máximo de questão que conseguirem em até 3 horas. As questões possuem níveis de dificuldade difirentes e quanto maior a dificuldade, mais pontos a equipe que acertar faz.",
        prize: [
            "R$500,00",
        ],
        link: "https://drive.google.com/file/d/129zw12vfVSSuwtKxK0MGPRyn1XNOBdid/view?usp=drive_link",
    },
    {
        title: "Codando às Cegas",
        description: "O evento consiste em um desafio onde os competidores desenvolvem códigos do zero em apenas 20 minutos sem poder ver o resultado, haverá 3 rodadas, os ganhadores de cada uma se enfrentam na final. Estimulando a rapidez e a capacidade dos estudantes ao trabalharem sob pressão.",
        prize: [
            "1 Bolsa Alura (Licença Plus - 6 meses)",
        ],
        link: "https://drive.google.com/file/d/1EBnLNFDBXgSyeuP06_lo3cfinXrN5hCr/view?usp=sharing",
    },
    {
        title: "Gamificação",
        description: "Acumule adesivos participando de atividades e visitando espaços do evento e troqe seus adesivos por prêmios",
        prize: [
            "Adesivos, Chaveiros, Carnetas e Copos",
        ],
        link: "https://drive.google.com/file/d/1A92c1Vqo6k9qk-jwxFKErpQNCcC952-8/view?usp=drivesdk",
    },
    {
        title: "Circuito de Atividades",
        description: "Gincana de atividades intelectuais e de habilidades manuais. Em duplas, uma para cada atividade. Inscrições vão ser na hora no Hall.",
        prize: [
            "2 ingressos pro Ipark",
        ],
        link: "",
    },
    {
        title: "Escape Room",
        description: "Evento onde uma equipe de até 3 pessoas entram em uma sala e possuem até 15 minutos para desvendar o enigma e apresentar o código final para o “porteiro” e sair da sala. A equipe que fizer em menos tempo ganha. Inscrições na hora.",
        prize: [
            "R$200,00 em produtos na Padaria Nossa senhora de Fátima",
        ],
        link: "",
    },
    {
        title: "Exibição do curta - O milagre da santa Rita",
        description: "Em 1944, na cidade de Russas, Ceará, uma epidemia de febre amarela assola o povo, trazendo medo e muitas perdas. Raimundo, homem simples e devoto de Santa Rita, faz uma promessa: se a epidemia cessar, ele erguerá uma capela no serrote mais alto da cidade. Em meio à luta contra a doença e a fé do sertanejo, sua promessa se torna um fio de esperança.",
        prize: [],
        link: "",
    },
    {
        title: "Sala Cultural",
        description: "A Sala Cultural é o lugar perfeito para relaxar, se divertir e registrar momentos inesquecíveis. Aproveite para realizar atividades culturais, soltar a voz no karaokê e tirar fotos incríveis no cenário especialmente montado para capturar as melhores lembranças!",
        prize: [],
        link: "",
    },
    {
        title: "Sala Geek",
        description: "A Sala Geek é o ponto de encontro perfeito para quem ama filmes, animes e RPG! Com uma decoração imersiva e temática, esse ambiente foi pensado para transportar você diretamente para os mundos da cultura pop.",
        prize: [],
        link: "",
    },
];
   