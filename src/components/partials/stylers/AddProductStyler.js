import styled from 'styled-components'

const AddProductStyler = styled.div`
& {
  display: inline-block;
  height: 100%;
}

& h1 {
  color: #F6F8FF;
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
}

& form {
  display: inline-grid;
  grid-template-rows: 1fr 1fr 1fr;
}

& h3 {
  display: inline-block;
  color: #F6F8FF;
  font-size: 40px;
  font-weight: 600;
  margin: 0 1.25vw 0 0;
}

& div.name {
  margin-top: 3vh;
  display: flex;
  align-items: center;
}

& div.price {
  margin-bottom: 1.5vh;
  display: flex;
  align-items: center;
}

& div.submit {
  margin-top: 0.5vh;
  display: flex;
  justify-content: center;
}

& input[type=text] {
  margin-top: 1vh;
  display: inline-block;
  padding: 15px;
  background-color: #F6F8FF;
  border: none;
  border-radius: 6px;
  height: 10px;
  flex-grow: 1;
}

& input[type=submit] {
  box-shadow: 20px 20px 60px #101215, -20px -20px 60px #404653;
  margin-top: 3vh;
  display: inline-block;
  width: 50%;
  padding: 25px;
  background-color: #282C34;
  border: none;
  border-radius: 5px;
  font-size: 30px;
  color: #F6F8FF;
  cursor: pointer;
}
`

export default AddProductStyler