import React from "react";
import { useParams } from "react-router-dom";

const User = ({ users }) => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>; // Handle invalid user
  }

  return (
    <div>
      <h2>{user.name}</h2> {/* Display user's name */}
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p> {/* Add username as expected by the test */}
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default User;
