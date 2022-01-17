import React, {createContext, useContext} from 'react'

type User = {
    id: string
    avatarUrl: string
    name: string
    login: string
}

type AuthContextData = {
    user: User | null
    isSigningIng: boolean
    singIn: () => Promise<void>
    singOut: () => Promise<void>
}

export const AutchContext = createContext({} as AuthContextData)