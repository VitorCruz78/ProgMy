const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const btnEditor = document.querySelectorAll(".editor");
const codeEditor = document.querySelector('#codeEditor');


function toggleMenu() {
    menu.classList.toggle('active');
    menu.style.height = menu.classList.contains('active') ? menu.scrollHeight + 'px': '0';
}

function closeMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.style.height = '0';
    }
}

menuToggle.addEventListener('click', toggleMenu);
window.addEventListener('scroll', closeMenu);

document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
    }
});

btnEditor.forEach(edit => {
   edit.addEventListener('click', () => {
      codeEditor.classList.toggle('active-editor');
      if(codeEditor.classList.contains('active-editor')) {
         document.documentElement.style.overflow = 'hidden';
      } else {
         document.documentElement.style.overflow = 'auto';
      }
   })   
});