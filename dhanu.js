const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("middle-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const products = [
  {
    name: "Classic Mahroon  T-Shirt",
    desc: "Premium cotton slim fit",
    price: 499,
    quantity: 320,
    img: "cartimage.jpg",
  },
  {
    name: "Black T-shirt & Half Pants",
    desc: "Premium cotton slim fit",
    price: 699,
    quantity: 580,
    img: "half pants.jpg",
  },
  {
    name: "Full t-shirt",
    desc: "Premium cotton slim fit",
    price: 899,
    quantity: 210,
    img: "man-posing-stairs-while-wearing-athletic-wear_23-2148773866.jpg",
  },
  {
    name: "Hoodie",
    desc: "Premium & slim fit",
    price: 1199,
    quantity: 450,
    img: "beautiful-young-woman-sportswear_143179-204.jpg",
  },
];

const productContainer = document.getElementById("product-box");

products.forEach((item, index) => {
  const box = document.createElement("div");
  box.className = "inner-product-box";
  box.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="quantity">Items Left: <span id="qty-${index}">${item.quantity}</span></div>
      <button onclick="printInfo(${index})" id="btn-${index}">Print Invoice</button>
    `;
  productContainer.appendChild(box);
});

function printInfo(index) {
  const product = products[index];
  if (product.quantity > 0) {
    product.quantity--;
    document.getElementById(`qty-${index}`).textContent = product.quantity;

    document.getElementById("invoice-name").textContent = product.name;
    document.getElementById("invoice-price").textContent = product.price;
    document.getElementById("invoice-total").textContent = product.price;
    document.getElementById("invoice-date").textContent =
      new Date().toLocaleString();
    document.getElementById("invoice").style.display = "block";

    window.print();

    document.getElementById("invoice").style.display = "none";

    if (product.quantity === 0) {
      document.getElementById(`btn-${index}`).disabled = true;
      alert("This item is now out of stock.");
    }
  }
}
