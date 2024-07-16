import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../../stores/Cart/actions";
import {useState} from "react";

export default function ProductCard({product}) {

    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState(false);
    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setAddedToCart(true)
    };

    const handleRemoveToCart = () => {
        dispatch(removeFromCart(product?.id));
        setAddedToCart(false)
    }
    return (
        <div className="card">
            <div className="card-body product-card">
                <h4>{product.name}</h4>
                <h5>${product.price}</h5>
                {!addedToCart ?
                    <button onClick={handleAddToCart} className="add_to_cart_btn">Add To Cart</button>
                    :
                    <button onClick={handleRemoveToCart} className="add_to_cart_btn">Remove From Cart</button>
                }
            </div>
        </div>
    )
}