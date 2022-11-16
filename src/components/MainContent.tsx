import { isPropertySignature } from "typescript";
import FavePlace from "./FavePlace"
import FavePlaceProps from "./FavePlace"

interface FavePlaceProps {
    photo: string;
    title: string;
    location: string;
    map: string;
    description: string;
}


const FavePlaceArr: FavePlaceProps [] = [
    {
        photo: "https://th.bing.com/th/id/R.48c4b563dbda203babb36952ca7c7be8?rik=njpBlxJkhzh%2fAQ&riu=http%3a%2f%2fmedia.gettyimages.com%2fvideos%2fchesil-beach-portland-harbour-weymouth-bay-video-id156031851%3fs%3d640x640&ehk=i9AELpfIboXzGDgVOt4emFiaM%2bfCf0pyasT7gc076ic%3d&risl=&pid=ImgRaw&r=0" ,
       title: "portland Harbour",
       location: "portland, Weymouth", 
       map: "https://goo.gl/maps/Db4b4JJ8YsqefBws8",
       description: "a great freestye spot"
    },

    {
    photo:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/fc/73/92/weymouth-beach.jpg?w=1200&h=-1&s=1",
    title:"Weymouth Beach",
    location:"Weymouth town center",
    map: "https://goo.gl/maps/Db4b4JJ8YsqefBws8",
    description:"good wave spot in the right conditions",
    },

    {
    photo:"https://www.dorsetecho.co.uk/resources/images/13556569.jpg?type=responsive-gallery-fullscreen",
    title:"Rockley Point",
    location:"Hamworthy, Poole",
    map: "https://goo.gl/maps/Db4b4JJ8YsqefBws8",
    description:"Good freeride and freestyle spot with a tricky launch",
    },

    {
    photo:"https://www.toadhallcottages.co.uk/blog/wp-content/uploads/2018/04/Sandbanks-Dorset.jpg",
    title:"Sandbanks",
    location:"Poole Harbour mouth",
    map: "https://goo.gl/maps/Db4b4JJ8YsqefBws8",
    description:"a great freestye spot",
    }
]











function MainContent(): JSX.Element {
    return(
        <main>
            <div>
                {FavePlaceArr.map(Fave =>{
                    return(
                        <div className="faveplace" key={Fave.title}>
                            {FavePlace(Fave)}
                        </div>
                    )
                }
                    
                    )}
            </div>
            
            
        </main>
    )
    }
export default MainContent;