import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "./User";

const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", age: 28 },
];

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching user data from API
  useEffect(() => {
    setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 1000); // Simulated API delay
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <Router>
      <div>
        <h1>User List</h1> {/* Ensure this h1 is present for the test */}
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link> {/* User links */}
            </li>
          ))}
        </ul>

        <Routes>
          <Route
            path="/user/:id"
            element={<User users={users} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
