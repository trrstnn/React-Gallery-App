import React from 'react';
import Photo from './Photo'


const PhotoList = (props) => {
    
// componentDidMount(){
    
//     props.onSearch(props.currentQuery)

// }

    let results=props.data;
    let allPhotos;
    allPhotos = results.map(pic =>
        <Photo server={pic.server} key={pic.id} secret={pic.secret} id={pic.id} farm={pic.farm} title={pic.title}/> 
        )
       
        return(
           
            <div class="photo-container">
            <h2>{`Results for ${props.query}`}</h2>
            <ul>
                {allPhotos}
            </ul>
            </div>
        );
    
}

export default PhotoList