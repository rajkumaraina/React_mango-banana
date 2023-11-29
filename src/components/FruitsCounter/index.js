import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoes: 0,
    bananas: 0,
  }

  onIncrementMango = () => {
    this.setState(previousStep => ({
      mangoes: previousStep.mangoes + 1,
      bananas: previousStep.bananas,
    }))
  }

  onIncrementBanana = () => {
    this.setState(previousStep => ({
      mangoes: previousStep.mangoes,
      bananas: previousStep.bananas + 1,
    }))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="container">
        <div className="inside_container">
          <h1 className="heading">
            Bob ate <span className="span">{mangoes}</span> mangoes{' '}
            <span className="span">{bananas} </span> bananas
          </h1>
          <div className="img_container">
            <div className="cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button className="button" onClick={this.onIncrementMango}>
                Eat Mango
              </button>
            </div>
            <div className="cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button className="button" onClick={this.onIncrementBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
