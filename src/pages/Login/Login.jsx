import React,{useState} from "react";
import styled from "styled-components";
import colors from "../../styles/color";
import {Link} from "react-router-dom";
import alert from "../../assets/images/alert-circle 1.png";
import axios from 'axios';

const Container = styled.div`
    display: flex;
    width: 100%;
    padding-top: 2vw;
    margin-bottom: 4vw;
`
const SideBar = styled.div`
    width: 17%;
    padding-left: 2.5%;
`
const MainConationer =styled.div`
    width: 67%;
`

const Breadcrums = styled.div`
    display: flex;
    gap: 0.5vw;
    padding: 0.9375vw 0.0000vw 0.9375vw 0.2083vw;
`
const BreadcrumsP = styled.div`
    font-weight: 500;
    font-size: 0.6vw;
    color: ${colors.crewGray2};
    cursor: pointer;
`
const Title = styled.div`
    color: var(--Gray-Gray-900, #17191A);
    font-family: Pretendard;
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 500;
`
const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 0.4167vw;
`
const LoginBox = styled.div`
    width: 24.4792vw;
    height: 22.2917vw;
    flex-shrink: 0;
    border-radius: 0.2604vw;
    border: 0.0521vw solid var(--Gray-Gray-300, #D1D1D1);
`
const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .id{
        display: flex;
        width: 21.3542vw;
        margin-top: 4vw;
        padding: 0.5208vw;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.5208vw;
        border-bottom: 0.0521vw solid var(--Gray-Gray-500, #9E9E9E);
        font-weight: 500;
        font-size: 0.75vw;
        color: #9E9E9E;
    }
    .password{
        display: flex;
        width: 21.3542vw;
        margin: 1.0417vw 0.0000vw 4vw 0.0000vw;
        padding: 0.5208vw;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.5208vw;
        border-bottom: 0.0521vw solid var(--Gray-Gray-500, #9E9E9E);
        font-weight: 500;
        font-size: 0.75vw;
        color: #9E9E9E;
    }
`
const Alert = styled.div`
    display: inline-flex;
    position: absolute;
    margin-top: 10vw;
    left: 39.8%;
    padding: 0.5vw;
    justify-content: center;
    align-items: center;
    gap: 0.5208vw;
    border-radius: 0.2604vw;
    background: var(--Primary-Red-200, #FFF6F7);
`
const AlertP = styled.div`
    color: var(--State-Red-500, #E31C22);

    /* Body/Body/medium */
    font-family: Pretendard;
    font-size: 0.7vw;
    font-style: normal;
    font-weight: 500;
    padding-left: 0.5208vw;
`
const LoginButton =styled.button`
    width: 19.3750vw;
    height: 2.6042vw;
    border-radius: 0.2604vw;
    background: var(--Primary-Red-900, #E95458);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.9vw;
    font-style: normal;
    font-weight: 600;
    margin-top:1.75vw;
    .login{
        color: var(--black-white-white-1000, #FFF);
        text-align: center;
        font-family: Pretendard;
        font-size: 0.9vw;
        font-style: normal;
        font-weight: 600;
    }
`

const FindContainer = styled.div`
    display:flex;
    flex-direction: space;
    justify-content: space-between;
    margin: 1.0417vw 1.5625vw 1.5625vw 1.5625vw;
`

const FindP= styled.p`
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 0.7vw;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; 
    letter-spacing: -0.0187vw;
    `

// 리프레시 토큰을 사용하여 액세스 토큰을 갱신하는 함수
const refreshAccessToken = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken');

  if (!refreshToken) {
    console.log("no refresh!!!");
    return;
  }

  console.log(accessToken);
  console.log(refreshToken);

  const response = await axios.post(
      'https://bloodtrail.site/auth/regenerate-token',
      {}, // POST 요청 본문이 필요하지 않은 경우 빈 객체 전달
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'refresh': `Bearer ${refreshToken}`
        }
      }
  );

  console.log("refresh complete!!!!!!!!!!!!!!!!!!!!");
  console.log(response.data);
  
  } catch (error) {
  console.error('Error refreshing access token: ', error); // 에러 처리
  }
};


const Login = () =>{
    const [inputValue, setInputValue] = useState({
      userId: '',
      userPassword: '',
    });
    const { userId, userPassword } = inputValue;
    const [alertMessage, setAlertMessage] = useState("");

    const handleSubmit = async () => {
        console.log(userId);
        console.log(userPassword);
        if (!inputValue.userId || !inputValue.userPassword) {
          setAlertMessage("아이디와 비밀번호를 모두 입력해주세요.");
          return;
        }

        try {
            const response = await axios.post('https://bloodtrail.site/auth/login', {
                email: inputValue.userId,
                password: inputValue.userPassword
            });

            const { message } = response.data;
            console.log(message);

            if (message==="SUCCESS!"){
              const {accessToken, refreshToken} = response.data.result;
              localStorage.setItem('accessToken', accessToken);
              localStorage.setItem('refreshToken', refreshToken);
              await refreshAccessToken();

              console.log("Login successful");
              window.location.href = "/";
            }
            else {
              setAlertMessage(message);
            }
      
            console.log(response.data);

        } catch (error) {
            console.error('Error: ', error);
            setAlertMessage("로그인 처리 중 오류가 발생했습니다.");
        }
    };



    return (
        <Container>
          
            <SideBar/>
            <MainConationer>
                <Breadcrums>
                    <BreadcrumsP>홈</BreadcrumsP>
                    <BreadcrumsP>{">"}</BreadcrumsP>
                    <BreadcrumsP>로그인</BreadcrumsP>
                </Breadcrums>
                <Title>로그인</Title>
                
                <LoginContainer>
                  
                    <LoginBox>
                        <InputBox>
                            <input className="id" type="text" placeholder="ID" value={inputValue.userId}
                            onChange={(e)=>setInputValue({...inputValue,userId: e.target.value})}/>
                            <input className="password" type="password" placeholder="PASSWORD" value={inputValue.userPassword}
                            onChange={(e)=>setInputValue({...inputValue,userPassword: e.target.value})}/>
                             {alertMessage &&(
                                <Alert>
                                    <img src={alert} alt="alert-circle" style={{ width: '1.2vw', height: '1.2vw' }}></img>
                                    <AlertP>{alertMessage}</AlertP>
                                </Alert>
                             )}
                            <LoginButton onClick={handleSubmit}><input className="login" type="submit" value="로그인"/></LoginButton>
                        </InputBox>
                        
                        <FindContainer>
                            <Link to ="/findPassword">
                                <FindP>비밀번호찾기</FindP>
                            </Link>
                            <Link to="/signupService">
                                <FindP>회원가입</FindP>
                            </Link>
                        </FindContainer>
                    </LoginBox>
                </LoginContainer>
                

            </MainConationer>
        </Container>
    )
}

export default Login;


