import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/package")
      .then((response) => response.json())
      .then((data) => setData(data.package))
      .catch((error) => console.error("Error Fetching Data:", error));
  }, []);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => row.image,
      cell: (row) => (
        <img
          src={`http://127.0.0.1:8000/storage/${row.image}`}
          alt={row.title}
          width="100"
        />
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button onClick={()=>handleEdit(row.id)}>Edit</button>
          <button onClick={()=>handleDelete(row.id)}>Delete</button>
        </>
      ),
    },
  ];
  return (
    <div>
      <h2>Package List</h2>
      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        pagination
        striped
      />
    </div>
  );
};

export default Table;
