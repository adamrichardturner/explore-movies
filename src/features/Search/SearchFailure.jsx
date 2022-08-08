import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

export const SearchFailure = () => {
    const navigate = useNavigate();
    return (
        <>
            <h2>Your search returned no results...</h2>
            <Button variant="contained"
                    onClick={() => navigate(-1)}>
            Back
            </Button>
        </>
    )
}