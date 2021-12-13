import * as C from './app.styles'
import {Character} from './components/Character'

const App = () =>{
  return(
    <C.Container>
     <C.Map>
       <Character />
     </C.Map>
    </C.Container>
  );
}

export default App;