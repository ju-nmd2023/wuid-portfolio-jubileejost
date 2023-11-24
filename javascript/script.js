document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
  
    menuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
      
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById("menu-icon");
    var closeIcon = document.getElementById("close-icon");
    var menuToggle = document.querySelector('.menu-toggle');
  
    menuToggle.addEventListener('click', function () {
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('active');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const rotatingImage = document.getElementById('close-icon');
  
    rotatingImage.addEventListener('mouseenter', function () {
      rotatingImage.classList.add('rotated');
    });

  
  });
  

  