import React, {Component} from 'react';
 
class DogIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      status: ''
    }
    this.fetchDogApi=this.fetchDogApi.bind(this)
  }

//   fetchDogApi() {
//     fetch(`https://dog.ceo/api/breeds/image/random`, {
//       method: 'GET'
//     }).then(res => res.json())
//       .then(res => console.log(res))
//         this.setState({
//           message: message,
//           status: status
//         })
//       .catch((err) => console.log(err))
//   }

async fetchDogApi () {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const json = await response.json()
        console.log('JSON:', json);
        this.setState({
            message: json.message
        })
    } catch(e) {
        console.log('Oops. Error! Try again.');
        console.log(e);
    }
}

componentDidMount() {
    this.fetchDogApi()
}

  render() {
    return (
      <div>
        <button className={'fetchapi'} onClick={() => this.fetchDogApi()}>Fetch!</button>
        <div>
        <br></br>
        <br></br>
          <img src={this.state.message} alt="random dog"/>
        </div>
      </div>
    )
  }
}

export default DogIndex;
