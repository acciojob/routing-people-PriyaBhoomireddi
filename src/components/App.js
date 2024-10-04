import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "./User";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", age: 28 },
];

function App() {
  return (
    <Router>
      <div>
        <h1>Routing People</h1>
        <nav>
          {users.map((user) => (
            <Link key={user.id} to={`/user/${user.id}`}>
              {user.name}
            </Link>
          ))}
        </nav>
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
