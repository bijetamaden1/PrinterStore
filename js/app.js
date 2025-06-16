// Selecting elements from the DOM
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

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
  // ... (similar data for other products)
];

// Initializing the chosen product with the first product in the array
let chosenProduct = products[0];

// Selecting elements to update based on chosen product
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentMoreProduct = document.querySelector(".MoreButton");

// Adding click event listeners to menu items
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide based on the clicked menu item
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Update the chosen product based on the clicked menu item
    chosenProduct = products[index];

    // Update text and image of the current product
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.img;
    currentMoreProduct.setAttribute('href', chosenProduct.more);
  });
});

// Selecting elements for displaying the payment modal
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Adding click event listeners to show/hide the payment modal
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
