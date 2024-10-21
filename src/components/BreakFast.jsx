import breakFastPic from '../assets/breakfastJars.jpeg'

export default function BreakFast() {
  return (
    <div className="section breakfast-section">
      <div className="copies-cont">
        <h2>
          Breakfast <br />
          To-Go
        </h2>
        <div className='ingredients'>
          <p>
            No time to linger? That's fine. We've packed you a breakfast fit for
            kings. Emphasis on "fit." Check out the ingredients: <br /> <br />
          </p>
          <ul>
            <li>Slow-roasted oats & grains</li>
            <li>Vine-ripened grapes & berries</li>
            <li>Naturally sweetened dried fruit</li>
            <li>Homemade yogurt</li>
            <li>Freshly harvested honey</li>
          </ul>
        </div>
        <div>
            <button className="btn btn-breakfast">SEE OUR SELECTION </button>
        </div>
      </div>
        <div className="picture-container">
            <img src={breakFastPic} alt="algo" />
        </div>
    </div>
  );
}
