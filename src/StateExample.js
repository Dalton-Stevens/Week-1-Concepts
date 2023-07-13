import { useState } from "react";
import User from "./User";

const StateExample = () => {
  const [users, setUsers] = useState([
    { firstName: "John", lastName: "Dear" },
    { firstName: "Bob", lastName: "Ross" },
    { firstName: "Bill", lastName: "Hitchcock" },
  ]);

  return (
    <div>
      {users.map((user) => {
        return <User firstName={user.firstName} lastName={user.lastName} />;
      })}
    </div>
  );
};

export default StateExample;
