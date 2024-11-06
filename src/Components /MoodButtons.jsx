import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'
const MoodButtons = ({ activeButton, setActiveButton }) => {

    const [moods , setMoods] = useState([])
    const jwt = localStorage.getItem('accessToken')
    useEffect(() => {
        const fetchCategories = async() => {
            try{
                const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/categories',
                    {headers: {'accept': 'application/json',
                            'projectID': 'evyu4sw99lon',
                            'Authorization' : `Bearer ${jwt}`
                            }})
                const data = await response.json();
                setMoods(data.data)
            }catch (error){
                console.log("Error in fetching categories" , error)
            }
        }
        fetchCategories()
    },[])
    const handleButtonClick = (moodName) => {
        setActiveButton(moodName);
    };
    return (
        <div className='flex ml-16 gap-6 mt-8'>
            {moods.map((moodName) => (
                <Link to={`/mood/${moodName}`} key={moodName}>
                    <button
                        onClick={() => handleButtonClick(moodName)}
                        className={`rounded-md py-2 px-4 ${activeButton === moodName ? 'bg-white text-black' : 'bg-[#2C2B2F] text-[#C7C7C8]'
                        } transition-colors duration-200`}
                    >
                        {moodName[0].toUpperCase() + moodName.slice(1)}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default MoodButtons;
