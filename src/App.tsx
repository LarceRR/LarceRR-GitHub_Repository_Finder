import './App.scss'
import AppBody from './components/app_body/AppBody'
import AppFooter from './components/app_footer/AppFooter'
import AppHeader from './components/app_header/AppHeader'

function App() {

  return (
    <div className="app-wrapper">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  )
}

export default App
