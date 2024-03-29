import styled from "styled-components";
import colors from "../../styles/color";
import CrewImage from "../../assets/images/profile.png";

const StyleItem = styled.div`
    width: ${({ home }) => home ? '9vw' : '8.5vw'};
    min-height: ${({ home }) => home ? '9.3vw' : '8.783vw'};
    background-color: ${props => props.isFirstPlace ? colors.crewPink : colors.footerGray};
    border: none;
    border-radius: 0.25vw;
    text-align: center;
    padding: 0.5vw 0.5vw 0.5vw 0.5vw;
    white-space: nowrap;
`

const CrewRankP = styled.p`
    font-weight: 700;
    font-size: 1.2vw;
    color: ${colors.crewGray};
`

const CrewRankP2 = styled.p`
    font-weight: 500;
    font-size: 0.6vw;
    color: ${colors.crewGray2};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const CrewRankP3 = styled.p`
    font-weight: 500;
    font-size: 0.75vw;
    color: ${colors.crewGray3};
`

// 1위 크루의 포인트 부분 색 변화 안됨
const CrewRankP4 = styled.p`
    font-weight: 700;
    font-size: 0.9vw;
    color: ${props => props.isFirstPlace ? colors.mainRed : colors.crewGray2};
`

const ItemCrewRank = (props) => {
    const { id, name, point, isFirstPlace } = props;

    return (
        <StyleItem isFirstPlace={isFirstPlace} key={id}>
            <CrewRankP>{id}위</CrewRankP>
            <img src={CrewImage} alt="crew" style={{width: "3vw", height: "3vw", marginTop: "0.5vw"}}/>
            <CrewRankP2 style={{marginTop: "0.2vw"}}>{name}</CrewRankP2>
            <div className="PointBox" style={{display: "flex", justifyContent: "center", gap: "0.2vw", alignItems: "center", marginTop: "0.2vw"}} >
                <CrewRankP3>Point</CrewRankP3>
                <CrewRankP4>{point}점</CrewRankP4>
            </div>
        </StyleItem>
    )
}

export default ItemCrewRank;