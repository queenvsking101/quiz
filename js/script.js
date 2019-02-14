/* global $ */

var q1Result = "";
var q2Result ="";
var q3Result="";
var q4Result="";
var q5Result="";
var q6Result= "";

var totalScore = 0;
var position ="";
var name = "";




$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
     
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var q5Result = $("#question5").val();
        var q6Result = $("#question6").val();


      q1(q1Result);
      q2(q2Result);
      q3(q3Result);
      q4(q4Result);
      q5(q5Result);
      q6(q6Result);

result(totalScore);

 $("#answer").text( "" + name + " you will be " + position);
    console.log(totalScore);

});

    
    
//question one
function q1(q1Result){
if (q1Result === "yes"){
    
        totalScore = totalScore + 2;
    }
}




// queston 2 
function q2(q2Result){
if (q2Result === "yes"){
    totalScore = totalScore + 2;
}
}




//question 3
function q3(q3Result){
if (q3Result === "love them"){
    
    totalScore = totalScore + 2;
    
}else if(q3Result === "maybe"){
    totalScore = totalScore + 1;
}
}




//question 4
function q4(q4Result){
if(q4Result === "1"){
    totalScore = totalScore + 2;
}else if(q4Result === "2"){
    totalScore = totalScore + 1;
    
}
}




//question 5
function q5(q5Result){
if(q5Result === "1"){
    totalScore = totalScore + 2 ;
    
}else if(q5Result === "2"){
    totalScore = totalScore + 1;
}
}






// question 6
function q6(q6Result){
if(q6Result === "yes"){
    totalScore = totalScore + 2;
}else if(q6Result === "somewhat"){
    totalScore = totalScore + 1;
}
}


function result(points){
// now focus on how your points are used 
if(points === 12){
    position = "a server";
}else if(points>=9){
    position = "a host";
}else if(points>=6){
    position = " a game conductor";
}else if (points>=3){
    position = " a cook";
}else{
    position="not be working with us";
}
   
    
}

    
    
});
