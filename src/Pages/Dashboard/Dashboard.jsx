import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { Helmet } from 'react-helmet-async'


const Dashboard = () => {


  return (

<>
<Helmet>
  <title>FluentFun | DashBoard</title>
</Helmet>
    <div className='relative min-h-screen md:flex'>
      <Sidebar />
      <div className='flex-1  md:ml-64'>
        <div className='p-5'>
          <h1 className='text-center text-5xl mb-5 font-bold font font-serif'>Dashboard</h1>
          <Outlet />
        </div>
      </div>
    </div>

</>
  )
}

export default Dashboard