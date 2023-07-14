import { useState } from "react";
import User from "./User";

const StateExample = () => {
  const [users, setUsers] = useState([
    { firstName: "John", lastName: "Dear" },
    { firstName: "Bob", lastName: "Ross" },
    { firstName: "Bill", lastName: "Hitchcock" },
  ]);

  const deleteUser = (index) => {
    users.splice(index, 1);
    setUsers([...users]);
  };

  return (
    <div className="state-example">
      {users.map((user, index) => {
        return (
          <User
            firstName={user.firstName}
            lastName={user.lastName}
            deleteUser={deleteUser}
            index={index}
            key={user.firstName}
          />
        );
      })}
    </div>
  );
};

export default StateExample;
