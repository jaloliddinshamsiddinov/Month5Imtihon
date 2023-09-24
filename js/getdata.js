const baseUrl = "http://localhost:3000/slide";

export async function getSlideData(params) {
  try {
    const res = await fetch(baseUrl);
    const data = await res.json();

    return data?.map((item) => ({ img: item.img }));
  } catch (error) {}
}
