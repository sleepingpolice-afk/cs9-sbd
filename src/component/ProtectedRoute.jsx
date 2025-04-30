import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
        if (window.location.pathname === '/shop') {
            alert('Nice Try');
        }
        return <Navigate to="/login" replace />;
    }

    return children;
}
