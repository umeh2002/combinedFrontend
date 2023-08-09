import { Link } from "react-router-dom";
import { styled } from "styled-components";

const SignIn = () => {
  return (
    <Container>
      <Main>
        <Card>
          <Txt>Sign In</Txt>
          <InputHolder>
            <Nam>Email</Nam>
            <Input placeholder="enter youur email" />
            <Err>name must be enter</Err>
          </InputHolder>

          <InputHolder>
            <Nam>Password</Nam>
            <Input placeholder="enter your password" />
            <Err>password must be enter</Err>
          </InputHolder>
          <Button>Sign In</Button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Line />
            <div>or</div>
            <Line />
          </div>
          <Link to="/register" style={{textDecoration:"none"}}>
            <Button>Sign Up</Button>
          </Link>
        </Card>
      </Main>
    </Container>
  );
};

export default SignIn;

const Err = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin: 0px 20px;
  color: red;
`;

const Txt = styled.div`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin: 10px 0px;
`;

const Line = styled.div`
  width: 70%;
  height: 1px;
  background-color: silver;
`;

const Button = styled.div`
  padding-left: 10px;
  width: 90%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 1px solid silver;
  background-color: #1e8af7;
  cursor: pointer;
  border-radius: 20px;
  margin: 10px;
`;

const Nam = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 90%;
  height: 30px;
  border: 1px solid silver;
  border-radius: 10px;
  outline: none;
  margin: 10px 0px;
  padding-left: 10px;
`;

const InputHolder = styled.div`
  padding-left: 20px;
`;

const Card = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid silver;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;
