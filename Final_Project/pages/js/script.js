$(document).ready(function(){
  $(".my-mm").owlCarousel({
    loop: true, 
    items: 5,
    nav: true,
     responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
    navText: [
      '<i class="fa-solid fa-chevron-left  text-dark position-absolute top-50 start-0 translate-middle border border-dark p-2 rounded-1 btn-lay"></i>',
      '<i class="fa-solid fa-chevron-right text-dark position-absolute top-50 start-100 translate-middle border border-dark p-2 rounded-1 btn-lay"></i>'
    ]
  });
  $(".mm-ll").owlCarousel({
    loop: true,
    nav: true,
    autoplay:true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    },
    navText: [
      '<i class="fa-solid fa-chevron-left  text-dark position-absolute top-50 start-0 translate-middle border border-dark p-2 rounded-1 btn-lay"></i>',
      '<i class="fa-solid fa-chevron-right text-dark position-absolute top-50 start-100 translate-middle border border-dark p-2 rounded-1 btn-lay"></i>'
    ]
  });

 
  $(".my-sli").owlCarousel({
    loop: true,
    nav: true,
    autoplay:true,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 8 }
    }
  });


});


  




const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))






document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const successMessage = document.getElementById('successMessage');


  if (!form || !nameInput || !emailInput || !subjectInput || 
      !nameError || !emailError || !subjectError || !successMessage) {
    return;
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    subjectError.style.display = 'none';

    if (nameInput.value.trim() === '') {
      nameError.style.display = 'block';
      isValid = false;
    }

    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
      emailError.style.display = 'block';
      isValid = false;
    }

    if (!subjectInput.value) {
      subjectError.style.display = 'block';
      isValid = false;
    }

    if (isValid) {
      successMessage.style.display = 'block';

      setTimeout(function () {
        form.reset();
        successMessage.style.display = 'none';
      }, 2500);
    }
  });



    nameInput.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    });
    
    emailInput.addEventListener('blur', function() {
        if (this.value.trim() === '' || !isValidEmail(this.value)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    });
    
    subjectInput.addEventListener('change', function() {
        if (!this.value) {
            subjectError.style.display = 'block';
        } else {
            subjectError.style.display = 'none';
        }
    });
});


window.onscroll = function () {
    let btn = document.getElementById("btnScrollTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

 
  document.getElementById("btnScrollTop").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  let duration = 10 * 60 * 60; 

document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.getElementById("offer-timer");

  if (timerElement) {
   
    let countdownHours = 10;  
    let countdownMinutes = 0;  
    let countdownSeconds = 0;

    function startTimer() {
      let time = countdownHours * 3600 + countdownMinutes * 60 + countdownSeconds;

      const interval = setInterval(() => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        timerElement.textContent =
          `${hours} H :${minutes < 10 ? "0" + minutes : minutes} M :${seconds < 10 ? "0" + seconds : seconds} S`;

        time--;

        if (time < 0) {
          clearInterval(interval);
          startTimer();
        }
      }, 1000);
    }

    startTimer();
  }
});