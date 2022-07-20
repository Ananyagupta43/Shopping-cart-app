import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [{
        price: 1000,
        title: 'Crop Top',
        qty: 1,
        img: "https://images-na.ssl-images-amazon.com/images/I/51Vm8Z761qL.jpg",
        id: 1,
      },
      {
        price: 10000,
        title: 'Study Table',
        qty: 2,
        img: "https://www.lapanddado.com/wp-content/uploads/2020/08/Lap-and-Dado-Fuji-Teakwood-Study-table-1.jpg",
        id: 2,
      }, {
        price: 300,
        title: "Korean 2X Spicy Ramen",
        qty: 2,
        img: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pLmViYXlpbWcuY29tL2ltYWdlcy9nLy1nVUFBT1N3N1hCZ2RHdTkvcy1sNTAwLmpwZw.jpg",
        id: 3
      }, {
        price: 5000,
        title: "Smart Watch",
        qty: 1,
        img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        id: 4,

      }]  // simple plain js objecdt


    }
    //thisincreaseQuantity=this.increaseQuantity.bind(this)
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
