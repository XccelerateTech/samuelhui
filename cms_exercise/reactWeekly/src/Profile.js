import React from 'react';
import faker from 'faker';

const Profile = (props) =>{
    return(
        <div>
            <img src={faker.image.avatar()}></img>
            <p>{faker.name.firstName()}</p>
            <p>{props.count}  favourite links</p>
            <p> Some Profile</p>
            <br />
            <button onClick={()=>props.toggle()}type="button" className="btn btn-info">Add Link</button>
        </div>
        
    )
}

export default Profile;