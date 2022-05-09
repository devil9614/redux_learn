import React from 'react'

const Comment = ({comment}) => {
  return (
    <div>
        <h4 style = {{padding:10,border:"solid",borderWidth:1,borderColor:"black"}}>{comment}</h4>
    </div>
  )
}

export default Comment