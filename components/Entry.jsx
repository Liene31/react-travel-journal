export function Entry(props) {
  return (
    <article>
      <div className="image-wrapper">
        <img src={props.image.src} alt={props.image.alt} />
      </div>
      <div className="post-wrapper">
        <ul>
          <li>
            <img
              src="../images/marker.png"
              alt="marker icon"
              className="marker-icon"
            />
          </li>
          <li className="country">{props.country}</li>
          <li>
            <a href={props.googleMapsLink}>View on Google Maps</a>
          </li>
        </ul>

        <h1>{props.name}</h1>
        <span>{props.date}</span>
        <p>{props.description}</p>
      </div>
    </article>
  );
}
