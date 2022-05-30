import React from 'react'
import LifeCycleHooks from '../../Containers/LifeCycleHooks';
import MyProfile from '../../Containers/MyProfile';
import RecentMovieList from '../../Containers/RecentMovieList';
import TrendingShowList from '../../Containers/TrendingShowList';
import Program from './Program';
import Subscription from './Subscription';

const Home = () => {

  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://blog.logomyway.com/wp-content/uploads/2020/08/netflix-logo-2-1.jpg"
          alt="Netflix Logo"
          width="350"
          height="250"
        />
        <h1 className="display-5 fw-bold">Welcome to Netflix!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt risus et laoreet maximus.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Subscribe
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Login
            </button>
          </div>
        </div>
      </div>

      <h2>Feature Programs | Props Demo</h2>
      <Program 
        name="Man Vs Wild"
        category="Infotainment"
        time="released last week">
          A Wild Adventure show by Bear Grylls
      </Program>

      <Program 
        name="Planet Earth"
        category="Infotainment"
        time="released 2 days ago">
          An amazing show hosted by David Attenborough!
      </Program>

      <Program 
        name="Breaking Bad"
        category="Infotainment"
        time="released 2 months ago">
        Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts...
      </Program>

      <hr/>
      <h2>Recently Released Movies | States and Events Demo</h2>
      <RecentMovieList />

      <hr/>
      <h2>Trending Shows | States, Events, Changing States Immutably, Conditional Rendering, Lists and Keys Demo</h2>
      <TrendingShowList />

      <hr/>
      <h2>Subscription | Styling in React JS</h2>
      <Subscription />

      <hr />
      <h2>My Profile | Two Way Binding</h2>
      <MyProfile />

      <hr />
      <h2>LifeCycle Hooks Demo</h2>
      <LifeCycleHooks />
      
    </div>
  )
}

export default Home;
