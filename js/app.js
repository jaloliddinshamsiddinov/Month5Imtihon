import { getSlideData } from "./getdata.js";
const hero = document.querySelector(".hero")

const slide = async () => {
  const data = await getSlideData();
//   hero.style.backgroundImage = data[0].img
hero.style.backgroundImage = data[0].img;
  console.log(data[0].img);
};
slide();
