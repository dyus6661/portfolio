const topScroll = document.querySelector("#top-scroll"),
			photos = document.querySelector("#photos"),
			photosThumbsLeft = document.querySelectorAll("#photos-thumbs-left li"),
			photosPreviewLeft = document.querySelector("#photos-preview-left img"),
			photosThumbsRight = document.querySelectorAll("#photos-thumbs-right li"),
			photosPreviewRight = document.querySelector("#photos-preview-right img");

photosThumbsLeft.forEach(el => {
	el.addEventListener("click", e => {
		photosPreviewLeft.src = el.dataset.src;
	});
	el.addEventListener("touchstart", e => {
		photosPreviewLeft.setAttribute("src", el.dataset.src);
	});
});

photosThumbsRight.forEach(el => {
	el.addEventListener("click", e => {
		photosPreviewRight.src = el.dataset.src;
	});
	el.addEventListener("touchstart", e => {
		photosPreviewRight.src = el.dataset.src;
	});
});

topScroll.addEventListener("click", () => {
	window.scrollTo({
		left: 0,
		top: photos.offsetTop,
		behavior: "smooth"
	});
})