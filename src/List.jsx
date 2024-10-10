import Data from "./data";
import { useState } from "react";
import Users from "./Users";

const List = () => {
  const [users, setUsers] = useState(Data);

  //console.log(users);
  return (
    <main>
      <section className="container">
        <h3>{users.length} Birthdays Today</h3>
        {users.map((user) => {
          return <Users key={user.id} {...user} />;
        })}
        <button className="btn" onClick={() => setUsers([])}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default List;
