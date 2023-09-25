const baseUrl = "http://localhost:3000/category";

export async function getProductsData() {
  try {
    const res = await fetch(baseUrl);
    const data = await res.json();

    return data?.map((item) => ({ title: item.name, id: item.id}));
  } catch (error) {}
}

export async function getCategoryProduct(id) {
  try {
    const response = await fetch(`${baseUrl}/${id}`)
    const data = await response.json()
    return data?.product
  } catch (error) {
    
  }
}