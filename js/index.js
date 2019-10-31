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

let ancr_tags = document.querySelectorAll('nav a');
ancr_tags[0].textContent = 'Services';
ancr_tags[1].textContent = 'Products';
ancr_tags[2].textContent = 'Vision';
ancr_tags[3].textContent = 'Features';
ancr_tags[4].textContent = 'About';
ancr_tags[5].textContent = 'Contact';

//Header

let head_img = document.querySelector('#cta-img');
head_img.setAttribute('src', 'img/header-img.png');

let head_text = document.querySelector('h1');
head_text.textContent = 'DOM \n IS \n AWESOME';

let button_txt = document.querySelector('button');
button_txt.textContent = "Get Started";

//Section

let top_lft_h = document.querySelectorAll('.main-content .text-content h4');
top_lft_h[0].textContent = "Features";
top_lft_h[1].textContent = "About";
top_lft_h[2].textContent = "Services"
top_lft_h[3].textContent = "Product";
top_lft_h[4].textContent = "Vision";

let top_lft_txt = document.querySelectorAll('.main-content .text-content p');
top_lft_txt[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
top_lft_txt[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
top_lft_txt[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
top_lft_txt[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
top_lft_txt[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let mid_img = document.querySelector('.middle-img')
mid_img.setAttribute('src', 'img/mid-page-accent.jpg');


//Contact

let contact_header = document.querySelector('.contact h4');
contact_header.textContent = 'Contact';

let contact_p = document.querySelectorAll('.contact p');
contact_p[0].textContent = "123 Way 456 Street \n Somewhere, USA";

contact_p[1].textContent = "1 (888) 888-8888";

contact_p[2].textContent = "sales@greatidea.io";

//Footer

let footer_p = document.querySelector('footer p');
footer_p.textContent = "Copyright Great Idea! 2018";