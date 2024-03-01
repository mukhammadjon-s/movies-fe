import { Genres } from '../genres';
// import genres from '';
import styles from './movie-list.module.css';
import { genres } from './genres.json';
import { useState } from 'react';

export function MovieList() {
  const [activeGenre, setActiveGenre] = useState('all');
  return (
    <div className={styles['movie-list']}>
      <Genres
        genres={genres}
        activeGenre={activeGenre}
        setGenre={setActiveGenre}
      />
    </div>
  );
}
