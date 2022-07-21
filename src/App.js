import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';
import * as firebase from 'firebase/compat/app';
import 'firebase/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: []  // simple plain js objecdt
    

    }
    //thisincreaseQuantity=this.increaseQuantity.bind(this)
  }

  componentDidMount(){
   firebase
   .firestore()
    .collection('product')
    .get()
    .then((snapshot)=>{
    console.log(snapshot);
    })
  }

  handleIncrease = (item) => {
    const { product } = this.state;   //upar jis name se array bnaya hai woh aur ye name must be same
    const index = product.indexOf(item);

    //console.log(products);
    product[index].qty += 1;
    //console.log(product[index]);

    this.setState({
      product: product
    })

  }

  handleDecrease = (item1) => {
    const { product } = this.state;
    //console.log(item1);
    const index = product.indexOf(item1);
    if (product[index].qty == 0) {
      product[index].qty = 0
    } else {
      product[index].qty -= 1;
    }

    this.setState({
      product: product
    })
  }

  handleDelete = (id) => {
    const { product } = this.state;
    const item = product.filter((item) => item.id !== id)
    this.setState({
      product: item
    })

  }

  getCartCount = () => {
    const { product } = this.state;
    let count = 0;
    product.forEach((product) => {
      count += product.qty;
    })
    return count;
  }

  getTotal = () => {
    const { product } = this.state;
    let total = 0;
    product.forEach((product) => {
      total += product.qty * product.price;
    })
    return total;
  }
  render() {
    const { product } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <h1> Shopping Cart</h1>
        <Cart
          product={product}
          increaseQuantity={this.handleIncrease}
          decreaseQuantity={this.handleDecrease}
          deleteProduct={this.handleDelete} />
        <div style={styles.total}>Total: {this.getTotal()}</div>
      </div>
    );
  }
}

const styles = {
  total: {
    fontSize: 22,
    fontWeight: 500,
    textAlign: "end",
    backgroundColor: "rgb(66, 103, 178)",
    paddingRight: 20,

  }
}

export default App;
