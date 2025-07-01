document.addEventListener("DOMContentLoaded", function() {
    document.forms["Test"].addEventListener("click", updateSelection);
});
function userSolution(){
    var name = document.forms["solutions"]["name"].value;
    var problem = document.forms["solutions"]["problem"].value;
    var solutions = document.forms["solutions"]["solutions"].value;
    if (name == "" || problem == "" || solutions == ""){
        alert("missing infomation");
    }
    else{
        var extraComment = document.getElementById("comment").innerHTML;
        extraComment = extraComment + "<li>"+name+" suggests the problem of "+problem+". And his solution is to:"+solutions+"</li>";
        document.getElementById("comment").innerHTML = extraComment;  

    }
        
}

function updateSelection() {
    var checkboxes = document.forms["Test"].querySelectorAll("input[type=checkbox]");
    var values = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.name);
    //var punishmentDecison = document.getElementById("punishment");//
    //punishmentDecison.innerHTML = "";//

    if (values.includes("yes")){
        alert("Correct!");
    }
    if (values.includes("definetly")){
        alert("Good Job!");
    } 
    if (values.includes("no")){
        showHide();
    }
}

function showHide(){
    var x = document.getElementById('incorrect');
    x.style.visibility = 'visible';
    x.requestFullscreen()

    var audio1 = new Audio('song.mp3');

    var audio2 = new Audio("siren.wav")
    audio2.play();
    
    var audio3 = new Audio("thick of it.mp3")

    var audio4 = new Audio("intro.mp3")

    var audio5 = new Audio("samsung.mp3")
    audio5.play();

    var audio6 = new Audio("india.mp3")

    var audio7 = new Audio("goofy.mp3")

    audio2.onended = function() {
        audio1.play();
        audio7.play();
        
    };
    audio1.onended = function(){
        audio3.play();
        audio3.loop = true;
        audio2.play();
        audio2.loop = true;
        audio4.play();
        audio4.loop = true;
        audio5.play();
        audio5.loop = true;
        audio6.play();
        audio6.loop = true;
        audio7.play();
        audio7.loop = true;
    };
}

