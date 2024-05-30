import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.ts";
import "./index.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Tooltip } from "react-bootstrap";

interface UserActivityProps {}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const UserActivity: React.FC<UserActivityProps> = () => {
  const { id } = useParams();
  console.log(`User ID from URL: ${id}`);

  const user = data.USER_MAIN_DATA.find(
    (user) => user.id === parseInt(id ?? "")
  );
  const activity = data.USER_ACTIVITY.find(
    (user) => user.userId === parseInt(id ?? "")
  );
  console.log(user, activity, 'test');
  const userName = user ? user.userInfos.firstName : "Utilisateur non trouvé";
  const newData = activity?.sessions.map((session) => {
      return {
        name: session.calories,
        uv: session.calories,
        pv: session.kilogram,
        amt: session.calories,
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
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={newData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="pv" barSize={20} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserActivity;
