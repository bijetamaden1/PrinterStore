// Selecting DOM elements
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentMoreProduct = document.querySelector(".MoreButton");
const buyButton = document.querySelector(".buyButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Sample product data
const products = [
  {
    id: 1,
    title: "PIXMA G4770",
    price: 149,
    img: "/Codes/23049273 Mandeep Basnet IS Codes/img/canonprinter1-removebg-preview.png",
    more: "canon.html",
  },
  {
    id: 2,
    title: "OfficeJet Pro 8710",
    price: 279.99,
    img: "/Codes/23049273 Mandeep Basnet IS Codes/img/hpprinter1-removebg-preview.png",
    more: "hp.html",
  },
  {
    id: 3,
    title: "EcoTank ET-2800",
    price: 199.99,
    img: "/Codes/23049273 Mandeep Basnet IS Codes/img/epsonprinter1-removebg-preview.png",
    more: "epson.html",
  },
  {
    id: 4,
    title: "SAMSUNG ML1740",
    price: 99.99,
    img: "/Codes/23049273 Mandeep Basnet IS Codes/img/samsungprinter1-removebg-preview.png",
    more: "samsung.html",
  },
  {
    id: 5,
    title: "Xerox B415 Printer",
    price: 1136.49,
    img: "/Codes/23049273 Mandeep Basnet IS Codes/img/xeroxprinter1-removebg-preview.png",
    more: "xerox.html",
  },
];

// Initializing the chosen product with the first product in the array
let chosenProduct = products[0];

// Adding click event listeners to menu items
menuItems.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    // Change the current slide based on the clicked menu item
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Update the chosen product based on the clicked menu item
    chosenProduct = products[index];

    // Update text and image of the current product
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.img;
    currentMoreProduct.setAttribute("href", chosenProduct.more);
  });
});

// Adding click event listeners for buy button and close button
document.body.addEventListener("click", (event) => {
  // Handle the buy button click event
  if (event.target.classList.contains("buyButton")) {
    if (payment) {
      payment.style.display = "flex";
    }
  }

  // Handle the close button click event
  if (event.target.classList.contains("close")) {
    if (payment) {
      payment.style.display = "none";
    }
  }
});
