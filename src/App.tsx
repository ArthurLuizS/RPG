import * as C from './app.styles'
import {Character} from './components/Character'
import { useCharacter } from './hooks/useCharacter'
import {useEffect} from 'react'



const App = () =>{

  const char = useCharacter('Arthur');
  
  /* monitoramento do teclado */
  useEffect(()=>{
    window.addEventListener('keydown', handlekeydown);
  }, []);

  const handlekeydown = (e: KeyboardEvent) => {

    switch(e.code){
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();

      break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();

      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();

      break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
        
      break;
    }

  };
  return(
    <C.Container>
     <C.Map>
       <Character x={char.x} y={char.y} side={char.side}  name={char.name}/>
       
       
     </C.Map>
    </C.Container>
  );
}

export default App;