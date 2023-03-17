import React, { useContext, useEffect, useState } from 'react'
import { createApi } from 'unsplash-js'
import { accessKey } from '../../config/apiKeys'
import { SearchContext } from '../../context/SearchContext';
import { PhotoComp } from './PhotoComp';
import Loading from '../Loading';
import './styles.scss'
import Pages from '../Pages';

const api = createApi({
  accessKey: accessKey
})

const Galery = () => {
  const [data, setPhotosResponse] = useState(null);
  const { history, orientation, page, setPage, isLoading, setIsLoading } = useContext(SearchContext)
  let ask = history[history.length - 1]




  useEffect(() => {
    setIsLoading(true)
    api.search
      .getPhotos({ query: ask || "star wars", orientation: orientation, page: page })
      .then(result => {
        setPhotosResponse(result);
        setIsLoading(false)
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [history, ask, orientation, page]);
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
        <h2 className="galery__title">{ask || 'You`re images'}</h2>
        <Pages lastPage={data.response.total_pages} />
        {
          isLoading ? '' :
            <span className="galery__error">No image found</span>
        }
        <ul className="galery__container">
          { }
          {isLoading
            ?
            <Loading />
            :
            data.response.results.map(photo => (
              <li key={photo.id} className="galery__item">
                <PhotoComp photo={photo} />
              </li>
            ))}
        </ul>
        <Pages data={data.response.total_pages} />
      </div>
    );
  }
};

export default Galery