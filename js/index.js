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
    "h1": "DOM <br> Is <br> Awesome",
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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
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

let nav_items = document.querySelectorAll("a");
nav_items[0].textContent = siteContent["nav"]["nav-item-1"];
nav_items[1].textContent = siteContent["nav"]["nav-item-2"];
nav_items[2].textContent = siteContent["nav"]["nav-item-3"];
nav_items[3].textContent = siteContent["nav"]["nav-item-4"];
nav_items[4].textContent = siteContent["nav"]["nav-item-5"];
nav_items[5].textContent = siteContent["nav"]["nav-item-6"];

//Section Healine
let sect_headline = document.querySelector("h1");
sect_headline.innerHTML = siteContent["cta"]["h1"];

let sect_button = document.querySelector("button");
sect_button.textContent = siteContent["cta"]["button"];

let sect_img = document.getElementById("cta-img");
sect_img.setAttribute('src', siteContent["cta"]["img-src"]);

// Main Section
let sect_headers = document.querySelectorAll("h4");
sect_headers[0].textContent = siteContent["main-content"]["features-h4"];
sect_headers[1].textContent = siteContent["main-content"]["about-h4"];
sect_headers[2].textContent = siteContent["main-content"]["services-h4"];
sect_headers[3].textContent = siteContent["main-content"]["product-h4"];
sect_headers[4].textContent = siteContent["main-content"]["vision-h4"];

let sect_content = document.querySelectorAll("p");
sect_content[0].textContent = siteContent["main-content"]["features-content"];
sect_content[1].textContent = siteContent["main-content"]["about-content"];
sect_content[2].textContent = siteContent["main-content"]["services-content"];
sect_content[3].textContent = siteContent["main-content"]["product-content"];
sect_content[4].textContent = siteContent["main-content"]["vision-content"];

let main_sect_img = document.getElementById("middle-img");
main_sect_img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Contact 

sect_headers[5].textContent = siteContent["contact"]["contact-h4"];
sect_content[5].innerHTML = siteContent["contact"]["address"];
sect_content[6].textContent = siteContent["contact"]["phone"];
sect_content[7].textContent = siteContent["contact"]["email"];

//Footer
let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];