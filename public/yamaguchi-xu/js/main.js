class LandingVideo {
  constructor(data) {
      this._class = typeof data === 'object' ? data.class : data;
      this._videos = document.querySelectorAll(`.${this._class}`);
  }

  addVideoSource() {
      const _mediaQuery = window.matchMedia('(min-width: 768px)');

      for (let i = 0; i < this._videos.length; i++) {
          let _video = this._videos[i];
          if (_video.dataset.videoMob && !_mediaQuery.matches) {
              if (_video.dataset.videoMobWebm) {
                  _video.innerHTML = `<source src="${_video.dataset.videoMobWebm}" type='video/webm; codecs="vp8, vorbis"'> <source src="${_video.dataset.videoMob}"> `;
              } else {
                  _video.innerHTML = `<source src="${_video.dataset.videoMob}">`;
              }
          } else if (_video.dataset.video && _mediaQuery.matches) {
              if (_video.dataset.videoWebm) {
                  _video.innerHTML = `<source src="${_video.dataset.videoWebm}" type='video/webm; codecs="vp8, vorbis"'> <source src="${_video.dataset.video}"> `;
              } else {
                  _video.innerHTML = `<source src="${_video.dataset.video}">`;
              }
          }
      }
  }

  playOnScroll() {
      const _options = {
          root: null,
          rootMargin: `0px 0px 0px 0px`,
          threshold: 0.01,
      }
      const _observer = new IntersectionObserver((entries, obs) => {
          for (let i = 0; i < entries.length; i++) {
              if (entries[i].isIntersecting) {
                  entries[i].target.play();
              } else {
                  entries[i].target.pause();
              }
          }
      }, _options);
      const _observerArr = [];
      for (let i = 0; i < this._videos.length; i++) {
          _observerArr.push(_observer.observe(this._videos[i]));
      }
      return _observerArr;
  }
}
// =====================================================================================================================================>
new LandingVideo('video-on-load').addVideoSource();
new LandingVideo('video-on-load').playOnScroll();

function fixVideosYandex() {
  // let fireFox = navigator.userAgent.indexOf('Firefox')
  let yandexBrow = navigator.userAgent.indexOf('Yowser')
  let chrome = navigator.userAgent.indexOf('Chrome')
  let videos = document.querySelectorAll('video')
  if ( yandexBrow > 1) {
      videos.forEach(el => {
          el.style.cssText = 'filter: brightness(1.1);'
      })
  }
  // else if (chrome > 1 ){
  //     videos.forEach(el => {
  //         el.style.cssText = 'filter: brightness(1.01);'
  //     })
  // }
}
fixVideosYandex()


let wavesSlider = new Swiper('.sky-sound__waves-swiper', {
  effect: 'fade',
      fadeEffect: {
          crossFade: true
        },
      speed: 1000,
      loop: true, 
      autoplay: {
          delay: 500,
          disableOnInteraction: false,
      },
      // longSwipesMs : 500,
      // longSwipesRatio : 1,
})

let pushSlider = new Swiper('.push__slider', {
  effect: 'fade',
  fadeEffect : {
      crossFade: true
  },
  spaceBetween: 39,
  loop: true,
  autoplay: true,
  grabCursor: true,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
  }
})


let joySlider = new Swiper('.joy', {
  effect: 'fade',
  fadeEffect: {
      crossFade: true,
  },
  loop: true,
  autoplay: true, 
})


function flyChair () {
  let buttons = Array.from(document.querySelectorAll('.js-x-space-button'))
  let chairs = Array.from(document.querySelectorAll('.x-space__fly-chair'))
  buttons.forEach((el, index) => {
      el.addEventListener('click', ()=> {
          buttons.forEach((btn)=> {
              btn.classList.remove('js-x-space-button_pressed')
          })
          el.classList.add('js-x-space-button_pressed')
          chairs.forEach((ch) => {
              ch.classList.remove('x-space__fly-chair_active')
          })
          chairs[index].classList.add('x-space__fly-chair_active')
      })
  })
}
flyChair ()


// почему-то рука не водится нормально по 
// свайперу, а вот со сликом работает, не было 
// времени разбираться почему, но скорее 
// всего дело в чем-то супер простом...
$(".pult__hold-swiper").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  responsive: [
      {
        breakpoint: 767,
        settings: {
         autoplay: true,
        },
      },
  ],

});


function skySound(){
  // твинмакс походу без JQUERY не сильно работает, так что так(((
  let mouseTopPerc = 0

  // function getmousePosition() {
  //     return (mouseTopPerc * 1000) + 1000;
  // }

  document.body.addEventListener('mousemove', function (e) {
      mouseTopPerc = e.clientY/$(this).innerHeight();
  })

  let controller = new ScrollMagic.Controller();

  let tween = TweenMax.to('.sky-sound__girl', .2, {scale: 1});
  let scene = new ScrollMagic.Scene({triggerElement: '.sky-sound__title', offset: 100, duration: 900,})
  .setTween(tween)
  .setClassToggle('.sky-sound__background-pipes', 'sky-sound__background-pipes_gold')
  .addTo(controller);
}
try{
  skySound()
}catch(err){
  console.warn(err);
}


function putSomeParallax() {
  let parallaxes = document.querySelectorAll('.parallax-effect')
  
  if (parallaxes) {
      let parArray = Array.from(parallaxes)
          window.addEventListener('scroll', function(event) {
          let bottom = this.scrollY - 900
          let speed
          let yPos
          if (bottom >= 0 && bottom < 600) {

              parArray.forEach((el) => {
                  speed = el.dataset.speed
                  yPos = (bottom * +speed / 100)
                  el.style = 'bottom:' + yPos + '%;'
              })
          }
      })
  }
}
try{
  // putSomeParallax()
}catch(err) {
  console.warn(err);
}

class audioHandler {
  initState = {
      wave: '.audiowave__wave',
      audioWaveEl: 'audiowave__el',
      buttonsWrapper: '.audiowave__buttons-wrapper',
      buttonEvtListener: 'click',
  }
  moods = []
  contextes = []
  sources = []
  contextCreated = false
  playing = false
  playOnce = false
  audioArray = [
      0,0,0,0,0,0,0,0,0,0,0,0,0,11,33,42,45,41,42,44,45,48,42,37,45,47,49,53,55,54,51,51,57,60,57,52,55,61,63,63,66,66,67,71,69,69,71,67,66,66,63,53,51,55,52,57,50,57,51,51,54,55,53,49,47,45,37,42,48,45,44,42,41,45,42,33,21,0,0,0,0,0,0,0,0,0,0,0,0,0
      ]

  constructor(options) {
      this.options = options
      this._init()
      this._renderDots()
      this._buttonsHandler()
      // this.audioFiles[0].play()
      // this.playing = true
      // this.createContext(this.audioFiles[0])
      // this.refreshDots()
  }


  _init() {
      this.options = {...this.initState, ...this.options}
      let {audioFiles, playOnce, wave, audioWaveEl, buttonsWrapper, buttonEvtListener, mood} = {...this.options}
      this.audioFiles = document.querySelectorAll(audioFiles)
      this.wave = document.querySelector(wave)
      this.audioWaveEl = audioWaveEl
      this.buttonsWrapper = document.querySelector(buttonsWrapper)
      this.mood = mood
      this.playOnce = playOnce
      this.buttonEvtListener = buttonEvtListener
  }

  createContext(file, mood) {
      let index = this.moods.indexOf(mood)
      if (this.moods.indexOf(mood) == -1) {
          this.contextes.push(new (window.AudioContext || window.webkitAudioContext)())
          this.moods.push(mood)
          index = this.moods.indexOf(mood)
          this.sources.push(this.contextes[index].createMediaElementSource(file))
      }
      this.analyser = this.contextes[index].createAnalyser()
      this.gainNode = this.contextes[index].createGain()
      this.sources[index].connect(this.analyser)
      this.analyser.connect(this.gainNode)
      this.gainNode.connect(this.contextes[index].destination)
      this.gainNode.gain.setValueAtTime(0, this.contextes[index].currentTime);
      this.analyser.fftSize = 256
      this.bufferLength = this.analyser.frequencyBinCount
      this.dataArray = new Uint8Array(this.bufferLength);
      this.analyser.getByteFrequencyData(this.dataArray);
      this.dotsLength = this.waveDots.length
  }



  _renderDots() {
      let audioWavesElements = Array.from(this.wave.querySelectorAll(`.${this.audioWaveEl}`))
      if (audioWavesElements.length <= 1) {
          let countEls = 90

          this.countEls = Math.floor(countEls) 
          for (let i = 1; i <= countEls; i++ ) {
              this.wave.insertAdjacentHTML('beforeend', `<div class="${this.audioWaveEl}" style="height: ${this.audioArray[i]}px"></div>`)
          }
          this.waveDots = Array.from(document.querySelectorAll(`.${this.audioWaveEl}`))
      }
      else {
          this.waveDots = audioWavesElements
      }
  }

  refreshDots() {
      switch(this.playing) {
          case true :   
              this.interval = setInterval(()=> {
                  this.analyser.getByteFrequencyData(this.dataArray);
              
                  for(let i = this.dotsLength/2; i < this.dotsLength; i++ ) {
                      this.waveDots[i].style.cssText = `height: ${this.dataArray[i - this.dotsLength/2 ] / 3}px; `
                      // opacity: ${this.dataArray[i] / 150 + 0.1};
                  }
                  let arrayRev = this.dataArray.reverse()

                  for(let i = 0; i < this.dotsLength/2; i++  ) {
                      this.waveDots[i].style.cssText = `height: ${arrayRev[this.dotsLength - 7 + i] / 3}px; `
                      // opacity: ${arrayRev[i+40] / 150 + 0.1};
                  }
                  }, 50
              )
          break   
          case false : 
              setTimeout(()=> {
                  clearInterval(this.interval)
              }, 3000)
              // clearInterval(this.interval)
          break

      }
  }
  _buttonsHandler() {
      this.buttonsWrapper.addEventListener(this.buttonEvtListener , (e)=> {
          e.stopPropagation()
          let target = e.target
          let buttons = this.buttonsWrapper.querySelectorAll('.audiowave__button')
          buttons.forEach(el => el.removeAttribute('style'))
          let mood = target.dataset.mood
          if (this.playOnce == false) {
              target.style.opacity = '1'
          }

          switch(this.playing) {
              case false : 

                  if (this.playOnce == false) {
                      target.style.opacity = '1'
                  }
                  this.audioFiles.forEach((el, index) => {
                   
                      el.pause()
                      if (el.dataset.moodTarget == mood) {
                          el.play()
                          this.playing = true
                          this.createContext(el, mood)
                          // this.gainNode.gain.setValueAtTime(0, this.contextes[index].currentTime);
                          this.refreshDots()
                      }
                  })
              break
              case true : 

                  if (!this.playOnce) {

                      this.audioFiles.forEach(el => el.pause())
                      buttons.forEach(el => el.removeAttribute('style'))
                      this.audioFiles.forEach(el => {
                          if (el.dataset.moodTarget == mood ) {
                              el.pause()
                              this.playing = false
                          }
                      })
                  }
              break
          } 
      
      })
  }
}


let happyAudio = new audioHandler({
  audioFiles: '.audiowave__audio',
})



let skySoundAudio = new audioHandler({
  audioFiles: '.sky-sound__audio',
  audioWaveEl: 'sky-sound__audio-el',
  wave: '.sky-sound__wave',
  buttonsWrapper: '.xu-special-js-wrapper',
  buttonEvtListener: 'click',
  playOnce: true
})


//делаем замену мышки на руку 
function handWithoutMouse() {
  let page = document.querySelector(".xu-special-js-wrapper");
  let pultSection = document.querySelector('.pult')
  let eventHandler = () => {
      let handElement = pultSection.querySelector('#hand')
      if (!handElement) {
          pultSection.insertAdjacentHTML('afterbegin', '<div id="hand"></div>')
      }
      pultSection.addEventListener("mousemove", handHandler)
      pultSection.addEventListener("scroll", handHandler);
  }
  let handHandler = (event) => {
      let hand = pultSection.querySelector('#hand')
      let bounds = page.getBoundingClientRect();
      let x = event.clientX - bounds.left;
      let y = pultSection.offsetTop;
     
      hand.style.cssText = `left: ${x + 20}px; top: ${event.pageY - y + 20}px;`
      pultSection.addEventListener('mouseleave', () => {
          hand.remove()
      })
  }
  pultSection.addEventListener('mouseenter', eventHandler)
}
try {
  handWithoutMouse()
} catch(err) {
  console.warn(err);
}


function xuModalOpener() {
  let modalWrapper = document.querySelector('.trymeditation')
  let modalopenButton = modalWrapper.querySelector('.trymeditation__button')
  let modalWindow = modalWrapper.querySelector('.trymeditation__modal-wrapper')
  let specialWrapper = document.querySelector('.xu-special-js-wrapper')

  specialWrapper.addEventListener('click', (event)=> {
      // event.stopPropagation()
      // console.log(event.currentTarget);
      if (event.target == modalopenButton ) {
          modalWindow.classList.contains('trymeditation_active') ? 
          modalWindow.classList.remove('trymeditation_active') :
          modalWindow.classList.add('trymeditation_active')
      } else if (event.target != modalopenButton && event.target != modalWindow ) {
          modalWindow.classList.remove('trymeditation_active')
      }       

      if(event.target.classList.contains('v-gallery')) {
          event.target.addEventListener('click', (e) => {
              const target = e.target.closest('.video-link__drop-button') ?? e.target;
  let productHref = target.dataset.productHref;
  let hrefsResults = [];
  let hrefs = target.dataset.videoHrefs.split(" ");
  let currentVideoIndex = 1;
  hrefs.forEach((el) => {
    if (el.includes("youtu") === false) {
      hrefsResults.push(el);
      return;
    }
    var match = el.match(
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/
      ),
      youtubeLink = "https://www.youtube.com/embed/" + match[2] + "?rel=0";
    hrefsResults.push(youtubeLink);
  });

  let modalWindow = document.querySelector(".video-gallery-modal");
  if (modalWindow) {
    modalWindow.remove();
  }
  let makeDir = document.createElement("div");
  makeDir.classList.add("video-gallery-modal");
  body.append(makeDir);

  let newWindow = document.querySelector(".video-gallery-modal");
  newWindow.insertAdjacentHTML(
    "beforeend",
    `<div class="video-gallery__wrapper" data-width="${hrefs.length}"></div>`
  );
  body.style.overflowY = "hidden";
  addBodyMargin();

  newWindow.addEventListener("click", (event) => {
    if (event._isClickWithinGalleryWrapper === true) {
      return;
    }
    body.removeAttribute("style");
    newWindow.remove();
  });

  let galleryWrapper = document.querySelector(".video-gallery__wrapper");
  if (productHref) {
    galleryWrapper.insertAdjacentHTML(
      "beforeend",
      `<p class="video-gallery__close-btn">Закрыть</p>
        <a href="${productHref}" class="product-href">Перейти на страницу товара</a>`
    );
  } else {
    galleryWrapper.insertAdjacentHTML(
      "beforeend",
      `<p class="video-gallery__close-btn">Закрыть</p>`
    );
  }

  let closeBtn = newWindow.querySelector(".video-gallery__close-btn");
  closeBtn.addEventListener("click", () => {
    body.removeAttribute("style");
    newWindow.remove();
  });

  galleryWrapper.addEventListener("click", (event) => {
    event._isClickWithinGalleryWrapper = true;
  });

  hrefsResults.forEach((el, index) => {
    galleryWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="video-gallery__frame-wrapper" data-video-index="${
        index + 1
      }" ><iframe class="video-gallery__frame"  
            frameborder="0" 
            border="0" 
            width="100%"
            height="100%"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            src="${el}" allowfullscreen></iframe>
            </div>`
    );
  });

  let frameWrapper = document.querySelectorAll(
    ".video-gallery__frame-wrapper"
  );
  let frameWrapperArr = Array.from(frameWrapper);

  function insertNavigation() {
    let nav = galleryWrapper.querySelector(".video-gallery__navigation");
    let back = galleryWrapper.querySelector(".video-gallery__back");
    if (nav && back) {
      nav.remove();
      back.remove();
    }
    galleryWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="video-gallery__back">Все видео <span>${
        hrefsResults.length
      }</span></div>
            <div class="video-gallery__navigation">
            <div class="video-gallery__button-prev" data-max-translate="${
              currentVideoIndex == 1 ? true : false
            }">Видео #${currentVideoIndex - 1}</div>
            <p class="video-gallery__current">Видео #${currentVideoIndex}</p>
            <div class="video-gallery__button-next" data-max-translate="${
              currentVideoIndex == hrefsResults.length ? true : false
            }">Видео #${currentVideoIndex + 1}</div>
            </div>`
    );

    let buttonNext = galleryWrapper.querySelector(
      ".video-gallery__button-next"
    );
    let buttonPrev = galleryWrapper.querySelector(
      ".video-gallery__button-prev"
    );
    let buttonBack = galleryWrapper.querySelector(".video-gallery__back");
    buttonNext.addEventListener("click", () => {
      if (currentVideoIndex < hrefsResults.length) {
        frameWrapperArr[+currentVideoIndex - 1].classList.remove("_open");
        let iframe =
          frameWrapper[+currentVideoIndex - 1].querySelector("iframe");
        let iframeSrc = iframe.src;
        iframe.src = iframeSrc;

        currentVideoIndex += 1;
        frameWrapperArr[+currentVideoIndex - 1].classList.add("_open");
        insertNavigation();
      } else if (currentVideoIndex == hrefsResults.length) {
        frameWrapperArr[+currentVideoIndex - 1].classList.add("_open");
        insertNavigation();
      }
    });
    buttonPrev.addEventListener("click", () => {
      if (currentVideoIndex > 1) {
        frameWrapperArr[+currentVideoIndex - 1].classList.remove("_open");
        let iframe =
          frameWrapper[+currentVideoIndex - 1].querySelector("iframe");
        let iframeSrc = iframe.src;
        iframe.src = iframeSrc;

        currentVideoIndex -= 1;
        frameWrapperArr[+currentVideoIndex - 1].classList.add("_open");
        insertNavigation();
      } else if (currentVideoIndex == 1) {
        frameWrapperArr[+currentVideoIndex - 1].classList.add("_open");
        insertNavigation();
      }
    });
    buttonBack.addEventListener("click", () => {
      galleryWrapper.classList.remove("_gallery-mode");
      frameWrapperArr[+currentVideoIndex - 1].classList.remove("_open");
      let iframe =
        frameWrapper[+currentVideoIndex - 1].querySelector("iframe");
      let iframeSrc = iframe.src;
      iframe.src = iframeSrc;

      let nav = galleryWrapper.querySelector(".video-gallery__navigation");
      let back = galleryWrapper.querySelector(".video-gallery__back");
      if (nav) {
        nav.remove();
        back.remove();
      }
    });
  }

  frameWrapper.forEach((el, index) => {
    if (frameWrapper.length == 1 && window.innerWidth > 768) {
      galleryWrapper.classList.add("_gallery-mode");
      el.classList.add("_open");
    } else if (window.innerWidth > 768) {
      galleryWrapper.classList.remove("_gallery-mode");
      el.classList.remove("_open");
      el.addEventListener("click", () => {
        galleryWrapper.classList.add("_gallery-mode");
        el.classList.add("_open");
        currentVideoIndex = index + 1;
        insertNavigation();
      });
    }
  });
          })
      }
  })
}
try{
  xuModalOpener()
}catch(err){
  console.warn(err);
}


function changeRolesBecomeSection() {
  let wrapper = document.querySelector('.become__desc-wrapper')
  let descMobileWrapper = document.querySelector('.become__desc-mobile-wrapper ')
  becomeInterval = setInterval(()=> {
      if(wrapper.classList.contains('active-left-side')) {
          
          wrapper.classList.remove('active-left-side')
          wrapper.classList.add('active-right-side')
          descMobileWrapper.classList.remove('active-left-side')
          descMobileWrapper.classList.add('active-right-side')
      } else {
          wrapper.classList.remove('active-right-side')
          wrapper.classList.add('active-left-side')
          descMobileWrapper.classList.remove('active-right-side')
          descMobileWrapper.classList.add('active-left-side')
      }
  }, 7000)
}
try {
  changeRolesBecomeSection()
}catch(err) {
  console.warn(err);
}


function animeAim() {
  anime({
      targets: '.scan__nimb',
      translateX: [
          {value:  "0%",  duration: 0, easing: 'easeInOutCubic'},
          {value: '85%', duration: 4000, easing: 'easeInOutCubic'},
          {value: '135%', duration: 2000, easing: 'easeInOutCubic'},
          {value: '190%', duration: 2300, easing: 'easeInOutCubic'},
          {value: '135%', duration: 2000, easing: 'easeInOutCubic'},
          {value: '85%', duration: 4000, easing: 'easeInOutCubic'},
          {value:  "0%",  duration: 3000, easing: 'easeInOutCubic'},
      ],
      translateY: [
          {value: ' 0%', duration: 0, easing: 'easeInOutCubic'},
          {value: '50%', duration: 4000, easing: 'easeInOutCubic'},
          {value: '33%', duration: 2000, easing: 'easeInOutCubic'},
          {value: '65%', duration: 2300, easing: 'easeInOutCubic'},
          {value: '33%', duration: 2000, easing: 'easeInOutCubic'},
          {value: '50%', duration: 4000, easing: 'easeInOutCubic'},
          {value: ' 0%', duration: 3000, easing: 'easeInOutCubic'},
      ],
      rotate: [
          {value: 1440, duration:19600, easing: 'linear'}
      ],
      loop: true,
  })
}
try{
  animeAim()
}catch(err){
  console.warn(err);
}


function animeVoiceActivator() {
  let controller = new ScrollMagic.Controller();
  let scene = new ScrollMagic.Scene({triggerElement: '.voice', })
  .on('enter', animeVoiceCircles)
  .addTo(controller);

}
try{
  animeVoiceActivator()
}catch(err) {
  console.warn(err);
}

function animeVoiceCircles() {
  let circlesAnim = anime.timeline({
  })
  circlesAnim.add({
      targets: '.voice__circle_1',
      duration: 1500,
      easing: 'easeInOutQuad',
      opacity: 1,
      translateX: 0,
      translateY: 0
  }, 0).add({
      targets: '.voice__circle_2',
      duration: 1500,
      delay: 700,
      easing: 'easeInOutQuad',
      opacity: [{value: 1}],
      translateX: 0,
      translateY: 0
  }, 0).add({
      targets: '.voice__circle_3',
      delay: 1400,
      duration: 1500,
      easing: 'easeInOutQuad',
      opacity: 1,
      translateX: 0,
      translateY: 0
  }, 0).add({
      targets: '.voice__girl',
      opacity: 1,
      delay: 1000,
      easing: 'easeInOutQuad',
      duration: 8000,
  },0)
}


function changeColors () {
  let colorsWrapper = document.querySelector('.light__colors')
  let chairWithColorBack = document.querySelector('.light__chair-wrapper')
  let targets =  colorsWrapper.querySelectorAll('.light__color')
  colorsWrapper.addEventListener('click', (event) => {
     
      let target = event.target
      if (target != colorsWrapper){
          targets.forEach(el => {
              el.classList.remove('color-pointer')
          })
          target.classList.add('color-pointer')
          let color = target.dataset.color
          chairWithColorBack.style.cssText = `--main-bg-color: ${color};`
      } 
  })
}
try{
  changeColors ()
}catch(err){
  console.warn(err);
}


function bubbleShaking() {
  let bubbles = document.querySelectorAll('.ion__main-image_bubble')

  let getRandom = () => {
      let randomX = Math.floor(Math.random() * 20)
      let randomY = Math.floor(Math.random() * 20)
      let randomObj = {
          x: randomX,
          y: randomY,
      }
      return randomObj
  }
  setInterval(() => {
      bubbles.forEach((el)=> {
          let obj = getRandom()
   
          el.style.cssText = `transform: translate(${obj.x}px, ${obj.y}px);`
      
      }
  )}, 40)

}
// bubbleShaking()


function xSpaceColorChanger() {
  let xSpaceBack = document.querySelector('.x-space__background-wrapper ')
  let colors = ['#FFB9B9', '#FFCEB9', '#FFEBB9', '#9AFF5C', '#AAFFFA', '#AABDFF', '#D49DFF']
  let colLenght = colors.length
  let i = 0
  setInterval(()=> {
      xSpaceBack.style.cssText = `--x-back-color: ${colors[i]}`
      i < colLenght-1 ?  i++ : i = 0
  }, 5000)
}
try {
  xSpaceColorChanger()
} catch(err){
  console.warn(err);
}


function meditationsHandler() {
  let wrapper = document.querySelector('.meditations__title-images')
  let matrix = wrapper.querySelector('.meditations__left-image')
  let buddah = wrapper.querySelector('.meditations__top-image')
  let triangle = wrapper.querySelector('.meditations__right-image')
  let titleDesc = wrapper.querySelectorAll('.meditations__title-desc')
  let titleHandler = (type) => {
      titleDesc.forEach((el) => {
          el.classList.remove('meditations__active')
          if (el.dataset.titleDesc == type) {
              el.classList.add('meditations__active')
          }
      })
  }
  matrix.addEventListener('mouseenter', () => {titleHandler('matrix')})
  buddah.addEventListener('mouseenter', () => {titleHandler('buddah')})
  triangle.addEventListener('mouseenter', () => {titleHandler('triangle')})
  matrix.addEventListener('mouseleave', () => {titleHandler()})
  buddah.addEventListener('mouseleave', () => {titleHandler()})
  triangle.addEventListener('mouseleave', () => {titleHandler()})
}
try {
  meditationsHandler()
} catch(err) {
  console.warn();
} 
  

function removeImgDomLoaded() {
  let rubinimage = document.querySelector('.rubin__image')
  window.addEventListener('DOMContentLoaded', ()=> {

      rubinimage.remove()
  })
}
removeImgDomLoaded()
