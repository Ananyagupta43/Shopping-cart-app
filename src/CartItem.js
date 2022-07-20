import React from 'react';

const CartItem=(props)=> {  
 
        console.log(props);
        //  const { price, title, qty } = this.state;   //we are equalizing upper properties with these one(destructuring)
        // const { price, title, qty } = this.state;
        const { price, title, qty, img } = props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src={img} style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 24, color: 'black' }}>{title}</div>
                    <div style={{ color: 'black' }}>Rs {price}</div>
                    <div style={{ color: 'black' }}>Qty:{qty}</div>
                    <div className="cart-items-actions">
                        {/* action buttons 
                        <img onClick={this.increaseQuantity.bind(this)} alt="increase button" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997933.png?token=exp=1657785854~hmac=007b41c10122254be4e7c4cb79a64765" />*/}
                        {/* <img onClick={this.increaseQuantity} alt="increase button" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997933.png?token=exp=1657785854~hmac=007b41c10122254be4e7c4cb79a64765" /> */}
                        <img onClick={()=>props.increaseQuantity(props.product)} alt="increase button" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png" />
                        <img onClick={()=>props.decreaseQuantity(props.product)} alt="decrease button" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/61/61067.png" />
                        <img alt="delete button" onClick={()=>props.deleteProduct(props.product.id)} className="action-icons" src="https://cdn-icons.flaticon.com/png/512/2907/premium/2907762.png?token=exp=1658219697~hmac=c93886d4f0ecb621ae55a86622f4698e" />
                    </div>
                </div>
            </div>
        )
    
}

const styles = {
    image: {
        height: 130,
        width: 130,
        borderRadius: 5,
        backgroundColor: 'grey'

    }
}

export default CartItem;
