import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate();
const [testModal, setTestModal] = useState(false)
  return (
    <div>
       
      <button>Take a Test</button>
    </div>
  )
}

export default Home