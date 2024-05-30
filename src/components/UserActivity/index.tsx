import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.ts";
import "./index.css";
import Chart from "../Chart/index.tsx";


interface UserActivityProps {}

const UserActivity: React.FC<UserActivityProps> = () => {
  const { id } = useParams();

  const user = data.USER_MAIN_DATA.find(
    (user) => user.id === parseInt(id ?? "")
  );
  const activity = data.USER_ACTIVITY.find(
    (user) => user.userId === parseInt(id ?? "")
  );
  const userName = user ? user.userInfos.firstName : "Utilisateur non trouvé";
  const newData = activity?.sessions.map((session) => {
      return {
        day: session.day,
        calories: session.calories,
        kilogram: session.kilogram
      };
    });

  return (
    <div className="user p-5">
      <h2 className="user-name font-semibold text-2xl">
        Bonjour <span className="firstname text-red-500">{userName}</span>
      </h2>
      <span className="congrats">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </span>
      <div>
        <Chart dataChart={newData} />
      </div>
    </div>
  );
};

export default UserActivity;
