import { useState, useEffect } from "react";
import { getUsers } from "../utils/API";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Users</h2>
      <ul className="users">
        {users.map((user) => (
          <li key={user.name} className="individualUser">
            <img
              src={user.avatar_url}
              alt={user.title}
              className="review_image"
            />
            <p>
              <strong>Username: </strong> {user.username}
            </p>
            <p>
              <strong>Name: </strong>
              {user.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
