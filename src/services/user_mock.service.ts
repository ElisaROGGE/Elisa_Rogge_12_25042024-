import data from '../data';

export const mockUserMainData = (id: string) => {
  const user = data.USER_MAIN_DATA.find(
    (user) => user.id === parseInt(id ?? "")
  );
  if (!user) {
    throw new Error("L'id est incorrect");
  }
  return user;
};

export const mockUserActivity = (id: string) => {
  const activity = data.USER_ACTIVITY.find(
    (user) => user.userId === parseInt(id ?? "")
  );
  if (!activity) {
    throw new Error("L'id est incorrect");
  }
  return activity;
};

export const mockUserPerformance = (id: string) => {
  const performance = data.USER_PERFORMANCE.find(
    (user) => user.userId === parseInt(id ?? "")
  );
  if (!performance) {
    throw new Error("L'id est incorrect");
  }
  return performance;
};

export const mockUserAverageSession = (id: string) => {
  const session = data.USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === parseInt(id ?? "")
  );
  if (!session) {
    throw new Error("L'id est incorrect");
  }
  return session;
};
