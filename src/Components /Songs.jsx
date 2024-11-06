import MyCarousel from './Carousel'
import AudioPlayer from './AudioPlayer'
export default function Songs({isLogin}){
    const carousels = [
        { title: "Trending Songs", api: 'https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs' },
        { title: "Top 20 of this week", api: "https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 20 of this week" },
        { title: "Top 50 of this month", api: "https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 50 of this month" },
        { title: "Evergreen melodies", api: 'https://academics.newtonschool.co/api/v1/musicx/song?featured=Evergreen melodies' },
        { title: "Happy", api: "https://academics.newtonschool.co/api/v1/musicx/song?mood=happy" },
        { title: "Romantic", api: "https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic" },
        { title: "Excited", api: "https://academics.newtonschool.co/api/v1/musicx/song?mood=excited" },
        { title: "Sad", api: "https://academics.newtonschool.co/api/v1/musicx/song?mood=sad" },
    ];
    return (
        <div className='h-full bg-black pt-0'>
            <div className="flex">
                <div className='bg-black ml-[17%] overflow-y-auto w-full'>
                    {carousels.map((carousel, index) => (
                        <MyCarousel key={index} title={carousel.title} api={carousel.api} isLogin={isLogin} value = {5}/>
                    ))}
                </div>
            </div>
            <AudioPlayer/>
        </div>
    )
}