import { Lock, User } from 'phosphor-react'
import { useState, useContext, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heading } from '../../components/Heading/Heading'
import { Text } from '../../components/TextComp/Text'
import { Button } from '../../components/Button/Button'
import {
	InputTextComp,
	RootInputTextProps,
} from '../../components/TextInput/InputText'
import './styles.css'
import '../../styles/global.css'
import logoWhite from '../../assets/img/Logo-Compass-white.svg'

export function LoginPage() {
	const [isUserSignedIn, setUserSignedIn] = useState(false)
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	function HandleSingIn(event: FormEvent) {
		event.preventDefault()

		if (password !== 'admin' || user !== 'admin') {
			return false
		}
		localStorage.setItem('user', JSON.stringify(user))

		navigate('/home')

		setUserSignedIn(true)
	}
	return (
		<div className="w-screen h-screen grid grid-cols-2 bg-gradient-to-r from-black to-gray-300">
			<div className="flex flex-col items-start justify-center px-48">
				<Heading
					size="xl"
					color="text-secondary-white"
					className="font-normal  mb-4"
				>
					Olá,
				</Heading>

				<Text size="2sm" color="text-secondary-white" className="font-light">
					Para continuar navegando de forma segura, efetue o login na rede.
				</Text>

				<div className="mt-32">
					<Text size="lg" color="text-secondary-white">
						Login
					</Text>

					<form onSubmit={HandleSingIn} className="flex flex-col items-stretch mt-8">
						{/* {isUserSignedIn && <Text>Login realizado</Text>} */}
						<label htmlFor="email" className="mb-8">
							<InputTextComp.Root>
								<InputTextComp.Input
									placeholder="Usuário"
									onChangeCapture={(event: any) => setUser(event.target.value)}
									value={user}
								/>
								,
								<InputTextComp.Icon>
									<User />
								</InputTextComp.Icon>
								,
							</InputTextComp.Root>
						</label>

						<label htmlFor="password">
							<InputTextComp.Root>
								<InputTextComp.Input
									placeholder="Senha"
									onChangeCapture={(event: any) => setPassword(event.target.value)}
									value={password}
								/>
								,
								<InputTextComp.Icon>
									<Lock />
								</InputTextComp.Icon>
								,
							</InputTextComp.Root>
						</label>
						<Button className="mt-28">Continuar</Button>
					</form>
				</div>
			</div>

			<div className="Img__Wrapper flex justify-center items-start pt-9">
				<div>
					<img src={logoWhite} alt="compass-logo-white" className="w-80 " />
				</div>
			</div>
		</div>
	)
}
