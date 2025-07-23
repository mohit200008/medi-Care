import React, { useState, useEffect } from 'react';
import "../../../styles/News.css";
import "../../../styles/w3.css";

const News = () => {
    // Note: This API key might be expired or have usage limits
    // Consider using environment variables for production
    const API_KEY = "acae411d28db4d8b98724b12c2e7c417";
    const [query, setQuery] = useState('');
    const [articles, setArticles] = useState([]);
    const [strt,setStrt] = useState(0);
    const [end,setEnd] = useState(4);
    const [total,setTotal] = useState(0);
    const [currentTag,setCurrentTag] = useState("heart disease");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        handleRequest(currentTag);
    },[currentTag])

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
    
    const handleSearch = () => { 
        if (query.trim()) {
            handleRequest(query); 
            setCurrentTag(query); 
        }
    } 
    
    const handleTag = (e) => { 
        handleRequest(e.target.value); 
        setCurrentTag(e.target.value); 
    }
    
    const handleRequest = (q) => {
        setLoading(true);
        setError(null);
        
        var url = 'https://newsapi.org/v2/everything?' +
        'q=' + q +
        '&searchin=title' +
        '&sortBy=popularity' +
        '&apiKey=' + API_KEY;
        var req = new Request(url);
        fetch(req)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.status === 'error') {
                    throw new Error(data.message || 'API Error');
                }
                setArticles(data.articles || []);
                if (data.articles && data.articles.length < 4) {
                    console.log("less than 4 articles found");
                }
                setTotal(data.articles ? data.articles.length : 0);
                console.log(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
                setError(error.message);
                setLoading(false);
                setArticles([]);
                setTotal(0);
            });
    } 
    
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-8"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="bg-white rounded-lg shadow-lg p-6">
                                    <div className="h-48 bg-gray-300 rounded mb-4"></div>
                                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Health News</h2>
                        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                            <div className="text-6xl mb-4">📰</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Unable to Load News
                            </h3>
                            <p className="text-gray-600 mb-4">
                                We're experiencing issues loading the latest health news. This might be due to:
                            </p>
                            <ul className="text-left text-gray-600 space-y-2 mb-6">
                                <li>• API rate limits or service issues</li>
                                <li>• Network connectivity problems</li>
                                <li>• Temporary service maintenance</li>
                            </ul>
                            <button 
                                onClick={() => handleRequest(currentTag)}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Latest Health News
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Stay updated with the latest developments in healthcare, medical research, and wellness.
                    </p>
                </div>

                {/* Search Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <input 
                                type="text" 
                                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                onChange={handleQuery} 
                                placeholder="Search for health news..." 
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <button 
                            onClick={handleSearch} 
                            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Search
                        </button>
                    </div>
                </div>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {[
                        { value: "heart disease", label: "Heart Health" },
                        { value: "kidney disease", label: "Kidney Health" },
                        { value: "diabetes", label: "Diabetes" },
                        { value: "breast cancer", label: "Breast Cancer" }
                    ].map((category) => (
                        <button 
                            key={category.value}
                            onClick={handleTag} 
                            value={category.value}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                currentTag === category.value
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Current Topic */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 capitalize">
                        {currentTag}
                    </h3>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {articles && articles.length > 0 ? articles.slice(strt,end).map((article, index) => (
                        <div key={article.url + index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                            {/* Article Image */}
                            <div className="relative h-48 overflow-hidden">
                                {article.urlToImage ? (
                                    <img 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                                        src={article.urlToImage} 
                                        alt={article.title}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                ) : null}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center" style={{ display: article.urlToImage ? 'none' : 'flex' }}>
                                    <span className="text-white text-4xl">📰</span>
                                </div>
                            </div>
                            
                            {/* Article Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {article.title}
                                </h3>
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <span>By {article.author || 'Unknown'}</span>
                                    <span className="mx-2">•</span>
                                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                                </div>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    {article.description}
                                </p>
                                <a 
                                    href={article.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group"
                                >
                                    Read More
                                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-full text-center py-12">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                No articles found
                            </h3>
                            <p className="text-gray-600">
                                No articles found for "{currentTag}". Try a different search term or category.
                            </p>
        </div>
                    )}
                </div>

                {/* Pagination */}
                {total > 4 && (
                    <div className="text-center">
                        <div className="text-lg font-semibold text-gray-800 mb-4">
                            Page {Math.ceil(end/4)} of {Math.ceil(total/4)}
                        </div>
                        <div className="flex justify-center gap-2">
                            {PageNumbers.map((i) => (
                                <button 
                                    key={i} 
                                    value={i} 
                                    onClick={handlePage} 
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                        Math.ceil(end/4) === i
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                    }`}
                                >
                                    {i}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
        </div>
    </div>
    );
}

export default News;
