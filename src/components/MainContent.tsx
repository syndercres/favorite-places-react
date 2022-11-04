import FavePlace from "./FavePlace"

function MainContent(): JSX.Element {
    return(
        <main>
            <FavePlace
               photo={"https://th.bing.com/th/id/R.48c4b563dbda203babb36952ca7c7be8?rik=njpBlxJkhzh%2fAQ&riu=http%3a%2f%2fmedia.gettyimages.com%2fvideos%2fchesil-beach-portland-harbour-weymouth-bay-video-id156031851%3fs%3d640x640&ehk=i9AELpfIboXzGDgVOt4emFiaM%2bfCf0pyasT7gc076ic%3d&risl=&pid=ImgRaw&r=0"}
               title={"portland Harbour"}
               location={"portland, Weymouth"} 
               description={"a great freestye spot"}
            />
        </main>
    )
    }
export default MainContent;