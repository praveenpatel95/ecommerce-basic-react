import ProductCard from "../ProductCard";

export default function Products({products}) {
    return (
        <div className="row gap-1">
            {products.map((product, index) =>
                <div className="col-3" key={index}>
                    <ProductCard product={product}/>
                </div>
            )}
        </div>
    )
}