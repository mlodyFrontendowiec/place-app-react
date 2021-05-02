import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Pawel Kruszelnicki",
      image:
        "https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/67658303_1895587953920339_6898523470938767360_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=J7o-weONhKsAX938JaC&_nc_ht=scontent-frt3-1.xx&oh=892676ef957c11fc03de4fb5fa30a123&oe=60B3F448",
      places: 3,
    },
    {
      id: "u1",
      name: "Pawel Kruszelnicki",
      image:
        "https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/67658303_1895587953920339_6898523470938767360_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=J7o-weONhKsAX938JaC&_nc_ht=scontent-frt3-1.xx&oh=892676ef957c11fc03de4fb5fa30a123&oe=60B3F448",
      places: 3,
    },
    {
      id: "u1",
      name: "Pawel Kruszelnicki",
      image:
        "https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/67658303_1895587953920339_6898523470938767360_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=J7o-weONhKsAX938JaC&_nc_ht=scontent-frt3-1.xx&oh=892676ef957c11fc03de4fb5fa30a123&oe=60B3F448",
      places: 3,
    },
    {
      id: "u1",
      name: "Pawel Kruszelnicki",
      image:
        "https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/67658303_1895587953920339_6898523470938767360_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=J7o-weONhKsAX938JaC&_nc_ht=scontent-frt3-1.xx&oh=892676ef957c11fc03de4fb5fa30a123&oe=60B3F448",
      places: 3,
    },
  ];

  return (
    <h2>
      <UsersList items={USERS} />
    </h2>
  );
};

export default Users;
