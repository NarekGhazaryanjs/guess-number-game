import { useRef, useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import Text from './Components/Text/Text';
import Wrapper from './Components/ui/Wrapper/Wrapper';
import Card from './Components/ui/Card/Card';

const App = () => {
  const coinRef = useRef('');
  const numberRef = useRef('');
  const [balance,setBalance] = useState(1000);
  const [computerRandomNumber, setComputerRandpmNumber] = useState('');

  const betHandler = () => {
    if(
        Number(coinRef.current.value >= 50) && Number(coinRef.current.value <= balance)
        && Number(numberRef.current.value)   > 0  &&  Number(numberRef.current.value)  < 11
        && Number(coinRef.current.value) === Number(Math.ceil(coinRef.current.value))
        && Number(numberRef.current.value) === Number(Math.ceil(numberRef.current.value))
    ) {
        setBalance(balance - coinRef.current.value);
        setComputerRandpmNumber(Math.ceil(Math.random() * 10));
        if(Number(numberRef.current.value) ===  Number(computerRandomNumber)) {
          setBalance(balance + (coinRef.current.value * 10))
        }
    }
  }

  return (
     <Wrapper>
      <Card>
        <Text> your balance {balance} </Text>
      </Card>
      <Card>
         <Text> please bet money </Text>
         <Input propsRef={coinRef} placeholder='coin'  type='number'/>
         <Text> Please choose number between 1 and 10 </Text>
         <Input propsRef={numberRef} placeholder='number choose' type='number' />
         <Button onClick={betHandler}> Bet </Button>
      </Card>
      <Card>
        <Text> computer random number {computerRandomNumber} </Text>
      </Card>
     </Wrapper>
  )
}

export default App