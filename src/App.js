import React from 'react'
import Header from ".\Components\Header.js"
import Footer from ".\Components\Footer.js"
import Items from ".\Components\Items,js"

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
  items:[
    {
    id: 1,  
    title: 'Стул',
    img: 'cnek.webpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    category: 'chairs',
    price: 49.99
},
{
id: 2,
title: 'Стол',
img: 'cnjk.webp',
desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
category: 'tables',
price: '149.99'
},
{
  id: 3,
  title: 'лампа',
  img: 'kfvgf.webp',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  category: 'lamp',
  price: '29.99'
  },
  {
    id: 4,
    title: 'кровать',
    img: 'rhjdfnm.webp',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    category: 'bed',
    price: '999.99'
    },
    ]
}
this.addToOrder=this.addToOrder.bind(this)
this.deleteOrder=this.addToOrder.bind(this)
  }
render(){
  return (
    <div className="wrapper">
    <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
    <Items items={this.state.items} onAdd={this.addToOrder}/>
    <Footer/>
    </div>
  );
  }

  deleteOrder(id){
this.setState({orders:this.state.orders.filter(el => el.id !==id)})
  }
  addToOrder(item){
      let isInArray = false
      this.state.orders.forEach(el=> {
      if(el.id === item.id)
      isInArray = true
      })
      
      if(!isInArray)
      
      this.setState({ orders: [...this.state.orders, item] })
  }
}  
export default App;
