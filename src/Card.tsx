interface cardProps{
     image:string; 
    date:Date;
    text:String;
}
export default function Card({image,date,text}:cardProps){
    return(
        <article className="article">
        <img src={image} />
        <span>{date.toDateString()}</span>
        <h2>{text}</h2>
        </article>
    )
}