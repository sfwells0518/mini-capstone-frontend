export function ProductsIndex(props) {
  console.log(props.products);
  return (
    <div id="products-index" className="mt-4">
      <h1>All Products</h1>
      <div className="row">
        {props.products.map((product) => (
          <div key={product.id} className="col-sm-4 mb-3">
            <div className="card h-100">
              <div className="card-body card-body-custom d-flex flex-column">
                <h3 className="card-title">{product.name}</h3>
                <img src={product.images[0].url} alt="Product Image" className="mb-3" />
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
