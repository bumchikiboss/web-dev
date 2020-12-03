window.onload = function(){
    showques(0);
}

let quizquestions = [
    {
        id:1 ,
        ques: "Q1 : What is the capital of India ?",
        answer:"Delhi",
        options:[
           "Delhi",
           "Mumbai",
           "Kota",
           "Chennai"
        ]
    },

    {
        id:2 ,
        ques: "Q2 : Which among the following is the world’s largest lake ?",
        answer: "Caspian Sea",
        options:[
           "Lake Baikal",
           "Caspian Sea",
           "Wular Lake",
           "Lake Erie"
        ]
    },

    {
        id:3 ,
        ques: "Q3 : Which among the following is the largest forest in the world ?",
        answer: "Taiga",
        options:[
           "Sagano Bamboo Forest",
           "Taiga",
           "Crooked Forest",
           "Black Forest"
        ]
        
    },

    {
        id:4 ,
        ques: "Q4 : The second highest peak of an island in Asia, the Mount Fuji is of which country ?",
        answer: "Japan",
        options:[
           "Russia",
           "Japan",
           "China",
           "India"
        ]
    },

    {
        id:5 ,
        ques: "Q5 : Which is the second tallest waterfall in the world ?",
        answer: "Tugela Falls",
        options:[
           "Angel Falls",
           "Tugela Falls",
           "Gullfoss",
           "Niagara Falls"
        ]
    }
];



var ques_count=0;
var score=0;

function nextques(){
    let user_ans = document.querySelector("li.option.selected").innerHTML;
    let ans=quizquestions[ques_count].answer;
    console.log(user_ans.localeCompare(ans));
    
    if(user_ans.localeCompare(quizquestions[ques_count].answer)==0)
    {
        score = score + 10;
        console.log("correct");
    }
    ques_count++;
    showques(ques_count);
}

function showques(count){
    var question= document.getElementById("questions");
    question.innerHTML = ` <h2>  ${quizquestions[count].ques}  </h2> 
                    <ol class="options"> 
                        <li class="option">  ${quizquestions[count].options[0]} </li> 
                        <li class="option">  ${quizquestions[count].options[1]} </li> 
                        <li class="option">  ${quizquestions[count].options[2]} </li> 
                        <li class="option">  ${quizquestions[count].options[3]} </li>
                    </ol> 
                    `;
    
  
  SelectedOption();
}

function ShowScore(){

    var showscore = document.getElementById("quiz-score");
    showscore.innerHTML = score;
    console.log(score);
}

function SelectedOption() {
  var option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("selected")) {
          option[j].classList.remove("selected");
        }
      }
      option[i].classList.add("selected");
    };
  }
}