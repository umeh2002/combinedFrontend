import { styled } from "styled-components";
import todo from "../assets/pexels-tima-miroshnichenko-5428012.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <Main>
        <Card>
          <Left src={todo}/>
          <Right>
            <ImageHolder>
              <Image />
              <ImageInput />
              <ImageLabel>Upload Image</ImageLabel>
            </ImageHolder>
            <Holder>
              <Txt1>Name</Txt1>
              <Input placeholder="enter name" />
              <Err>enter name</Err>
            </Holder>
            <Holder>
              <Txt1>Email</Txt1>
              <Input placeholder="enter email" />
              <Err>enter email</Err>
            </Holder>
            <Holder>
              <Txt1>Password</Txt1>
              <Input placeholder="enter password" />
              <Err>enter password</Err>
            </Holder>
            <Holder>
              <Txt1>Confirm password</Txt1>
              <Input placeholder="confirm password" />
              <Err>confirm password</Err>
            </Holder>
            <Button type="submit">Sign up</Button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Line />
              <Or>or</Or>
              <Line />
            </div>
            <Link to="/sign-in" style={{ textDecoration: "none" }}>
              <Button>Sign in</Button>
            </Link>
          </Right>
        </Card>
      </Main>
    </Container>
  );
};

export default Register;

const Err = styled.div`
  font-size: 10px;
  color: red;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

const ImageLabel = styled.label`
  padding: 8px 15px;
  border-radius: 10px;
  background-color: dodgerblue;
  font-size: 12px;
  margin-top: 4px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid silver;
  object-fit: cover;
  margin: 5px 0;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Or = styled.div`
  font-size: 15px;
  margin-bottom: 3px;
`;

const Line = styled.div`
  height: 1px;
  width: 90%;
  background-color: silver;
  margin: 10px 3px;
`;

const Button = styled.button`
  width: 70%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  outline: none;
  border: 1px solid silver;
  background-color: dodgerblue;
  margin-left: 50px;
  margin-top: 5px;
  margin-bottom: 5px;
  transition: all 400ms;
  font-size: 16px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 90%;
  height: 30px;
  outline: none;
  padding-left: 10px;
  border-radius: 7px;
  border: 1px solid silver;

  ::placeholder {
    color: grey;
    font-size: 13px;
  }
`;

const Holder = styled.div`
  margin: 10px 0px;
`;

const Txt1 = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin: 5px 0px;
`;


const Right = styled.form`
  width: 50%;
  height: 100%;
  padding-left: 10px;
`;

const Left = styled.img`
  width: 350px;
  height: 600px;
  border-radius: 10px 0px 0px 10px;
  object-fit: cover;
`;

const Card = styled.div`
  width: 700px;
  height: 600px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  outline: none;
  border: 1px solid silver;
`;

const Main = styled.div``;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;
