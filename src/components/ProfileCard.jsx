export default function ProfileCard(props){
    const{username,bio,location}=props;
    return(
        <div>
            <h2>{username} {bio} {location}</h2>
        </div>
    )

}