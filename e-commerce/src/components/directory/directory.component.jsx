import React,{Component} from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

class Directory extends React.Component{
    constructor() {
        super();
        this.state = {
            sections:
                [{
                    title: 'hats',
                    imageUrl: 'https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg',
                    id: 1
                },
                    {
                        title: 'jackets',
                        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-leather-jackets-1564766989.png?crop=0.502xw:1.00xh;0.221xw,0&resize=640:*',
                        id: 2
                    },

                    {
                        title: 'sneakers',
                        imageUrl: 'https://sneakerfreaker-cdn.s3-accelerate.amazonaws.com/image/undercover-nike-air-max-720-CN2408-001-3-heel.jpg?mtime=20191113133830',
                        id: 3
                    },

                    {
                        title: 'men',
                        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9_gOQVt2DLYNKJCOFXr6_EFz8CdAZQ00qw8KQzIdx6Hqf6cB&s',
                        id: 4
                    },

                    {
                        title: 'women',
                        imageUrl: 'https://www.vineyardvines.com/on/demandware.static/-/Sites-Vineyard-Vines-Library/default/dw7e593ad1/images/Landscape_23.jpg',
                        id: 5
                    },
                ]
        }
    }
    
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} />
                    ))
                }
                
                </div>
        )
    }


}

export default Directory;