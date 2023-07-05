import styled from 'styled-components'

export const GameContainer = styled.div`
  width: 90%;
  max-width: 900px;
  height: 100%;
  padding: 20px 0 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const GameNameAndResultContainer = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 10px 20px 10px 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding: 10px;
  }
`

export const GameName = styled.h1`
  font-family: 'Bree Serif';
  font-size: 26px;
  font-weight: 500;
  line-height: 1.5;

  color: #ffffff;
  @media screen and (max-width: 380px) {
    font-size: 20px;
  }
`

export const GameResultContainer = styled.div`
  height: 110px;
  width: 120px;
  border-radius: 10px;
  padding: 2px 26px 16px 26px;
  margin: 10px 0 10px 0;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 380px) {
    height: 90px;
  }
`

export const ScoreText = styled.p`
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 0;

  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;

  color: #223a5f;

  @media screen and (max-width: 380px) {
    font-size: 18px;
  }
`

export const Score = styled.h1`
  margin-top: 0;
  padding-top: 0;

  font-family: 'Roboto';
  font-size: 50px;
  font-weight: 600;
  line-height: 1.5;

  color: #223a5f;
  @media screen and (max-width: 380px) {
    font-size: 38px;
  }
`
export const GameChoicesList = styled.ul`
  max-width: 700px;
  padding-left: 0;
  margin-top: 60px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const RulesBtn = styled.button`
  height: 40px;
  width: ${props => (props.rulesBtn ? '100px' : '180px')};
  border: none;
  margin-bottom: 20px;
  border-radius: 6px;
  outline: none;
  cursor: pointer;

  font-family: 'Bree Serif';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;

  color: #223a5f;

  align-self: ${props => (props.rulesBtn ? 'flex-end' : 'center')};
`

export const GameResultCard = styled.div`
  width: 100%;
  max-width: 700px;
  margin-top: 60px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const ChoicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PlayerChoiceContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const PlayerText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  color: #ffffff;
`
export const ChoiceItemImage = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (min-width: 390px) and (max-width: 570px) {
    width: 140px;
    height: 140px;
  }

  @media screen and (max-width: 390px) {
    width: 100px;
    height: 100px;
  }
`

export const PlayerStatus = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;

  color: #ffffff;
`
export const ModalContainer = styled.div`
  width: 90%;
  max-width: 700px;
  padding: 4px;
  margin: auto;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CloseIconBtn = styled.button`
  height: 26px;
  width: 26px;
  border: none;
  border-radius: 2px;
  padding: 4px;

  background-color: #bfbfbf;
  align-self: flex-end;
`

export const PopUpImage = styled.img`
  width: 90%;
  margin: 4px 20px 30px 20px;
`
