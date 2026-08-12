/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text')

if(homeText){
   // Converts text into an array of characters
   const text = homeText.textContent.trim()
   // Clears the original content
   homeText.textContent = ''

   // Iterates through each character
   text.split('').forEach((char, i) => {
      // Creates a <span> for each letter
      const span = document.createElement('span')
      // Inserts each character into the span
      span.textContent = char
      // Rotates each letter based on its index to form the circle
      span.style.transform = `rotate(${i * 18}deg)`
      // Appends the span to the main container
      homeText.appendChild(span)
   })
}

/*=============== HOME TYPED JS ===============*/
const typedElement = document.getElementById('home-typed')

if(typedElement && typeof Typed !== 'undefined'){
   // Insert professions
   const typed = new Typed('#home-typed', {
      strings: ['Web Developer', 'UI Designer', 'Freelancer'],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true
   })
}

/*=============== CHANGE HEADER STYLES ===============*/
const blurHeader = () =>{
   const header = document.getElementById('header')
   // When the scroll is greater than the viewport height, add the blur-header class
   this.scrollY >= 50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SWIPER WORK ===============*/ 
let workSwiper = null

const initWorkSwiper = () =>{
   if(window.innerWidth < 1150){
      if(workSwiper){
         workSwiper.destroy(true, true)
      }
      workSwiper = new Swiper('.work__swiper', {
         loop: true,
         grabCursor: true,
         slidesPerView: 1,
         spaceBetween: 24,
         pagination: {
            el: '.swiper-pagination',
            clickable: true
         }
      })
   } else {
      if(workSwiper){
         workSwiper.destroy(true, true)
         workSwiper = null
      }
   }
}

initWorkSwiper()
window.addEventListener('resize', initWorkSwiper)

/*=============== SERVICES ACCORDION ===============*/ 
const servicesButtons = document.querySelectorAll('.services__button')

const servicesAction = () =>{
   // It iterates over each button found
   for(const button of servicesButtons){
      // Get the class of the clicked button (.services__card) and add/remove services-open
      const servicesCard = button.closest('.services__card')
      const servicesContent = servicesCard.querySelector('.services__content')

      // Check already has the services-open class (Returns true or false)
      const isOpen = servicesCard.classList.contains('services-open')

      // Close all other services data
      document.querySelectorAll('.services__card').forEach(card =>{
         card.classList.remove('services-open')
         card.querySelector('.services__content').style.height = 0
      })

      // If the clicked card was closed, it opens it
      if(!isOpen){
         servicesCard.classList.add('services-open')
         servicesContent.style.height = servicesContent.scrollHeight + 'px'
      }
   }
}

servicesButtons.forEach(button => button.addEventListener('click', servicesAction))

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 
const testimonialsSlider = document.querySelector('.testimonials__slider')

if(testimonialsSlider){
   // Get all testimonial sliders
   const duplicateCards = () =>{
      // Get the child testimonial sliders and create a copy of all cards
      const cards = testimonialsSlider.querySelectorAll('.swiper-slide')

      // (... spread operator), converts the collection into an array
      const cardsArray = [...cards]

      // Duplicate the card and append it at the end
      cardsArray.forEach(card =>{
         const copy = card.cloneNode(true)
         testimonialsSlider.appendChild(copy)
      })
   }

   duplicateCards()

   new Swiper('.testimonials__slider', {
      loop: true,
      grabCursor: true,
      speed: 8000,
      autoplay: {
         delay: 0,
         disableOnInteraction: false
      },
      slidesPerView: 'auto',
      spaceBetween: 24,
      breakpoints: {
         540: {
            slidesPerView: 2,
            spaceBetween: 24
         },
         1150: {
            slidesPerView: 3,
            spaceBetween: 24
         }
      }
   })
}

/*=============== CONTACT EMAIL JS ===============*/ 
js
/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
   e.preventDefault()

   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_6av05kw', 'template_5htb026', '#contact-form', 'IoZTbFHgKdBuU-mFy')
      .then(() => {
         // Show sent message
         contactMessage.textContent = 'Message sent successfully ✅'

         // Clear input fields
         contactForm.reset()

         // Remove message after five seconds
         setTimeout(() => {
            contactMessage.textContent = ''
         }, 5000)
      }, (error) => {
         // Show error message
         contactMessage.textContent = 'Message not sent (service error) ❌'
         console.error('EmailJS Error:', error)

         // Remove message after five seconds
         setTimeout(() => {
            contactMessage.textContent = ''
         }, 5000)
      })
}

if(contactForm){
   contactForm.addEventListener('submit', sendEmail)
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
   const scrollUp = document.getElementById('scroll-up')
   // When the scroll is higher than 350 viewport height, add the show-scroll class
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
   const scrollDown = window.scrollY

   sections.forEach(current =>{
      const sectionHeight = current.scrollHeight,
            sectionTop = current.offsetTop - 100,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__link[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
         sectionsClass?.classList.add('active-link')
      } else {
         sectionsClass?.classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/
const customCursor = document.getElementById('custom-cursor')

if(customCursor && window.matchMedia('(pointer: fine)').matches){
   // Store mouse position
   // Horizontal position (X-axis)
   let posX = 0
   // Vertical position (Y-axis)
   let posY = 0

   // Detects mouse movement and updates positions
   document.addEventListener('mousemove', (e) =>{
      // Save position X
      posX = e.clientX
      // Save position Y
      posY = e.clientY

      customCursor.classList.add('show')
   })

   // Centers the element at the pointer
   const moveCursor = () =>{
      // Repeats the function with each movement
      requestAnimationFrame(moveCursor)

      customCursor.style.transform = `translate(${posX - 10}px, ${posY - 10}px)`
   }

   moveCursor()

   /* Hide custom cursor on links */
   const hoverElements = document.querySelectorAll('a, button')

   // Mouse enters the link and hides the cursor
   hoverElements.forEach(element =>{
      element.addEventListener('mouseenter', () =>{
         customCursor.style.opacity = '0'
      })

      // Mouse exits the link and shows the cursor
      element.addEventListener('mouseleave', () =>{
         customCursor.style.opacity = '1'
      })
   })
}

/*=============== SCROLLREVEAL ANIMATION ===============*/
if(typeof ScrollReveal !== 'undefined'){
   const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      reset: true
   })

   sr.reveal('.home__data')
   sr.reveal('.home__group', {origin: 'right', delay: 600})
   sr.reveal('.about__data')
   sr.reveal('.work__card', {interval: 100})
   sr.reveal('.services__card', {interval: 100})
   sr.reveal('.skills__category', {interval: 150})
   sr.reveal('.testimonials__card')
   sr.reveal('.contact__form', {origin: 'left'})
   sr.reveal('.contact__data', {origin: 'right'})
   sr.reveal('.footer')
}
