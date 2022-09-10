let send = document.querySelector(".send");
let email = document.querySelector(".email");
let nameUser = document.querySelector(".name");
let message = document.querySelector(".message");

let info = [nameUser, email, message];

const closeBtn = document.querySelector(".close-btn");
const emailSentHolder = document.querySelector(".email-sent-holder");
const opacityDiv = document.querySelector(".opacity-div");

let sendMail = () => {
  var params = {
    from_name: nameUser.value,
    email_id: email.value,
    message: message.value,
  };
  emailjs
    .send("service_won1ifa", "template_x00x01s", params)
    .then(function (res) {
      alert("Your message has been sent!");
    });
};

send.onclick = () => {
  sendMail();
};

let productImg = document.querySelectorAll(".product-img");
let imgHolder = document.querySelector(".img-holder");
let clickedImg = document.querySelector(".clicked-img");
let cancel = document.querySelector(".cancel");

const hamBtn = document.querySelector(".ham-btn");
let clicked = false;
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".links");

hamBtn.onclick = () => {
  if (!clicked) {
    console.log(true);
    nav.classList.add("nav-added");
    links.forEach((e) => {
      e.classList.add("links-added");
    });
    clicked = true;
  } else {
    nav.classList.remove("nav-added");
    links.forEach((e) => {
      e.classList.remove("links-added");
    });
    clicked = false;
  }
};

links.forEach((e) => {
  e.onclick = () => {
    nav.classList.remove("nav-added");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("links-added");
    }
    clicked = false;
  };
});

productImg.forEach((product) => {
  product.onclick = () => {
    imgHolder.style.display = "flex";
    let imgSrc = product.getAttribute("src");
    clickedImg.setAttribute("src", imgSrc);
  };
});

cancel.onclick = () => {
  imgHolder.style.display = "none";
};

const video = document.querySelector(".vid");
const videoHolder = document.querySelector(".video-holder");
const cancelForVideo = document.querySelector(".cancel-for-video");
const holder = document.querySelector(".holder");
