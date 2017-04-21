 import React, { Component } from 'react'

 class Gallery extends Component {
     render(){
         let noImage = "https://thumb7.shutterstock.com/display_pic_with_logo/50775/535813351/stock-photo-unavailable-fluorescent-neon-tube-sign-on-brickwork-front-view-d-rendered-royalty-free-stock-535813351.jpg";
         return(
             <div className="col-md-12">
                    {
                        this.props.items.map((item, index) => {
                            let { title, imageLinks, infoLink } = item.volumeInfo;
                            return(
                                <a href={infoLink} target="_blank"><div className="col-md-4">
                                    <div key={index} className="book">
                                        <img 
                                            src={imageLinks !== undefined ? imageLinks.thumbnail : noImage} alt={title} className="book-img"
                                        />
                                        <div className="book-text">
                                            {title}
                                        </div>>
                                    </div>
                                </div></a>
                            );
                        })
                    }
            </div>
         )
     }
 }

 export default Gallery;