import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import Content from './components/Content'
export default function App() {
  
  return (
    <>
    <Content items = { initialStoreItems } />
    </>
  )
}
