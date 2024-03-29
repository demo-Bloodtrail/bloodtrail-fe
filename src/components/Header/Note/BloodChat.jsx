import React,{useState} from 'react'
import styled from 'styled-components';
import colors from "../../../styles/color";
import Ellipse22 from "../../../assets/images/Ellipse22.png";
import BloodChatroom from './BloodChatroom';
import ListBlood from './list-bloodchat';

const ChatContainer =styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    background: var(--black-white-white-1000, #FFF);
`
const NoteTitle2 =styled.div`
    display: flex;
    background: var(--black-white-white-1000, #FFF);
`
const NoteElement =styled.div`
    padding: 0.78vw 0.78vw 0.78vw 0.78vw;
    display: flex;
    font-size: 0.78vw;
    justify-content: center;
    color: var(--Gray-Gray-700, #464A4D);
    font-family: Pretendard;
    font-size: 0.78vw;
    font-style: normal;
    font-weight: 700;
    line-height: 1.04vw; /* 133.333% */

&.blood{
    font-weight: 700;
    border-bottom: 0.16vw solid var(--Primary-Red-700, #F3777A);
}
&:hover {
    font-weight: 700;
}
`

const ChatBox =styled.div`
    height: 5.4688vw;
    padding: 1.0417vw 1.0417vw 1.0417vw 1.0417vw;
    display: flex;
    flex-direction: row:
`
const ChatPerson= styled.img`
    width: 3.3789vw;
    height: 3.3854vw;
    cursor: pointer;
`
const ChatBoxP =styled.div`
    margin-left: 0.7797vw;
    align-item: center;
`

const ChatName =styled.div`
    display: flex;
    color: var(--Gray-Gray-700, #464A4D);
    width: 18.5938vw;
    height: 1.5104vw;
    font-family: Pretendard;
    font-size: 0.6250vw;
    font-style: normal;
    font-weight: 500;
    line-height: 0.9375vw;
    letter-spacing: -0.0187vw;
    align-items: center;
`

const ChatP =styled.div`
    display: flex;
    width: 20.8333vw;
    height: 1.5104vw;
    align-items: center;
`
const Rectangle = styled.div`
    height: 0.26vw;
    flex-shrink: 0;
    background: var(--Gray-Gray-100, #F2F2F2);
`

const BloodChat =({handleCrewChat, handleBloodChat})=>{
    const [isChatroom,setIsChatroom]=useState(false);
    const [crewChat, setCrewChat] = useState(false);
    const [bloodChat, setBloodChat] = useState(false);

    const handleChatroom =({chatRoomId})=>{
        setIsChatroom(true);
        setBloodChat(chatRoomId);
    }
    return (
        <ChatContainer>
            {!isChatroom && (
                <>
            <NoteTitle2>
                <NoteElement className="crew" onClick={handleCrewChat}>크루</NoteElement>
                <NoteElement className="blood" onClick={handleBloodChat}>지정헌혈 요청글</NoteElement>
            </NoteTitle2>
        
            <ListBlood handleChatroom={handleChatroom}/>
                </>
            )}
            {isChatroom && <BloodChatroom 
                            handleCrewChat={handleCrewChat}
                            handleBloodChat={handleBloodChat}
                            chatRoomId={bloodChat}/>}
        </ChatContainer>
    );
}

export default BloodChat;

