export const HEADLINES = [
  "Nos cookies sont en cuisson.",
  "Interdit aux régimes.",
  "Cook’is arrive."
] as const;

export const SUBHEADLINES = [
  "Préparez vos papilles pour une expérience ultra-gourmande.",
  "Le secret le mieux gardé de la pâtisserie s'apprête à être révélé.",
  "L'attente est l'ingrédient secret du désir."
];

export const getRandomCopy = () => {
  const headlineIndex = Math.floor(Math.random() * HEADLINES.length);
  return {
    headline: HEADLINES[headlineIndex],
    subheadline: SUBHEADLINES[headlineIndex % SUBHEADLINES.length]
  };
};