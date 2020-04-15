export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const ADD_FEATURE = 'ADD_REMOVE'

export const removeFeatureAction = feature => {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}

export const addFeatureAction = feature => {
    return({
        type: ADD_FEATURE,
        payload: feature
    })
}