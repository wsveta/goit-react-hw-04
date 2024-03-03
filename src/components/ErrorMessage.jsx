import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <p className={css.errorMessage}>Error happend, try reload the page</p>
    )
}

export default ErrorMessage;