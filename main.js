'use strict'

addEventListener('load',()=>{
  
    var mobileNav = document.querySelector('#mobile-nav');
    var mobileNavButton = document.querySelector('#mobile-nav-button');
    
    mobileNavButton.addEventListener('click', ()=>{
        console.log('hola');
        mobileNav.classList.toggle('mobile-nav-hidden');
    })


    var dropdownToggle = document.querySelector('#dropdown-toggle');
    var dropdownContainer = document.querySelector('.dropdown-container');

    dropdownToggle.addEventListener('click', ()=>{
        dropdownContainer.classList.toggle('hidden-dropdown')
        dropdownToggle.classList.toggle('on')
    })


})