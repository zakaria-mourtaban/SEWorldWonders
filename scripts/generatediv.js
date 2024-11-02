function generatediv(
	name,
	location,
	buildYear,
	summary,
	mapsLink,
	wikiLink,
	britannicaLink,
	tripadvisorLink,
	imageLink
) {
	const infocard = document.createElement("div");
	infocard.className = "infocard";

	const imgdiv = document.createElement("div");
	imgdiv.className = "imgdiv";
	const img = document.createElement("img");
	let imgindex = 0;
	img.src = imageLink[0];
	img.alt = "";
	img.onload = () => {
		renderElements(currentindex + 1)
	};
	images.push([img, imageLink])
	imgdiv.appendChild(img);
	infocard.appendChild(imgdiv);

	const infodiv = document.createElement("div");
	infodiv.className = "infodiv";

	const nameDiv = document.createElement("div");
	nameDiv.className = "name titletext";
	const nameParagraph = document.createElement("p");
	nameParagraph.textContent = `Name: ${name}`;
	nameDiv.appendChild(nameParagraph);
	infodiv.appendChild(nameDiv);

	const locationDiv = document.createElement("div");
	locationDiv.className = "location titletext";
	const locationParagraph = document.createElement("p");
	locationParagraph.textContent = `Location: ${location}`;
	locationDiv.appendChild(locationParagraph);
	infodiv.appendChild(locationDiv);

	const buildYearDiv = document.createElement("div");
	buildYearDiv.className = "buildyear titletext";
	const buildYearParagraph = document.createElement("p");
	buildYearParagraph.textContent = buildYear;
	buildYearDiv.appendChild(buildYearParagraph);
	infodiv.appendChild(buildYearDiv);

	const summaryDiv = document.createElement("div");
	const summaryParagraph = document.createElement("p");
	summaryParagraph.className = "summary";
	summaryParagraph.textContent = summary;
	summaryDiv.appendChild(summaryParagraph);
	infodiv.appendChild(summaryDiv);

	const websitesDiv = document.createElement("div");
	websitesDiv.className = "websitesdiv";

	const iconSources = [
		{
			href: mapsLink,
			src: "assets/maps.png",
			alt: "mapsicon",
			class: "mapsref clickicon",
		},
		{
			href: wikiLink,
			src: "assets/wikipedia.png",
			alt: "wikiicon",
			class: "wikiref clickicon",
		},
		{
			href: britannicaLink,
			src: "assets/britannica.png",
			alt: "britannicaicon",
			class: "britannicaref clickicon",
		},
		{
			href: tripadvisorLink,
			src: "assets/tripadvisor.png",
			alt: "tripadvisoricon",
			class: "tripadvisorref clickicon",
		},
	];

	iconSources.forEach((icon) => {
		const a = document.createElement("a");
		a.className = icon.class;
		a.href = icon.href;
		const img = document.createElement("img");
		img.src = icon.src;
		img.alt = icon.alt;
		a.appendChild(img);
		websitesDiv.appendChild(a);
	});

	infodiv.appendChild(websitesDiv);
	infocard.appendChild(infodiv);
	return infocard;
}
