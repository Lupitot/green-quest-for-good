
export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Quelle est la meilleure façon de réduire les déchets plastiques au quotidien ?",
    options: [
      "Privilégier les emballages biodégradables",
      "Utiliser uniquement des sacs en plastique recyclable",
      "Adopter des contenants réutilisables",
      "Jeter ses plastiques dans la bonne poubelle"
    ],
    correctAnswer: 2,
    explanation: "Les contenants réutilisables (gourdes, bocaux, sacs tissu, etc.) permettent d'éviter complètement la production de déchets plastiques, alors que même les plastiques recyclables ont un impact environnemental lors de leur fabrication et recyclage."
  },
  {
    id: 2,
    question: "Quelle action contribue le plus à réduire votre empreinte carbone ?",
    options: [
      "Éteindre la lumière en quittant une pièce",
      "Réduire sa consommation de viande",
      "Utiliser des ampoules LED",
      "Prendre des douches courtes"
    ],
    correctAnswer: 1,
    explanation: "La production de viande, en particulier le bœuf, génère d'importantes émissions de gaz à effet de serre. Réduire sa consommation est l'un des changements individuels les plus efficaces pour diminuer son empreinte carbone."
  },
  {
    id: 3,
    question: "Quel est le moyen de transport le plus écologique pour les trajets quotidiens ?",
    options: [
      "Voiture électrique",
      "Bus ou métro",
      "Vélo ou marche à pied",
      "Covoiturage"
    ],
    correctAnswer: 2,
    explanation: "Le vélo et la marche n'émettent aucun gaz à effet de serre et ne nécessitent pas d'infrastructure lourde ou d'énergie autre que celle de votre corps. Ils contribuent également à votre santé !"
  },
  {
    id: 4,
    question: "Quel geste permet d'économiser le plus d'eau à la maison ?",
    options: [
      "Prendre une douche plutôt qu'un bain",
      "Installer une chasse d'eau à double débit",
      "Réparer rapidement les fuites",
      "Fermer le robinet pendant le brossage de dents"
    ],
    correctAnswer: 2,
    explanation: "Une fuite peut gaspiller jusqu'à 100 litres d'eau par jour ! Sa réparation rapide est donc l'action la plus efficace pour économiser l'eau, bien que toutes les autres options soient également d'excellentes habitudes à adopter."
  },
  {
    id: 5,
    question: "Quelle est la meilleure façon de gérer vos déchets organiques ?",
    options: [
      "Les jeter dans une poubelle dédiée",
      "Les composter",
      "Les broyer dans l'évier",
      "Les brûler dans le jardin"
    ],
    correctAnswer: 1,
    explanation: "Le compostage transforme naturellement vos déchets organiques en un engrais riche qui peut être utilisé pour fertiliser votre jardin ou vos plantes. C'est un cycle vertueux qui réduit les déchets et enrichit les sols sans produits chimiques."
  },
  {
    id: 6,
    question: "Quelle pratique est la plus bénéfique pour la biodiversité dans votre jardin ?",
    options: [
      "Utiliser des pesticides biologiques",
      "Tondre régulièrement toute la pelouse",
      "Créer différents habitats naturels",
      "Planter uniquement des espèces décoratives"
    ],
    correctAnswer: 2,
    explanation: "Créer différents habitats comme des zones fleuries sauvages, des tas de bois, des points d'eau ou des haies diversifiées permet d'accueillir une grande variété d'espèces (insectes, oiseaux, petits mammifères) et favorise un écosystème équilibré."
  },
  {
    id: 7,
    question: "Comment l'IA peut-elle contribuer à la lutte contre le changement climatique ?",
    options: [
      "En remplaçant tous les emplois humains",
      "En optimisant les systèmes énergétiques et les réseaux électriques",
      "En créant uniquement des contenus virtuels",
      "En augmentant la consommation numérique"
    ],
    correctAnswer: 1,
    explanation: "L'IA peut analyser et optimiser en temps réel la production et la distribution d'énergie, intégrer efficacement les énergies renouvelables dans le réseau, et réduire le gaspillage énergétique. Elle aide également à modéliser le climat et à trouver des solutions innovantes face au réchauffement."
  }
];

export const resultMessages = [
  {
    minScore: 0,
    maxScore: 2,
    title: "Apprenti écologiste 🌱",
    message: "Tu débutes dans ton parcours écologique ! Continue d'apprendre et d'adopter de nouvelles habitudes pour protéger notre planète."
  },
  {
    minScore: 3,
    maxScore: 5,
    title: "Éco-citoyen en herbe 🌿",
    message: "Tu as de bonnes bases en écologie ! Continue sur cette lancée pour avoir un impact encore plus positif sur l'environnement."
  },
  {
    minScore: 6,
    maxScore: 7,
    title: "Champion de l'écologie 🌍",
    message: "Félicitations ! Tu maîtrises les principes fondamentaux de l'écologie et tu as toutes les clés pour agir efficacement au quotidien. Continue à partager ton savoir !"
  }
];
