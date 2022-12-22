import { useState, useEffect } from 'react';
import * as getCastAPI from 'services/movies-api';
import css from './Cast.module.css';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCastAPI.getMovieCast(movieId).then(setCast);
  }, [movieId]);
  return (
    <div className={css.cast_thumb}>
      <hr />
      {!cast ||
        (cast.length === 0 ? (
          <p>We don't have a cast for this movie</p>
        ) : (
          cast.map(e => {
            return (
              <div key={e.castId}>
                {e.castMemberPhoto.includes('w500/null') ? (
                  <div></div>
                ) : (
                  <img
                    src={e.castMemberPhoto}
                    alt={e.name}
                    className={css.image}
                  />
                )}
                <h5>{e.name}</h5>
                <p>{e.character}</p>
              </div>
            );
          })
        ))}
    </div>
  );
}