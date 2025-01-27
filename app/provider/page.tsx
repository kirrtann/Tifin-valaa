import axios from 'axios'
import React from 'react'

const ProviderPage = () => {
  const API = "localhost/4000/provider"
  const data = axios.get("")
  return (
    <>
      <div className='maw-w-[940px]'>
        <div>
          <div>
            image
          </div>
          <h3>Name</h3>
          <h3>contact Number</h3>
          <h3>Address</h3>

        </div>
      </div>

    </>
  )
}

export default ProviderPage