const questions = [
  {
    id: 1,
    question: "Which language is primarily used to structure web pages?",
    options: ["CSS", "HTML", "JavaScript", "Python"],
    correctAnswer: "HTML"
  },
  {
    id: 2,
    question: "Which language is primarily used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    correctAnswer: "CSS"
  },
  {
    id: 3,
    question: "Which language is used to add interactivity to web pages?",
    options: ["HTML", "CSS", "JavaScript", "XML"],
    correctAnswer: "JavaScript"
  },
  {
    id: 4,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: "<a>"
  },
  {
    id: 5,
    question: "Which HTML tag is used to display an image?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    correctAnswer: "<img>"
  },
  {
    id: 6,
    question: "Which CSS property changes the background color of an element?",
    options: ["color", "background", "background-color", "bg-color"],
    correctAnswer: "background-color"
  },
  {
    id: 7,
    question: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    correctAnswer: "color"
  },
  {
    id: 8,
    question: "Which CSS layout system is commonly used to create one-dimensional layouts?",
    options: ["Grid", "Flexbox", "Float", "Position"],
    correctAnswer: "Flexbox"
  },
  {
    id: 9,
    question: "Which CSS layout system is designed for two-dimensional layouts?",
    options: ["Flexbox", "Grid", "Float", "Inline"],
    correctAnswer: "Grid"
  },
  {
    id: 10,
    question: "Which JavaScript keyword is used to declare a variable that cannot be reassigned?",
    options: ["let", "var", "const", "static"],
    correctAnswer: "const"
  },
  {
    id: 11,
    question: "Which method adds an item to the end of an array?",
    options: ["push()", "pop()", "shift()", "add()"],
    correctAnswer: "push()"
  },
  {
    id: 12,
    question: "Which method removes the last item from an array?",
    options: ["remove()", "delete()", "pop()", "shift()"],
    correctAnswer: "pop()"
  },
  {
    id: 13,
    question: "Which method creates a new array by transforming every element?",
    options: ["filter()", "map()", "reduce()", "forEach()"],
    correctAnswer: "map()"
  },
  {
    id: 14,
    question: "Which method creates a new array containing elements that pass a condition?",
    options: ["map()", "filter()", "find()", "forEach()"],
    correctAnswer: "filter()"
  },
  {
    id: 15,
    question: "Which symbol is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    correctAnswer: "==="
  },
  {
    id: 16,
    question: "Which function converts JSON text into a JavaScript object?",
    options: ["JSON.convert()", "JSON.parse()", "JSON.stringify()", "JSON.object()"],
    correctAnswer: "JSON.parse()"
  },
  {
    id: 17,
    question: "Which function converts a JavaScript object into JSON text?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    correctAnswer: "JSON.stringify()"
  },
  {
    id: 18,
    question: "Which React hook is used to manage component state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correctAnswer: "useState"
  },
  {
    id: 19,
    question: "Which React hook is commonly used for side effects?",
    options: ["useState", "useRef", "useEffect", "useMemo"],
    correctAnswer: "useEffect"
  },
  {
    id: 20,
    question: "Which React hook can store a value without causing a re-render when it changes?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    correctAnswer: "useRef"
  },
  {
    id: 21,
    question: "Which React hook is used to cache the result of an expensive calculation?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    correctAnswer: "useMemo"
  },
  {
    id: 22,
    question: "What is JSX?",
    options: [
      "A CSS framework",
      "A JavaScript syntax extension",
      "A database",
      "A package manager"
    ],
    correctAnswer: "A JavaScript syntax extension"
  },
  {
    id: 23,
    question: "How are values commonly passed from a parent component to a child component in React?",
    options: ["State", "Props", "Hooks", "Events"],
    correctAnswer: "Props"
  },
  {
    id: 24,
    question: "Which command creates a new Vite project?",
    options: [
      "npm start vite",
      "npm create vite@latest",
      "npm install vite-project",
      "vite new project"
    ],
    correctAnswer: "npm create vite@latest"
  },
  {
    id: 25,
    question: "What does npm stand for?",
    options: [
      "Node Package Manager",
      "New Programming Module",
      "Node Project Manager",
      "Network Package Manager"
    ],
    correctAnswer: "Node Package Manager"
  },
  {
    id: 26,
    question: "Which command installs dependencies listed in package.json?",
    options: [
      "npm start",
      "npm install",
      "npm build",
      "npm dependencies"
    ],
    correctAnswer: "npm install"
  },
  {
    id: 27,
    question: "What is Git primarily used for?",
    options: [
      "Database management",
      "Version control",
      "Web hosting",
      "Styling websites"
    ],
    correctAnswer: "Version control"
  },
  {
    id: 28,
    question: "Which Git command uploads local commits to a remote repository?",
    options: ["git pull", "git push", "git fetch", "git upload"],
    correctAnswer: "git push"
  },
  {
    id: 29,
    question: "Which Git command downloads and integrates changes from a remote repository?",
    options: ["git push", "git upload", "git pull", "git merge-only"],
    correctAnswer: "git pull"
  },
  {
    id: 30,
    question: "Which technology is commonly used to create backend servers with JavaScript?",
    options: ["React", "Node.js", "Tailwind CSS", "Vite"],
    correctAnswer: "Node.js"
  }
];

export default questions;