import css from './Loader.module.css';

const Loader = () => {
    return (
        <p className={css.loadingMessage}>Images are loading, please wait...</p>
    )
}

export default Loader;