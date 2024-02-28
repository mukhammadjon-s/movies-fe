import styles from './header.module.css';

export function Header() {
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
                    <input type='text' placeholder='What do you want to watch?' className={styles['search-input']} />
                    <button className={styles['search-button']}>Search</button>
                </div>
            </div>
        </div>
    )
}