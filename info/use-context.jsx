import React, { createContext, useContext } from "react";

const MyContext = createContext(null);

export const LearnContext = ({ onAdd, onDelete, onEdit }) => {
  const handleAdd = (id) => {
    onAdd(id);
  };
  const handleDelete = (id) => {
    onDelete(id);
  };
  const handleEdit = (id) => {
    onEdit(id);
  };
  return (
    <MyContext.Provider
      value={{
        name: "",
        id: "",
        onEdit: handleEdit,
        onDelete: handleDelete,
        onAdd: handleAdd,
      }}
    >
      <Chart />
    </MyContext.Provider>
  );
};

const Chart = () => {
  const { name, id, onEdit, onDelete, onAdd } = useContext(MyContext);
  return (
    <>
      <div key={id} onClick={() => onEdit()}>
        {name}
      </div>
      <div key={id} onClick={() => onDelete()}>
        {name}
      </div>
      <div key={id} onClick={() => onAdd()}>
        {name}
      </div>
    </>
  );
};
