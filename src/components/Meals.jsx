import Cards from "./subComponents/Cards";
import pict1 from '../assets/copies.jpeg'
import pict2 from '../assets/tl.jpg'
import pict3 from '../assets/more.jpeg'


export default function Meals() {
  return (
    <div className="cards-container section">
        <Cards img={pict1} btnText={'Breakfast-in-a-Jar'}/>
        <Cards img={pict2} btnText={'Hearty Meals'}/>
        <Cards img={pict3} btnText={'Guilt-free Desserts'}/>
    </div>
  )
}
