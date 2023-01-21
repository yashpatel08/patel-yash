  
        function myfunction()
        {
         var x=document.getElementById("navbar");
          if  (x.className==="navbar")
          {
            x.className += "responsive";
          }
          else
          {
            x.className = "navbar";
          }

        }
    

        function myFunction() {
          var x = document.getElementById("alllinks");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
        }