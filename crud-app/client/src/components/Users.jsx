import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  const [user, setUser] = useState([
    { name: "Aqib", email: "aqibjaved520@gmailcom", age: 26 },
  ]);
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/update`);
  };
  return (
    <div className="w-fit mx-auto overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              Name
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Email
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Age
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
              <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                {user.name}
              </td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.age}</td>
              <td className="px-6 py-4">
                <button
                  className="px-2 py-1 bg-green-400 text-white mx-1 cursor-pointer rounded-sm"
                  onClick={handleEdit}
                >
                  Edit
                </button>
                <button className="px-2 py-1 bg-red-400 text-white mx-1 cursor-pointer rounded-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className="px-6 py-4 text-center">
              <Link to="/create">
                <button className="bg-green-500 px-2 py-1 text-white rounded-sm cursor-pointer">
                  Add New User
                </button>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Users;
