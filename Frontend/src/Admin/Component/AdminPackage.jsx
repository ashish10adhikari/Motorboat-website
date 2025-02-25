import React from "react";

const AdminPackage = () => {
  return (
    <div className=" min-h-screen w-full">
      <div className="flex flex-col text-center">
        <h1 className="text-3xl font-secondary">Packages</h1>

        <form action="" className="flex flex-row w-full justify-center items-center">
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
          </div>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPackage;
