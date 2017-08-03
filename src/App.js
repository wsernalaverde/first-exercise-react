import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Card  from './Card';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: []};
  }
  componentWillMount() {
    //const items =  this.loadFromLocalStorage().split(',');
    const items =  this.loadFromLocalStorage();
    this.setState({ items });
  }

  saveToLocalStorage(data) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem('data')) || [];
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { items } = this.state;

    const card = {
        inputImage: this.refs.itemImage.value,
        inputExcerpt: this.refs.itemExcerpt.value
    }

    items.push(card);
    this.setState({ items });
    this.saveToLocalStorage(items);
    this.refs.form.reset();
  }

  render() {
    const { items } = this.state;

   /*const cards = [{
      img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
      excerpt: 'name'
    },
    {
      img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
      excerpt: 'name'
    }]/*<List items={items} />*/

    return (
      <div className="container">
        <form ref="form" className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label className="" htmlFor="itemImage">Source image</label>
              <input ref="itemImage" className="form-control" id="itemImage" type="text"></input>
              <br />
              <label className="" htmlFor="itemExcerpt">Excerpt</label>
              <input ref="itemExcerpt" className="form-control" id="itemExcerpt" type="text"></input>
          </div>
          <button className="btn btn-primary">Add</button>
        </form>
        <Card items={items} />
      </div>
    );
  }
}

export default App;
