import {fetchUserData} from '../utils/fetch'

export const getUser = (userId: number) => fetchUserData(`http://localhost:3000/user/${userId}`)
export const getUserActivities = (userId: number) => fetchUserData(`http://localhost:3000/user/${userId}/activity`)
export const getUserSession = (userId: number) => fetchUserData(`http://localhost:3000/user/${userId}/average-sessions`)
export const getUserPerformance = (userId: number) => fetchUserData(`http://localhost:3000/user/${userId}/performance`)