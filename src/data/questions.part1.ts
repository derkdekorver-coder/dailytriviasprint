export interface TriviaQuestion {
  id: number;
  category: string;
  question: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}

// 60 original, editorially-written trivia questions for Daily Trivia Sprint.
export const questions: TriviaQuestion[] = [
  { id: 1, category: "Science", question: "Which gas makes up most of the air we breathe?", choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], correctIndex: 1, explanation: "Nitrogen makes up about 78% of Earth's atmosphere; oxygen is a distant second at roughly 21%." },
  { id: 2, category: "Geography", question: "What is the smallest country in the world by land area?", choices: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"], correctIndex: 2, explanation: "Vatican City covers just about 0.17 square miles, making it smaller than most city parks." },
  { id: 3, category: "History", question: "In which century did the printing press become widespread in Europe?", choices: ["13th century", "15th century", "17th century", "19th century"], correctIndex: 1, explanation: "Gutenberg's movable-type press spread across Europe starting in the mid-1400s." },
  { id: 4, category: "Food", question: "Which fruit is traditionally used to make guacamole?", choices: ["Mango", "Avocado", "Papaya", "Kiwi"], correctIndex: 1, explanation: "Avocados are technically a single-seeded berry, and the base of classic guacamole." },
  { id: 5, category: "Space", question: "Which planet has the most moons confirmed so far?", choices: ["Jupiter", "Saturn", "Neptune", "Uranus"], correctIndex: 1, explanation: "Saturn has pulled ahead of Jupiter in confirmed moon count thanks to recent discoveries of small irregular moons." },
  { id: 6, category: "Nature", question: "What is a group of flamingos called?", choices: ["A flamboyance", "A parade", "A chorus", "A blush"], correctIndex: 0, explanation: "A group of flamingos is called a flamboyance, which suits their bright pink color." },
  { id: 7, category: "Arts & Culture", question: "Who painted the ceiling of the Sistine Chapel?", choices: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"], correctIndex: 2, explanation: "Michelangelo spent roughly four years painting the chapel ceiling, finishing in 1512." },
  { id: 8, category: "Science", question: "What is the hardest natural substance on Earth?", choices: ["Quartz", "Diamond", "Titanium", "Granite"], correctIndex: 1, explanation: "Diamond ranks a 10 on the Mohs hardness scale, the highest of any natural material." },
  { id: 9, category: "Geography", question: "Which river is the longest in the world?", choices: ["Amazon River", "Yangtze River", "Nile River", "Mississippi River"], correctIndex: 2, explanation: "The Nile is generally measured as the longest river, stretching roughly 4,130 miles through northeastern Africa." },
  { id: 10, category: "History", question: "The ancient city of Rome was said to be built on how many hills?", choices: ["Five", "Seven", "Nine", "Twelve"], correctIndex: 1, explanation: "Tradition holds that Rome was founded across seven hills, including the Palatine and Capitoline." },
  { id: 11, category: "Food", question: "Which spice is derived from the Crocus flower?", choices: ["Turmeric", "Saffron", "Paprika", "Cumin"], correctIndex: 1, explanation: "Saffron comes from the dried stigmas of the Crocus sativus flower, which is why it's so labor-intensive to harvest." },
  { id: 12, category: "Space", question: "What is the name of the galaxy that contains our solar system?", choices: ["Andromeda", "Triangulum", "The Milky Way", "Whirlpool Galaxy"], correctIndex: 2, explanation: "Our solar system sits in one of the spiral arms of the Milky Way galaxy." },
  { id: 13, category: "Nature", question: "Which of these animals is a marsupial?", choices: ["Koala", "Armadillo", "Hedgehog", "Otter"], correctIndex: 0, explanation: "Koalas carry their young in a pouch, making them marsupials just like kangaroos." },
  { id: 14, category: "Arts & Culture", question: "Which instrument has 88 keys in its standard form?", choices: ["Organ", "Piano", "Accordion", "Harpsichord"], correctIndex: 1, explanation: "A standard modern piano has 52 white keys and 36 black keys, for 88 total." },
  { id: 15, category: "Science", question: "What does 'H2O' describe?", choices: ["Salt", "Hydrogen peroxide", "Water", "Helium"], correctIndex: 2, explanation: "H2O denotes two hydrogen atoms bonded to one oxygen atom — a single water molecule." },
  { id: 16, category: "Geography", question: "Mount Kilimanjaro is located on which continent?", choices: ["Asia", "South America", "Africa", "Oceania"], correctIndex: 2, explanation: "Kilimanjaro rises in Tanzania and is the highest peak on the African continent." },
  { id: 17, category: "History", question: "Who was the first President of the United States?", choices: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"], correctIndex: 2, explanation: "George Washington served two terms, from 1789 to 1797." },
  { id: 18, category: "Food", question: "What type of pastry is traditionally used to make a classic French croissant?", choices: ["Shortcrust", "Choux", "Laminated dough", "Filo"], correctIndex: 2, explanation: "Croissants get their flaky layers from laminated dough, made by folding butter into the dough repeatedly." },
  { id: 19, category: "Space", question: "Which space mission first landed astronauts on the Moon?", choices: ["Apollo 8", "Apollo 11", "Gemini 7", "Apollo 13"], correctIndex: 1, explanation: "Apollo 11 landed Neil Armstrong and Buzz Aldrin on the Moon in July 1969." },
  { id: 20, category: "Nature", question: "What is the largest living land animal?", choices: ["White rhinoceros", "African elephant", "Giraffe", "Hippopotamus"], correctIndex: 1, explanation: "The African bush elephant is the largest living land animal, with bulls weighing up to around 13,000 pounds." },
  { id: 21, category: "Arts & Culture", question: "'Starry Night' was painted by which artist?", choices: ["Claude Monet", "Vincent van Gogh", "Paul Cézanne", "Edgar Degas"], correctIndex: 1, explanation: "Van Gogh painted 'The Starry Night' in 1889 while staying at an asylum in Saint-Rémy-de-Provence." },
  { id: 22, category: "Science", question: "What is the chemical symbol for gold?", choices: ["Gd", "Go", "Au", "Ag"], correctIndex: 2, explanation: "Gold's symbol, Au, comes from its Latin name, aurum." },
  { id: 23, category: "Geography", question: "Which desert is the largest in the world?", choices: ["Sahara Desert", "Gobi Desert", "Antarctic Desert", "Arabian Desert"], correctIndex: 2, explanation: "By area, Antarctica qualifies as a desert — the largest in the world — due to its extremely low precipitation." },
  { id: 24, category: "History", question: "The Great Wall of China was primarily built to do what?", choices: ["Mark trade routes", "Defend against invasions", "Irrigate farmland", "Celebrate dynastic rule"], correctIndex: 1, explanation: "Successive dynasties built and extended the wall mainly to defend northern borders from invasions." },
  { id: 25, category: "Food", question: "Which country is credited with originating pizza as we know it today?", choices: ["Greece", "Italy", "France", "Spain"], correctIndex: 1, explanation: "Modern pizza traces back to Naples, Italy, in the 18th and 19th centuries." },
];
