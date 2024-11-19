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


document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');

        const content = button.nextElementSibling;

        if (content.classList.contains('open')) {
            content.classList.remove('open');
        } else {
            document.querySelectorAll('.accordion-content.open').forEach(openContent => {
                openContent.classList.remove('open');
                openContent.previousElementSibling.classList.remove('active');
            });
            content.classList.add('open');
        }
    });
});

