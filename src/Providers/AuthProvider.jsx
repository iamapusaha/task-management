import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase.config";
// Exporting 
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [showLogin, setShowLogin] = useState(true)
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const auth = getAuth(app)




    // Google Firebase 
    const googleProvider = new GoogleAuthProvider();
    const connectGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // join
    const join = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // logout
    const logout = () => {
        return signOut(auth);
    }
    // hold user info
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    // Pass data from here !!
    const data = {
        login, join,
        showLogin,
        setShowLogin,
        connectGoogle,
        logout, user,
        loading,
        auth,
        setLoading,
        
    }
    // Main part
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;