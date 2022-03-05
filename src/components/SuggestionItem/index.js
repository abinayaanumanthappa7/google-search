const SuggestionItem = props => {
  const {listDetails, updateSearchInput} = props
  const {suggestion} = listDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="">
      <div className="list-item">
        <p>{suggestion}</p>
        <button type="button" onClick={onClickSuggestion} className="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
