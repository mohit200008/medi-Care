import React, { useState } from "react";
import "../../../styles/News.css";
import "../../../styles/w3.css";
import img3 from "../../../assets/images/heartimg.jpg";

export default function News() {
    const API_KEY = "4ffda4cb8a734e5193d06762fdc76dd5";
    const [query, setQuery] = useState();
    const [articles, setArticles] = useState([]);
    const [strt,setStrt] = useState(0);
    const [end,setEnd] = useState(4);
    const [total,setTotal] = useState(0);

    // Methods 
    const handleQuery = (e) => {setQuery(e.target.value)} 
    const handleSearch = () => {}

    const handleTag = (e) => {
        var url = 'https://newsapi.org/v2/everything?' +
        'q=' + e.target.value +
        '&from=2022-04-24' +
        '&sortBy=popularity' +
        '&apiKey=' + API_KEY;
        var req = new Request(url);
        fetch(req)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.articles);
                setTotal(data.totalResults);
                console.log(data);
            });
    } 
    return (
    <React.Fragment>
        <h2 className="w3-margin " >Latest News</h2>
        <form class="w3-margin-top search-container">
            <input type="text" className="w3-large" id="search-bar" onChange={handleQuery} placeholder="Search for lates News related to diseases ..." />
            <button onClick={handleSearch} className="search-icon w3-text-green w3-button w3-hover-green w3-large w3-round-xlarge" type="button">Search</button>
        </form>
        <div className=" w3-margin-left w3-margin-top" >
            <button onClick={handleTag} value="heart disease" className="w3-button w3-dark-grey w3-margin-right w3-large w3-round-xlarge">Heart</button>
            <button onClick={handleTag} value="kidney disease" className="w3-button w3-dark-grey w3-margin-right w3-large w3-round-xlarge">Kidney</button>
            <button onClick={handleTag} value="diabetes" className="w3-button w3-dark-grey w3-margin-right w3-large w3-round-xlarge">Diabeties</button>
            <button onClick={handleTag} value="heart" className="w3-button w3-dark-grey w3-margin-right w3-large w3-round-xlarge">India</button>
            <button onClick={handleTag} value="corona" className="w3-button w3-dark-grey w3-margin-right w3-large w3-round-xlarge">Corona</button>
            <button onClick={handleTag} value="breast cancer" className="w3-button w3-dark-grey w3-margin-right w3-large w3-round-xlarge">Breast Cancer</button>
        </div>
        <div className="w3-padding" >
        { articles ? articles.slice(strt,end).map((article) => (
            <div class="w3-round-large w3-light-grey news-div w3-quarter">
                {article.urlToImage ? <img className="w3-round-large img" src={article.urlToImage} alt="Avatar" /> : null }
                <div class="w3-margin-top w3-padding ">
                    <h3 className="w3-text-grey ">By {article.author} on {article.publishedAt}</h3>
                    <p className="w3-small" >{article.description}</p>
                    <br></br>
                    <br></br>
                </div>
            </div>
        )) : null}
        </div>
        <div>
            {total ? <button></button> : null}
        </div>

    </React.Fragment>
    );
}