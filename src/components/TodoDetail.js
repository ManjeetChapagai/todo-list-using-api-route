//This works like restaurantDetai
import React, { useState, useEffect } from "react";
import { axios } from "../Api/axios";
import { useParams } from "react-router-dom";

export const TodoDetail = () => {
  const [detail, setDetail] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const response = await axios.get(`/todos/${id}`);
    console.log(response.data);
    setDetail(response.data);
  };

  return (
    <div>
      {Object.keys({ detail }).length > 0 ? (
        <div className="todo-detail">
          <h1>Todo List Number: {detail.id}</h1>

          <ul>
            <li>
              <strong>Author:</strong> {detail.userId}
            </li>
            <li>
              <strong>Title:</strong> {detail.title}
            </li>
            <li>
              <strong>Status:</strong> {detail.completed ? "✅" : "❌"}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
