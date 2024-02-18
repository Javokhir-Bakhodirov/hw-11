// header

let elHeaderTag = document.querySelector(".header");

let elLogoLink = document.createElement("a");
let elLogoImg = document.createElement("img");
let elHeaderList = document.createElement("ul");
let elRegLink = document.createElement("a");

elHeaderTag.append(elLogoLink, elHeaderList, elRegLink);
elLogoLink.append(elLogoImg);

const listItems = [
	{
		id: 1,
		name: "Home",
	},
	{
		id: 2,
		name: "About",
	},
	{
		id: 3,
		name: "Packages",
	},
	{
		id: 4,
		name: "Contact Us",
	},
	{
		id: 5,
		name: "FAQ",
	},
];

function createElementsToList(arr) {
	arr.map((item) => {
		let elItem = document.createElement("li");
		let elItemLink = document.createElement("a");

		elItemLink.href = "/";
		elItem.classList.add("header__item");
		elItemLink.classList.add("header__item-link");
		elItemLink.textContent = item.name;

		elItem.appendChild(elItemLink);
		elHeaderList.appendChild(elItem);
	});
}
createElementsToList(listItems);

elLogoLink.classList.add("header__logo-link");
elLogoLink.href = "/";
elLogoImg.classList.add("header__logo-img");
elLogoImg.src = "./images/Logo.svg";
elHeaderList.classList.add("header__list");
elRegLink.classList.add("header__reg-link");
elRegLink.textContent = "Register";
elRegLink.href = "/";

// her-section

let elHero = document.querySelector(".hero");
let elHeroBox = document.createElement("div");
let elImgBox = document.createElement("div");
let elTextBox = document.createElement("div");
let elHeroTitle = document.createElement("h1");
let elHeroText = document.createElement("p");
let elHeroLink = document.createElement("a");
let elHeroImg = document.createElement("img");

elHeroBox.classList.add("hero__box");
elTextBox.classList.add("hero__text-box");
elHeroTitle.classList.add("hero__title");
elHeroTitle.textContent = "Let's Enjoy Your Trip with TripGoal";
elHeroText.classList.add("hero__text");
elHeroText.textContent =
	"Thinking of taking a break from every day's busy life? Planning to go out of the country with your loved ones to have some fun and quality time in a cost-effective way?";
elHeroLink.classList.add("hero__link");
elHeroLink.textContent = "Start Now";
elHeroLink.href = "/";
elImgBox.classList.add("hero__img-box");
elHeroImg.classList.add("hero__img");
elHeroImg.src = "./images/hero-img.png";
elHeroImg.width = "569";
elHeroImg.height = "597";

elHero.append(elHeroBox);
elHeroBox.append(elImgBox, elTextBox);
elImgBox.append(elHeroImg);
elTextBox.append(elHeroTitle, elHeroText, elHeroLink);
