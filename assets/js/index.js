// target start button
const startButton = document.getElementById("start-btn");

// target banner section
const bannerSection = document.getElementById("banner");

// function to render question
const renderQuestion = () => {
  console.log("render q");
};

// function to remove banner
const removeBanner = () => {
  console.log("remove b");
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
