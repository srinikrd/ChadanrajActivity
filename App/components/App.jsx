import React from 'react';
import Button from '../App/containers/Button';
import NewsItem from '../App/containers/NewsItem'
import Loading from '../App/containers/Loading'


let App = () => (
  <div>
    <Button />
    <Loading />
    <NewsItem />
  </div>
);


export default App;
