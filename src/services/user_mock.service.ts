import data from '../data'

export const mockUserMainData = (id: string) => {
    return data.USER_MAIN_DATA.find(
        (user) => user.id === parseInt(id ?? "")
    )
}
export const mockUserActivity = (id: string) => {
    return data.USER_ACTIVITY.find(
        (user) => user.userId === parseInt(id ?? "")
      )
}
export const mockUserPerformance = (id: string) => {
    return data.USER_PERFORMANCE.find(
        (user) => user.userId === parseInt(id ?? "")
    )
}
export const mockUserAverageSession = (id: string) => {
    return data.USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === parseInt(id ?? "")
    )
}