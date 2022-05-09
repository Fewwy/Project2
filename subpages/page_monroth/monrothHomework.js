document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("button2").style.visibility = "hidden";
            document.getElementById("prank").style.display = "none";    
});


function b1()
        {
            document.getElementById("button1").style.visibility = "hidden";
            document.getElementById("button2").style.visibility = "visible";
        }

function b2()
        {
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button2").style.visibility = "hidden";
        }


function clck()
        {
            document.getElementById("header").style.display = "none";
            document.getElementById("menu").style.display = "none";
            document.getElementById("main").style.display = "none";
            document.getElementById("footer").style.display = "none";
            document.getElementById("prank").style.display = "block";
            document.getElementById("my_audio").play();
    
        }

