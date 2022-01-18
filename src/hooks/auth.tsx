import React, {createContext, useContext, useState, useEffect} from 'react'
import * as AuthSessions from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from '../services/api';

const CLIENT_ID = '2004e84fd8197519c3f7';
const SCOPE = 'read:user';
const USER_STORAGE = '@nlwheat:user';
const TOKEN_STORAGE = '@nlwheat:token';

type User = {
    id: string
    avatarUrl: string
    name: string
    login: string
}

type AuthContextData = {
    user: User | null
    isSigningIn: boolean
    singIn: () => Promise<void>
    singOut: () => Promise<void>
}

type AuthProvedeProps ={
    children: React.ReactNode
}

type AuthResponse = {
    token: string,
    user: User,
}

type AuthorizationResponse = {
    params: {
        code?: string,
        error?: string,
    }, 
    type?: string,
}

export const AutchContext = createContext({} as AuthContextData)

function AuthProveder({children}: AuthProvedeProps){

    const [isSigningIn, setIsSigningIn] = useState(true)
    const [user, setUser] = useState<User | null>(null)

    async function singIn(){
try{
        setIsSigningIn(true)
        const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
        const authSessionResponse = await AuthSessions.startAsync({authUrl}) as AuthorizationResponse;

        if(authSessionResponse.type === 'success' && authSessionResponse.params.error !== 'access_denied'){
            const authResponse = await api.post('/authenticate', {code: authSessionResponse.params.code})
            const {user, token} = authResponse.data as AuthResponse;

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
            await AsyncStorage.setItem(TOKEN_STORAGE, JSON.stringify(token))
            setUser(user);
        }

        
    }catch(erro){
        console.log("Autenticação falhou")
    }finally{
        setIsSigningIn(false)
    }
    }

    async function singOut(){
        
    }

    useEffect(() =>{
        async function loadUserStorageData() {
            const userStorage = await AsyncStorage.getItem(USER_STORAGE)
            const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE)

            if(userStorage && tokenStorage){
                api.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`;
                setUser(JSON.parse(userStorage))
            }
            setIsSigningIn(false)
        }
        loadUserStorageData();
    },[])

    return(
        <AutchContext.Provider value={{
            singIn,
            singOut,
            isSigningIn,
            user,
        }}>
            {children}
        </AutchContext.Provider>
    )
}

function useAuth(){
    const contex = useContext(AutchContext)

    return contex;
}

export {
    AuthProveder, useAuth
}