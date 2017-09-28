import {id} from '../token';

export const setImages = images => ({
  type: "SET_IMAGES",
  payload: images
});

const myInit = {
  method: 'GET',
  headers: {
    Authorization: 'Client-ID ' + id
  }
}

export const fetchImages = (query) => (
  (dispatch, getState) => (
    fetch(`https://api.unsplash.com/search/photos/?query=${query}`, myInit)
      .then(r => r.json())
        .then(results => {
          dispatch(setImages(results.results.map(result => result.urls.raw)));
        })
    )
);
