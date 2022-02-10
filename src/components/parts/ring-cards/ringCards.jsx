const RingCards = ({ item }) => {
  return (
    <article className="card">
      <div className="card-img-box">
        <img className="card-img" src={item.MainImage} alt="img" />
      </div>
      <div className="card-info">
        <div className="card-info-header">
          <p>{item.ProductName}</p>
        </div>
        <div className="card-info-footer">
          <p>{item.Price}$</p>
        </div>
      </div>
    </article>
  )
}

export default RingCards;