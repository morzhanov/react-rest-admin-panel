import React from 'react'
import ReactLoading from 'react-loading'
import './Loading.styl'

const Loading = () => (
  <div className="table__loading">
    <ReactLoading width={80} height={80} color="#ab47bc" type="spinningBubbles" />
  </div>
)

export default Loading
