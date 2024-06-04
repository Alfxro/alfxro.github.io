'use strict'

addEventListener('load',()=>{
  
    var mobileNav = document.querySelector('#mobile-nav');
    var mobileNavButton = document.querySelector('#mobile-nav-button');
    var mayron = "mayron";
    mobileNavButton.addEventListener('click', ()=>{
        console.log('hola');
        mobileNav.classList.toggle('mobile-nav-hidden');

        mobileNavButton.classList.toggle('mobile-nav-button-on')
    })


    var dropdownToggle = document.querySelector('#dropdown-toggle');
    var dropdownContainer = document.querySelector('.dropdown-container');

    dropdownToggle.addEventListener('click', ()=>{
        dropdownContainer.classList.toggle('hidden-dropdown')
        dropdownToggle.classList.toggle('on')
    })


})