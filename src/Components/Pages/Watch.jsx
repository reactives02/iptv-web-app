import React from 'react'
import { useLocation } from 'react-router-dom';
import Player from '../Player';

const Watch = () => {
 const history = useLocation();
  return (
    <div>
      {/* {console.log(history)} */}
        <Player url={history?.state}/>
    </div>
  )
}

export default Watch