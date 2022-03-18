let index = 0;
let score = 0;

const question = [
    "What street does Sherlock Holmes live on?",
    "What year was the first Sherlock Holmes story written?",
    "Who narrates the Sherlock Holmes stories?",
    "Which of these is NOT a Sherlock Holmes story?",
    "Who plays Sherlock Holmes in the 2009 film?"
];

const option1 = [
    "490 Carnaby Street",
    "1882",
    "Sherlock Holmes",
    "The Adventure of the Yellow Face",
    "Robert Downey Jr."
];

const option2 = [
    "221B Baker Street",
    "1883",
    "Dr. Watson",
    "The Hound of Baskersville",
    "Leonardo DiCaprio"
];

const option3 = [
    "103 Brick Road",
    "1892",
    "Mycroft Holmes",
    "The Adventure of the Six Napoleons",
    "Harrison Ford"
];

const option4 = [
    "82 Abbots Road",
    "1893",
    "Mrs. Hudson",
    "The Adventure of the Solitary House",
    "Keanu Reeves"
];

const correct = [
    "Option2",
    "Option3",
    "Option2",
    "Option4",
    "Option1"
];

function Check(t) {
    document.getElementById(correct[index]).style.backgroundColor = "Green";

    if (t == correct[index]) {
        score++;
    }
    else {
        document.getElementById(t).style.backgroundColor = "Red";
    }

    document.getElementById("Option1").onclick = null;
    document.getElementById("Option2").onclick = null;
    document.getElementById("Option3").onclick = null;
    document.getElementById("Option4").onclick = null;
    
    document.getElementById("Option1").style.cursor = "default";
    document.getElementById("Option2").style.cursor = "default";
    document.getElementById("Option3").style.cursor = "default";
    document.getElementById("Option4").style.cursor = "default";
}

function Next() {
    index++;

    if (index < question.length) {
        //Sets text content of the question each option to the next question
        document.getElementById("question").textContent = question[index];
        document.getElementById("Option1").textContent = option1[index];
        document.getElementById("Option2").textContent = option2[index];
        document.getElementById("Option3").textContent = option3[index];
        document.getElementById("Option4").textContent = option4[index];

        document.getElementById("Option1").style.backgroundColor = "rgb(240, 240, 240)";
        document.getElementById("Option2").style.backgroundColor = "rgb(240, 240, 240)";
        document.getElementById("Option3").style.backgroundColor = "rgb(240, 240, 240)";
        document.getElementById("Option4").style.backgroundColor = "rgb(240, 240, 240)";

        document.getElementById("Option1").onclick = function() {Check('Option1');};
        document.getElementById("Option2").onclick = function() {Check('Option2');};
        document.getElementById("Option3").onclick = function() {Check('Option3');};
        document.getElementById("Option4").onclick = function() {Check('Option4');};

        document.getElementById("Option1").style.cursor = "pointer";
        document.getElementById("Option2").style.cursor = "pointer";
        document.getElementById("Option3").style.cursor = "pointer";
        document.getElementById("Option4").style.cursor = "pointer";
    }
    else {
        Finish();
    }
}

function Finish() {
    //Removes options and displays user result
    document.getElementById("question").textContent = "Results";
    document.getElementById("Next").textContent = "Play again";
    document.getElementById("results").textContent = "Your score: " + score + "/" + question.length;

    document.getElementById("Option1").style.display = "none";
    document.getElementById("Option2").style.display = "none";
    document.getElementById("Option3").style.display = "none";
    document.getElementById("Option4").style.display = "none";
    document.getElementById("results").style.display = "block";

    document.getElementById("Next").onclick = function() {PlayAgain();};
}

function PlayAgain() {
    //Resets back to first question
    document.getElementById("Next").textContent = "Next";

    document.getElementById("Option1").style.display = "inline-block";
    document.getElementById("Option2").style.display = "inline-block";
    document.getElementById("Option3").style.display = "inline-block";
    document.getElementById("Option4").style.display = "inline-block";
    document.getElementById("results").style.display = "none";

    index = -1;
    score = 0;

    Next();

    document.getElementById("Next").onclick = function() {Next();};
}