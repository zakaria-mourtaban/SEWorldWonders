const dataLocal = localStorage.getItem("element");
const data = JSON.parse(dataLocal);
let imgdiv = document.querySelector(".carousel");
let imgelements = [];
let title = document.querySelector(".carousel h1");
const age = document.querySelector(".age");
const locationheader = document.querySelector(".location");
const summary = document.querySelector(".summary");
const pagetitle = document.head.title;
console.log(data);

title.innerHTML = data.name;
document.title = data.name;
age.innerHTML =
	data["build_year"] > 0
		? data["build_year"] + "AD"
		: data["build_year"] * -1 + "BC";
locationheader.innerHTML = data["location"];
summary.innerHTML = data.summary
data.links.images.forEach((image) => {
	const img = document.createElement("img");
	img.src = image;
	img.style.display = "none";
	imgelements.push(img);
	imgdiv.appendChild(img);
});
imgelements[0].style.display = "flex";
let currentindex = 0;
setInterval(() => {
	let i = 0;
	imgelements.forEach((element) => {
		if (currentindex % imgelements.length == i)
			element.style.display = "flex";
		else element.style.display = "none";
		i++;
	});
	currentindex++;
}, 5000);
