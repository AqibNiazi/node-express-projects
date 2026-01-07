import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { clientBaseURL, clientEndPoints } from "../config";

const UpdateUsers = () => {
  const { slug } = useParams();

  const navigate = useNavigate();

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false,
  });
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
  });

  // fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await clientBaseURL.get(
          `${clientEndPoints.getUser}/${slug}`
        );
        setUser({
          id: response.data._id,
          name: response.data.name,
          email: response.data.email,
          age: response.data.age,
        });
      } catch (err) {
        setStatus({ loading: false, error: err.message, success: false });
      }
    };
    fetchUser();
  }, [slug]);

  // Generic change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      await clientBaseURL.put(`${clientEndPoints.updateUser}/${user?.id}`, {
        name: user.name,
        email: user.email,
        age: user.age,
      });
      setStatus({ loading: false, error: null, success: true });
      navigate("/users");
    } catch (err) {
      setStatus({ loading: false, error: err.message, success: false });
    }
  };

  return (
    <form
      className="w-full max-w-sm mx-auto h-screen flex flex-col justify-center"
      onSubmit={handleUpdate}
    >
      <h2 className="mb-4 text-center text-2xl font-semibold">Update User</h2>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={user?.name}
          onChange={handleChange}
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="John Doe"
          required=""
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user?.email}
          onChange={handleChange}
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="name@flowbite.com"
          required=""
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="age"
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          Age
        </label>
        <input
          type="text"
          id="age"
          name="age"
          value={user?.age}
          onChange={handleChange}
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="24"
          required=""
        />
      </div>

      <button
        type="submit"
        disabled={status.loading}
        className="text-white bg-green-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        {status.loading ? "Updating..." : "Update"}
      </button>
      {status.error && (
        <p className="mt-4 text-red-500 text-sm">{status.error}</p>
      )}
      {status.success && (
        <p className="mt-4 text-green-500 text-sm">
          User Updated successfully!
        </p>
      )}
    </form>
  );
};

export default UpdateUsers;
