/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/


function showDetails(memberId) {
  var modal = document.getElementById(memberId);
  modal.style.display = "block";
}

function hideDetails(memberId) {
  var modal = document.getElementById(memberId);
  modal.style.display = "none";
}

window.onclick = function(event) {
  var modals = document.getElementsByClassName('WorkEx');
  for (var i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
          modals[i].style.display = "none";
      }
  }
}


// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 28.0649872, lng: -82.4272536},
        zoom: 14,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}

//HOME ROLE CHANGING ANIMATION
const titles = [
  "Data Analyst", 
  "Financial Student Analyst", 
  "Junior Web Developer", 
  "Machine Learning Enthusiast"
];

let changingTextElement = document.getElementById('changingText');
let currentIndex = 0;
let charIndex = 0;
let typingSpeed = 100;  // Speed at which the letters appear
let pauseBetweenTitles = 2000; // Pause between titles in milliseconds

function typeTitle() {
  let currentTitle = titles[currentIndex];
  changingTextElement.textContent = currentTitle.substring(0, charIndex + 1);
  charIndex++;

  if (charIndex < currentTitle.length) {
      setTimeout(typeTitle, typingSpeed);
  } else {
      setTimeout(() => {
          deleteTitle();
      }, pauseBetweenTitles);
  }
}

function deleteTitle() {
  let currentTitle = titles[currentIndex];
  changingTextElement.textContent = currentTitle.substring(0, charIndex - 1);
  charIndex--;

  if (charIndex > 0) {
      setTimeout(deleteTitle, typingSpeed);
  } else {
      currentIndex = (currentIndex + 1) % titles.length;
      setTimeout(typeTitle, typingSpeed);
  }
}
typeTitle();

document.getElementById("exploreBtn").addEventListener("click", function() {
  document.querySelector('#about').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

// Lock the scroll initially
document.body.style.overflow = 'hidden';

// Release scroll and show image when "Explore" is clicked
document.getElementById("exploreBtn").addEventListener("click", function() {
  document.body.style.overflow = 'auto'; // Unlock the scroll
  document.body.classList.add('show-img'); // Add class to show the image
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
