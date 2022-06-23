// target main section
const mainSection = document.getElementById("main");
// target buttons
const clear = document.getElementById("clear");
const goBack = document.getElementById("goBack");

// get and display allResults in responses page
const allResults = JSON.parse(localStorage.getItem("allResults"));
if (allResults !== null) {
  for (let i = 0; i < allResults.length; i++) {
    const createUl = document.createElement("ul");
    createUl.setAttribute("class", "userFullName");
    createUl.textContent = "Answered by: " + allResults[i].userFullName;

    const li1 = document.createElement("li");
    li1.setAttribute("class", "questionAndAnswer");
    li1.textContent =
      "1. " +
      allResults[i].feedbackResults[0].question +
      " " +
      allResults[i].feedbackResults[0].value;

    const li2 = document.createElement("li");
    li2.setAttribute("class", "questionAndAnswer");
    li2.textContent =
      "2. " +
      allResults[i].feedbackResults[1].question +
      " " +
      allResults[i].feedbackResults[1].value;

    const li3 = document.createElement("li");
    li3.setAttribute("class", "questionAndAnswer");
    li3.textContent =
      "3. " +
      allResults[i].feedbackResults[2].question +
      " " +
      allResults[i].feedbackResults[2].value;

    const li4 = document.createElement("li");
    li4.setAttribute("class", "questionAndAnswer");
    li4.textContent =
      "4. " +
      allResults[i].feedbackResults[3].question +
      " " +
      allResults[i].feedbackResults[3].value;

    const li5 = document.createElement("li");
    li5.setAttribute("class", "questionAndAnswer");
    li5.textContent =
      "5. " +
      allResults[i].feedbackResults[4].question +
      " " +
      allResults[i].feedbackResults[4].value;

    createUl.append(li1, li2, li3, li4, li5);

    mainSection.appendChild(createUl);

    console.log(li1.textContent);
  }
}

// add event listener to clear scores
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// add event listener to go back to home page
goBack.addEventListener("click", function () {
  window.location.replace("./index.html");
});
