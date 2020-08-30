$(function () {
    AOS.init({
        disable: function msieversion() {
                return !!(window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(
                    /Trident.*rv\:11\./))
                }
    });

    $('.comments__slider').slick({
        slidesToShow: 3,
        prevArrow: '<button class="comments__slider-arrow comments__slider-arrow-left"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="arrow-bg" d="M23.75 13.7499H8.925L13.4625 8.29986C13.6747 8.04459 13.7768 7.71548 13.7463 7.38495C13.7158 7.05442 13.5553 6.74953 13.3 6.53736C13.0447 6.32518 12.7156 6.22311 12.3851 6.25358C12.0546 6.28406 11.7497 6.44459 11.5375 6.69986L5.2875 14.1999C5.24545 14.2595 5.20785 14.3222 5.175 14.3874C5.175 14.4499 5.175 14.4874 5.0875 14.5499C5.03084 14.6932 5.00118 14.8457 5 14.9999C5.00118 15.154 5.03084 15.3065 5.0875 15.4499C5.0875 15.5124 5.0875 15.5499 5.175 15.6124C5.20785 15.6775 5.24545 15.7402 5.2875 15.7999L11.5375 23.2999C11.655 23.441 11.8022 23.5544 11.9686 23.6322C12.1349 23.71 12.3164 23.7502 12.5 23.7499C12.7921 23.7504 13.0751 23.6487 13.3 23.4624C13.4266 23.3574 13.5312 23.2285 13.6079 23.0831C13.6846 22.9377 13.7318 22.7785 13.7469 22.6148C13.762 22.4511 13.7447 22.286 13.6959 22.129C13.6471 21.972 13.5678 21.8262 13.4625 21.6999L8.925 16.2499H23.75C24.0815 16.2499 24.3995 16.1182 24.6339 15.8837C24.8683 15.6493 25 15.3314 25 14.9999C25 14.6683 24.8683 14.3504 24.6339 14.116C24.3995 13.8816 24.0815 13.7499 23.75 13.7499Z" fill="#F53838"/></svg></button>',
        nextArrow: '<button class="comments__slider-arrow comments__slider-arrow-right"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="arrow-bg" d="M6.25 13.7499H21.075L16.5375 8.29986C16.3253 8.04459 16.2232 7.71548 16.2537 7.38495C16.2842 7.05442 16.4447 6.74953 16.7 6.53736C16.9553 6.32518 17.2844 6.22311 17.6149 6.25358C17.9454 6.28406 18.2503 6.44459 18.4625 6.69986L24.7125 14.1999C24.7545 14.2595 24.7922 14.3222 24.825 14.3874C24.825 14.4499 24.825 14.4874 24.9125 14.5499C24.9692 14.6932 24.9988 14.8457 25 14.9999C24.9988 15.154 24.9692 15.3065 24.9125 15.4499C24.9125 15.5124 24.9125 15.5499 24.825 15.6124C24.7922 15.6775 24.7545 15.7402 24.7125 15.7999L18.4625 23.2999C18.345 23.441 18.1978 23.5544 18.0314 23.6322C17.8651 23.71 17.6836 23.7502 17.5 23.7499C17.2079 23.7504 16.9249 23.6487 16.7 23.4624C16.5734 23.3574 16.4688 23.2285 16.3921 23.0831C16.3154 22.9377 16.2682 22.7785 16.2531 22.6148C16.238 22.4511 16.2553 22.286 16.3041 22.129C16.3529 21.972 16.4322 21.8262 16.5375 21.6999L21.075 16.2499H6.25C5.91848 16.2499 5.60054 16.1182 5.36612 15.8837C5.13169 15.6493 5 15.3314 5 14.9999C5 14.6683 5.13169 14.3504 5.36612 14.116C5.60054 13.8816 5.91848 13.7499 6.25 13.7499Z" fill="#F53838"/></svg></button>',
        dots: true,
        dotsClass: 'comments__dots',
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    let burgerBtn = document.querySelector('.header__burger');
    let menu = document.querySelector('.header__nav');

    burgerBtn.addEventListener('click', showMenu);

    function showMenu() {
        if (menu) {
            menu.classList.toggle('header__nav-active');
            burgerBtn.classList.toggle('burger-active');
        }

    }

    let footerColumnBtn = document.querySelectorAll('.footer__column-title');
    let footerColumnLists = document.querySelectorAll('.footer__column-list');
    let footerColumnArrows = document.querySelectorAll('.footer__column-title-arrow');

    if (window.innerWidth < 551) {
        // footerColumnBtn.forEach(column => {
        //     column.addEventListener('click', showSubmenu);
        // });

        for (let i = 0; i < footerColumnBtn.length; i++) {
            footerColumnBtn[i].addEventListener('click', showSubmenu);
        }
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth > 551) {
            // footerColumnBtn.forEach(column => {
            //     column.removeEventListener('click', showSubmenu);
            // });

            for (let i = 0; i < footerColumnBtn.length; i++) {
                footerColumnBtn[i].addEventListener('click', showSubmenu);
            }
        } else {
            // footerColumnBtn.forEach(column => {
            //     column.addEventListener('click', showSubmenu);
            // });

            for (let i = 0; i < footerColumnBtn.length; i++) {
                footerColumnBtn[i].addEventListener('click', showSubmenu);
            }
        }
    });

    function showSubmenu(event) {
        let target = event.target;
        let title = target;

        while (!title.classList.contains('footer__column-title')) {
            title = title.parentNode;
        }

        let arrow = title.querySelector('.footer__column-title-arrow');

        if (!Element.prototype.matches) {
            Element.prototype.matches =
              Element.prototype.msMatchesSelector || 
              Element.prototype.webkitMatchesSelector;
          }
          
          if (!Element.prototype.closest) {
            Element.prototype.closest = function(s) {
              var el = this;
          
              do {
                if (Element.prototype.matches.call(el, s)) return el;
                el = el.parentElement || el.parentNode;
              } while (el !== null && el.nodeType === 1);
              return null;
            };
          }

        if (!target.closest('DIV')) return;

        let parent = target.parentNode;

        while (!parent.classList.contains('footer__column-nav')) {
            parent = parent.parentNode;
        }

        let submenu = parent.querySelector('.footer__column-list');

        if (submenu.classList.contains('submenu-active')) {
            submenu.classList.toggle('submenu-active');
            arrow.classList.toggle('arrow-active');
            return;
        }

        if (submenu) {
            // footerColumnLists.forEach(list => {
            //     if (list.classList.contains('submenu-active')) {
            //         list.classList.remove('submenu-active');
            //     }
            // });

            for (let i = 0; i < footerColumnLists.length; i++) {
                if (footerColumnLists[i].classList.contains('submenu-active')) {
                    footerColumnLists[i].classList.remove('submenu-active')
                }
            }

            // footerColumnArrows.forEach(arrow => {
            //     if (arrow.classList.contains('arrow-active')) {
            //         arrow.classList.remove('arrow-active');
            //     }
            // });

            for (let i = 0; i < footerColumnArrows.length; i++) {
                if (footerColumnArrows[i].classList.contains('arrow-active')) {
                    footerColumnArrows[i].classList.remove('arrow-active');
                }
            }

            submenu.classList.toggle('submenu-active');
            arrow.classList.toggle('arrow-active');
        }

    }





    // var footerColumnBtn = document.querySelectorAll('.footer__column-title');

    // if (window.innerWidth < 551) {
    // //   footerColumnBtn.forEach(function (column) {
    // //     column.addEventListener('click', showSubmenu);
    // //   });

    //   for (var i = 0; i < footerColumnBtn.length; i++) {
    //       footerColumnBtn[i].addEventListener('click', showSubmenu);
    //   }
    // }

    // // window.addEventListener('resize', function () {
    // //   if (window.innerWidth > 551) {
    // //     footerColumnBtn.forEach(function (column) {
    // //       column.removeEventListener('click', showSubmenu);
    // //     });
    // //   } else {
    // //     footerColumnBtn.forEach(function (column) {
    // //       column.addEventListener('click', showSubmenu);
    // //     });
    // //   }
    // // });

    // function showSubmenu(event) {
    //   var target = event.target;
    // //   if (!target.closest('DIV')) return;
    //   console.log(target);
    //   var parent = target.parentNode;

    //   while (!parent.classList.contains('footer__column-nav')) {
    //     parent = parent.parentNode;
    //   }

    //   var submenu = parent.querySelector('.footer__column-list');

    //   if (submenu) {
    //     submenu.classList.toggle('submenu-active');
    //   }
    // }
});