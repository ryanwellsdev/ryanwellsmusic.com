// this code changes the background video at random 
const video = document.getElementById("myVideo");

const videoSources = [
  'https://d115p2gol6hf5z.cloudfront.net/boardwalk-background.mp4',
  'https://d115p2gol6hf5z.cloudfront.net/hill-climber-background1.mp4'
];

function changeVideoSourceRandomly() {
  const randomIndex = Math.floor(Math.random() * videoSources.length);
  const randomSource = videoSources[randomIndex];
  const source = video.querySelector('source');
  source.src = randomSource;
  video.load();
}

changeVideoSourceRandomly();


//this code is the mobile menu dropdown//
document.addEventListener("DOMContentLoaded", function() {
  var menuButton = document.getElementById("menuButton");
  var rightSideIcons = document.querySelector(".right-side-icons");
  var dropdownItems = document.querySelectorAll(".right-side-icons a");

  // Event listener for menu button
  menuButton.addEventListener("click", function() {
      if (rightSideIcons.style.display === "none") {
          rightSideIcons.style.display = "flex";
      } else {
          rightSideIcons.style.display = "none";
      }
  });

  // Event listener for dropdown items
  dropdownItems.forEach(function(item) {
      item.addEventListener("click", function() {
          rightSideIcons.style.display = "none"; // Hide the menu
      });
  });
});

// this code is the ummute button, rotating between two icons, 
// and changing the background videos audio.

const button = document.getElementById('unmuteButton');

function toggleMute() {
  video.muted = !video.muted;
  button.innerHTML = video.muted ?
    '<svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z"/></svg>'
    :
    '<svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/></svg>';
}

button.addEventListener('click', toggleMute);


//this code changes the center container displayed content, 
//between multiple rows.
function changePage(landingPage, listenPage, studioPage, bioPage, contactPage) {
  document.getElementById("landingPage").style.display = landingPage;
  document.getElementById("listenPage").style.display = listenPage;
  document.getElementById("studioPage").style.display = studioPage;
  document.getElementById("bioPage").style.display = bioPage;
  document.getElementById("contactPage").style.display = contactPage;
}

const landingLink = document.getElementById("landingLink");
const listenLink = document.getElementById("listenLink");
const studioLink = document.getElementById("studioLink");
const bioLink = document.getElementById("bioLink");
const contactLink = document.getElementById("contactLink");

landingLink.addEventListener('click', function (event) {
  event.preventDefault();
  showLandingPage();
});
listenLink.addEventListener('click', function (event) {
  event.preventDefault();
  showListenPage();
});
studioLink.addEventListener('click', function (event) {
  event.preventDefault();
  showStudioPage();
});
bioLink.addEventListener('click', function (event) {
  event.preventDefault();
  showBioPage();
});
contactLink.addEventListener('click', function (event) {
  event.preventDefault();
  showContactPage();
});

function showLandingPage() {
  changePage(null, "none", "none", "none", "none")
}
function showListenPage() {
  changePage('none', null, 'none', "none", "none")
  window.open('https://linktr.ee/ryanwellsmusic');

}
function showStudioPage() {
  changePage('none', 'none', null, "none", "none")
}
function showBioPage() {
  changePage('none', 'none', "none", null, "none")
}
function showContactPage() {
  changePage('none', 'none', "none", "none", null)
}

showLandingPage();