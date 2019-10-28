const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Fix NavBar Items
const navBar = document.querySelectorAll("a");
console.log(navBar);
navBar[0].textContent = siteContent["nav"]["nav-item-1"]
navBar[1].textContent = siteContent["nav"]["nav-item-2"]
navBar[2].textContent = siteContent["nav"]["nav-item-3"]
navBar[3].textContent = siteContent["nav"]["nav-item-4"]
navBar[4].textContent = siteContent["nav"]["nav-item-5"]
navBar[5].textContent = siteContent["nav"]["nav-item-6"]

const parentElement = document.querySelector("nav");
const newNav1 = document.createElement("a");
newNav1.textContent = "Blog";
newNav1.setAttribute("href", "#");
parentElement.append(newNav1);

const newNav2 = document.createElement("a");
newNav2.textContent = "Home";
newNav2.setAttribute("href", "#");
parentElement.prepend(newNav2);

const navBarGreen = document.querySelectorAll("a");
navBarGreen.forEach(element => {
  element.style.color = "green";
})

//Fixes the intro Title and Get Started Button

const mainHeader = document.querySelector(".cta-text h1");
mainHeader.textContent = siteContent["cta"] ["h1"]

mainHeader.innerHTML = siteContent ["cta"] ["h1"].replace(/ /g, "<br>");

const mainButton = document.querySelector(".cta-text button");
mainButton.textContent = siteContent["cta"] ["button"]

//Fixes the img src for the intro
const introImage = document.getElementById("cta-img");
introImage.setAttribute('src', siteContent["cta"]["img-src"])

//Fixes the top content of the middle section

const h4Headers = document.querySelectorAll("h4");
h4Headers[0].textContent = siteContent["main-content"]["features-h4"]
h4Headers[1].textContent = siteContent["main-content"]["about-h4"]
h4Headers[2].textContent = siteContent["main-content"]["services-h4"]
h4Headers[3].textContent = siteContent["main-content"]["product-h4"]
h4Headers[4].textContent = siteContent["main-content"]["vision-h4"]
h4Headers[5].textContent = siteContent["contact"]["contact-h4"]

const middleText = document.querySelectorAll(".text-content p")
console.log(middleText);
middleText[0].textContent = siteContent["main-content"]["features-content"]
middleText[1].textContent = siteContent["main-content"]["about-content"]
middleText[2].textContent = siteContent["main-content"]["services-content"]
middleText[3].textContent = siteContent["main-content"]["product-content"]
middleText[4].textContent = siteContent["main-content"]["vision-content"]

//Fixes the img src for middle
const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Fixes the contact section

const contactInfo = document.querySelectorAll(".contact p");
console.log(contactInfo);
contactInfo[0].textContent = siteContent["contact"]["address"]
contactInfo[1].textContent = siteContent["contact"]["phone"]
contactInfo[2].textContent = siteContent["contact"]["email"]

contactInfo[0].style.width = '20%';

//Fixes the footer

const copyright = document.querySelector("footer p");
console.log(copyright);
copyright.textContent = siteContent["footer"]["copyright"]