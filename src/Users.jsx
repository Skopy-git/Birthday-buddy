const Users = (user) => {
  return (
    <article className="person">
      <img src={user.image} alt="Error loading" className="img" />
      <div>
        <h4>{user.name}</h4>
        <p>{user.age} years</p>
      </div>
    </article>
  );
};
export default Users;
