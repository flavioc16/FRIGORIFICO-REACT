import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
}

type UserProps = {
    id: string;
    name: string;
    username: string;
}

type SignInProps = {
    username: string;
    password: string;
}

type  AuthProviderProops = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProops){

    const [user, setUser] = useState<UserProps>();

    const isAuthenticated = !!user;

    async function signIn(){
        alert("CLICOU NO LOGIN");
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}