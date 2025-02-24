import React from 'react'


const Dashboard = () => {
  return (
    <div>
      <h1 className='font-secondary text-3xl p-10'>Dashboard</h1>
      <div className='grid grid-cols-3 gap-5'>
        <div className='w-sm bg-cyan-700 p-5 rounded-lg text-white col-span-1'>
          <h2>10</h2>
          <h3>Messages</h3>
        </div>
        <div className='w-sm bg-cyan-700 p-5 rounded-lg text-white col-span-1'>
          <h2>10</h2>
          <h3>Images</h3>
        </div>
        <div className='w-sm bg-cyan-700 p-5 rounded-lg text-white col-span-1'>
          <h2>10</h2>
          <h3>Boats</h3>
        </div>
      </div>
    </div>
    
  )
}

export default Dashboard