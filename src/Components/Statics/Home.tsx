import { styled } from "styled-components"


const Home = () => {
  return (
   <Container>
    <Main>
<Card>
    <Divs>
        <Pix></Pix>
        <Nam>Emmanuel</Nam>
    </Divs>
    <Task>Task</Task>
    <Priority>High</Priority>
    <Dat>5th August 2023, 10:30pm</Dat>
    <Button>Delete</Button>
</Card>
<Holder>
    <InputName>Task</InputName>
    <Input placeholder="enter task"/>
</Holder>

<Holder>
    <InputName>priority</InputName>
    <Input placeholder="enter priority"/>
</Holder>
<Button>Enter</Button>
    </Main>
   </Container>
  )
}

export default Home

const Input =styled.input`
width: 400px;
height: 30px;
outline: none;
padding-left: 10px;
border-radius: 10px;
border:1px solid silver;
margin:10px 0px;
`

const InputName =styled.div`
font-weight: 700;
`

const Holder =styled.div`
`

const Button =styled.div`
width: 100px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid;
border-radius: 10px;
color: white;
background-color: dodgerblue;
transition: all 400ms;
cursor: pointer;
margin: 5px 100px;
`

const Dat =styled.div`
font-size: 13px;
font-weight: 600;
padding-left:10px;
margin: 5px 0px;
`

const Priority =styled.div`
font-weight: 500;
padding-left: 10px;
margin: 5px 0px;
`

const Task =styled.div`
font-weight: 600;
padding-left: 10px;
`

const Nam =styled.div`
font-weight: 700;
margin-left: 5px;
`

const Pix =styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
border:1px solid silver;
`

const Divs =styled.div`
display: flex;
align-items: center;
margin:10px 10px;
`

const Card =styled.div`
width: 300px;
height: 220px;
margin: 10px;
border-radius: 10px;
border:1px solid silver;

`

const Main =styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Container =styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
background-color: #f7f7f7;
`