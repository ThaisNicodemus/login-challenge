import { Lock, User } from 'phosphor-react'
import { useState, useContext } from 'react'
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
import logoWhite from  '../../assets/img/Logo-Compass-white.svg'



export function LoginPage() {
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

					<form className="flex flex-col items-stretch mt-8">
						<label htmlFor="email" className="mb-8">
							<InputTextComp.Root>
								<InputTextComp.Input placeholder="Usuário" />,
								<InputTextComp.Icon>
									<User />
								</InputTextComp.Icon>
								,
							</InputTextComp.Root>
						</label>

						<label htmlFor="password">
							<InputTextComp.Root>
								<InputTextComp.Input placeholder="Senha" />,
								<InputTextComp.Icon>
									<Lock />
								</InputTextComp.Icon>
								,
							</InputTextComp.Root>
						</label>
					</form>
				</div>

				<Button className="mt-28">Continuar</Button>
			</div>

			<div className='Img__Wrapper flex justify-center items-start pt-9' >
                <img src={logoWhite} alt="compass-logo-white" className='w-80 ' />
			</div>
		</div>
	)
}
