import React from 'react';
import classes from '../Main/Main.module.css';
import Info from './Info/Info';
import * as ReactBootstrap from 'react-bootstrap';
import Repos from './Repos/Repos';

const Main = ({ data, repositories, reposPerPage, totalRepos, currentRepos, paginate, loading }) => {
  console.log('мои репозитории', repositories);
  console.log('статус загрзуки', loading);

  return (
    <>
      {loading ? (
        <div className={classes.wrap}>
          <div>
            <Info data={data}></Info>
          </div>

          <Repos
            data={data}
            repositories={repositories}
            reposPerPage={reposPerPage}
            totalRepos={totalRepos}
            currentRepos={currentRepos}
            paginate={paginate}
            loading={loading}
          ></Repos>
        </div>
      ) : (
        <div className={classes.wrap}>
          {<ReactBootstrap.Spinner animation="border" variant="secondary"></ReactBootstrap.Spinner>}
        </div>
      )}
    </>
  );
};

export default Main;
