import { Link } from "react-router-dom"
import styled from "styled-components"
export const Header = () => {
  return (
  <Container>
    <Main>
        <Logo>Todo</Logo>
        <Link to="/register"  style={{textDecoration:"none", color:"white"}}>
        <Button>Sign Up</Button>
        </Link>
    
    </Main>
  </Container>
  )
}

const Button =styled.div`
width: 100px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid;
border-radius: 10px;
background-color: dodgerblue;
transition: all 400ms;
cursor: pointer;
`

const Logo =styled.div`
font-size: 30px;
font-weight: 700;

`

const Main =styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Container =styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
color: white;

`
