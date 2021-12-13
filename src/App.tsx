import * as C from './app.styles'
import {Character} from './components/Character'

const App = () =>{
  return(
    <C.Container>
     <C.Map>
       <Character x={5} y={0} />
     </C.Map>
    </C.Container>
  );
}

export default App;