let intro = document.querySelector('.intro');
let yo = document.querySelector('#Yo');
let whatUp = document.querySelector('#WhatUp');
let introWord = document.querySelector('.introWord');
let introText = document.querySelector('.introText');
let subIntroText = document.querySelector('.subIntroText');
let mainNavBar = document.querySelector('.mainNavBar');
let backgroundImg = document.querySelector('#backgroundImg');
let mainPage = document.querySelector('.mainPage');
let outerCircleContainer = document.querySelector('.outerCircleContainer');;
let waitForLoad = document.querySelector('.waitForLoad');
let projectOne = document.querySelector('#projectOne');
let projectTwo = document.querySelector('#projectTwo');
let projectThree = document.querySelector('#projectThree');




window.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout( ()=>{
        introText.style.opacity = '1';
        introText.classList.add('active');
        setTimeout( () => {
            introText.style.borderRight = '0px';
            subIntroText.style.opacity = '1';
            subIntroText.classList.add('active');
            
            setTimeout( () =>{
                mainNavBar.style.opacity = '1';
                mainNavBar.classList.add('active');
                backgroundImg.classList.add('active');
                mainPage.style.backgroundColor = 'transparent';
                outerCircleContainer.classList.add('fadeIn');
                waitForLoad.style.height = 'auto';
                setTimeout( () =>{
                    outerCircleContainer.style.opacity = '1';
                }, 2000);
            },500);
        },1100); /* 1100 */
    },0); /* 1500 */
    
    let style = window.getComputedStyle(projectOne);


    window.addEventListener('scroll', function () {

        let projectOneScrollValue = projectOne.getBoundingClientRect().top - 1.5 * projectOne.clientHeight;
        let projectTwoScrollValue = projectTwo.getBoundingClientRect().top - 1.5 * projectTwo.clientHeight;
        let projectThreeScrollValue = projectThree.getBoundingClientRect().top - 1.5 * projectThree.clientHeight;
        if(projectOneScrollValue <= 0) {
            projectOne.classList.remove('deactive');
            projectOne.classList.add('active');
        }
        if(projectOneScrollValue > 0 && projectOne.classList.contains('active'))
        {
            projectOne.classList.add('deactive');
        }
        if(projectTwoScrollValue <= 0) {
            projectTwo.classList.remove('deactive');
            projectTwo.classList.add('active');
        }
        if(projectTwoScrollValue > 0 && projectTwo.classList.contains('active'))
        {
            projectTwo.classList.add('deactive');
        }
        if(projectThreeScrollValue <= 0) {
            projectThree.classList.remove('deactive');
            projectThree.classList.add('active');
        }
        if(projectThreeScrollValue > 0 && projectThree.classList.contains('active'))
        {
            projectThree.classList.add('deactive');
        }
    })


});

