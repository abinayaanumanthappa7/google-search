import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-container">
            <div className="search-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                value={searchInput}
                placeholder="Search Google"
                onChange={this.onChangeSearch}
                className="input"
              />
            </div>
            <ul className="list-item">
              {searchResult.map(eachList => (
                <SuggestionItem
                  key={eachList.id}
                  listDetails={eachList}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
