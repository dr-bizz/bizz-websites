import axios from 'axios'
import Head from 'next/head'
import Header from '../../components/Header'
import BannerSmall from '../../components/BannerSmall'
import BlogContent from '../../components/BlogContent'
import BlogTrendingArticles from '../../components/BlogTrendingArticles'

import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  const [blog, setBlog] = useState({})
  const [author, setAuthor] = useState({})
  const [content, setContent] = useState({})
  const [categories, setcategories] = useState('')
  useEffect(() => {
    if (router.asPath !== router.route) {
        // router.query.lang is defined
        console.log("Router is defined",router )
        const fetchData = async () => {
            const blogRes = await axios({
                method: 'GET',
                url: `http://localhost:1337/blogs?slug=${router.query.pid}`
            })
            .then(response => {
                console.log("fetchedBlog", response.data[0])
                setBlog(response.data[0])
                var cats = ""
                {response.data[0].collections.map((cat, index) => {
                    if (index > 0) {
                        cats += " | " + cat.name
                    } else {
                        cats += cat.name
                    }
                })}
                setcategories(cats)
                setAuthor(response.data[0].author.Name)
                setContent(response.data[0].content)
            })
        }
        fetchData()
    }
  }, [router])
  console.log("Render")
  let showContent
  if (content.length >= 1) {
    showContent = true
  } else {
    showContent = false
  }
  return (
      
        <>
            <Head>
                <title>{blog.title} | Bizz Websites Blog</title>
                <meta property="og:title" content={blog.title + " | Bizz Websites Blog"} />
                <meta property="og:description" content={blog.IntroText} />
                <meta property="og:url" content={"https://www.bizz-websites.com/" + router.query.pid} />
                {showContent &&
                    <meta property="og:image" content={blog.thumbnail.formats.medium.url} />
                }
            </Head>

            <Header />
            
            <BannerSmall
                title={blog.title}
                subtitle={categories}
                para={"By " + author + " | " + FormatDate(blog.created_at)}
            />

            <section class="blog-content">
                <div class="page-container col-2">
                    <div class="main">
                    {showContent &&
                        <BlogContent 
                            content={content}
                        />
                    }
                    </div>
                    <div class="side">
                        <BlogTrendingArticles
                            currentBlog={router.query.pid}
                        />
                    </div>
                </div>
            </section>




        </>
    )
}

function FormatDate(datetime) {
    const newDate = new Date(datetime)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return Number.isNaN(newDate) ? "" : newDate.toLocaleDateString('en-US', options)
}

export default Post