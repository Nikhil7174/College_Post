import { SideBar, BlogCards, } from '../components'
import { BottomBar } from '../components'

const Home = () => {
  return (
    <div className='flex home'>
        <SideBar />
        <BlogCards />
        <BottomBar />
    </div>
  )
}

export default Home