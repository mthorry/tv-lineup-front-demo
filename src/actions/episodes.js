import moment from 'moment'
import baseURL from '../services/url'
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.Jyd2FCw1ZqUY8_U6twONMGkWuQsQBsPo002ofynEyrQ'
const userId = 1

export function fetchedEpisodes(episodes) {
  return {
    type: "FETCHED_MY_EPISODES",
    payload: episodes
  }
}


function fetchingEpisodes() {
  return {
    type: "FETCHING_EPISODES"
  }
}

export function fetchedShowEpisodes(episodes) {
  return {
    type: "FETCHED_SHOW_EPISODES",
    payload: episodes
  }
}

export function addEpisode(episode) {
  return function (dispatch) {
    dispatch(fetchingEpisodes())
    return fetch(`${baseURL}/episodes`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        'body': episode
    })
      .then(res => res.json())
        .then((json) => {
          dispatch(fetchedEpisodes(json))
        })
  }
}

export function removeEpisode(id) {
  return function (dispatch) {
    dispatch(fetchingEpisodes())
    const body = id
    return fetch(`${baseURL}/${userId}/user_episodes`, {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        'body': body
    })
      .then(res => res.json())
        .then((json) => {
          dispatch(fetchedEpisodes(json))
        })
  }
}

export function fetchMyLineup(id) {
  return function(dispatch) {
    dispatch(fetchingEpisodes())
    fetch(`${baseURL}/${userId}/episodes`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchedEpisodes(json))
      })
  }
}

export function fetchShowEpisodes(id) {
  return function(dispatch) {
    dispatch(fetchingEpisodes())
    fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
      .then(res => res.json())
      .then(json => json.reverse())
        .then(json => {
          dispatch(fetchedShowEpisodes(json))
        })
  }
}
