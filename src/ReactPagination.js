import { useEffect, useState } from "react";

const ReactPagination = () => {
  const [productsList, setProductsList] = useState([]);
  const [page, setPage] = useState(1);

  const ApiUrl = `https://dummyjson.com/products?limit=87`;

  const fetchProducts = async () => {
    const res = await fetch(ApiUrl);
    const data = await res.json();
    setProductsList(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePageClick = (index) => {
    setPage(index);
  };
  return (
    <>
      {productsList.length > 0 && (
        <div className="products">
          {productsList.slice(page * 10 - 10, page * 10).map((product) => {
            return (
              <div className="products__single" key={product.title}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="products__img"
                />
                <div>{product.title}</div>
              </div>
            );
          })}
        </div>
      )}

      <div className="pagination">
        <button
         disabled={page > 1  ? false:  true}
          onClick={handlePrev} className={"pagination__button"}>
          {" "}
          prev
        </button>
        {[...Array(Math.ceil(productsList.length / 10))].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`pagination__button ${
              page === index + 1 ? "pagination__button--selected" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={page < Math.ceil(productsList.length / 10) ? false : true}
          onClick={handleNext}
          className={"pagination__button"}
        >
          Next{" "}
        </button>
      </div>
    </>
  );
};

export default ReactPagination;
