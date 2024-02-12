import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";

function ViewTodos() {
  const navigate = useNavigate();

  const [dataSource, setDataSource] = useState([]);
  const columns = [
   
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Title",
      dataIndex: "Title",
      key: "title",
    },

   /* {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    */
    {
      title: "FirstName",
      dataIndex: "FirstName",
      key: "firstName",
    },
    {
      title: "SecondName",
      dataIndex: "SecondName",
      key: "SecondName",
    },
    {
      title: "Surname",
      dataIndex: "Surname",
      key: "Surname",
    },
    {
      title: "Salary",
      dataIndex: "Salary",
      key: "Salary",
    },
    {
      title: "Department",
      dataIndex: "Department",
      key: "Department",
    },
   
  ];

  useEffect(() => {
    axios.get("http://localhost:8000/todos").then((e) => {
        console.log(e)
      setDataSource(e.data);
    });
  }, []);

  const goToToDoScreen = () => {
    navigate("/add-todo");
  };

  return (
    <div>
      <Button onClick={() => goToToDoScreen()}>Add ToDO</Button>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default ViewTodos;
