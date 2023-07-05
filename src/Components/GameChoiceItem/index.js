import {
  ChoiceListItem,
  ChoiceItemBtn,
  ChoiceItemImage,
} from './styledComponents'

const GameChoiceItem = props => {
  const {choiceDetails, validateGame} = props
  const {id, imageUrl, dataTestid} = choiceDetails

  const onSelecting = () => {
    validateGame(id)
  }

  return (
    <ChoiceListItem>
      <ChoiceItemBtn onClick={onSelecting} data-testid={dataTestid}>
        <ChoiceItemImage src={imageUrl} alt={id} />
      </ChoiceItemBtn>
    </ChoiceListItem>
  )
}

export default GameChoiceItem
