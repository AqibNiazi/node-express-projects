import axios from "axios";
//  Local
// const websiteBaseURL = "http://localhost:3000";

// Staging
const websiteBaseURL = "https://crud-app-backend-delta.vercel.app";

const clientBaseURL = axios.create({
  baseURL: websiteBaseURL,
});

const clientEndPoints = {
  ////////////////Website Static Centent////////////////
  users: "/users",
  getUser: "/user",
  ////////////////Homepage////////////
  createUser: "/create-user",
  updateUser: "/update-user",
  deleteUser: "/delete-user",
  ///////////////////Authentication/////////
};

export { clientBaseURL, clientEndPoints };
