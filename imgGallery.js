/* Image Gallery for Index Page */

// Index of currently selected image
let imgIndex = 0;

// Select left and right buttons
const leftBtn = document.querySelector(".carouselPrevious");
const rightBtn = document.querySelector(".carouselNext");

// Select a nodelist of all items within the carousel
const carouselImgList = document.querySelectorAll(".carouselItem");

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
