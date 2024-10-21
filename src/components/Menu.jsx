export default function Menu() {
  return (
    <div className=" menu-container">
      <div className="section section-wrap">
        <div>
          <h2>
            Our cafe, <br /> your way
          </h2>
        </div>
        <div className="opt-btn">
          <div className="options">
            <div>
              <p>Dine in.</p>
              <p>Reserve a table online so we know to expect you.</p>
            </div>
            <div>
              <p>Take out.</p>
              <p>Chose from our selection, and we'll pack it up for you.</p>
            </div>
            <div>
              <p>Pick up.</p>
              <p>Call or message ahead, and we'll have your order ready.</p>
            </div>
          </div>
          <button className="btn">CHECK OUT OUR MENU</button>
        </div>
      </div>
    </div>
  );
}
