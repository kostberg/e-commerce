import styled from 'styled-components'

const Styler = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: 100;

.loadingBar{
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.loadingBar > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 250ms ease-in-out;
  z-index: 100;
}

.loadingBar div.overlay {
  display: block;
  width: 100%;
  height: 110%;
  background-color: #282C34;
  transition: opacity 250ms ease-in-out;
  z-index: 10 !important;
}
`

export default Styler