const img = document.querySelector("img");
const button = document.querySelector("button");

let Date;
const camera = "opportunity";
const page = 1;
const ApiKey = "CzmpXVn0vTSXgeciOoLiyKkWj4hmfhLkTnTBVylY";

// const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&camera=${camera}&api_key=CzmpXVn0vTSXgeciOoLiyKkWj4hmfhLkTnTBVylY`;
// const URL = `https://api.nasa.gov/mars-photos/api/v1/mainfest/Curiosity/api_key=CzmpXVn0vTSXgeciOoLiyKkWj4hmfhLkTnTBVylY`;

button.addEventListener("click", () => {
	const InputRover = document.querySelector("#rovers");
	const sol = document.querySelector("#sol");
	const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${InputRover.value}/photos?sol=${sol.value}&api_key=CzmpXVn0vTSXgeciOoLiyKkWj4hmfhLkTnTBVylY`;
	console.log(InputRover.value);
	console.log(sol.value);
	fetch(URL)
		.then((res) => res.json())
		.then((data) => img.setAttribute("src", data.photos[0].img_src))
		// img.setAttribute("src", data.photos[1].img_src
		.catch((error) => console.error("Error:", error));
	console.log("gotowe");
});
