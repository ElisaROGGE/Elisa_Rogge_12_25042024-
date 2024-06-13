import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.ts";
import "./index.css";
import Chart from "../Chart/MainChart.tsx";
import Category from "../Categories/index.tsx";
import EnergyIcon from "../../assets/img/energy.svg";
import ChickenIcon from "../../assets/img/chicken.svg";
import AppleIcon from "../../assets/img/apple.svg";
import CheeseburgerIcon from "../../assets/img/cheeseburger.svg";
import StatChart from "../Chart/StatChart.tsx";


interface UserActivityProps {}

const UserActivity: React.FC<UserActivityProps> = () => {
  const { id } = useParams();

  const user = data.USER_MAIN_DATA.find(
    (user) => user.id === parseInt(id ?? "")
  );
  const activity = data.USER_ACTIVITY.find(
    (user) => user.userId === parseInt(id ?? "")
  );
  const mainData = data.USER_MAIN_DATA.find(
    (user) => user.id === parseInt(id ?? "")
  );
  const performance = data.USER_PERFORMANCE.find(
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
    <div className="user p-5 w-full">
      <h2 className="user-name font-semibold text-4xl mb-5">
        Bonjour <span className="firstname text-red-500">{userName}</span>
      </h2>
      <span className="congrats font-bold">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </span>
      <div className="flex ">
      <div className="w-3/4 mt-5">
        <div>
          <span className="font-bold absolute">Activité quotidienne</span>
          <Chart dataChart={newData} />
        </div>
        <div className="w-1/3 h-32">
          <StatChart dataChart={performance} lang="fr" />
        </div>
      </div>
      <div className="w-1/4 flex flex-col gap-32 h-full">
        
        <Category 
            category={mainData?.keyData.calorieCount} 
            icon={EnergyIcon} 
            label="Calories" 
            unit="kCal" 
            color="#FBEAEA"
          />
        <Category 
            category={mainData?.keyData.carbohydrateCount} 
            icon={ChickenIcon} 
            label="Glucides" 
            unit="g" 
            color="#4AB8FF1A"
          />
        <Category 
            category={mainData?.keyData.lipidCount} 
            icon={AppleIcon} 
            label="Lipides" 
            unit="g" 
            color="#FAF6E5"
          />
        <Category 
            category={mainData?.keyData.proteinCount} 
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
