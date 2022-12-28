import React from 'react'
import Image from "next/image";

import loading from "./skeletons/loading.gif";



const LoadingIcon = () => {
  return (
    
    <Image src={loading} alt="Loading" height="50" width="50" />

  )
}

export default LoadingIcon