function good(){
  alert("Gololcha Detergent. Contact As ፦ +251913741884 & mulatudebebe548@gmail.com")
  }
function english(){
  window.location = "GololchaEng.html"
}

function newElementjs() {
var li=document.createElement("ul");

var inputValue=document
.getElementById("myInput").value;

var t = document.createTextNode
(inputValue);

 li.appendChild(t);
 if (inputValue === '') {
 alert("You must write something!");
  } else {
    document.getElementById("myUL")
    .appendChild(li);
  }
  document.getElementById("myInput")
  .value = "";

var span=document.createElement
("SPAN");

var txt=document.createTextNode
("");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

/*function openNav() {
 document.getElementById("myNav")
 .style.height="100%";
}*/

function closeNav() {
 document.getElementById("myNav")
 .style.height = "0%";
}

//<script type = "text/javascript"> 
         function gol(){ 
            var det = prompt("", "");  
            //document.write("Gololcha " + "Detergent");  
            if (det == "gololcha1212detergent"){
//function openNav() {
 document.getElementById("myNav")
 .style.height="100%";
//}
            }
            //else{
             // window.location = "Golelcha.html"
            //}
         }  
  //    </script> 
  
//    prompt("gololcha1212detergent@gmail.com","Go.De.12")
//  function gmail(){
// prompt(" mulatudebebe548@gmail.com","debe124061")
/* alert("Yohanes Debebe. Contact Me By ፦ Tel: +251930531637 & Email: yopeman318@gmail.com")
  }*/