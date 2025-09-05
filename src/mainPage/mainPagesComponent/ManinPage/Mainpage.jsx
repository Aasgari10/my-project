import Header from "../Header/Header"
import Svgs from "../Svgs/Svgs"
import Examples from "../Examples/Examples"
import SvgsPhone from '../Svgs/SvgsPhone'
export default function Mainpage()
{
    return(
    <div>
     <Header/>
      <main>
          <Svgs/>
           <SvgsPhone/>     
          <Examples/>
      </main>
    </div>)
}