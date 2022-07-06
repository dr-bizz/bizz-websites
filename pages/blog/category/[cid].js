import axios from 'axios'
import Head from 'next/head'
import Header from '../../../components/Header'
import BannerSmall from '../../../components/BannerSmall'
import BlogArticlesContainer from '../../../components/BlogArticlesContainer'

import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';

const Category = () => {
  const router = useRouter()
  const { cid } = router.query
  const [category, setCategory] = useState({})
  const [blogs, setBlogs] = useState([])
  const [startValue, setStartValue] = useState(0)
  const [MoreBlogs, setMoreBlogs] = useState(true)
  useEffect(() => {
    if (router.asPath !== router.route) {
        // router.query.lang is defined
        console.log("Category Single - Router is defined",router )
        const fetchData = async () => {
            const blogRes = await axios({
                method: 'GET',
                url: `http://localhost:1337/collections/?slug=${router.query.cid}`
            })
            .then(async (res) => {
                console.log("fetchedCategory", res.data[0])
                setCategory(res.data[0])

                const CategoryBlogsRes = await axios({
                    method: 'GET',
                    url: `http://localhost:1337/blogs/?collections.id=${res.data[0].id}&_start=0&_limit=10`
                })
                .then(response => {
                    if (response.data.length == 0) {
                        console.log("Empty")
                        setMoreBlogs(false)
                    } else {
                        console.log(`fetchedBlogs`, response.data)
                        setBlogs(response.data)
                        setStartValue(10)
                    }
                })
            })
        }
        fetchData()
    }
  }, [router])
  console.log("Render")
  let showBlogs
  if (blogs.length >= 0) {
    showBlogs = true
  } else {
    showBlogs = false
  }

function loadMoreBlogs() {
    console.log("loadMoreBlogs Load More Blogs", startValue)
    axios({
            method: 'GET',
            url: `http://localhost:1337/blogs/?collections.id=${category.id}&_start=${startValue}&_limit=10`
        })
        .then(response => {
            if (response.data.length == 0) {
                console.log("Empty")
                setMoreBlogs(false)
            } else {
                console.log(`fetchedMOREBlogs`, response.data)
                const newBlogs = blogs.concat(response.data);
                setBlogs(newBlogs)
            }
        }).catch(res => {
            console.log("CAn't get more blogs", res)
        })
    
    setStartValue(10 + startValue)
    console.log("New Start value", startValue)
}

  return ( 
        <>
            <Head>
                <title>Bizz Websites Blog | Creative Web Solutions</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            
            <BannerSmall
                title={category.name}
                subtitle="Bizz Website's Blog"
                // para={blog.IntroText}
                para="Short intro to the category, such as UX."
            />

            
            {showBlogs &&
                <>
                    <section className="articles full-width">
                        <div className="page-container">
                            <BlogArticlesContainer  
                            blogs={blogs} />
                        </div>
                    </section>
                    <section className="articles__more-blogs">
                        <div className="page-container">
                            {MoreBlogs &&
                                <button className="button" onClick={() => loadMoreBlogs()}>Load More BLogs</button>
                            }
                            {!MoreBlogs &&
                                <button className="button" disabled>All Blogs loaded :)</button>
                            }
                        </div>
                    </section>
                    
                </>
            }
                
            

            

        </>
    )
}

export default Category