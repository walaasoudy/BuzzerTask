
async function page() {
    async function fetchData() {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/products');
        const data = await res.json();
        console.log(data.data);
        return data.data;
    }

    const products = await fetchData();
    console.log(products);

  return (
    <div>
        <h1>Product List</h1>

        {products.map(product => (
            <div key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.price}</p>
                <img src={product.imageCover} alt={product.name} />
            </div>
        ))}
    </div>
  )
}

export default page