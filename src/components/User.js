import React from "react";
import { useParams } from "react-router-dom";

const User = ({ users }) => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>; // In case the user ID doesn't exist
  }

  return (
    <div>
      <h2>{user.name}</h2> {/* Display the user's name */}
      <p>Name: {user.name}</p> {/* Match the expected content */}
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default User;
