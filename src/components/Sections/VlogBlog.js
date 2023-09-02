import React from 'react';
//import axios from 'axios';
import './VlogBlog.scss';
import { Medium } from './Projects/Blogs';
import { YoutubeLinks } from './Projects/Vlogs';

function VlogBlog() {
  //const [articles, setArticles] = useState([]);
  /*const articleIds = [
       "141e6da7391a", "5d97bb5b5f76", "2d61c0462f92", "4f50fb93c03", "1b84a5055494", 
  ];*/

  const articles = Medium;

  /*
  useEffect(() => {
    const fetchArticleDetails = async (articleId) => {
      const options = {
        method: 'GET',
        url: `https://medium2.p.rapidapi.com/article/${articleId}`,
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAllArticles = async () => {
      const allArticles = [];
      for (let id of articleIds) {
        const article = await fetchArticleDetails(id);
        allArticles.push(article);
      }
      setArticles(allArticles);
    };

    fetchAllArticles();
  }, []);
  */

  return (
    <div className="VlogBlog" id="life-long-learner">
      <div className="left-div">
        <h2>Selected Blogs in Medium</h2>
          {articles.map((article, index) => (
            <a 
              key={index} 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='posts'
              loading="lazy"
            >
              <h3>{article.title}</h3>
              <p>{article.subtitle}</p>
            </a>
          ))}
        </div>
        <div className="right-div">
        <iframe 
          width="350" 
          height="265" 
          src= {YoutubeLinks[1]}
          title="Description"
          frameborder="0" 
          loading="lazy"
          allowFullScreen>
        </iframe>
        <iframe 
          width="350" 
          height="265" 
          src= {YoutubeLinks[0]}
          title="Description"
          frameborder="0" 
          loading="lazy"
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
}

export default VlogBlog;
