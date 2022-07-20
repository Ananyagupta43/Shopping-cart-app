import React from 'react';
import CartItem from './CartItem';
const Cart =(props) =>{
        const { product } = props; //destructuring
      //  console.log(props);
        return (
            <div className="main-cart">
                {product.map((products) => {
                    return <CartItem product={products} key={products.id}  increaseQuantity={props.increaseQuantity} decreaseQuantity={props.decreaseQuantity} deleteProduct={props.deleteProduct}/>

                })}

            </div>
        )
    }



export default Cart;