import React, { useState, useEffect } from 'react'
import axiosInstance from '../plugins/axios'

import LoadingArticle from '../components/LoadingArticle';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch9newsArticles()
    fetchMntArticles()
    fetchMsnArticles()
  }, []);

  const fetch9newsArticles = async () => {
    await axiosInstance.get("/9news")
      .then((response) => {
        setArticles(response.data.data);
        setisLoading(false)
      }).catch(() => {
        setisLoading(false)
      })
  }

  const fetchMntArticles = async () => {
    await axiosInstance.get("/medicalnewstoday")
      .then((response) => {
        setArticles(articles => articles.concat(response.data.data));
      }).catch(() => {
        return
      })
  }

  const fetchMsnArticles = async () => {
    setisLoading(true)
    await axiosInstance.get("/msn")
      .then((response) => {
        setArticles(articles => articles.concat(response.data.data));
      }).catch(() => {
        return
      })
  }

  return (
    <section className="m-8" data-name="news">
      {isLoading
        ? <LoadingArticle></LoadingArticle>
        :
        <div className="wrapper flex flex-wrap justify-between">
          {articles.map((article, index) => (
            <a href={article.url} rel="noopener noreferrer" target="_blank">
              <div className="article bg-white hover:bg-gray-100 rounded-md shadow-lg w-76 h-article" key={index}>
                <div className="image">
                  <img src={article.image} className="picture rounded-t-md" alt="" srcSet="" />
                </div>
                <div className="content p-4">
                  <div className="font-light text-sm text-gray-600">{article.website}</div>
                  <div className="title text-lg font-bold">
                    {article.title}
                  </div>
                  <div className="detail font-light mt-2 mb-10">
                    {article.subtitle}
                  </div>
                </div>
                <div className="font-light text-sm text-gray-600">
                  <div className="datetime">{article.upload_at}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      }
    </section>
  )
}

export default News
