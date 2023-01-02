import { useEffect, useState } from "react";

const ReactPagination = () => {
  const [productsList, setProductsList] = useState([]);
  const [page,setPage] = useState(1);

  const ApiUrl = `https://dummyjson.com/products?limit=88`;

  const fetchProducts = async () => {
    const res = await fetch(ApiUrl);
    const data = await res.json();
    setProductsList(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return <>
  {productsList.length > 0 && <div className="products">
    {productsList.slice(page * 10 - 10, page * 10).map(()=><div>asdf</div>)}


  </div>}
  {productsList.map((product) => {return <div></div>} )}
    <div>


    </div>
<div className="pagination">
    I am pagination
</div>

  </>;
};

export default ReactPagination;
