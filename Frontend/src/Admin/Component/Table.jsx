import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Table = () => {
  const [data, setData] = useState([]);

  const handleDelete=(id)=>{
    if(window.confirm("Do you want to delete this package?")){
      fetch(`http://127.0.0.1:8000/api/package/delete/${id}`,{
        method: "DELETE",
      })
      .then((response)=> response.json())
      .then(()=> {alert('Package deleted successfully');})
      .catch((error)=> console.error('Error Deleting Package:', error))
    }
  }

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
        <button onClick={() => handleEdit(row.id)} className="bg-blue-500 text-white px-3 py-1 m-1 cursor-pointer hover:bg-blue-600">
          Edit
        </button>
        <button onClick={() => handleDelete(row.id)} className="bg-red-500 text-white px-3 py-1 m-1 cursor-pointer hover:bg-red-600">
          Delete
        </button>
      </>
      ),
    },
  ];
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold font-secondary">Package List</h2>
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
