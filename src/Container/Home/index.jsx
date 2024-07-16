import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsByCategoryWise} from "../../stores/Product/actions";
import Loader from "../../Components/Loader";
import Products from "../../Components/Products";

export function Home(){
    const {
        isCategoryWiseProductFetching,
        categoryWiseProducts,
        categoryWiseProductsError
    } = useSelector(state => state?.ProductReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsByCategoryWise());
    }, [dispatch]);

    return (
        <div className="main">
            <div className="card">
                <div className="card-body">
                    <h1 className="mb-1 h1">Products</h1>
                    {
                        isCategoryWiseProductFetching ?
                            <Loader />
                        :
                        <>
                            {categoryWiseProducts.length > 0 ?
                                categoryWiseProducts.map((category, index) => (
                                    <div key={index}>
                                        <h2 className="category-title">{category.name}</h2>
                                        <Products products={category.products}/>
                                    </div>
                                ))
                                :
                                <h4>No Data found</h4>
                            }
                        </>
                    }
                    {categoryWiseProductsError && <h4 className="text-danger">{categoryWiseProductsError}</h4>}
                </div>
            </div>
        </div>
    )
}

export default Home;