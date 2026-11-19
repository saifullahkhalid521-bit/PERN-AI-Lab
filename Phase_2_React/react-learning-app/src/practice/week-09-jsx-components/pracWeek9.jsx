export function Heading ({text , size}) {
  return (
    <>
    <h1 style={{fontSize:size}}>{text}</h1>
    </>
  );
}

export function Avatar ({imageUrl , name}) {
  return (
    <>
    <img src= {imageUrl} alt= {name} style={{borderRadius: "50%" , width: "200px", height: "200px" , borderRadius: "50%", objectFit: "cover",}} />
    <p>{name}</p>
    </>
  );
}


