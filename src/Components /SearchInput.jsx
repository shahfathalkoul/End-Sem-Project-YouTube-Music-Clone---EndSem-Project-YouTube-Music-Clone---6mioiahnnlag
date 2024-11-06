import { assets } from '../assets/assets';

export default function SearchInput() {
    return (
        <div className="relative flex justify-center md:mr-24 lg:mr-96">
            <input
                type="text"
                placeholder="Search songs, albums, artists, podcasts"
                className="text-white rounded-md p-2 pl-10 w-18 sm:w-54 md:w-60 lg:w-96"
                style={{ backgroundImage: `url(${assets.searchBackground})` }}
            />
            <img
                src={assets.searchIcon}
                alt="search-icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
        </div>
    );
}
