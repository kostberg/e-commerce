import styled from 'styled-components'

const ProductStyler = styled.div`
overflow: visible;
position: relative;

div.product {
  overflow: hidden;
  width: 100%;
  background-color: #F6F8FF;
  border-radius: 30px;
  display: flex;
  flex-flow: column;
  box-shadow: 20px 20px 40px #181A1E;
}

& div.productImage {
  width: 100%;
  height: 275px;
}

& div.productName {
  background-color: #F6F8FF;
  border-top: 1px solid #6D6A75;
  text-align: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

& div.productName h3 {
  margin: 0;
  padding: 22px 10px;
  color: #282C34;
  font-weight: 600;
  font-size: 25px;
}

& div.overlay {
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  transition: opacity 250ms ease-in-out;
  z-index: 10;
}

& div.overlay_filter {
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background: #282C34;
  border-radius: 30px;
  transition: opacity 250ms ease-in-out;
}

& div.overlay>div {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

& div.overlay .addToCart {
  position: absolute;
  height: 4vh;
  width: 4vh;
  right: 8.5%;
  top: 7%;
  transition: opacity 250ms ease-in-out;
  cursor: pointer;
}

& div.overlay h3 {
  margin: -7.5% 0 0 0;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  color: #F6F8FF;
  transition: opacity 250ms ease-in-out;
}
`

export default ProductStyler