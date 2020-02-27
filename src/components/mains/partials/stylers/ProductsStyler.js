import styled from 'styled-components'

const ProductsStyler = styled.div`
& div.productContainer {
  box-sizing: border-box;
  padding: 5% 5% 10% 5%;
  display: grid;
  grid-template-columns: 35% 35%;
  grid-template-rows: auto auto;
  column-gap: 10vh;
  row-gap: 10vh;
}
`

export default ProductsStyler