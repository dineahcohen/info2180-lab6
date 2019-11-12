window.onload = function(){
   
    document.getElementById("btn").onclick = function(){
      show_result(document.getElementById("queryTxt").value)
    }
  }
  
  function show_result(res) {  
    
    if (window.XMLHttpRequest) {
      xmlhttpreq=new XMLHttpRequest();
    } else { 
      xmlhttpreq=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttpreq.onreadystatechange=function() { 
      if (this.readyState==4 && this.status==200) {
        document.getElementById("Results").innerHTML=this.responseText;
  
      }
    }
    xmlhttpreq.open("GET","superheroes.php ="+res,true);
    xmlhttpreq.send();
  }