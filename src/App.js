import Bars from './components/Bars';
import Map from './components/Map';

import { MapCP } from './context/MapCP';

import styled from 'styled-components'

const FinalPage = styled.div `
  display : flex;
`

function App() {
  return (
    <MapCP>
      <FinalPage>
        <Bars/>
        <Map/>
      </FinalPage>
    </MapCP>
  );
}

export default App;
