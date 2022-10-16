import { CloudSun } from 'phosphor-react'
import { Heading } from '../../components/Heading/Heading'
import { Text } from '../../components/TextComp/Text'
import { Button } from '../../components/Button/Button'
import {
	InputTextComp,
	RootInputTextProps,
} from '../../components/TextInput/InputText'
import logoBlack from '../../assets/img/Logo-Compass-black.svg'
import BallImg from '../../assets/img/ball-Logo-Compass.svg'

export function HomePage() {
	return (
		<div className="w-screen h-screen bg-white">
			<header className="w-screen grid grid-cols-3">
				<div className="flex justify-start items-start pt-7 pl-10">
					<img src={logoBlack} alt="compass-logo-white" className="w-40 " />
				</div>

				<div className="flex flex-col justify-center items-center">
					<Text size="3lg" color="text-black" className="font-bold ">
						11:26
					</Text>
					<Text size="sm" color="text-black" className="font-normal">
						terça-feira, 17 de março de 2020
					</Text>
				</div>

				<div className="flex flex-col justify-start items-end pt-6 pr-10">
					<Text size="sm" color="text-black" className="font-normal">
						Passo Fundo - RS
					</Text>
					<div className="flex justify-center items-center">
						<CloudSun size={32} weight="thin" />
						<Text size="3lg" color="text-black" className="font-normal">
							22º
						</Text>
					</div>
				</div>
			</header>

			<main className="w-screen h-fit grid grid-cols-2 bg-white">
				<div className="flex justify-start items-start">
					<img
						src={BallImg}
						alt="compass-logo-ball"
						className="w-[31.563rem] bottom-0"
					/>
				</div>

				<div className="flex flex-col justify-center items-end pr-10">
					<Text size="2lg" color="text-red-200" className="font-bold">
						Our mission is
					</Text>
					<Text size="2md" color="text-black">
						Nossa missão é
					</Text>
					<Text size="3lg" color="text-red-200" className="font-bold">
						to transform the world
					</Text>
					<Text size="2md" color="text-black">
						transformar o mundo
					</Text>
					<Text size="3lg" color="text-red-200" className="font-bold">
						building digital experiences
					</Text>
					<Text size="2md" color="text-black">
						construindo experiências digitais
					</Text>
					<Text size="3lg" color="text-red-200" className="font-bold">
						that enable our client’s growth
					</Text>
					<Text size="2md" color="text-black">
						que permitam o crescimento dos nossos clientes
					</Text>
				</div>
			</main>

			<footer className="w-screen grid grid-cols-3 absolute justify-center items-center bg-black">
				<div className="flex">
					<Text size="xs" color='text-secondary-white'>
						Essa janela do navegador é usada para manter sua sessão de autenticação
						ativa. Deixe-a aberta em segundo plano e abra uma nova janela para
						continuar a navegar.
					</Text>
				</div>
				<div className="flex justify-center items-center">
					<Text size="xs" color='text-secondary-white'>Application refresh in</Text>
					<div className="flex flex-col justify-center items-center">
						<Text size="3lg"color='text-secondary-white'>600</Text>
						<Text size="sm" color='text-secondary-white'>seconds</Text>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<div className='bg-white'>
						<a className='text-red-100'>Continuar Navegando</a>
					</div>	
					<div className="flex flex-col justify-center items-center">
						<a className='text-secondary-white'>Logout</a>
					</div>
				</div>
			</footer>
		</div>
	)
}
