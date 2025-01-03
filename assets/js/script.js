const element_days = document.getElementById("days");
const element_hours = document.getElementById("hours");
const element_minutes = document.getElementById("minutes");
const element_seconds = document.getElementById("seconds");

function updateTimer() {
	const eventDate = new Date("2025-02-21T00:00:00"); // Set your event date here
	const now = new Date();
	const timeDifference = eventDate - now;

	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor(
		(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
	);
	const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

	element_days.innerText = days;
	element_hours.innerText = hours;
	element_minutes.innerText = minutes;
	element_seconds.innerText = seconds;

	if (timeDifference < 0) {
		clearInterval(timerInterval);
		document.getElementById("timer").innerHTML = "Event has started!";
	}
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

document
	.querySelector(".event-hover")
	.addEventListener("mouseover", function () {
		document.querySelector(".sub-menu").style.display = "flex";
	});
document
	.querySelector(".event-hover")
	.addEventListener("mouseout", function () {
		document.querySelector(".sub-menu").style.display = "none";
	});

// Lazy load images
document.querySelectorAll("img").forEach((img) => {
	img.setAttribute("loading", "lazy");
});

let width = screen.width;
if (width < 600)
	document.querySelector("nav").style.transform = "translateY(-100%)";
document.querySelector("#hamburger").addEventListener("click", function () {
	console.log(document.querySelector("nav").style.transform);
	if (document.querySelector("nav").style.transform === "translateY(-100%)") {
		document.querySelector("nav").style.transform = "translateY(0%)";
	} else {
		document.querySelector("nav").style.transform = "translateY(-100%)";
	}
});

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		// Scroll down
		header.style.top = "-100px"; // Adjust the value as needed
		header.style.transition = "top 0.3s ease-in-out";
	} else {
		// Scroll up
		header.style.top = "0";
		header.style.transition = "top 0.3s ease-in-out";
	}
	lastScrollTop = scrollTop;
});

window.onload = () => {
	document.querySelector(".loader").style.display = "none";
	if (screen.width < 600) {
		console.log("Mobile");
		document.querySelector(".left-horse").style.animation =
			"lhorse linear 1.5s forwards !important";
		console.log(document.querySelector(".left-horse").style.animation);
		document.querySelector(".right-horse").style.animation =
			"rhorse 1.5s forwards !important";
	} else {
		document.querySelector(".left-horse").style.animation =
			"left-horse-animation linear 1.5s forwards";
		document.querySelector(".right-horse").style.animation =
			"right-horse-animation linear 1.5s forwards";
	}
	document.querySelector(".cloud-background").style.animation =
		"cloud-animation 1s linear";
	document.querySelectorAll(".timer").forEach((timer) => {
		timer.style.animation = "timer-animation-text 1s linear";
	});
	document.querySelectorAll(".timer-label").forEach((timer) => {
		timer.style.animation = "timer-label-animation 1s linear";
	});
	document.querySelectorAll(".timer-div").forEach((timer) => {
		timer.style.setProperty("--animation", "timer-animation 1s linear");
	});
};

document.addEventListener("DOMContentLoaded", function () {
	const gallery = document.querySelector(".gallery");
	const galleryContainer = document.querySelector(".gallery-container");

	// Clone the gallery content to create an infinite loop effect
	gallery.innerHTML += gallery.innerHTML;

	// Adjust the animation duration based on the number of images
	const images = gallery.querySelectorAll("img");
	const totalWidth = images.length * images[0].clientWidth;
	gallery.style.width = `${totalWidth}px`;

	let currentIndex = 0;

	function scrollImages() {
		currentIndex++;
		if (currentIndex >= images.length / 2) {
			currentIndex = 0;
			galleryContainer.scrollLeft = 0;
		} else {
			galleryContainer.scrollLeft += images[0].clientWidth;
		}
	}

	const scrollInterval = setInterval(scrollImages, 2000); // Change image every 2 seconds

	// Add functionality to prev and next buttons
	document.querySelector("#prev").addEventListener("click", function () {
		clearInterval(scrollInterval);
		currentIndex =
			(currentIndex - 1 + images.length / 2) % (images.length / 2);
		galleryContainer.scrollLeft = currentIndex * images[0].clientWidth;
	});

	document.querySelector("#next").addEventListener("click", function () {
		clearInterval(scrollInterval);
		scrollImages();
	});

	const carousel = document.querySelector(".carousel-event");
	const carousel_container = document.querySelector(
		".carousel-wrapper-event"
	);

	// Clone the gallery content to create an infinite loop effect
	// carousel.innerHTML += carousel.innerHTML;

	// Adjust the animation duration based on the number of images
	const cards = carousel.querySelectorAll(".card");
	const total_width = cards.length * cards[0].clientWidth;
	carousel.style.width = `${total_width}px`;

	const prevButton = document.querySelector(".prev-event");
	const nextButton = document.querySelector(".next-event");

	prevButton.addEventListener("click", function () {
		carousel.scrollLeft -= cards[0].clientWidth;
	});

	nextButton.addEventListener("click", function () {
		carousel.scrollLeft += cards[0].clientWidth;
	});
});

// About Ashv section
// Button click handlers
document.querySelector(".directions-btn").addEventListener("click", () => {
	console.log("Need Directions clicked");
	window.open(
		"https://www.google.com/maps/search/?api=1&query=Madanapalle+Institute+of+Technology+and+Science",
		"_blank"
	);
});

document.querySelector(".conclave-btn").addEventListener("click", () => {
	console.log("Conclave clicked");
	window.open("https://mits.ac.in/", "_blank");
});

//footer reach us button
document
	.getElementById("reach-us-button")
	.addEventListener("click", function () {
		window.location.href =
			"https://www.google.com/maps/place/Madanapalle+Institute+of+Technology+%26+Sciences/@13.6170422,78.4942268,17z";
	});
