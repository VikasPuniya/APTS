
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



/*==========================
        For Contact Page
============================*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


function sendEmail(){

    var name = document.getElementById("name").value ;
    var email = document.getElementById("email").value ;
    var phone = document.getElementById("phone").value ;
    var mss = document.getElementById("message").value ;

    var btn= document.getElementById("messageBtn");

    if(name != "" && email != "" && phone != "" && mss != "" )
    {
    Email.send({
        SecureToken: "a99c2327-c142-4507-8067-d4fcb9aa192d",
        To : 'vikaspuniya789@gmail.com',
        From : "vikramwebt@gmail.com",
        Subject : "New contact form Enquiry",
        Body : "NAME : " + name
        + " <br> E-mail : " + email
        + " <br> Phone No : " + phone
        + " <br> Message : " + mss
        }).then(
                message => 
                    {
                    if(message === "OK")
                        {
                           btn.innerText="Sent Successfuly";
                        }
                    else
                        {
                            alert(message);
                        }
                    }   
                );
    }
    else{
       btn.innerText="Some Fields Missing";
    }

    setTimeout(() => { btn.innerText="Send" }, 5000);
}