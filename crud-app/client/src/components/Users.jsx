import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clientBaseURL, clientEndPoints } from "../config";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await clientBaseURL.get(clientEndPoints.users);
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // hanlde editing of user information

  const handleEdit = (slug) => {
    navigate(`/update-user/${slug}`);
  };

  if (loading) {
    return <div className="text-center">Loading users...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  const handleDelete = async (id) => {
    try {
      await clientBaseURL.delete(`${clientEndPoints.deleteUser}/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.log(err);
    }
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
          {users.map((user) => (
            <tr
              key={user._id}
              className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
            >
              <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                {user.name}
              </td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.age}</td>
              <td className="px-6 py-4">
                <button
                  className="px-2 py-1 bg-green-400 text-white mx-1 cursor-pointer rounded-sm"
                  onClick={() => handleEdit(user.slug)}
                >
                  Edit
                </button>
                <button
                  className="px-2 py-1 bg-red-400 text-white mx-1 cursor-pointer rounded-sm"
                  onClick={(e) => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className="px-6 py-4 text-center">
              <Link to="/create-user">
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
