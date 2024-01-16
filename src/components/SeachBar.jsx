import "./SearchBar.css";

function SearchBar ({onChange , onClick}) {

            return (
                <form className="display-row" onChange={onChange}>
                <input type="text" placeholder="Enter city" />
                <button type="submit" className="search-button" onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </button>
            </form>
            )
    
} export default SearchBar;