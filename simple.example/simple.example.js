
const options = {

};

function callback(entries){
	const randomNumber = Math.round(Math.random() * 1000 );
	console.log("Intersection Callback CAlled!", randomNumber);
	entries.forEach(entry=>{
		console.log(entry);
	});
	// some of sort of logic here
}

const observer = new IntersectionObserver(callback, options);

const targetEl = document.querySelector(".target");

observer.observe(targetEl);