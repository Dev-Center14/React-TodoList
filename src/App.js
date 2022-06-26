import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {

  const [inputList, setInputLiat] = useState('');

  const [items, setItems] = useState([])
  const itemEvent = (event) => {
    setInputLiat(event.target.value);
  }
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputLiat('')
  }



  const deleteTodo = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }


  return (

    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />

          <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li>{inputList} </li> */}
            {
              items.map((itemval, index) => {
                return <TodoList key={index} id={index} text={itemval} onSelect={deleteTodo} />
              })
            }
          </ol>
        </div>
      </div>
    </>

  );

};

export default App;