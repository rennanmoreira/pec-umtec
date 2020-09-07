import API from './index.services'

export const getActivities = () => API.get('activities')

export const getActivityById = activityId => API.get(`activities/${activityId}`)

export const getCardsInActivityById = activityId => API.get(`activities/${activityId}/cards`)