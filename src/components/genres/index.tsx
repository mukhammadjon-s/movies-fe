import styles from './genres.module.css';

export type GenresProps = {
  genres: Array<string>;
  activeGenre: string;
  setGenre: (genre: string) => void;
};

export function Genres({ genres, activeGenre, setGenre }: GenresProps) {
  const handleClick = (genre: string) => {
    setGenre(genre);
  };
  
  return (
    <ul className={styles['genre-list']}>
      {genres.map((genre, index) => (
        <li
          key={index}
          className={activeGenre === genre ? styles['active'] : ''}
          onClick={() => handleClick(genre)}
        >
          {genre}
        </li>
      ))}
    </ul>
  );
}
