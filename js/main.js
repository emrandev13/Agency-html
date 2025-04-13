// humberger start
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    document.querySelector('.menu-icon').classList.toggle('active');

    // Hide the menu when a nav link is clicked
    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.querySelector('.menu-icon').classList.remove('active');
    });
    
}
// humberger end

// video popup start
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("videoPopup").style.display = "none"; // Ensures it stays hidden
});

function openVideoPopup() {
    document.getElementById("videoPopup").style.display = "flex";
}

function closeVideoPopup() {
    document.getElementById("videoPopup").style.display = "none";
} 
// video popup end


// product carousel start
$('#product_carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    margin: 20,
    dotsEach: 1,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
// product carousel end

// testimonial carousel start
$('#testimonial_carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    margin: 20,
    dotsEach: 1,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// testimonial carousel end

// accordion start faq section
// accordion start
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('.toggle-icon');
        const isOpen = !button.classList.contains('collapsed');
        
        document.querySelectorAll('.toggle-icon').forEach(icon => icon.textContent = '+');
        if (isOpen) {
            icon.textContent = '-';
        }
    });
});
// accordion end


function toggleDropdown() {
    document.querySelector(".custom-select").classList.toggle("open");
  }

  function selectOption(option) {
    document.querySelector(".select-trigger span").textContent = option.textContent;
    document.querySelector("#subject").value = option.textContent;
    document.querySelector(".custom-select").classList.remove("open");
  }

  window.onclick = function(e) {
    if (!e.target.closest(".custom-select")) {
      document.querySelector(".custom-select").classList.remove("open");
    }
  };


  // top button start
window.onscroll = function () {
    let button = document.getElementById("topButton");
    let progressText = document.getElementById("progressText");
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercent = Math.round((scrollTop / scrollHeight) * 100);

    // Show button when scrolled 100px
    if (scrollTop > 100) {
        button.style.display = "flex"; // Use flex to center content
    } else {
        button.style.display = "none";
    }

    // Update button background with conic gradient fill
    button.style.background = `conic-gradient(#402C9F ${scrollPercent}%, #ddd ${scrollPercent}%)`;

    // Update percentage text (Ensuring it's well formatted)
    progressText.innerHTML = `
        <i class="fa-solid fa-angle-up"></i>
        <span>${scrollPercent}%</span>
    `;
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// top button end

/*   Active Menu */
document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll(".nav_active");

    function changeActiveLink() {
        let scrollPosition = window.scrollY + 150; // Adjust for navbar height

        sections.forEach((section) => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", changeActiveLink);
	
	
});


// start preloader
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 1500); // Simulated loading time
});
// end preloader

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".banner_title h2").classList.add("animate__animated", "animate__fadeInDown");
});


document.addEventListener("DOMContentLoaded", function () {
    new WOW().init();
});

$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    });
});
