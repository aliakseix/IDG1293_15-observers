// getting all the target element - the ones for which we track visibility (their being on the screen)
const sectionEls = document.querySelectorAll("section");

// options for the intersection observer
const options = {
	rootMargin: "-10% 0%"
};

// defining a callback function - to handle intersections
function intersectionCb(entries){
	// const randNumber = Math.round(Math.random()* 1000);
	// console.log("Intersection Observer called", randNumber);
	entries.forEach(entry=>{
		if(entry.isIntersecting){
			// if a section is about the become visible (about to be scrolled into viewport)
			entry.target.classList.remove(entry.target.dataset.hidden);
		}else{
			// if a section has become invisible (left the screen)
			entry.target.classList.add(entry.target.dataset.hidden);
		}
	});
}

// creating an intersection observer
const observer = new IntersectionObserver(intersectionCb, options);

// actually telling the observer what target elements to observe
sectionEls.forEach(el=>{
	observer.observe(el);
});