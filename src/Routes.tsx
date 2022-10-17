import React, { useEffect, useState } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom'
import { LoginPage } from './pages/login/login'
import { HomePage } from './pages/home/home'
import { AuthContext } from './contexts/auth'

const AppRoutes = () => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		const user_db = localStorage.getItem('user_db')
		const userStorage = user_db && JSON.parse(user_db)

		setUser(userStorage)
	})

	return (
		<AuthContext.Provider value={{ authenticated: !!user, user }}>
			<Router>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/home" element={<HomePage />} />
				</Routes>
			</Router>
		</AuthContext.Provider>
	)
}

export default AppRoutes
