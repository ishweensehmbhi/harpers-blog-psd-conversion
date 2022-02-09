/******/
/* Back to top functionality for all pages */
// Select the back-to-top button
const scrollToTop = document.querySelector(".backToTop");

// When the user has scrolled past 50px from the top, show the button. Otherwise, button should be hidden.
window.onscroll = function () {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		scrollToTop.style.display = "block";
	} else {
		scrollToTop.style.display = "none";
	}
};

/******/
/* Image Gallery for Index Page */

// Index of currently selected image
let imgIndex = 0;

// Select left and right buttons
const leftBtn = document.querySelector(".carouselPrevious");
const rightBtn = document.querySelector(".carouselNext");

// Select a nodelist of all items within the carousel
const carouselImgList = document.querySelectorAll(".carouselItem");

// To avoid TypeErrors, check if LeftBtn and RightBtn exist
if (leftBtn) {
	// When left button is clicked, change current image to previous image
	leftBtn.addEventListener("click", function (e) {
		// hide current image
		carouselImgList[imgIndex].classList.toggle("currentlyActive");
		// if the current index is the minimum index, then go back to the last index
		if (imgIndex == 0) {
			imgIndex = carouselImgList.length - 1;
		} else {
			// otherwise, decrement
			imgIndex = imgIndex - 1;
		}
		// display image at chosen index
		carouselImgList[imgIndex].classList.toggle("currentlyActive");
	});
}

if (rightBtn) {
	rightBtn.addEventListener("click", function (e) {
		// hide current image
		carouselImgList[imgIndex].classList.toggle("currentlyActive");

		// if the current index is the maximum index, then go back to zero
		if (imgIndex == carouselImgList.length - 1) {
			imgIndex = 0;
		} else {
			// otherwise, increment
			imgIndex = imgIndex + 1;
		}
		// display image at chosen index
		carouselImgList[imgIndex].classList.toggle("currentlyActive");
	});
}

/******/
/* Form Validation & Comment Posting */

// Select specifically the Blog page form
const commentsForm = document.querySelector(".commentsForm form");
const commentsSection = document.querySelector(".commentSection");

// If commentsForm exists
if (commentsForm) {
	commentsForm.addEventListener("submit", function (e) {
		e.preventDefault();

		// Get user's data from the form and today's date
		const userName = this["name"].value;
		const email = this["email"].value;
		const comments = this["comments"].value;
		const today = new Date();

		// If the user has filled out the form, post the comment
		// by creating a new "div" blogComment element and adding it to the end of the comments section.
		if (userName && email && comments) {
			const newComment = document.createElement("div");
			newComment.classList.add("blogComment");
			newComment.innerHTML = `
				<div class="blogCommentImgContainer">
					<img
						src="./assets/blog-image-5.jpg"
						alt="anonymous user placeholder image"
					/>
				</div>
				<div class="blogCommentTextContainer">
					<p class="dateText">
						${dateFormatter(today)} by ${userName}
					</p>
					<p class="commentText">
						${comments}
					</p>
				</div>
			`;
			commentsSection.appendChild(newComment);
		} else {
			// Otherwise, we send an alert to the user.
			alert(
				`Sorry! We were unable to process your request. Please ensure all form fields are complete and try again.`
			);
		}
	});
}

/* Format the date */
function dateFormatter(today) {
	let options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return today.toLocaleDateString("en-US", options);
}

/******/

const contactForm = document.querySelector(".contactForm form");
const span = document.querySelector(".closeButton");
const modal = document.querySelector(".popUpModal");

if (contactForm) {
	contactForm.addEventListener("submit", function (e) {
		e.preventDefault();

		// Get user's data from the form and today's date
		const userName = contactForm["name"].value;
		const email = this["email"].value;
		const comments = this["comments"].value;

		if (userName && email && comments) {
			modal.style.display = "block";
		} else {
			alert(
				`Sorry! We were unable to process your request. Please ensure all form fields are complete and try again.`
			);
		}
	});

	// If the user clicks the "X" button in the pop-up,
	span.onclick = function () {
		// Change modal back to display none
		modal.style.display = "none";
		// Reload the page for good measure
		location.reload();
	};
}
