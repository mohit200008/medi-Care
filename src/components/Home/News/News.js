import React, { useState , useEffect } from "react";
import "../../../styles/News.css";
import "../../../styles/w3.css";

export default function News() {
    const API_KEY = "acae411d28db4d8b98724b12c2e7c417";
    const [query, setQuery] = useState();
    const [articles, setArticles] = useState([]);
    const [strt,setStrt] = useState(0);
    const [end,setEnd] = useState(4);
    const [total,setTotal] = useState(0);
    const [currentTag,setCurrentTag] = useState("heart disease");

    useEffect(() => {
        handleRequest(currentTag);
    },[])
    const PageNumbers = [];
    const int = Math.ceil(total / 4);
    if (int === 1 ) return null ;
    for (let i = 1; i<= int; i++) {
        PageNumbers.push(i) 
    }
    // Methods 
    const handleQuery = (e) => {setQuery(e.target.value)} 
    const handlePage = (e) => {
        setStrt(e.target.value*4-4);
        setEnd(e.target.value*4);
    }
    
    const handleSearch = () => { handleRequest(query); setCurrentTag(query); } 
    const handleTag = (e) => { handleRequest(e.target.value); setCurrentTag(e.target.value); }
    const handleRequest = (q) => {
        var url = 'https://newsapi.org/v2/everything?' +
        'q=' + q +
        '&searchin=title' +
        '&sortBy=popularity' +
        '&apiKey=' + API_KEY;
        var req = new Request(url);
        fetch(req)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.articles);
                if (data.articles.length<4){console.log("less than 4");}
                setTotal(data.articles.length);
                console.log(data);
            });
    } 
    
    return (
    <React.Fragment>
        <h2 className="w3-margin " >Latest News</h2>
        <form className="w3-margin-top search-container">
            <input type="text" className="w3-large" id="search-bar" onChange={handleQuery} placeholder="Search for lates News related to diseases ..." />
            <button onClick={handleSearch} className="search-icon w3-text-green w3-button w3-hover-green w3-large w3-round-xlarge" type="button">Search</button>
        </form>
        <div className=" w3-margin-left w3-margin-top" >
            <button onClick={handleTag} value="heart disease" className="w3-button w3-border w3-light-grey w3-margin-right w3-large w3-round-xxlarge">Heart</button>
            <button onClick={handleTag} value="kidney disease" className="w3-button w3-border w3-light-grey w3-margin-right w3-large w3-round-xxlarge">Kidney</button>
            <button onClick={handleTag} value="diabetes" className="w3-button w3-border w3-light-grey w3-margin-right w3-large w3-round-xxlarge">Diabeties</button>
            <button onClick={handleTag} value="corona" className="w3-button w3-border w3-light-grey w3-margin-right w3-large w3-round-xxlarge">Corona</button>
            <button onClick={handleTag} value="breast cancer" className="w3-button w3-border w3-light-grey w3-margin-right w3-large w3-round-xxlarge">Breast Cancer</button>
        </div>
        <div className="w3-padding w3-margin-bottom w3-row" >
        <h3 className="w3-margin">{currentTag}</h3>
        { articles ? articles.slice(strt,end).map((article) => (
            <div key={article.url} className="w3-round-xxlarge w3-light-grey news-div w3-quarter">
                {article.urlToImage ? <img className="w3-round-large img" src={article.urlToImage} alt="Avatar" /> : null }
                <div className="w3-margin-top w3-padding ">
                    <h3 className="w3-text-black" >{article.title}</h3>
                    <h5 className="w3-text-dark-grey ">By {article.author} on {article.publishedAt.slice(0,10)}</h5>
                    <p className="ss" >{article.description}.. <a href={article.url} >Read More</a></p>
                    <br></br>
                    <br></br>
                </div>
            </div>
        )) : null}
        </div>
        <h3 className="w3-center">Page {end/4}</h3>
        <br></br>
        <div className="w3-row w3-margin-bottom w3-center w3-large" >
            {PageNumbers[0] ? PageNumbers.map((i) => (<button value={i} onClick={handlePage} className="w3-button w3-round-xxlarge w3-dark-grey w3-margin-left" >{i}</button>)) : null}
        </div>

    </React.Fragment>
    );
}
