// target start button
const startButton = document.getElementById("start-btn");

// target banner section
const bannerSection = document.getElementById("banner");

// target main section
const mainSection = document.getElementById("main");

// current question index
let questionIndex = 0;

// questions and choices
const questions = [
  {
    question: "Do you like the Mandalorian series?",
    choices: ["Yes", "No", "Maybe"],
  },
  {
    question: "Looking forward to season 3?",
    choices: ["Yes", "No", "Maybe"],
  },
  {
    question: "Is Grogu coming back for S3?",
    choices: ["Yes", "No", "Maybe"],
  },
  {
    question: "Do you think the Darksaber is cool?",
    choices: ["Yes", "No", "Maybe"],
  },
  {
    question: "Do you want Grogu to become a Mandalorian or a Jedi?",
    choices: ["Mandalorian", "Jedi", "idk"],
  },
];

// function to render question
const renderQuestion = () => {
  // get current question
  const currentQuestion = questions[questionIndex];

  // create section
  const section = document.createElement("section");
  section.setAttribute("class", "content-section question-container");

  // create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-title");
  h2.textContent = `${questionIndex + 1}. ${currentQuestion.question}`;

  // create ul and append 3 li
  const ul = document.createElement("ul");
  ul.setAttribute("class", "feedback-list");

  // loop over options to create and append li to ul
  const li1 = document.createElement("li");
  li1.setAttribute("class", "list-item");
  li1.textContent = currentQuestion.choices[0];

  const li2 = document.createElement("li");
  li2.setAttribute("class", "list-item");
  li2.textContent = currentQuestion.choices[1];

  const li3 = document.createElement("li");
  li3.setAttribute("class", "list-item");
  li3.textContent = currentQuestion.choices[2];

  ul.append(li1, li2, li3);

  // append h2 and ul to section
  section.append(h2, ul);

  // append question section to main
  mainSection.append(section);
};

// function to remove banner
const removeBanner = () => {
  bannerSection.remove();
};

// declare the event handler function for start butoon click
const handleStartButtonClick = () => {
  console.log("start");

  // remove banner section
  removeBanner();

  // render questions
  renderQuestion();
};

// event listen to start button
startButton.addEventListener("click", handleStartButtonClick);
