import styled from 'styled-components'

const Wrapper = styled.section`
div.container {
  padding: 2% 5%;
  box-sizing: border-box;
  display: grid;
  height: calc(100% - 2% - 2%);
  grid-template-columns: auto auto 1fr;
  column-gap: 7.5%;
}

.seperator {
  width: 2.5px;
  border-radius: 10px;
  height: 80%;
  background-color: #6D6A75;
  align-self: center;
}
`

export default Wrapper