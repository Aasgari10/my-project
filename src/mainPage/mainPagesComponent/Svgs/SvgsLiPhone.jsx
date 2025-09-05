
export default function Svgsliphone({ title, image, description }) {
    return (
        <div className="svgsliphone">
            <h2>{title}</h2>
            <img 
                src={image} 
                alt={title} 
                style={{ width: '100%', maxHeight: '400px', borderRadius: '10px' }} 
            />
            <p className='description'>{description}</p>
        </div>
    );
}
