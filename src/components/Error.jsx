import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-age">
            <h1>Ope!</h1>
            <p>It appears we had an unexpected error</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}