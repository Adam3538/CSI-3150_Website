const data = [
  {
    id: 1,
    name: "Elden Ring",
    img: "../media/images/eldenring.jpg",
    price: 55,
    plat: "PC",
  },
  {
    id: 2,
    name: "Halo Infinite",
    img: "../media/images/halo.jpg",
    price: 30,
    plat: "Xbox",
  },
  {
    id: 3,
    name: "The Last of Us",
    img: "../media/images/Lastofus.jpg",
    price: 40,
    plat: "Playstation",
  },
  {
    id: 4,
    name: "Among US",
    img: "../media/images/amoungus.jpg",
    price: 200,
    plat: "PC",
  },
  {
    id: 5,
    name: "Gears 5",
    img: "../media/images/gears.jpg",
    price: 38,
    plat: "Xbox",
  },
  {
    id: 6,
    name: "Spider-Man ",
    img: "../media/images/spider.png",
    price: 45,
    plat: "Playstation",
  },
  {
    id: 7,
    name: "Roller Coaster Tycoon ",
    img: "../media/images/coaster.jpg",
    price: 27,
    plat: "PC",
  },
  {
    id: 8,
    name: "Forza 5",
    img: "../media/images/forza.jpg",
    price: 55,
    plat: "Xbox",
  },
  {
    id: 9,
    name: "Horizion Zero Dawn ",
    img: "../media/images/zero.jpg",
    price: 52,
    plat: "Playstation",
  },
  {
    id: 10,
    name: "Half Life",
    img: "../media/images/half.jpg",
    price: 5,
    plat: "PC",
  },
  {
    id: 11,
    name: "Ryse: Son of Rome ",
    img: "../media/images/ryse.jpg",
    price: 25,
    plat: "Xbox",
  },
  {
    id: 12,
    name: "Days Gone ",
    img: "../media/images/daysgone.png",
    price: 35,
    plat: "Playstation",
  },
  {
    id: 13,
    name: "World of Warcraft",
    img: "../media/images/wow.jpg",
    price: 1000,
    plat: "PC",
  },
  {
    id: 14,
    name: "Sea Of Thieves ",
    img: "../media/images/sea.jpg",
    price: 15,
    plat: "Xbox",
  },
  {
    id: 15,
    name: "God of War ",
    img: "../media/images/god.jpg",
    price: 43,
    plat: "Playstation",
  },
];

const productsContainer = document.querySelector(".products");
const PlatformsContainer = document.querySelector(".Plats");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
       <div class="product">
          <img
          src=${product.img}
          alt=""
          />
          <span class="name">${product.name}</span>
          <span class="priceText">$${product.price}</span>
        </div>
    `
    )
    .join("");
};

displayProducts(data);

const setPlatforms = () => {
  const allPlats = data.map((item) => item.plat);
  const Platforms = [
    "All",
    ...allPlats.filter((item, i) => {
      return allPlats.indexOf(item) === i;
    }),
  ];

  PlatformsContainer.innerHTML = Platforms.map(
    (plat) =>
      `
      <span class="plat">${plat}</span>
    `
  ).join("");

  PlatformsContainer.addEventListener("click", (e) => {
    const selectedPlat = e.target.textContent;

    selectedPlat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.plat === selectedPlat));
  });
};
setPlatforms();
