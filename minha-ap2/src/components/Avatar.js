export default function Avatar({person,size}){
    
    return (
        <img
        className="avatar"
        src={(person)}
        alt={person.name}
        width={size}
        height={size}
        
        />
    );
}