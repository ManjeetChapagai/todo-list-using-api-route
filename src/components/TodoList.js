import React, { useState, useEffect } from "react";
//import { axios } from "../Api/axios";
import { Link } from "react-router-dom";
import axios from "axios";

export const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    getTodo();
  }, [start]);

  //   const getTodo = async () => {
  //     const response = await axios.get('/todos?_start=0&_limit=10');
  //     console.log(response.data);
  //     setTodo(response.data);
  //   };
  const getTodo = async () => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos?",
      params: {
        _start: start,
        _limit: 10,
      },
    }).then((response) => {
      setTodo(response.data);
    });
  };

  const handleClick = () => {
    setStart(start + 10);
  };

  return (
    <>
      <div className="todo-list">
        <h1>Todo List</h1>
        {todo.map(({ title, id }) => (
          <ul key={id}>
            <div>
              <Link to={`/todolist/${id}`}>
                <li>
                  {id}. <strong>Task Title:</strong> {title}
                </li>
              </Link>
            </div>
          </ul>
        ))}
      </div>
      <button className="but" onClick={handleClick}>
        Load more
      </button>
    </>
  );
};
