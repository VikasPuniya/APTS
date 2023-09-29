const video = document.getElementById("video");

function startVideo(){
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video:{
            width:1280, height:720
        }
    }).then(stream =>{
        video.srcObject = stream; // i have included autoplay thats why not doing video.play()
    }).catch(console.error);
};

window.addEventListener('load', startVideo);

/* ==========================
        Synopsis
        .team,.introduction,.objective,.scope,.working,.hardware,.limitations,.references
============================= 
*/

function clearPrimaryBoxContent(){
    document.querySelector(".team").style.display="none";
    document.querySelector(".introduction").style.display="none";
    document.querySelector(".objective").style.display="none";
    document.querySelector(".scope").style.display="none";
    document.querySelector(".working").style.display="none";
    document.querySelector(".hardware").style.display="none";
    document.querySelector(".limitations").style.display="none";
    document.querySelector(".references").style.display="none";
}
function clearSecondaryBoxColor(){
    document.querySelector(".secondary_synopsis_box_btn1").style.backgroundImage = "url('images/Synopsis_btn_1.png')";
    document.querySelector(".secondary_synopsis_box_btn2").style.backgroundImage = "url('images/Synopsis_btn_4.png')";
    document.querySelector(".secondary_synopsis_box_btn3").style.backgroundImage = "url('images/Synopsis_btn_3.png')";
    document.querySelector(".secondary_synopsis_box_btn4").style.backgroundImage = "url('images/Synopsis_btn_4.png')";
    document.querySelector(".secondary_synopsis_box_btn5").style.backgroundImage = "url('images/Synopsis_btn_4.png')";
    document.querySelector(".secondary_synopsis_box_btn6").style.backgroundImage = "url('images/Synopsis_btn_3.png')";
    document.querySelector(".secondary_synopsis_box_btn7").style.backgroundImage = "url('images/Synopsis_btn_1.png')";
    document.querySelector(".secondary_synopsis_box_btn8").style.backgroundImage = "url('images/Synopsis_btn_4.png')";
}
var n;
function hideshow(n){
    clearSecondaryBoxColor();
    clearPrimaryBoxContent();
    switch(n){
        case 1:
            document.querySelector(".synopsis_topic").innerText = "TEAM AND GUIDE";
            document.querySelector(".secondary_synopsis_box_btn1").style.backgroundImage = "url('images/Synopsis_btn_1r.png')";
            document.querySelector(".team").style.display="block";
        break;
        case 2:
            document.querySelector(".synopsis_topic").innerText = "INTRODUCTION";
            document.querySelector(".secondary_synopsis_box_btn2").style.backgroundImage = "url('images/Synopsis_btn_4r.png')";
            document.querySelector(".introduction").style.display="block";
        break;
        case 3:
            document.querySelector(".synopsis_topic").innerText = "OBJECTIVE";
            document.querySelector(".secondary_synopsis_box_btn3").style.backgroundImage = "url('images/Synopsis_btn_3r.png')";
            document.querySelector(".objective").style.display="block";
        break;
        case 4:
            document.querySelector(".synopsis_topic").innerText = "SCOPE";
            document.querySelector(".secondary_synopsis_box_btn4").style.backgroundImage = "url('images/Synopsis_btn_4r.png')";
            document.querySelector(".scope").style.display="block";
        break;
        case 5:
            document.querySelector(".synopsis_topic").innerText = "WORKING METHODOLGY";  
            document.querySelector(".secondary_synopsis_box_btn5").style.backgroundImage = "url('images/Synopsis_btn_4r.png')";
            document.querySelector(".working").style.display="block";
        break;
        case 6:
            const a = document.querySelector(".synopsis_topic");
            a.innerText = "HARDWARE AND SOFTWARE";
            a.style.fontSize ="33px";
            document.querySelector(".secondary_synopsis_box_btn6").style.backgroundImage = "url('images/Synopsis_btn_3r.png')";
            document.querySelector(".hardware").style.display="block";
        break;
        case 7:
            document.querySelector(".synopsis_topic").innerText = "LIMITATIONS";
            document.querySelector(".secondary_synopsis_box_btn7").style.backgroundImage = "url('images/Synopsis_btn_1r.png')";
            document.querySelector(".limitations").style.display="block";
        break;
        case 8:
            document.querySelector(".synopsis_topic").innerText = "REFERENCES";
            document.querySelector(".secondary_synopsis_box_btn8").style.backgroundImage = "url('images/Synopsis_btn_4r.png')";
            document.querySelector(".references").style.display="block";
        break;
        default:
            document.querySelector(".team").computedStyleMap.display="block";
            document.querySelector(".team").style.display="hidden";
    }
}