import './index.css'
import {MainPage} from "../pages/main";
import {withStore} from "./providers";
import {Theme} from "@radix-ui/themes";

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
      <Theme>
        <MainPage/>
      </Theme>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default withStore(App);
