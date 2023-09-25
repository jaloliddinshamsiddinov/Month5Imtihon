import { getProductsData, getCategoryProduct } from "./getdata.js";
const tab_list = document.querySelector(".tab-list");
const tab_box = document.querySelector(".tab_box");

const renderProduct = async (id) => {
  const data = await getCategoryProduct(id);
  tab_box.innerHTML = data
    .map(
      (item) => `
  <div class="tab_box-item">
  <div class="tab-img">
    <img src="${item.img}" alt="img">
    <div class="tab-item_hover">
        <div class="icon"><i class="fa-regular fa-heart" style="color: #33a0ff;"></i></div>
        <div class="icon"><i class="fa-solid fa-basket-shopping" style="color: #33a0ff;"></i></div>
    </div>
  </div>
  <div class="tab-description">
    <h3 class="nikePrise">${item.title}</h3>
    <div class="tabStars">
        <i class="fa-solid fa-star" style="color: #e7ff2e;"></i>
        <i class="fa-solid fa-star" style="color: #e7ff2e;"></i>
        <i class="fa-solid fa-star" style="color: #e7ff2e;"></i>
        <i class="fa-solid fa-star" style="color: #e7ff2e;"></i>
        <i class="fa-solid fa-star" style="color: #a8a8a8;"></i>
    </div>
    <div class="tab_price">
        <h3>$299,43</h3>
        <p class="text-decoration-line-through">$534,33</p>
        <h4>24% Off</h4>
    </div>
  </div>
</div>
  `
    )
    .join("");
};

const renderTab = async () => {
  const data = await getProductsData();
  tab_list.innerHTML = data
    .map(
      (item, index) =>
        `<li data-product="${item.id}" class="tab-item ${
          index == 0 ? "active" : ""
        }">${item.title}</li>`
    )
    .join("");
  renderProduct(data[0]?.id);
};
renderTab();

tab_list.addEventListener("click", (e) => {
  const lis = document.querySelectorAll(".tab-list .tab-item");
  for (let i of lis) {
    i.classList.remove("active");
  }
  e.target.classList.add("active");
  renderProduct(e.target.dataset.product)
});
