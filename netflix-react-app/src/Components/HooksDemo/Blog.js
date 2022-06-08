import React, { useEffect, useState } from 'react'

const Blog = () => {

  console.log('1. Program Started');
  const [topicName, setTopicName ] = useState('React Hooks Demo');
  const [publishedDate, setPublishedDate ] = useState(new Date());

  console.log('2. Before useEffect');
  useEffect(() => {
    // first param is effect
    // runs after every completed render, upon initial rendering and upon state update as well 
    // is is an alternative to life cycle hooks of class comp -- componentDidMount, componentDidUpdate
    // ideal place for you to make ajax calls 
    console.log('4. Inside useEffect');
    document.title = topicName;
  }, [ topicName ]); // second arg is dependency. it has to be array - it is optional
  // if the dep is changed by any means, useEffect callback fn will be called
  // by default useEffect callback will be called once automatically after initial render 
  // remove the dep and have empty array then see

  const handleChangeTopic = () => {
    console.log('5. Inside handleChangeTopic');
    // update the state of topicName
    setTopicName('Demo of useEffect() Hook!');
  }

  const handleUpdateDate = () => {
    setPublishedDate(new Date());
  }

  console.log('3. Before Return');
  return (
    <div>
      <h2>Blog | useEffect() Demo</h2>
      <p>Topic Name: {topicName}</p>

      <button onClick={handleChangeTopic}>Change Topic</button>

      <p>Date: {publishedDate.toISOString()}</p>
      <button onClick={handleUpdateDate}>Update Published Date</button>
    </div>
  )
}

export default Blog