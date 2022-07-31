import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const { id } = useParams();
    return (
        <>
            <button>Back</button>
        </>
    );
};