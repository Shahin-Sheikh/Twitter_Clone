import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import ForumIcon from '@material-ui/icons/Forum';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const FirstPage = () => {
  return (
    <div class="row no-gutters">
      <div class="col-md-6 no-gutters">
        <div class="leftside d-flex justify-content-center align-items-center flex-column bd-highlight mb-3 ">
          <div class="p-2 bd-highlight" style={{ color: '#fff' }}>
            <SearchIcon style={{ fill: '#fff' }}></SearchIcon>Follow your
            interests.
          </div>
          <div class="p-2 bd-highlight" style={{ color: '#fff' }}>
            <PeopleIcon style={{ fill: '#fff' }}></PeopleIcon>Hear what people
            are talking about.
          </div>
          <div class="p-2 bd-highlight" style={{ color: '#fff' }}>
            <ForumIcon style={{ fill: '#fff' }}></ForumIcon>Join the
            converstaion.
          </div>
        </div>
      </div>
      <div class="col-md-6 no-gutters">
        <div class="rightside  d-flex justify-content-center align-items-center flex-column bd-highlight mb-3 ">
          <div class="p-2 bd-highlight" style={{ color: '#000' }}>
            <TwitterIcon style={{ fill: '#fff' }}></TwitterIcon>
            <h1 style={{ color: '#fff', fontWeight: 'bold' }}>
              Happening now.
            </h1>
            <h2 style={{ color: '#fff' }}>Join Twitter today.</h2>
            <br></br>
            <Link to="/signup">
              <input
                type="button"
                name="signup"
                type="submit"
                value="Sign up"
              />
            </Link>
            <Link to="/login">
              <input type="button" name="login" type="submit" value="Log in" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstPage;
