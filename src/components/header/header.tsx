import { ChangeEvent } from 'react';
import styles from './header.module.css';

export interface SearchProps {
    search: string;
    onSearch: (value: string) => void
}

export function Header({ search, onSearch }: SearchProps) {

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(search);
        }
    }

    const handleSearchClick = () => {
        onSearch(search);
    }
    
    return (
        <div className={styles['header']}>
            <div className={styles['header-top']}>
                <div className={styles['logo']}>
                    <span className={styles['bold']}>netflix</span>roulette
                </div>
                <div className={styles['add-movie-button']}>
                    <span className={styles['plus']}>+</span> Add movie
                </div>
            </div>
            <div className={styles['search']}>
                <div className={styles['search-header']}>
                    Find your movie
                </div>
                <div className={styles['search-body']}>
                    <input type='text' value={search} onChange={handleSearch} onKeyDown={handleKeyPress} className={styles['search-input']} placeholder='What do you want to watch?' />
                    <button className={styles['search-button']} onClick={handleSearchClick}>Search</button>
                </div>
            </div>
        </div>
    )
}