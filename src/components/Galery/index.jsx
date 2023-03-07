import React, { useEffect, useState } from 'react'
import { createApi } from 'unsplash-js'
import { accessKey } from '../../config/apiKeys'
import { PhotoComp } from './PhotoComp';
import './styles.scss'

const api = createApi({
  accessKey: accessKey
})


const Galery = () => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: "star wars", orientation: "landscape" })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);
  (console.log(data))
  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <div className="galery">
        <h2 className="galery__title">You`re images</h2>
        <ul className="galery__container">
          {data.response.results.map(photo => (
            <li key={photo.id} className="galery__item">
              <PhotoComp photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Galery