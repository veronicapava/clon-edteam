const Publication = ({ title, author, time, content, image }) => {
  return (
    <article className="publication l-block">
      <div className="card__avatar s-mr-1 lg-big false">
        <div className="circle img-container">
          {image}
        </div>
      </div>
      <div className="publication__container">
        <h2 className="publication__title t3">{title}</h2>
        <span><b>{author}</b> el día {time}</span>
        <div className="publication__content">
          <p>{content}</p>
        </div>
      </div>
    </article>
  )
}

export default Publication;
