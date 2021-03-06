import React, { Component } from 'react';
import { createSelector } from 'reselect';

import './simple-to-do.css';

const shopItemsSelector = stateSelector => stateSelector;
let count = 0;

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => {
    console.log("calcultated")
    return items.reduce((acc, item) => acc + item.value, 0)
  }
)


export default class SimpeToDo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shop: {
        taxPercent: 8,
        items: [
          { name: 'apple', value: 1.20 },
          { name: 'orange', value: 0.95 },
        ]
      },
      firstInput: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  renderItems(items) {
    return items.map(({name, value}, index) => (
      <div key={index}>Name: {name} | Value: {value}</div>
    ))
  }

  handleChange = (ev) => {
    ev.preventDefault();

    this.setState({
      firstInput: ev.target.value
    })
  }

  render() {
    const { shop } = this.state;
    const {
      items,
    } = shop;
    console.log("render APP")
    return (
      <div>
        <h1 className="SimpeToDo-Title">SimpeToDo</h1>
        <p>Items from shop:</p>
        {this.renderItems(items)}
        <div className="SimpeToDo-Adding">
          <input type="text" onChange={this.handleChange} />
          <p>Add item in shop: (only number!!)</p>
          <input type="number" onChange={ev => {

            let newState = this.state;
            newState.shop.items = items.concat([{
                name: `newItem${count++}`,
                value: ev.target.value
              }])

            this.setState({
              ...newState
            })
          }} />
        </div>
        <hr />
        <p>subtotalSelector:</p>
        {subtotalSelector(items)}
        <hr />
        <hr />
        <p>App state:</p>
        <div>
          {
            JSON.stringify(this.state)
          }
        </div>
      </div>
    )
  }
}
