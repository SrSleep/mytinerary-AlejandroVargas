import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    const token = useSelector(state => state.authStore.token);
    if (!token) 
        return <Navigate to="/signin" replace/>
    return children
}

export default PrivateRoute