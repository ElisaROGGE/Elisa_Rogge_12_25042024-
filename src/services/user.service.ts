import {fetchUserData} from '../utils/fetch'

interface IUserInfos {
    firstName: string;
    lastName: string;
    age: number;
  }
  
  interface IKeyData {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  }
  
  export interface IUser {
    id: number;
    userInfos: IUserInfos;
    score?: number;
    todayScore?: number;
    keyData: IKeyData;
  }
  interface ISession {
    day: string;
    kilogram: number;
    calories: number;
  }
  
  export interface IUserActivity {
    userId: number;
    sessions: ISession[];
  }

  export interface IAverageSession {
    day: number;
    sessionLength: number;
  }
  
  export interface IUserSessions {
    userId: number;
    sessions: IAverageSession[];
  }
  interface IKind {
    [key: number]: string;
  }
  
  interface IData {
    value: number;
    kind: number;
  }
  
  export interface IUserPerformance {
    userId: number;
    kind: IKind;
    data: IData[];
  }

export const getUser = (userId: number) => fetchUserData(`http://localhost:3000/user/${userId}`)
export const getUserActivities = (userId: number) => fetchUserData(`http://localhost:3000/user/${userId}/activity`)
export const getUserSession = (userId: number) => fetchUserData(`http://localhost:3000/user/${userId}/average-sessions`)
export const getUserPerformance = (userId: number) => fetchUserData(`http://localhost:3000/user/${userId}/performance`)