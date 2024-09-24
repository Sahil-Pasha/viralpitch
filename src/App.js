import './App.css'
import paidCollabs from '../src/assets/images/paid-brand.png'
import celebrityCollabs from '../src/assets/images/celeb-collab.png'
import referFriend from '../src/assets/images/refer-friend.png'
import launchBrand from '../src/assets/images/launch-brand.png'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <p className="section-heading">
          but that’s not all. there’s so much{' '}
          <span className="more-text">more</span> you get.
        </p>
        <div className="image-container">
          <div>
            <img src={paidCollabs} className="images" alt="Paid Collabs" />
            <p className="section-text">
              <span className="more-text">more</span> paid brand collabs
            </p>
          </div>
          <div>
            <img
              src={celebrityCollabs}
              className="images"
              alt="Celebrity Collabs"
            />
            <p className="section-text">
              <span className="more-text">more</span> celebrity collabs
            </p>
          </div>
          <div>
            <img src={referFriend} className="images" alt="Refer Friends" />
            <p className="section-text">
              refer friends for <span className="more-text">more</span> returns
            </p>
          </div>
          <div>
            <img src={launchBrand} className="images" alt="Launch Your Brand" />
            <p className="section-text">
              launch your own brand & <span className="more-text">more</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
