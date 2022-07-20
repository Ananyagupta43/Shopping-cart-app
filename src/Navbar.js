import React from 'react';

const Navbar=(props)=> {  // inheriting component from React Component

    
        return (
            <div style={styles.nav}>
              <div style={styles.cartIconContainer} >
              <img style={styles.cart} src="https://cdn-icons.flaticon.com/png/512/649/premium/649931.png?token=exp=1658221043~hmac=0d36aedce4fb511c2a0c049f741d2f3c" alt="cart"/>
              <span style={styles.cartCount}>{props.count}</span>
                </div> 
            </div>
        )
   
}

const styles = {
   cart:{
   height:36,
   margin:20
   },
   nav:{
    height:60,
    background:'#4267b2',
   display:'flex',
   justifyContent:'flex-end',
   alignItems:'center',
   borderTop:'10px solid #4267b2'
   },
   cartIconContainer:{
   position : 'relative'
   },
   cartCount:{
    background:'yellow',
    borderRadius:'50%',
    padding:'7px 10px',
    position:'absolute',
    right:0,
    top:-9

   }

}

export default Navbar;
