import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],  // simple plain js objecdt
      loading:true,

    }
    //thisincreaseQuantity=this.increaseQuantity.bind(this)
  }

  componentDidMount(){
  //  firebase
  //  .firestore()
  //   .collection('product')
  //   .get()
  //   .then((snapshot)=>{
  //  // console.log(snapshot);
  //     snapshot.docs.map((doc)=>{
  //      // console.log(doc.data());
  //     });
  //     const product=snapshot.docs.map((doc)=>{
  //       const data =doc.data();
  //       data['id']=doc.id; // we have made this id key in our data returned from firebase and its value is doc.id (generated by firebase)
  //       return data;
  //     //  return doc.data();
  //     })
  //     this.setState({
  //       product:product,
  //       loading:false
  //     })
  //   })

  firebase
   .firestore()
    .collection('product')
   // .where('price','==',2000)
    //.where('title','==','Crop Top')
   // .orderBy('title')
    .onSnapshot((snapshot)=>{
      // console.log(snapshot);
        //  snapshot.docs.map((doc)=>{
        //   // console.log(doc.data());
        //  });
         const product=snapshot.docs.map((doc)=>{
           const data =doc.data();
           data['id']=doc.id; // we have made this id key in our data returned from firebase and its value is doc.id (generated by firebase)
           return data;
         //  return doc.data();
         })
         this.setState({
           product:product,
           loading:false
         })
       })
   
  }



  handleIncrease = (item) => {
    const { product } = this.state;   //upar jis name se array bnaya hai woh aur ye name must be same
    const index = product.indexOf(item);

    //console.log(products);
    // product[index].qty += 1;
    // //console.log(product[index]);

    // this.setState({
    //   product: product
    // })

    const docRef=firebase.firestore().collection('product').doc(product[index].id);
     docRef.update({
    qty:product[index].qty +1
     }).then(()=>{
      console.log('updated doc')     // here we are not using setState because we have used snapshot which is a listener so when quantity 
                                     //will get increased in firebase it will call snapshot and will be shown on ui 
     }).catch((error)=>{
      console.log('error doc '+error)
     })
  }

  handleDecrease = (item1) => {
    const { product } = this.state;
    //console.log(item1);
    const index = product.indexOf(item1);
    const docRef=firebase.firestore().collection('product').doc(product[index].id);

    if (product[index].qty == 0) {
     // product[index].qty = 0
     docRef.update({
      qty:0
       }).then(()=>{
        console.log('updated doc')     // here we are not using setState because we have used snapshot which is a listener so when quantity                                      //will get increased in firebase it will call snapshot and will be shown on ui 
       }).catch((error)=>{
        console.log('error doc '+error)
       })
    } else {
      //product[index].qty -= 1;
      docRef.update({
        qty:product[index].qty-1
         }).then(()=>{
          console.log('updated doc')     // here we are not using setState because we have used snapshot which is a listener so when quantity 
                                         //will get increased in firebase it will call snapshot and will be shown on ui 
         }).catch((error)=>{
          console.log('error doc '+error)
         })
    }

    // this.setState({
    //   product: product
    // })
  }

  handleDelete = (id) => {
    const { product } = this.state;
    // const item = product.filter((item) => item.id !== id)
    // this.setState({
    //   product: item
    // })

    const docRef=firebase.firestore().collection('product').doc(id);  // we are passing unique id of doc
    docRef.delete()
    .then(()=>{
      console.log("deleted");
    }).catch((error)=>{
      console.log("error");
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

  // addProduct=()=>{
  //     firebase
  //     .firestore()
  //     .collection('product')
  //     .add({
  //       img:"https://images.unsplash.com/photo-1606311698062-21c4f57cb27f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80",
  //       title:"Harry Potter Books Collection",
  //       price:7000,
  //       qty:7
  //     }).then((docRef)=>{
  //       console.log(docRef + "product has been added");
  //     }).catch((error)=>{
  //       console.log(error);
  //     })
  // }
  render() {
    const { product,loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} className="button-add">Add To firebase</button> */}
        <h1> Shopping Cart</h1>
        <Cart
          product={product}
          increaseQuantity={this.handleIncrease}
          decreaseQuantity={this.handleDecrease}
          deleteProduct={this.handleDelete} />
          {loading && <h1>Loading Products.....</h1>}    {/*this is conditional rendering i.e.if loading is true then heading will be shown.In react the element present after && will be shown on the screen*/}
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
