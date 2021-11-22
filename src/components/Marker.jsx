import styled from "styled-components"

import { FaMapMarkerAlt } from 'react-icons/fa'

const MarkerContainer = styled.div `
  width: 40px;
  height: 40px;
  position: relative;
`

const Marker = props => {
  return (
    <MarkerContainer>
      <FaMapMarkerAlt style={{ width: '25px', height: '25px', color: `${props.color}` }} />
    </MarkerContainer>
  )
}

export default Marker