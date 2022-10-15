import './styles/global.css';
import { Heading } from './components/Heading/Heading';
import { Text } from './components/TextComp/Text';
import { Button } from './components/Button/Button';
import { InputText } from './components/TextInput/InputText';


export function App() {
  return (
    <>
      <Heading size="xl" color="text-red-100">Olá,</Heading>

      <Text size="2md" color="text-gray-200">Para continuar navegando de forma segura, efetue o login na rede.</Text>
      
      <div class="bg-black h-40">
      <InputText></InputText>
      </div>
      

      <Button>Continuar</Button>

      <div class="grid grid-cols-2">
      <button> Button 1 </button>
      <button> Button 2 </button>
      <button> Button 3 </button>
      <button> Button 4 </button>
      <button> Button 5 </button>
      <button> Button 6 </button>
    </div>
    </>  
  )
}
