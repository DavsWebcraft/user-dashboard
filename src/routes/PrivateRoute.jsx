import { Navigate } from "react-router-dom";
import { auth } from "../services/firebase";

// Simple check using Firebase Auth
export default function PrivateRoute({ children }) {
  const isAuthenticated = !!auth.currentUser;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
