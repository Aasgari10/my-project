import './svgs.css'
export default function CoreConceptsli ({image , title , description} ){
  return(
    <li>
      <img src={image } alt={title} />
      <h3>{title}</h3>
      <p className='description'>{description}</p>
    </li>
  )
} 