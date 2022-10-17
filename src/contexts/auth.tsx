import { getField } from '@storybook/store'
import React, {
	useState,
	createContext,
	ReactNode,
	useEffect,
	Children,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { NavigateProvider } from 'react-use-navigate'

export const AuthContext = createContext({})

export interface AuthProviderProps {
	children: ReactNode
	asChild?: boolean
	className?: string
}

export const login = (user: string, password: string) => {
	console.log('login auth', { user, password })

	if (password !== 'admin' || user !== 'admin') {
		return false
	}
	localStorage.setItem('user', JSON.stringify(user))

	return true
}

export function AuthProvider(Props: AuthProviderProps) {
	const navigate = useNavigate()

	const [user, setUser] = useState<{ id: any; user: string }>()

	const logout = () => {
		console.log('logout')
		setUser(undefined)
		localStorage.removeItem('user')
		navigate('/login')
	}

	return (
		<AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
			{Props.children}
		</AuthContext.Provider>
	)
}