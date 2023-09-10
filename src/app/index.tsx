import './index.css'
import {MainPage} from "../pages/main";
import {withStore} from "./providers";
import {Theme} from "@radix-ui/themes";
function App() {

  return (
      <Theme>
        <MainPage/>
      </Theme>
  )
}

export default withStore(App);
