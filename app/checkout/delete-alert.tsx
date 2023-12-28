import React from "react";

const DeleteAlert = ({ onDeleteOK }: any) => {
  const handleDelete = (val: boolean) => {
    onDeleteOK(val);
  };

  return (
    <div className="bg-white shadow-md p-3">
      <h1 className="text-sm">DELETE PRODUCT</h1>
      <h5 className="text-xs">Are you sure you want to delete this product?</h5>

      <div className="flex my-5">
        <div className="flex-none w-20 h-20 bg-[url('/images/sample1.jpg')] bg-cover  mr-3 "></div>
        <div className="flex flex-col justify-between">
          <p className="text-sm">Arabella Shirt - White</p>
          <span className="text-xs">Rp. 320.000</span>
        </div>
      </div>
      <button
        type="button"
        className="w-full bg-[#B0A695] text-xs py-1 mb-2 tracking-widest font-medium"
        onClick={() => handleDelete(true)}
      >
        DELETE
      </button>
      <button
        type="button"
        className="w-full text-xs py-1 border-[1px] border-[#B0A695] tracking-widest font-medium"
        onClick={() => handleDelete(false)}
      >
        CANCEL
      </button>
    </div>
  );
};

export default DeleteAlert;
