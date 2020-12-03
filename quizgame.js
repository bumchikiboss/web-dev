
let questions = [
    {
      id: 1,
      question: "What is the capital of India ?",
      answer: "Delhi",
      options: [
        "Delhi",
        "Mumbai",
        "Kota",
        "Chennai"
      ]
    },
    {
      id: 2,
      question: "Which among the following is the world’s largest lake ?",
      answer: "Caspian Sea",
      options: [
        "Lake Baikal",
        "Caspian Sea",
        "Wular Lake",
        "Lake Erie"
      ]
    },
    {
      id: 3,
      question: "Which among the following is the largest forest in the world ?",
      answer: "Taiga",
      options: [
        "Primorye",
        "Taiga",
        "Sagano Bamboo Forest",
        "Black Forest"
      ]
    },
    {
        id: 4,
        question: "The second highest peak of an island in Asia, the Mount Fuji is of which country ?",
        answer: "Japan",
        options: [
          "Russia",
          "Japan",
          "China",
          "India"
        ]
      },
      {
        id: 5,
        question: "Which is the second tallest waterfall in the world ?",
        answer: "Tugela Falls",
        options: [
          "Angel Falls",
          "Tugela Falls",
          "Gullfoss",
          "Niagara Falls"
        ]
      }
  ];
  
  let ques_count = 0;
  let score = 0;

  
  window.onload = function() {
    sessionStorage.setItem("score", score);
    showques(ques_count);
  
  };
  
  function nextques() {
  
    let user_ans = document.querySelector("li.option.selected").innerHTML;
    
    if (user_ans == questions[ques_count].answer) {
      score += 100;
    }
    sessionStorage.setItem("score", score);
    console.log(score);

    if(ques_count == questions.length - 1){

      location.href = "endgame.html";
      return;
    }
  
    ques_count++;
    showques(ques_count);
  }
  
  function showques(count) {

    showscore();
    showprogress();
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ol class="options">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ol> 
    `;
    SelectedOption();

  }

  function showscore(){

    var showscr=document.getElementById("score");
    showscr.innerHTML = score;
  }

  function showprogress(){

    var totalques = questions.length;
    var showprog=document.getElementById("progress");
    showprog.innerHTML = "QUESTION : " + (ques_count+1) + " of " + totalques ; 
  }
  
  function SelectedOption() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("selected")) {
            option[i].classList.remove("selected");
          }
        }
        option[i].classList.add("selected");
      };
    }
  }
  