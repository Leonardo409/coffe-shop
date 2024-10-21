export default function Cards({ img, btnText }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <button className="btn">{btnText}</button>
    </div>
  );
}
