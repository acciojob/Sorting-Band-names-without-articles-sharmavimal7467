//your code here
let regexp = /\bthe\b|\ban\b|\ba\b/gi;
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let touristSpotsArticleLessArray = [];
let mp = {};
for(let i = 0;i<touristSpots.length;i++){
	let touristSpotsItem = touristSpots[i].replace(regexp,"").trim();
	touristSpotsArticleLessArray.push(touristSpotsItem);
	mp[touristSpotsItem] = touristSpots[i];
}
touristSpotsArticleLessArray.sort();
let ans = [];
for(let i of touristSpotsArticleLessArray){
	ans.push(mp[i]);
}
console.log(ans);
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
const listItem = document.createElement('li');
listItem.textContent = band;
bandList.appendChild(listItem);
});


//what li tag they want