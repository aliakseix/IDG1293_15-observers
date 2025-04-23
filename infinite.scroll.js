// keeping a reference to our container element
const containerEl = document.querySelector(".container");

// selected our footer element to watch its appearance in the viewport
const targetEl = document.querySelector("#iAmAFooterLookAtME");

// creating an intersection observer
const observer = new IntersectionObserver(callback);

// callback to handle footer coming into view (so we load new elements)
function callback(entries){
	entries.forEach(entry=>{
		if(entry.isIntersecting){
			// we "looad" new elements - N elements at a time
			window.setTimeout(()=>{
				const n = Math.ceil(Math.random() * 4) + 1;
				for(let i = 0; i < n; i++){
					const newItemHtml = createNewItems();
					containerEl.insertAdjacentHTML("beforeend", newItemHtml);
				}
			}, Math.round(Math.random() * 4000));
		}
	});
}

// actually observing here
observer.observe(targetEl);


// logic related to creating new elements
function createNewItems(){
	const catId = Math.ceil(Math.random() * 3);
	const template = `
			<div class="item">
				<h2>Cat ${catId}</h2>
				<img src="/images/cat${catId}.png"/>
				<p>${window.data.shift()}</p>
			</div>
	`;
	
	return template;
}