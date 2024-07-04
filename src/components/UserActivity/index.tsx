import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import Chart from "../Chart/MainChart.tsx";
import Category from "../Categories/index.tsx";
import EnergyIcon from "../../assets/img/energy.svg";
import ChickenIcon from "../../assets/img/chicken.svg";
import AppleIcon from "../../assets/img/apple.svg";
import CheeseburgerIcon from "../../assets/img/cheeseburger.svg";
import StatChart from "../Chart/StatChart.tsx";
import AverageChart from "../Chart/AverageChart.tsx";
import TodayScore from "../Chart/TodayScore.tsx";
import { mockUserActivity, mockUserAverageSession, mockUserMainData, mockUserPerformance } from "../../services/user_mock.service.ts";
import { getUser, getUserActivities, getUserPerformance, getUserSession } from "../../services/user.service.ts";

interface UserActivityProps {}

const UserActivity: React.FC<UserActivityProps> = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userSession, setUserSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isMock = false;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = isMock ? mockUserMainData(id) : await getUser(id);
        const activity = isMock ? mockUserActivity(id) : await getUserActivities(id);
        const performance = isMock ? mockUserPerformance(id) : await getUserPerformance(id);
        const session = isMock ? mockUserAverageSession(id) : await getUserSession(id);

        setUserData(user.data);
        setUserActivity(activity.data);
        setUserPerformance(performance.data);
        setUserSession(session.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, isMock]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const userName = userData ? userData.userInfos.firstName : "Utilisateur non trouvé";
  const newData = userActivity?.sessions.map((session) => {
    return {
      day: session.day,
      calories: session.calories,
      kilogram: session.kilogram
    };
  });

  console.log(userData)

  return (
    <div className="user p-5 w-full">
      <h2 className="user-name font-semibold text-4xl mb-5">
        Bonjour <span className="firstname text-red-500">{userName}</span>
      </h2>
      <span className="congrats font-bold">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </span>
      <div className="flex">
        <div className="w-3/4 mt-5">
          <div>
            <span className="font-bold absolute">Activité quotidienne</span>
            <Chart dataChart={newData} />
          </div>
          <div className="flex">
            <div className="w-1/3 h-[300px]">
              <AverageChart dataChart={userSession} lang="fr" />
            </div>
            <div className="w-1/3 h-32">
              <StatChart dataChart={userPerformance} lang="fr" />
            </div>
            <div className="w-1/3 h-32">
              <TodayScore dataChart={userData?.score} lang="fr" />
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-32 h-full">
          <Category
            category={userData?.keyData.calorieCount}
            icon={EnergyIcon}
            label="Calories"
            unit="kCal"
            color="#FBEAEA"
          />
          <Category
            category={userData?.keyData.carbohydrateCount}
            icon={ChickenIcon}
            label="Glucides"
            unit="g"
            color="#4AB8FF1A"
          />
          <Category
            category={userData?.keyData.lipidCount}
            icon={AppleIcon}
            label="Lipides"
            unit="g"
            color="#FAF6E5"
          />
          <Category
            category={userData?.keyData.proteinCount}
            icon={CheeseburgerIcon}
            label="Protéines"
            unit="g"
            color="#FD51811A"
          />
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
