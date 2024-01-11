
  // Mobile Menu
  document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.Hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
        mobileMenu.classList.toggle('active')
       
      );
      console.log("I am clicked")
  });
  