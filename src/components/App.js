import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "./User";

// Update usersData with 'username'
const usersData = [
  { id: 1, name: "Leanne Graham", username: "Bret", email: "leanne@example.com", age: 30 },
  { id: 2, name: "Ervin Howell", username: "Antonette", email: "ervin@example.com", age: 25 },
  { id: 3, name: "Clementine Bauch", username: "Samantha", email: "clementine@example.com", age: 28 },
];

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers(usersData); // Simulating API fetch
      setLoading(false); // Stop loading state
    }, 1000); // Simulated API delay
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Ensure "Loading..." message is rendered
  }

  return (
    <Router>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link> {/* Ensure correct URL */}
            </li>
          ))}
        </ul>

        <Routes>
          <Route path="/users/:id" element={<User users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
