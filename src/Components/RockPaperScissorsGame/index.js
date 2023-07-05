import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameChoiceItem from '../GameChoiceItem'
import {
  GameContainer,
  GameNameAndResultContainer,
  GameResultContainer,
  GameName,
  ScoreText,
  Score,
  GameChoicesList,
  RulesBtn,
  GameResultCard,
  ChoicesContainer,
  PlayerChoiceContainer,
  PlayerText,
  ChoiceItemImage,
  PlayerStatus,
  ModalContainer,
  CloseIconBtn,
  PopUpImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    dataTestid: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    dataTestid: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    dataTestid: 'paperButton',
  },
]

const playerStatus = {
  lost: 'LOST',
  draw: 'DRAW',
  won: 'WON',
}

const playerWinningsChoices = {
  ROCK: 'SCISSORS',
  SCISSORS: 'PAPER',
  PAPER: 'ROCK',
}

const overlayStyles = {
  backgroundOpacity: '0.5',
}

class RockPaperScissorsGame extends Component {
  state = {
    score: 0,
    result: '',
    playerChoice: '',
    opponentChoice: '',
    isGameOver: false,
  }

  getPlayerChoice = id => {
    const choiceItem = choicesList.find(eachChoice => {
      if (eachChoice.id === id) {
        return true
      }
      return false
    })
    return choiceItem
  }

  getOpponentChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3)
    const randomChoiceItem = choicesList[randomIndex]

    return randomChoiceItem
  }

  getResult = (id1, id2) => {
    switch (id2) {
      case id1:
        return {score: 0, result: playerStatus.draw, isGameOver: true}

      case playerWinningsChoices[id1]:
        return {score: 1, result: playerStatus.won, isGameOver: true}

      default:
        return {score: -1, result: playerStatus.lost, isGameOver: true}
    }
  }

  resetTheGame = () => {
    this.setState({
      score: 0,
      result: '',
      isGameOver: false,
      playerChoice: '',
      opponentChoice: '',
    })
  }

  validateGame = id => {
    const playerChoiceItem = this.getPlayerChoice(id)
    const opponentChoiceItem = this.getOpponentChoice()

    const resultObject = this.getResult(
      playerChoiceItem.id,
      opponentChoiceItem.id,
    )

    this.setState({
      ...resultObject,
      playerChoice: playerChoiceItem.imageUrl,
      opponentChoice: opponentChoiceItem.imageUrl,
    })
  }

  renderChoiceList = () => (
    <GameChoicesList>
      {choicesList.map(eachChoice => (
        <GameChoiceItem
          key={eachChoice.id}
          choiceDetails={eachChoice}
          validateGame={this.validateGame}
        />
      ))}
    </GameChoicesList>
  )

  renderGameResultCard = () => {
    const {playerChoice, opponentChoice, result} = this.state

    return (
      <GameResultCard>
        <ChoicesContainer>
          <PlayerChoiceContainer>
            <PlayerText>YOU</PlayerText>
            <ChoiceItemImage src={playerChoice} />
          </PlayerChoiceContainer>
          <PlayerChoiceContainer>
            <PlayerText>OPPONENT</PlayerText>
            <ChoiceItemImage src={opponentChoice} />
          </PlayerChoiceContainer>
        </ChoicesContainer>

        <PlayerStatus>{result}</PlayerStatus>
        <RulesBtn onClick={this.resetTheGame}>Play Again</RulesBtn>
      </GameResultCard>
    )
  }

  render() {
    const {score, isGameOver} = this.state

    return (
      <>
        <GameContainer>
          <GameNameAndResultContainer>
            <GameName>
              ROCK
              <br />
              PAPERS
              <br />
              SCISSORS
            </GameName>

            <GameResultContainer>
              <ScoreText>Score</ScoreText>
              <Score>{score}</Score>
            </GameResultContainer>
          </GameNameAndResultContainer>
          {isGameOver ? this.renderGameResultCard() : this.renderChoiceList()}
          <Popup
            trigger={<RulesBtn rulesBtn>Rules</RulesBtn>}
            modal
            overlayStyle={overlayStyles}
          >
            {close => (
              <ModalContainer>
                <CloseIconBtn onClick={close} type="button">
                  <RiCloseLine />
                </CloseIconBtn>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </ModalContainer>
            )}
          </Popup>
        </GameContainer>
      </>
    )
  }
}

export default RockPaperScissorsGame
