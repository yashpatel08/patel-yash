function changeClass() {
   
      const element = document.getElementById("toggle");
      if (element.className == "toggle_container") {
         element.className = "toggle_container-open";
      } else {
         element.className = "toggle_container";
      }
   }

// function classToggle(){
//    const nav=document.querySelectorAll('.toggle_container');

//    nav.forEach(nav => nav.classList.toggle('.toggle-items'));

// }

// document.querySelector('.toggle_btn').addEventListener('click',classToggle); 


// const toggleBtn = document.querySelector('.toggle_btn');
// const toggleBtnIcon = document.querySelector('.toggle_btn i');
// const toggle_containerr = document.querySelector('.toggle_container');

// toggleBtn.onclick = function () {
//   toggle_containerr.classList.toggle('open');

//   const isOpen = dropDownMenu.classList.contains('open');

//   toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
// }



// /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// function openNav() {
//    document.getElementById("toggle").style.width = "220px";
//    document.getElementById("btn").style.marginLeft = "220px";
//  }
 
//  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
//  function closeNav() {
//    document.getElementById("toggle").style.width = "0";
//    document.getElementById("btn  ").style.marginLeft = "0";
//  }