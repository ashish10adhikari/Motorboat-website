import React, { useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/package")
      .then((response) => response.json())
      .then((data) => setData(data.package)) // Correctly accessing "package" array
      .catch((error) => console.error("Error Fetching Data:", error));
  }, []);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <td>
                    <img
                      src={`http://127.0.0.1:8000/storage/${item.image}`}
                      alt={item.title}
                      width="100"
                    />
                  </td>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
