import React from "react"

function Bio(props){
    if(props.bio !== undefined && props.bio !== ""){
      return <p>{props.bio}</p>
    }
    else return null
  }

export default Bio;