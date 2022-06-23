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
    createUl.setAttribute("id", "userFullName");
    createUl.textContent = "Answered by: " + allResults[i].userFullName;

    const li1 = document.createElement("li");
    li1.setAttribute("id", "questionAndAnswer");
    li1.textContent =
      allResults[i].feedbackResults[0].question +
      " " +
      allResults[i].feedbackResults[0].value;

    const li2 = document.createElement("li");
    li2.setAttribute("id", "questionAndAnswer");
    li2.textContent =
      allResults[i].feedbackResults[1].question +
      " " +
      allResults[i].feedbackResults[1].value;

    const li3 = document.createElement("li");
    li3.setAttribute("id", "questionAndAnswer");
    li3.textContent =
      allResults[i].feedbackResults[2].question +
      " " +
      allResults[i].feedbackResults[2].value;

    const li4 = document.createElement("li");
    li4.setAttribute("id", "questionAndAnswer");
    li4.textContent =
      allResults[i].feedbackResults[3].question +
      " " +
      allResults[i].feedbackResults[3].value;

    const li5 = document.createElement("li");
    li5.setAttribute("id", "questionAndAnswer");
    li5.textContent =
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
