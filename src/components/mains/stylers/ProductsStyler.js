import styled from 'styled-components'

const Wrapper = styled.section`
display: block;
padding: 2% 5%;
box-sizing: border-box;
height: calc(100% - 4%);

> div {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
}

h1{
    color: #F6F8FF;
    font-size: 60px;
    font-weight: 700;
    margin: 0;
    white-space: nowrap;
}
`

export default Wrapper