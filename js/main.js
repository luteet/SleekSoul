
(function () {
  var FX = {
      easing: {
          linear: function (progress) {
              return progress;
          },
          quadratic: function (progress) {
              return Math.pow(progress, 2);
          },
          swing: function (progress) {
              return 0.5 - Math.cos(progress * Math.PI) / 2;
          },
          circ: function (progress) {
              return 1 - Math.sin(Math.acos(progress));
          },
          back: function (progress, x) {
              return Math.pow(progress, 2) * ((x + 1) * progress - x);
          },
          bounce: function (progress) {
              for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
                  if (progress >= (7 - 4 * a) / 11) {
                      return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
                  }
              }
          },
          elastic: function (progress, x) {
              return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
          }
      },
      animate: function (options) {
          var start = new Date;
          var id = setInterval(function () {
              var timePassed = new Date - start;
              var progress = timePassed / options.duration;
              if (progress > 1) {
                  progress = 1;
              }
              options.progress = progress;
              var delta = options.delta(progress);
              options.step(delta);
              if (progress == 1) {
                  clearInterval(id);
  
                  options.complete();
              }
          }, options.delay || 10);
      },
      fadeOut: function (element, options) {
          var to = 1;
          this.animate({
              duration: options.duration,
              delta: function (progress) {
                  progress = this.progress;
                  return FX.easing.swing(progress);
              },
              complete: options.complete,
              step: function (delta) {
                  element.style.opacity = to - delta;
              }
          });
      },
      fadeIn: function (element, options) {
          var to = 0;
          element.style.display = 'block';
          this.animate({
              duration: options.duration,
              delta: function (progress) {
                  progress = this.progress;
                  return FX.easing.swing(progress);
              },
              complete: options.complete,
              step: function (delta) {
                  element.style.opacity = to + delta;
              }
          });
      }
  };
  window.FX = FX;
  })()
  
  
  
  
  
  
  // =-=-=-=-=-=-=-=-=-=-=-=- <popup> -=-=-=-=-=-=-=-=-=-=-=-=
  
  let popupCheck = true, popupCheckClose = true;
  function popup(arg) {
  
  if (popupCheck) {
      popupCheck = false;
  
      let popup, popupClose,
  
          body = arg.body,
          html = arg.html,
          header = arg.header,
          duration = (arg.duration) ? arg.duration : 200,
          id = arg.id;
          
  
      try {
  
          popup = document.querySelector(id);
          
          popupClose = popup.querySelectorAll('._popup-close');
        
      } catch {
          return false;
      }
  
      function removeFunc(popup, removeClass) {
  
          if (popupCheckClose) {
              popupCheckClose = false;
  
  
              FX.fadeOut(popup, {
                  duration: duration,
                  complete: function () {
                      popup.style.display = 'none';
                  }
              });
              popup.classList.remove('_active');
  
              setTimeout(() => {
                  popupCheckClose = true;
              }, duration)
  
              if (removeClass) {
                  if (header) header.classList.remove('_popup-active');
  
                  setTimeout(function () {
  
                      body.classList.remove('_popup-active');
                      html.style.setProperty('--popup-padding', '0px');
  
                  }, duration)
              }
          }
      }
  
      body.classList.remove('_popup-active');
      html.style.setProperty('--popup-padding', window.innerWidth - body.offsetWidth + 'px');
      body.classList.add('_popup-active');
  
      popup.classList.add('_active');
      if (header) header.classList.add('_popup-active');
  
  
      setTimeout(function () {
          FX.fadeIn(popup, {
              duration: duration,
              complete: function () {
              }
          });
      }, duration);
  
  
  
      popupClose.forEach(element => {
          element.addEventListener('click', function () {
              if (document.querySelectorAll('._popup._active').length <= 1) {
                  removeFunc(popup, true);
              } else {
                  removeFunc(popup, false);
              }
              setTimeout(function () {
                  return false;
              }, duration)
          });
      })
  
  
      setTimeout(() => {
          popupCheck = true;
      }, duration);
  
  }
  
  }
  
  // =-=-=-=-=-=-=-=-=-=-=-=- </popup> -=-=-=-=-=-=-=-=-=-=-=-=




let slideUp = (target, duration = 500) => {

  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    faqSlideCheck = true;
  }, duration);
}

let slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none')
    display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    faqSlideCheck = true;
  }, duration);
}

function galleryPopup(arg) {

  let html = arg.html,
    body = arg.body,
    widthImage = (arg.widthImage) ? arg.widthImage : '70%',
    link = arg.link;

  let galleryPopupBlock =
    `
          <div class="_gallery-popup _hidden">
              <div class="_gallery-popup-bg"></div>
              <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
              <div class="_gallery-popup-body _gallery-popup-max">
                  <button type="button" class="_gallery-popup-close-btn">
                    ✕
                  </button>
                  <img src="${link.href}" class="_gallery-popup-img" alt="Image Not Found">
              </div>
          </div>
          
          `;

  body.insertAdjacentHTML('beforeend', galleryPopupBlock);
  html.style.setProperty('--popup-padding', window.innerWidth - body.offsetWidth + 'px');
  body.classList.add('_popup-active');

  let galleryPopup = document.querySelector('._gallery-popup');

  galleryPopup.style.setProperty('--max-width-image', widthImage);
  galleryPopup.style.setProperty('--width-image', document.querySelector('._gallery-popup-img').clientWidth + 'px');

  setTimeout(function () {
    galleryPopup.classList.remove('_hidden');
  }, 200);



  function removeGalleryPopup() {
    galleryPopup.classList.add('_hidden');
    setTimeout(function () {
      body.removeChild(galleryPopup);
      body.classList.remove('_popup-active');
      html.style.setProperty('--popup-padding', '0px');
    }, 200);
  }



  galleryPopup.querySelector('._gallery-popup-close-btn').addEventListener('click', function () {
    removeGalleryPopup();
  });
  galleryPopup.querySelector('._gallery-popup-bg').addEventListener('click', function () {
    removeGalleryPopup();
  });



}







const body = document.querySelector('body'),
  html = document.querySelector('html'),
  menu = document.querySelectorAll('._burger, .header__nav, body'),
  burger = document.querySelector('._burger'),
  header = document.querySelector('.header');



document.querySelectorAll('.faq__item').forEach(element => {

  if (!element.classList.contains('_active')) {
    element.querySelector('.faq__item--content').style.display = 'none'
  }

})

document.querySelectorAll('._file-input').forEach(element => {
  element.onchange = function () {
    console.log(element.files.length);
    let message = (element.dataset.selectedMessage) ? element.dataset.selectedMessage : "Selected files",
        placeholder = element.parentNode.querySelector('._file-placeholder');
    
    if(placeholder) {
      if(element.files.length) {
        placeholder.innerHTML = `${message}: ${element.files.length}`;
      } else {
        
        placeholder.innerHTML = (element.dataset.defaultMessage) ? element.dataset.defaultMessage : "Choose photos";
      }
      
    }

  }
})

document.querySelectorAll('._input, ._textarea').forEach(element => {
  element.oninput = function () {
    let placeholder = element.parentNode.querySelector('._required-placeholder');
    if(placeholder) {
      placeholder.classList.add('_hidden');
    }
  }
  element.onfocus = function () {
    let placeholder = element.parentNode.querySelector('._required-placeholder');
    if(placeholder) {
      placeholder.classList.add('_hidden');
    }
  }
  element.onblur = function () {
    if(element.value == '') {
      let placeholder = element.parentNode.querySelector('._required-placeholder');
      if(placeholder) {
        placeholder.classList.remove('_hidden');
      }
    }
  }
})

document.querySelectorAll('.product__color--elem._active').forEach(element => {

  element.querySelector('.product__color--radio').checked = true;

  let productImage = document.querySelector('#' + element.dataset.productImageId);

  productImage.classList.add('_active');
  productImage.style.display = 'block';

})


let thisTarget, faqSlideCheck = true;
let productAddToCartMessage = document.querySelector('.product__submit--message');
body.addEventListener('click', function (e) {

  if (productAddToCartMessage) {
    if (productAddToCartMessage.classList.contains('_active')) {
      productAddToCartMessage.classList.remove('_active');
    }
  }

  thisTarget = e.target;


  if (thisTarget.closest('._burger')) {
    menu.forEach(elem => {
      elem.classList.toggle('_active')
    })
  }




  let btnToScroll = thisTarget.closest('._btn-to-scroll');
  if (btnToScroll) {

    e.preventDefault();
    let section;

    try {
      section = document.querySelector(btnToScroll.getAttribute('href'));
    }
    catch {
      section = 0;
    }


    menu.forEach(elem => {
      elem.classList.remove('_active')
    })
    window.scroll({
      left: 0,
      top: (section) ? section.offsetTop : 0,
      behavior: 'smooth'
    })

  }





  let dropDownCurrent = thisTarget.closest('._drop-down-current'),
    dropDownParent = (dropDownCurrent) ? dropDownCurrent.closest('._drop-down') : false;
  if (dropDownCurrent) {

    if (!dropDownParent.classList.contains('_active')) {
      dropDownParent.classList.add('_active');
    }

  } else if (!thisTarget.closest('._drop-down')) {

    document.querySelectorAll('._drop-down').forEach(element => {
      element.classList.remove('_active');
    })

  }







  let productElemBtn = thisTarget.closest('.product__color--elem');
  
  if (productElemBtn) {

    if (!productElemBtn.classList.contains('_active')) {

      e.preventDefault();

      document.querySelectorAll('.product__color--elem._active').forEach(element => {
        element.classList.remove('_active');
      })
      productElemBtn.classList.add('_active');
      productElemBtn.querySelector('.product__color--radio').checked = true;



      let productImage = document.querySelector('#' + productElemBtn.dataset.productImageId),
        activeProductImage = document.querySelectorAll('.product__image--elem._active');


      activeProductImage.forEach(element => {
        element.classList.remove('_active');
        setTimeout(() => {
          element.style.display = 'none';

        }, 200)

      });


      setTimeout(() => {
        productImage.style.display = 'block';
      }, (activeProductImage) ? 200 : 0)

      setTimeout(() => {
        productImage.style.display = 'block';
        productImage.classList.add('_active');
      }, (activeProductImage) ? 400 : 200);

    }


  }







  let galleryLink = thisTarget.closest('._gallery-popup-link');
  if (galleryLink) {

    e.preventDefault();
    galleryPopup({
      link: galleryLink,
      html: html,
      body: body,
      widthImage: '80%',
    });


  }






  let faqTitle = thisTarget.closest('.faq__item--title');
  if (faqTitle) {

    let faqItem = faqTitle.closest('.faq__item'),
      faqItemContent = faqItem.querySelector('.faq__item--content');

    if (faqItem.classList.contains('_active') && faqSlideCheck) {
      faqSlideCheck = false;
      faqItem.classList.remove('_active');
      slideUp(faqItemContent);

    } else if (!faqItem.classList.contains('_active') && faqSlideCheck) {
      faqSlideCheck = false;
      document.querySelectorAll('.faq__item._active').forEach(element => {
        element.classList.remove('_active');
        slideUp(element.querySelector('.faq__item--content'));
      })

      faqItem.classList.add('_active');
      slideDown(faqItemContent);

    }



  }





  let hiddenBtn = thisTarget.closest('._hiddenBtn');
  if (hiddenBtn) {
    e.preventDefault();
    hiddenToggle(hiddenBtn.getAttribute('href')).show();
    document.querySelector(hiddenBtn.getAttribute('href')).classList.add('_active');
  }




  let productSubmit = thisTarget.closest('.product__submit--btn');
  if (productSubmit) {
    e.preventDefault();
    let productColor, productColorCheck, requiredMessage, thanksMessage;

    try {
      productColor = document.querySelectorAll('.product__color--radio');
      productColor.forEach(element => {
        if(element.checked) productColorCheck = true;
      })

    } catch {
      
    }

    requiredMessage = productSubmit.parentNode.querySelector('.product__submit--message._required-message');
    thanksMessage = productSubmit.parentNode.querySelector('.product__submit--message._thanks-message');

    
    if(!productColorCheck) {

      if(requiredMessage) requiredMessage.classList.add('_active');
      
    } else if(productColorCheck) {
      
      if(requiredMessage) requiredMessage.classList.remove('_active');
      if(thanksMessage) thanksMessage.classList.add('_active');
      
    }
    
  } else {
    let messages = document.querySelectorAll('.product__submit--message');
    if(messages[0]) {
      messages.forEach(element => {
        element.classList.remove('_active');
      })
    }
  }


  let btnPopup = thisTarget.closest('._open-popup');
  if(btnPopup) {
      e.preventDefault();
      popup({
          id: (btnPopup.getAttribute('href')) ? btnPopup.getAttribute('href') : btnPopup.dataset.idPopup,
          html: html,
          body: body,
      });
  }

  /* let formInput = thisTarget.closest('._input');
  if(formInput) {
    let placeholder = formInput.parentNode.querySelector('._required-placeholder');
    if(placeholder) {
      placeholder.classList.add('_hidden');
    }
    
  } */
  let checkFormSubmit = thisTarget.closest('._check-form');
  if(checkFormSubmit) {
    e.preventDefault();

    let form = checkFormSubmit.closest('form'), checkError = true;
    if(form) {
      let inputs = form.querySelectorAll('._input, ._textarea');

      if(inputs[0]) {

        inputs.forEach(element => {
          if(!element.value && element.required) {
            
            element.classList.add('_error');
            checkError = false;
            
            element.oninput = function () {
              element.classList.remove('_error');

            }

          }
        })

        if(checkError) {
          popup({
            id: checkFormSubmit.dataset.idPopup,
            html: html,
            body: body,
          });
        }
        
      }
    }
  }




})


// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=
if(document.querySelector('.intro__slider')) {
  new Swiper('.intro__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
  
    direction: "horizontal",
    speed: 700,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        direction: "vertical",
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  });
  
  if (document.querySelector('.intro__slider--item')) {
    if (document.querySelectorAll('.intro__slider--item').length <= 1) {
      document.querySelector('.intro__slider--nav').classList.add('_disable');
    }
  }
}


new Swiper('.reviews__slider', {

  spaceBetween: 15,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    992: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    600: {
      spaceBetween: 20,
      slidesPerView: 2,
    },

  }
});


let featuresSlider

// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=


const hiddenToggleList = document.querySelectorAll('._hiddenToggle');

function hiddenToggle(id) {
  let elem = document.querySelector(id),
    btn = document.querySelector(`[href="${id}"]`);
  return {
    show: function () {

      if (elem && !elem.classList.contains('_active')) {
        btn.classList.remove('_visible');
        elem.querySelectorAll('._hiddenItem').forEach(element => {
          element.style.display = 'block';
        })

      }
    },

    hide: function () {

      if (elem && !elem.classList.contains('_active')) {
        btn.classList.add('_visible');
        elem.querySelectorAll('._hiddenItem').forEach(element => {

          element.style.display = 'none';
        })
      }
    }

  }
}


// =-=-=-=-=-=-=-=-=-=-=-=- <media event> -=-=-=-=-=-=-=-=-=-=-=-=

let resizeCheck = {},
  windowSize;


let append_992_Items = document.querySelectorAll('[data-append-992-to]'),
  append_992_ItemsList = [],
  append_768_Items = document.querySelectorAll('[data-append-768-to]'),
  append_768_ItemsList = [];

append_992_Items.forEach(element => {
  append_992_ItemsList.push([element, element.parentNode]);
})

append_768_Items.forEach(element => {
  append_768_ItemsList.push([element, element.parentNode]);
})

function resizeCheckFunc(size, minWidth, maxWidth) {


  if (windowSize <= size && (resizeCheck[String(size)] == true || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != false) {
    resizeCheck[String(size)] = false;
    maxWidth(); // < size

  }
  if (windowSize >= size && (resizeCheck[String(size)] == false || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != true) {
    resizeCheck[String(size)] = true;
    minWidth(); // > size

  }

}



function resize() {

  windowSize = window.innerWidth;


  resizeCheckFunc(768,
    function () {  // screen > 768px

      for (let i = 0; i < append_768_ItemsList.length; i++) {
        let appendParent = document.querySelector(append_768_ItemsList[i][0].dataset['append-768To']);
        appendParent.append(append_768_ItemsList[i][0]);
      }

      if (featuresSlider) featuresSlider.destroy(true, true);

      hiddenToggle("#faq-list").show();

    },
    function () {  // screen < 768px

      hiddenToggle("#faq-list").hide();
      featuresSlider = new Swiper('.features__slider', {

        spaceBetween: 0,
        slidesPerView: 1,

        grid: {
          rows: 2,
        },

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      for (let i = 0; i < append_768_ItemsList.length; i++) {
        let appendParent = append_768_ItemsList[i][1];
        appendParent.append(append_768_ItemsList[i][0]);
      }

    });
  resizeCheckFunc(992,
    function () {  // screen > 992px

      for (let i = 0; i < append_992_ItemsList.length; i++) {
        let appendParent = document.querySelector(append_992_ItemsList[i][0].dataset['append-992To']);
        appendParent.append(append_992_ItemsList[i][0]);
      }

    },
    function () {  // screen < 992px

      for (let i = 0; i < append_768_ItemsList.length; i++) {

        let appendParent = document.querySelector(append_768_ItemsList[i][0].dataset['append-768To']);
        if (resizeCheck['992'] || append_768_ItemsList[i][0].dataset['append-992To']) {
          appendParent.append(append_768_ItemsList[i][0]);
        }

      }
      for (let i = 0; i < append_992_ItemsList.length; i++) {
        let appendParent = append_992_ItemsList[i][1];

        if (!resizeCheck['768'] || !append_992_ItemsList[i][0].dataset['append-768To']) {
          appendParent.append(append_992_ItemsList[i][0]);
        }

      }
    });

}

resize();

window.onresize = resize;

// =-=-=-=-=-=-=-=-=-=-=-=- </media event> -=-=-=-=-=-=-=-=-=-=-=-=

