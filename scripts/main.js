axios.defaults.baseURL = "https://www.world-wonders-api.org";
let currentindex = 0;
const getResponse = async () => {
	return await axios.get("/v0/wonders");
};
response = getResponse();
response.then((res) => {
	data = res.data;
	console.log(data);
	renderElements(currentindex);
});
let data;
//build_year + ie AD or - ie BC
//links
//	britannica:
//  google_maps:
//  trip_advisor:
//	wiki:
//  images: returns array of image links
//location:
//name:
//summary:
//time_period
function renderElements(index) {
	if (index < data.length) {
		let element = data[index];
		document.body.appendChild(
			generatediv(
				element.name,
				element.location,
				Number(element.build_year) > 0
					? element.build_year + " AD"
					: element.build_year + " BC",
				element.summary,
				element.links["google_maps"],
				element.links.wiki,
				element.links.britannica,
				element.links["trip_advisor"],
				element.links.images[0]
			)
		);
		currentindex = index;
	}
}
