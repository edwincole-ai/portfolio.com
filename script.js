/*==================toggle icon nav bar =========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

    
};


/*==================scroll sections active link =========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset +  height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

        };
    });
    /*================== sticky navbar =========================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

     /*================== remove toggle icon and navbar when click navbar link(scroll) =========================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

     /*==================scroll reveal=========================*/
     ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
     });

    ScrollReveal().reveal('.home-conent, .heading',{ origin:'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin:'bottom' });
    ScrollReveal().reveal('.home-conent h1, .about-img',{ origin:'left' });
    ScrollReveal().reveal('.home-conent p, .about-content',{ origin:'right' });

    /*==================typd js =========================*/
    const typed = new Typed('.multiple-text',{
        strings: ['Professional Sound Engineer', 'Mixing Engineer', 'Tech Engineer'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true

    });




   function sendToWhatsApp() {
    // 1. Get values from the HTML IDs we created
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    // 2. Your phone number (Digits only, no + sign)
    let myNumber = "23279820375";

    // 3. Validation: Ensure Name and Message aren't empty
    if (name === "" || message === "") {
        alert("Please enter your name and message before sending.");
        return;
    }

    // 4. The "Thank You" Popup
    alert("Thank you, " + name + "! Redirecting you to WhatsApp now.");

    // 5. Format the message for WhatsApp
    // %0A creates a new line in the WhatsApp message
    let finalMessage = "Hello Edwin, you have a new message:%0A%0A" +
                       "*Name:* " + name + "%0A" +
                       "*Email:* " + email + "%0A" +
                       "*Phone:* " + phone + "%0A" +
                       "*Subject:* " + subject + "%0A" +
                       "*Message:* " + message;

    // 6. Open the WhatsApp link
    let url = "https://wa.me/" + myNumber + "?text=" + finalMessage;
    
    window.open(url, '_blank').focus();
}


function toggleText() {
  const moreText = document.getElementById("moreText");
  const btnText = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btnText.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Read More";
  }
}
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio-box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    if (x[i].className.indexOf(c) > -1) {
      x[i].style.display = "flex";
    }
  }
}

// Set active button class
var btnContainer = document.querySelector(".portfolio-filter");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const ctx = document.getElementById('skillsChart').getContext('2d');

const skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            'Logic & Architecture',
            'System Troubleshooting',
            'Database/Signal Routing',
            'Frontend/UX Design',
            'Quality Control/Mastering',
            'Real-time Performance'
        ],
        datasets: [{
            label: 'Software Engineering',
            data: [90, 85, 80, 75, 70, 85], // Your scores out of 100
            fill: true,
            backgroundColor: 'rgba(14, 239, 255, 0.2)', // Your #0ef glow color
            borderColor: '#0ef',
            pointBackgroundColor: '#0ef',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#0ef'
        }, {
            label: 'Sound Engineering',
            data: [80, 95, 90, 65, 95, 90],
            fill: true,
            backgroundColor: 'rgba(147, 51, 234, 0.2)', // Purple for Sound
            borderColor: '#9333ea',
            pointBackgroundColor: '#9333ea',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#9333ea'
        }]
    },
    options: {
        elements: {
            line: { borderWidth: 3 }
        },
        scales: {
            r: {
                angleLines: { color: '#323946' },
                grid: { color: '#323946' },
                pointLabels: {
                    color: '#fff',
                    font: { size: 14 }
                },
                ticks: { display: false },
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        plugins: {
            legend: { display: false } // We made a custom legend in HTML
        }
    }
});