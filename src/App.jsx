import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import MainContent from './components/MainContent'
export default function App() {
  return (

    <MainContent items = {initialStoreItems}/>
  )
}
