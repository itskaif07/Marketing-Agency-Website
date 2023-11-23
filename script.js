let menu = document.querySelector('#menu')
let x = document.querySelector('#x')

menu.addEventListener('click', function () {
  gsap.to('#menubar', {
    x: 0,
    opacity: 1,
    ease: Power2.easeIn(),
  })
})

x.addEventListener('click', function () {
  gsap.to('#menubar', {
    x: '100%',
    opacity: 0,
    ease: Power2.easeIn(),
  })
})


gsap.from('#head1', {
  opacity: 0,
  y: -20,
  ease: Power4,
  scrollTrigger: {
    trigger: '#section1',
    scroller: 'body',
    start: 'top 30%',
    end: 'bottom 100%',
  },
})

gsap.from('#body1a, #body1b, #body1c, #body1d', {
  opacity: 0,
  y: -20,
  ease: Power1,
  scrollTrigger: {
    trigger: '#section1',
    scroller: 'body',
    start: 'top 20%',
    end: 'bottom 100%',
  },
})


gsap.from('#head2', {
  opacity: 0,
  x: -20,
  ease: Power2,
  scrollTrigger: {
    trigger: '#section2',
    scroller: 'body',
    start: 'top 30%',
    end: 'bottom 100%',
  },
})


gsap.from('#body2', {
    opacity: 0,
    ease: Power2,
    duration:1,
    scrollTrigger: {
      trigger: '#section2',
      scroller: 'body',
      start: 'top 20%',
      end: 'bottom 100%',
    },
  })

  
  gsap.from('#head3', {
    opacity: 0,
    x: -50,
    ease: Power2.easeIn(),
    scrollTrigger: {
      trigger: '#section3',
      scroller: 'body',
      start: 'top 30%',
      end: 'bottom 100%',
    },
  })



  gsap.to('#section4', {
    display: 'block',
    ease: Power4,
    scrollTrigger: {
      trigger: '#section4',
      scroller: 'body',
      start: 'top 20%',
      end: 'bottom 100%',
    },
  })

  gsap.from('#head4', {
    opacity: 0,
    x: -50,
    ease: Expo.easeOut(),
    scrollTrigger: {
      trigger: '#section4',
      scroller: 'body',
      start: 'top 30%',
      end: 'bottom 100%',
    },
  })

  gsap.from('#head5', {
    opacity: 0,
    x: -50,
    ease: Power3.easeOut(),
    scrollTrigger: {
      trigger: '#section5',
      scroller: 'body',
      start: 'top 30%',
      end: 'bottom 100%',
    },
  })

  gsap.from('#head6', {
    opacity: 0,
    x: -50,
    ease: Power3.easeOut(),
    scrollTrigger: {
      trigger: '#section6',
      scroller: 'body',
      start: 'top 30%',
      end: 'bottom 100%',
    },
  })

  
gsap.from('#body6a, #body6b, #body6c, #body6d', {
  opacity: 0,
  y: -20,
  stagger: 0.2,
  ease: Power4,
  scrollTrigger: {
    trigger: '#section6',
    scroller: 'body',
    start: 'top 20%',
    end: 'bottom 100%',
  },
})


// animation for smaller screens only


if (window.innerWidth >= 0 && window.innerWidth <= 1280) {
  gsap.from('#headerText h1, #headerText p', {
    opacity: 0,
    stagger: 1,
    duration: 2,
    ease: Power3,
  })

  gsap.to('#section4', {
    display: 'block',
    ease: Power4,
    scrollTrigger: {
      trigger: '#section4',
      scroller: 'body',
      start: 'top 30%',
      end: 'bottom 100%',
    },
  })


  gsap.from('#body4a, #body4c, #body4e, #body4g', {
    opacity: 0,
    x: -50,
    ease: Power4,
    scrollTrigger: {
      trigger: '#section4',
      scroller: 'body',
      start: 'top 20%',
      end: 'bottom 100%',
    },
  })

  gsap.from('#body4b, #body4d, #body4f, #body4h', {
    opacity: 0,
    x:50,
    ease: Power4,
    scrollTrigger: {
      trigger: '#section4',
      scroller: 'body',
      start: 'top 20%',
      end: 'bottom 100%',
    },
  })

  

}



// dots navigation

const dots = document.querySelectorAll('.dot') 

dots.forEach(function(dot){
  dot.addEventListener('click', function(e){
    e.preventDefault()
    let target = this.getAttribute('href')

    gsap.to(window, {
      duration:1,
      ease:Expo.easeInOut(),
      scrollTo:{
        y:target,
        autokill:false
      }
    })
  })
})

