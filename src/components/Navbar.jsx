import React from "react";

const Navbar = () => {
  return (
    <div className="border-2 border-gray-800 text-lg  mt-6 rounded-lg w-3/4 mx-auto flex justify-between p-2">
      <span className="text-gray-500">Egide Tuyishime</span>
      <span className="text-gray-500 ">
        <span className="mx-4">About</span>
        <span className="mx-4">Skills</span>
        <span className="mx-4">Contacts</span>
      </span>
    </div>
  );
};

export default Navbar;
