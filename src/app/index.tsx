import './index.css'
import {MainPage} from "../pages/main";
import {withStore} from "./providers";
function App() {

  return (
      <MainPage/>
  )
}

export default withStore(App);
