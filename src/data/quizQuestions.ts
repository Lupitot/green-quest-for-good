
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
    question: "Quel geste est le plus efficace pour limiter les emballages plastiques lors des courses ?",
    options: [
      "Utiliser des sacs papier",
      "Prendre ses propres sacs et filets réutilisables",
      "Choisir des produits en barquette plastique recyclable",
      "Acheter en sur-emballage pour protéger les aliments"
    ],
    correctAnswer: 1,
    explanation: "Apporter ses propres sacs et filets réutilisables évite totalement les sacs plastiques à usage unique."
  },
  {
    id: 3,
    question: "Pour remplacer les films plastiques d’emballage des aliments, on peut :",
    options: [
      "Utiliser du papier aluminium",
      "Opter pour du papier sulfurisé",
      "Prendre du film étirable compostable ou des bees wraps",
      "Conserver tout sans emballage, même à l’air libre"
    ],
    correctAnswer: 2,
    explanation: "Les bees wraps (coton enduit de cire d’abeille) sont réutilisables et compostables, une excellente alternative au film plastique."
  },
  {
    id: 4,
    question: "Le nombre de sacs plastiques à usage unique autorisés par an et par personne en Europe est limité à :",
    options: [
      "40 sacs",
      "50 sacs",
      "60 sacs",
      "70 sacs"
    ],
    correctAnswer: 1,
    explanation: "Depuis 2021, la directive européenne fixe un plafond à 40 sacs plastiques à usage unique par personne et par an."
  },
  {
    id: 5,
    question: "Quelle boisson consomme moins de plastique qu’une bouteille classique ?",
    options: [
      "Eau en bouteille verre consignée",
      "Eau en bouteille PET rechargeable",
      "Fontaine à eau partagée",
      "Fontaine à eau + gourde réutilisable"
    ],
    correctAnswer: 3,
    explanation: "La combinaison fontaine à eau et gourde réutilisable supprime totalement toute bouteille plastique."
  },
  {
    id: 6,
    question: "Quel détergent zéro plastique est le plus simple à adopter ?",
    options: [
      "Recharge en bidon plastique de grande taille",
      "Tablettes solides en vrac",
      "Capsules individuelles",
      "Gel écologique en bouteille recyclable"
    ],
    correctAnswer: 1,
    explanation: "Les tablettes solides en vrac n’ont pas d’emballage plastique et durent longtemps."
  },
  {
    id: 7,
    question: "Pourquoi éviter les cotons-tiges en plastique ?",
    options: [
      "Ils sont lessivables",
      "Ils ne se recyclent pas et polluent les océans",
      "Ils coûtent plus cher que le bambou",
      "Ils irritent les oreilles"
    ],
    correctAnswer: 1,
    explanation: "Les cotons-tiges en plastique finissent souvent dans la nature et se fragmentent en microplastiques."
  },
  {
    id: 8,
    question: "Quelle action réduit la pollution plastique liée aux cosmétiques ?",
    options: [
      "Acheter des flacons en plastique recyclé",
      "Utiliser des shampoings et savons solides",
      "Stocker ses cosmétiques dans des sachets en plastique",
      "Faire des stocks pour limiter les commandes"
    ],
    correctAnswer: 1,
    explanation: "Les formats solides (shampoing, savon) sont souvent vendus sans aucun emballage plastique."
  },
  {
    id: 9,
    question: "Quel style de vaisselle pour pique-nique est la plus durable ?",
    options: [
      "Assiettes jetables en plastique recyclé",
      "Assiettes en carton enduit",
      "Vaisselle réutilisable en mélamine ou bambou",
      "Assiettes en polystyrène compostable"
    ],
    correctAnswer: 2,
    explanation: "La vaisselle réutilisable, même en mélamine, évite la production continue de déchets plastiques."
  },
  {
    id: 10,
    question: "Les pailles en plastique peuvent être remplacées par :",
    options: [
      "Pailles papier à usage unique",
      "Pailles en inox ou bambou réutilisables",
      "Pailles en PLA compostable",
      "Ne pas utiliser de paille"
    ],
    correctAnswer: 1,
    explanation: "Les pailles réutilisables en inox ou bambou durent des années, éliminant tout déchet plastique."
  },
  {
    id: 11,
    question: "Quelle habitude limite directement la production de déchets plastiques au petit‑déjeuner ?",
    options: [
      "Acheter du café en dosettes recyclables",
      "Prendre un petit‑déjeuner à l’extérieur",
      "Préparer ses céréales et confitures maison en vrac",
      "Utiliser des bols en plastique solide"
    ],
    correctAnswer: 2,
    explanation: "Acheter ses ingrédients en vrac et les stocker dans des bocaux en verre évite les petits emballages plastiques."
  },
  {
    id: 12,
    question: "Pour transporter votre déjeuner, il vaut mieux choisir :",
    options: [
      "Une boîte en plastique rigide",
      "Une boîte en carton jetable",
      "Une boîte en inox ou verre réutilisable",
      "Un sac plastique alimentaire"
    ],
    correctAnswer: 2,
    explanation: "Les boîtes réutilisables en inox ou verre sont durables, sans aucune trace de plastique."
  },
  {
    id: 13,
    question: "Quelle méthode limite la pollution plastique en jardinage urbain ?",
    options: [
      "Utiliser des pots en plastique recyclé",
      "Planter directement en pleine terre",
      "Choisir des pots en terre cuite ou coco",
      "Mettre des sacs plastiques sous les pots"
    ],
    correctAnswer: 2,
    explanation: "Les pots en matériaux naturels comme la terre cuite ou la fibre de coco sont biodégradables."
  },
  {
    id: 14,
    question: "Quel impact a le microplastique sur la santé ?",
    options: [
      "Aucun impact prouvé",
      "Ils se décomposent totalement dans le corps",
      "Ils peuvent s’accumuler et perturber le système hormonal",
      "Ils renforcent le système immunitaire"
    ],
    correctAnswer: 2,
    explanation: "Les microplastiques peuvent traverser les barrières biologiques et sont suspectés d’effets toxiques."
  },
  {
    id: 15,
    question: "Pour acheter des produits d’entretien sans plastique, on préfère :",
    options: [
      "Les commandés en flacon plastique concentré",
      "Les recharges solides ou en poudre en vrac",
      "Les dosettes individuelles en plastique recyclable",
      "Les mixtures maison dans un bidon plastique"
    ],
    correctAnswer: 1,
    explanation: "Les produits solides ou en poudre en vrac limitent totalement tout suremballage plastique."
  },
  {
    id: 16,
    question: "Qu’est-ce qu’une consigne zéro déchet ?",
    options: [
      "Rendre le plastique sale pour qu’il soit refusé",
      "Ramener un emballage pour récupérer une consigne financière",
      "Réutiliser un même plastique pour plusieurs usages",
      "Déposer ses déchets plastiques en consigne spéciale"
    ],
    correctAnswer: 1,
    explanation: "Le système de consigne permet de rapporter bouteilles ou bocaux pour récupérer une somme d’argent et réutiliser le contenant."
  },
  {
    id: 17,
    question: "Quel plastique est prioritairement refusé dans les collectes de recyclage classiques ?",
    options: [
      "Le PET des bouteilles d’eau",
      "Les films et sacs plastiques fins",
      "Le HDPE des bidons de lessive",
      "Le PP des pots de yaourt"
    ],
    correctAnswer: 1,
    explanation: "Les films et sacs plastiques fins nécessitent une filière spécifique et sont souvent exclus des collectes en borne."
  },
  {
    id: 18,
    question: "Comment réduire le plastique dans la salle de bain ?",
    options: [
      "Acheter du gel douche en bouteille recyclable",
      "Utiliser des pains de savon et shampoing solide",
      "Mettre ses produits dans plusieurs petits tubes plastiques",
      "Commander ses produits en ligne avec du suremballage"
    ],
    correctAnswer: 1,
    explanation: "Les pains solides sont souvent vendus sans aucun emballage plastique, pour des mois d’utilisation."
  },
  {
    id: 19,
    question: "Quel choix est le plus zéro plastique pour ranger ses aliments au frigo ?",
    options: [
      "Boîtes en plastique hermétiques",
      "Gobelets à couvercle plastique",
      "Bocaux en verre avec joint caoutchouc",
      "Sachets congelation plastiques"
    ],
    correctAnswer: 2,
    explanation: "Les bocaux en verre avec joint sont étanches, réutilisables à vie et sans plastique de contact direct."
  },
  {
    id: 20,
    question: "Quel slogan illustre le mieux votre engagement contre le plastique ?",
    options: [
      "Moins de plastique, plus de futur",
      "Recyclez tout, même vos pensées",
      "Plus de vert, moins de déchet",
      "Réduis, Réutilise, Réinvente"
    ],
    correctAnswer: 0,
    explanation: "« Moins de plastique, plus de futur. » est votre message clé : simple, positif et orienté vers l’avenir."
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
    maxScore: 20,
    title: "Champion de l'écologie 🌍",
    message: "Félicitations ! Tu maîtrises les principes fondamentaux de l'écologie et tu as toutes les clés pour agir efficacement au quotidien. Continue à partager ton savoir !"
  }
]