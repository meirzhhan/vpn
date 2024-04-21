import cl from "./Manager.module.scss";
import personsDb from "../../db/db.json";

const ManagerUsers = () => {
  const users = personsDb
    .filter((person) => person.role === "user")
    .sort((a, b) => a.username.localeCompare(b.username));

  return (
    <div className={cl.manager}>
      <div className={cl.user}>
        {users.map((item, index) => (
          <li className={cl.user__item} key={index}>
            {item.username}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ManagerUsers;
