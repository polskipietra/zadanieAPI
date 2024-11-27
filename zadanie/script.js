const img = document.querySelector("img");
const button = document.querySelector(".generate");
const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");

let photos = [];
let currentIndex = 0;

const ApiKey = "CzmpXVn0vTSXgeciOoLiyKkWj4hmfhLkTnTBVylY";

button.addEventListener("click", () => {
	const InputRover = document.querySelector("#rovers");
	const sol = document.querySelector("#sol");
	const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${InputRover.value}/photos?sol=${sol.value}&page=1&api_key=${ApiKey}`;

	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			photos = data.photos;
			console.log(photos);
			if (photos.length > 0) {
				currentIndex = 0;
				img.setAttribute("src", photos[currentIndex].img_src);
			} else {
				alert("Brak zdjęć dla podanych danych.");
				img.removeAttribute("src");
			}
		})
		.catch((error) => console.error("Error:", error));
});

buttonLeft.addEventListener("click", () => {
	if (photos.length === 0) return;
	currentIndex = (currentIndex - 1) % photos.length;
	img.setAttribute("src", photos[currentIndex].img_src);
});
buttonRight.addEventListener("click", () => {
	if (photos.length === 0) return;
	currentIndex = (currentIndex + 1) % photos.length;
	img.setAttribute("src", photos[currentIndex].img_src);
});
