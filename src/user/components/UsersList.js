import React from "react";
import UsersItem from "./UserItem";

const UsersList = ({ items = [] }) => {
  const ListComponent =
    items.length === 0 ? (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    ) : (
      <ul>
        {items.map((user) => (
          <UsersItem key={user.id} {...user} />
        ))}
      </ul>
    );
  return <>{ListComponent}</>;
};

export default UsersList;
