import styled from 'styled-components';
import colors from '../../../styles/color';
import { NavLink } from 'react-router-dom';
import React from 'react';
import SortBoxYes from '../../../assets/images/sortbox_yes.png';
import ArrowDown from '../../../assets/images/arrow-down.png';
import Image from '../../../assets/images/image 1.png';
import Line from '../../../assets/images/divider_write.png';
import Write1 from '../../../assets/images/Write-1.png';
import Write2 from '../../../assets/images/Write-2.png';
import Write3 from '../../../assets/images/Write-3.png';
import Write from '../../../assets/images/Write.png';
import { css } from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Navigation/Sidebar';
import Breadcrums from '../../../components/Navigation/Breadcrums';

const CrewContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2vw;
  margin-bottom: 4vw;
`;

const CrewP = styled.p`
  font-weight: 500;
  font-size: 0.9vw;
  color: ${colors.crewGray};
`;

const CrewP2 = styled.p`
  font-weight: 600;
  font-size: 0.75vw;
  color: ${colors.mainRed};
  margin-top: 1.5vw;
  cursor: pointer;
`;

const CrewP4 = styled.p`
  color: var(--text-40, rgba(12, 11, 44, 0.4));
  font-family: Pretendard;
  font-size: 0.6vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.01vw;
`;


const RightMiddle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vw;
  gap: 0.5vw;
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  select {
    width: 100%;
    height: 2.5vw;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 0.1vw solid #d1d1d1;
    padding: 0.5vw;
    font-weight: 500;
    font-size: 0.75vw;
    option {
      color: #464A4D;
    }

    &:hover {
      color: #F3777A;
    }
  }
`;

const SortDiv = styled.div`
  width: 11.6vw;
  height: 2.5vw;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 0 0.5vw 0 0.5vw;
  cursor: pointer;
  border-bottom: 1px solid var(--Gray-Gray-300, #d1d1d1);
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.5vw;
`;

const TitleInput = styled.input`
  width: 40vw;
  flex-grow: 1;
  height: 2.5vw;
  flex-shrink: 0;
  border-bottom: 0.15vw solid var(--Gray-Gray-300, #d1d1d1);
  background: var(--black-white-white-1000, #fff);
  color: var(--Gray-Gray-500, #9e9e9e);
  /* Body/Body/medium */
  font-family: Pretendard;
  font-size: 0.75vw;
  padding-left: 0.75vw;
  font-style: normal;
  font-weight: 500;
  line-height: 1vw; /* 133.333% */
  letter-spacing: -0.15vw;
  padding-bottom: 0.75vw;

  &::placeholder {
    color: var(--Gray-Gray-500, #9e9e9e);

    /* Body/Body/medium */
    font-family: Pretendard;
    font-size: 0.75vw;
    padding-left: 0.75vw;
    font-style: normal;
    font-weight: 500;
    line-height: 1vw; /* 133.333% */
    letter-spacing: -0.15vw;
  }
`;

const BlankBox = styled.div`
  margin-top: 1vw;
  width: 100%;
  height: auto;
  fill: var(--black-white-white-1000, #fff);
  stroke-width: 0.1vw;
  stroke: var(--Gray-Gray-50, #fafafa);
`;

const ToolBox = styled.div`
  height: 3.65vw;
  background: var(--Gray-Gray-100, #f2f2f2);
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  gap: 1vw;
`;

const Imageplus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1vw;
  margin-left: 0.75vw;
`;

const ImageP = styled.p`
  color: var(--Gray-Gray-700, #464a4d);

  /* Body/Body_small/medium */
  font-family: Pretendard;
  font-size: 0.6vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.018vw;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BoldText = styled.p`
  color: var(--Gray-Gray-900, #17191a);
  font-family: Roboto;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5vw; /* 166.667% */
`;

const ItalicText = styled.p`
  color: var(--Gray-Gray-900, #17191a);
  font-family: 'Roboto Serif';
  font-size: 1vw;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;

const UnderlineText = styled.p`
  color: var(--Gray-Gray-900, #17191a);
  font-family: 'Roboto Serif';
  font-size: 1vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`;

const MidlineText = styled.p`
  color: var(--Gray-Gray-900, #17191a);
  font-family: 'Roboto Serif';
  font-size: 1vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: strikethrough;
`;

const InputContent = styled.div`
  width: 100%;
  height: 78%;
  flex-shrink: 0;
  min-height: 20vw;
  flex-grow: 1;
  color: var(--Gray-Gray-500, #9e9e9e);
  font-family: Pretendard;
  font-size: 0.75vw; 
  font-style: normal;
  font-weight: 500; 
  line-height: 1.2vw;
  padding: 1.5vw; /* 내부 패딩 추가 */
  border: 0.1vw solid #fafafa;
  outline: none; /* 포커스 시 아웃라인 제거 */

  ${({ isBold }) =>
    isBold &&
    css`
      font-weight: bold;
    `}
  ${({ isItalic }) =>
    isItalic &&
    css`
      font-style: italic;
    `}
  ${({ isUnderline }) =>
    isUnderline &&
    css`
      text-decoration: underline;
    `}
  ${({ isStrikethrough }) =>
    isStrikethrough &&
    css`
      text-decoration: line-through;
    `}
`;

const EnrollContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Enroll = styled.button`
  width: 18.6vw;
  height: 2.5vw;
  border-radius: 0.4vw;
  background: var(--Primary-Red-200, #fff6f7);
  color: var(--Primary-Red-900, #e95458);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2vw;

  /* Body/SubTitle/Bold */
  font-family: Pretendard;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 700;
  line-height: 3166.667%; /* 166.667% */
`;

const CommunityWrite = () => {
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

  useEffect(() => {
    const init = async () => {
      await refreshAccessToken();
    };
    init();
  },[]);
  
  const [imageFile, setImageFile] = useState(null);

  const [postType, setPostType] = useState('');

  const handlePostTypeChange = (event) => {
    setPostType(event.target.value);
  };

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const toggleBold = () => setIsBold(!isBold);
  const toggleItalic = () => setIsItalic(!isItalic);
  const toggleUnderline = () => setIsUnderline(!isUnderline);
  const toggleStrikethrough = () => setIsStrikethrough(!isStrikethrough);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      setImageFile(file);
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.style.maxWidth = '50%';
      contentEditableRef.current.appendChild(img);
    }
  };

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem('accessToken');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', contentEditableRef.current.innerText);
    formData.append('types', postType);
    if (imageFile) {
      formData.append('files', imageFile);
    }

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const response = await axios.post(
        'https://bloodtrail.site/post', formData, config
      );

      if (response.data.isSuccess) {
        alert('게시글이 성공적으로 등록되었습니다.');
        window.location.href = "/community";
      }
      else {
        alert(response.data.message);
        console.log(response.data);
      }
    } catch (error) {
      console.error('게시글 등록 중 오류가 발생했습니다.', error);
      alert('게시글 등록에 실패했습니다.');
    }
  };

  const [inputCompleted, setInputCompleted] = useState({
    registrationNumber: false,
    bloodProduct: false,
    requireDay: false,
    requirePlace: false,
    bloodType: false,
  });

  const [allFieldsCompleted, setAllFieldsCompleted] = useState(false);

  const [title, setTitle] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    const allCompleted = Object.values(inputCompleted).every(
      (status) => status === true
    );
    setAllFieldsCompleted(allCompleted);
  }, [inputCompleted]);

  const changeImageOnEnter = (field, event) => {
    if (event.key === 'Enter') {
      setInputCompleted({ ...inputCompleted, [field]: true });
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const contentEditableRef = useRef(null);

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
  
      
      
    <CrewContainer>
    <Sidebar pageLabel="커뮤니티" currentPage="자유게시판" />
      <div className="right" style={{ width: '67%' }}>
      <Breadcrums pageLabel="커뮤니티" currentPage="자유게시판" />
      
        <RightMiddle>
          <CrewP style={{ fontSize: '1.2vw' }}>글 작성하기</CrewP>
          <CrewP4>
            타인을 비방하거나 비난하는 행위 등 이용약관에 어긋나는 글을 작성할
            경우 삭제될 수 있습니다. 자세한 내용은 이용약관을 참고해주세요
          </CrewP4>
        </RightMiddle>

        <div
          className="crewBar"
          style={{
            width: '100%',
            height: '0.1vw',
            border: 'none',
            backgroundColor: colors.crewGray,
            marginTop: '1.7vw',
          }}
        />

        <TitleContainer>
          <TitleInput
            placeholder="제목을 입력하세요."
            value={title}
            onChange={handleTitleChange}
          />
          <SortContainer>
            <select
              value={postType}
              onChange={handlePostTypeChange}
              style={{
                height: '2.5vw',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '0.1vw solid #d1d1d1',
                padding: '0.5vw',
              }}
            >
              <option value="">게시판 선택</option>
              <option value="FREE">자유게시판</option>
              <option value="HONOR">명예 헌혈 게시판</option>
              <option value="SHARE">헌혈 정보 공유 게시판</option>
            </select>
          </SortContainer>
        </TitleContainer>

        <BlankBox>
          <ToolBox>
            <Imageplus onClick={triggerFileInput}>
              <img
                src={Image}
                alt="사진 추가"
                style={{ width: '1.2vw', height: '1.2vw' }}
              />
              <ImageP>사진추가</ImageP>
            </Imageplus>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: 'none' }}
              accept="image/*"
            />
            <img src={Line} alt="구분선" style={{ height: '1.5vw' }} />
            <BoldText onClick={toggleBold}>B</BoldText>
            <ItalicText onClick={toggleItalic}>I</ItalicText>
            <UnderlineText onClick={toggleUnderline}>U</UnderlineText>
            <MidlineText onClick={toggleStrikethrough}>T</MidlineText>
          </ToolBox>

          <InputContent
            ref={contentEditableRef}
            contentEditable
            placeholder="내용을 입력하세요."
            isBold={isBold}
            isItalic={isItalic}
            isUnderline={isUnderline}
            isStrikethrough={isStrikethrough}
          />
        </BlankBox>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }}
          accept="image/*"
        />

        <EnrollContainer>
          <Enroll onClick={handleSubmit}>글 등록하기</Enroll>
        </EnrollContainer>
      </div>
    </CrewContainer>
  );
};

export default CommunityWrite;
