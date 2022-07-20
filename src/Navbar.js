import React from 'react';

const Navbar = (props) => {  // inheriting component from React Component


    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer} >
                <img style={styles.cart} src="https://img.icons8.com/ios/344/shopping-cart.png" alt="cart" />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )

}

const styles = {
    cart: {
        height: 36,
        margin: 20
    },
    nav: {
        height: 60,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderTop: '10px solid #4267b2'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '7px 10px',
        position: 'absolute',
        right: 0,
        top: -9

    }

}

export default Navbar;
