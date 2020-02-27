import styled from 'styled-components'
import Loading from '../Loading'

const StyledLoading = styled(Loading)`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;

    & > div {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 250ms ease-in-out;
    z-index: 10;
    }

    & div.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: #282C34;
    transition: opacity 250ms ease-in-out;
    }
`

export default StyledLoading


