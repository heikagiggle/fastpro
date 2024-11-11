
import DashboardCardStats from './components/card/DashboardCard'
import CategoryChart from './components/charts/CategoryChart'
import { NewBidTable } from './components/tables/NewbidTable'


const Dashboard = () => {
  return (
    <div >
      <DashboardCardStats/>
      <CategoryChart/>
      <NewBidTable/>
    </div>
  )
}

export default Dashboard
