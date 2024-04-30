import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItems from './components/ShowFullItems';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      showFullItems: false,
      fullItem: {},
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'tables',
          price: '149.59'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'sofa',
          price: '49.99'
        },
        {
          id: 4,
          title: 'Стул белый',
          img: 'chair-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'chairs',
          price: '59.99'
        },
        {
          id: 5,
          title: 'Светильник',
          img: 'wall-light.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'light',
          price: '59.99'
        },
      ]
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);

  }
  
  render() {
    return (
      <div className="wrapper">
       <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
       <Categories chooseCategory={this.chooseCategory}/>
       <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

       {this.state.showFullItems && <ShowFullItems onAdd={this.addToOrder} item={this.state.fullItem} onShowItem={this.onShowItem} />}
       <Footer/>
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItems: !this.state.showFullItems});
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({
        currentItems: this.state.items
      })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true
      }
    })
    if(!isInArray) {
      this.setState({orders: [...this.state.orders, item]});
    }
    
  }
  
}

export default App;
