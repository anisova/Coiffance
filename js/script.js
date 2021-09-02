//Инициализация первого слайдера
const resultSwiper = new Swiper('.result-slider', {
    direction: 'horizontal',
    loop: true,
    slideToClickedSlide: true,    
    navigation: {
      nextEl: '.result-slider__next',
      prevEl: '.result-slider__prev',
    },     
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        // autoHeight:true, 
      },
     
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        // autoHeight:true, 
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoHeight:true, 
      }
    }

  });
const swiperPrev = document.querySelector('.result-slider__prev');
const swiperNext = document.querySelector('.result-slider__next');
swiperPrev.addEventListener('click', () => {
  resultSwiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
  resultSwiper.slideNext();
})
//Инициализация  слайдера library

window.onload = function() {
const librarySwiper = new Swiper('.library-slider', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  // slidesPerView: 'auto',
  // spaceBetween: 30,
  autoHeight:true,  
  centeredSlides:true,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
  navigation: {
    nextEl: '.library-slider__next',
    prevEl: '.library-slider__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,     
    },   
    768: {
      slidesPerView: 1,
      spaceBetween: 30,      
    },
    1000: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      
    }
  }
});

//Инициализация слайдера care
const careSwiper = new Swiper('.care-slider', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  // slidesPerView: 'auto',
  // spaceBetween: 30,
  autoHeight:true,  
  centeredSlides:true,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
  navigation: {
    nextEl: '.care-slider__next',
    prevEl: '.care-slider__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,     
    },   
    768: {
      slidesPerView: 1,
      spaceBetween: 30,      
    },
    1000: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      
    }
  }
});

//Инициализация слайдера perm
const permSwiper = new Swiper('.perm-slider', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  // slidesPerView: 'auto',
  // spaceBetween: 30,
  autoHeight:true,  
  centeredSlides:true,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
  navigation: {
    nextEl: '.perm-slider__next',
    prevEl: '.perm-slider__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,     
    },   
    768: {
      slidesPerView: 1,
      spaceBetween: 30,      
    },
    1000: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      
    }
  }
});
//Инициализация слайдера styling
const stylingSwiper = new Swiper('.styling-slider', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  // slidesPerView: 'auto',
  // spaceBetween: 30,
  autoHeight:true,  
  centeredSlides:true,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
  navigation: {
    nextEl: '.styling-slider__next',
    prevEl: '.styling-slider__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,     
    },   
    768: {
      slidesPerView: 1,
      spaceBetween: 30,      
    },
    1000: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      
    }
  }
});
//Инициализация слайдера products
const productsSwiper = new Swiper('.products-slider', {
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  // slidesPerView: 'auto',
  // spaceBetween: 30,
  autoHeight:true,  
  centeredSlides:true,
  observer:true,
  observeParents:true,
  observeSlideChildren:true,
  navigation: {
    nextEl: '.products-slider__next',
    prevEl: '.products-slider__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,     
    },   
    768: {
      slidesPerView: 1,
      spaceBetween: 30,      
    },
    1000: {
      slidesPerView: 'auto',
      spaceBetween: 30,      
    }
  }
});
}




function ham(){
    const ham=document.querySelector('.hamburger');
    const ham_menu=document.querySelector('.ham-menu');
    const body=document.querySelector('body');
    function toggleMenu(){
        ham.classList.toggle('active');
        ham_menu.classList.toggle('is-active');    
        body.classList.toggle('locked'); 
    }
    ham.addEventListener('click',function(e){
    e.preventDefault();  
    toggleMenu();
    })  
    ham_menu.addEventListener('click',function(e){  
      let target=e.target;      
      if (target.className==='menu__link') {    
        toggleMenu();
      }       
    })    
    };
    ham();
// Функция работы модального окна
function toggleModal(modalWindow, openButton, closeButton) {
  const openBtns = document.querySelectorAll(openButton);   
    const modal = document.querySelector(modalWindow);    
    if (modal) {
      const closeBtn = modal.querySelector(closeButton);    
      openBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {           
      e.preventDefault();
      modal.style.display = "flex";
      document.body.style.overflowY = "hidden";   
       
    });
    });  
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";       
        document.body.style.overflowY = "";  
             
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeBtn.click();
        }
      });
    }
  }
// Функция работы модального окна thanks
function thanksModal(modalWindow, openButton, closeButton) {
  const openBtns = document.querySelectorAll(openButton);   
    const modal = document.querySelector(modalWindow);    
    if (modal) {
      const closeBtn = modal.querySelector(closeButton);    
      openBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {           
      e.preventDefault();
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";  
      btn.setAttribute("disabled", "disabled");
      setTimeout(() => closeBtn.click(), 3000);
    });
    });  
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        // document.body.style.overflow = "";
        const formModal = document.querySelector('.form-modal');  
        formModal.style.display = "none";
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeBtn.click();
        }
      });
    }
  }  
  toggleModal(".form-modal", ".btn", ".btn-close");
  toggleModal(".policy-modal", ".btn_policy", ".btn-close");
  thanksModal(".thanks-modal", ".submit-btn", ".btn-close");

//функции модальных окон с видео
  function videoModal(modalWindow, openButton, closeButton) {
  const openBtns = document.querySelectorAll(openButton);    
    const modal = document.querySelector(modalWindow);      
    if (modal) {
      const closeBtn = modal.querySelector(closeButton);    
      openBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {           
      e.preventDefault();      
      const content = document.querySelector('.video-modal__content');
      content.insertAdjacentHTML('afterbegin', '<iframe class ="video1" width="960" height="540"  src="https://www.youtube.com/embed/XitxkwKyYLM?autoplay=1" title="YouTube video player" frameborder="0" allow=autoplay allowfullscreen></iframe>');     
      modal.style.display = "flex";
      document.body.style.overflowY = "hidden";
    });
    });  
      closeBtn.addEventListener("click", () => {
        // stopVideo1();
        modal.style.display = "none";       
        document.body.style.overflowY = "";  
             
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeBtn.click();
        }
      });
    }
  }
  function stopVideo1() {
    var iframe = document.querySelector( '.video1');    
    if ( iframe ) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc; 
    }    
  };
  videoModal('.video-modal','.placeholder1','.btn-close_white');  

  function videoModal2(modalWindow, openButton, closeButton) {
    const openBtns = document.querySelectorAll(openButton);     
      const modal = document.querySelector(modalWindow);        
      if (modal) {
        const closeBtn = modal.querySelector(closeButton);    
        openBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {   
               
        e.preventDefault();     
        const content = document.querySelector('.video2-modal__content');        
        content.insertAdjacentHTML('afterbegin', '<iframe class ="video2" width="960" height="540" src="https://www.youtube.com/embed/80C5milVfO4?autoplay=1" title="YouTube video player" frameborder="0" allow=autoplay allowfullscreen></iframe>');      
   
        modal.style.display = "flex";
        document.body.style.overflowY = "hidden"; 
      });
      });  
        closeBtn.addEventListener("click", () => {
          // stopVideo2();
          modal.style.display = "none";       
          document.body.style.overflowY = "";  
               
        });
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            closeBtn.click();
          }
        });
      }
    }
    function stopVideo2() {
      var iframe = document.querySelector( '.video2');    
      if ( iframe ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;     
      }    
    };
    videoModal2('.video2-modal','.placeholder2','.btn-close_white');


//функция переключения табов
function toggleTab() {
    tabs = document.querySelectorAll(".tab");
    tabContents = document.querySelectorAll(".tab-content");    
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", () => {
        for (let i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove("active");
          tabContents[i].classList.remove("active");
        }
        tabs[i].classList.add("active");
        tabContents[i].classList.add("active");
      });
    }
  }
  toggleTab();
  //функция запуска видео о бренде
  function brandVideo () {
    const videoBtn = document.querySelector('.video__btn');
    const meet = document.querySelector('.meet');
    videoBtn.addEventListener('click', (e)=> {
      e.preventDefault();
      meet.insertAdjacentHTML('afterbegin', '<iframe class="meet__iframe" allow=autoplay width="100%" height="100%" src="https://www.youtube.com/embed/Mad2tToZwgY?autoplay=1"  frameborder="0" ></iframe>');      
    })
  }
  brandVideo ();
  function brandVideo1 () {
    const videoBtn = document.querySelector('.brand__img');
    const brand = document.querySelector('.brand__video');
    const videoPoster = document.querySelector('.brand__img');
    videoBtn.addEventListener('click', (e)=> {
      e.preventDefault();
      brand.insertAdjacentHTML('afterbegin', '<iframe class="brand__iframe" allow=autoplay allowfullscreen width="100%" height="100%" src="https://www.youtube.com/embed/qlhZK2sl8Ts?autoplay=1" frameborder="0"></iframe>');
      videoPoster.style.display = 'none';      
    })
  }
  brandVideo1 (); 
  //функция для отработки действий при скролле
    function scrollAсtion() {
      window.addEventListener("scroll", () => {        
        // if (document.documentElement.clientWidth > 1000) {
          if (document.documentElement.clientWidth > 768) {
          elemAnimate(".h2", "titleAnimation");
           }          
          elemAnimate(".brand__text", "appear-up"); 
          elemAnimate(".brand__info", "appear-up-info");
          elemAnimate(".result-slide_slide1", "in-scale_slide1");
          elemAnimate(".result-slide_slide2", "in-scale_slide2");
          elemAnimate(".result-slide_slide3", "in-scale_slide3");
          elemAnimate(".result-slide_slide3", "in-scale_slide3");          
           if (document.documentElement.clientWidth > 900) {
             elemAnimate(".result-slider__next", "in-scale_arrow-next");
            }
          
        // }           
      });
    }
    //Функция, которая проверяет, появился ли элемент в области видимости
    function isPartiallyVisible(el) {
      let elementBoundary = el.getBoundingClientRect();
      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;
      let height = elementBoundary.height;
      return top + height >= 0 && height + window.innerHeight >= bottom;
    }  
    //Функция анимации элемента, который появляется в области видимости
    function elemAnimate(elemClass, animationClass) {
      let el = document.querySelectorAll(elemClass);
      el.forEach((element) => {
        if (isPartiallyVisible(element)) {          
          element.classList.add(animationClass);
        }
      });
    }  
scrollAсtion();
function menuFixed() {
window.onscroll = function() {
const menu = document.querySelector('.menu');
const back = document.querySelector('.sticky-back');
let sticky = menu.offsetTop;
if (window.pageYOffset > sticky) {
  menu.classList.add("sticky");
  const stickyMenu = document.querySelector('.sticky');
  if (document.documentElement.clientWidth > 768) {
    back.style.visibility='visible';
  back.style.opacity='1';
   }
  
  stickyMenu.style.opacity='1';
} else {
  menu.classList.remove("sticky");
  back.style.visibility='hidden';
  back.style.opacity='0';  
}
};
}
menuFixed();    
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;  
	if (window.innerWidth > 768) {
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.menu').clientHeight <= scrollDistance) {
				document.querySelectorAll('.menu__link').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});
				document.querySelectorAll('.menu__item')[i].querySelector('a').classList.add('active');
			}
		});
	}
});
//функция плавной прокрутки к секции с учетом плавающего меню
function scrollToSection() {
  const anchors = document.querySelectorAll("a.scrollto");      
        anchors.forEach((anchor) => {
          anchor.addEventListener("click", function (e) {  
            e.preventDefault();       
            const blockID = anchor.getAttribute("href");
            let gotoBlock = document.querySelector(blockID);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.sticky-back').offsetHeight;
            window.scrollTo({
              top: gotoBlockValue,
              behavior: "smooth"
          });        
          });
        });
      }  
  //end of scrollToSection()
      scrollToSection();
