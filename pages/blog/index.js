import Head from 'next/head'
import axios from 'axios'
import Header from '../../components/Header'
import BannerSmall from '../../components/BannerSmall'
import BlogArticle from '../../components/BlogArticle'
import BlogCollectionsContainer from '../../components/BlogCollectionsContainer'
import BlogArticlesContainer from '../../components/BlogArticlesContainer'
import FooterCta from '../../components/FooterCta'
import Footer from '../../components/Footer'

class Blog extends React.Component {
    state = {
        fetchedBlogs: [],
        featuredBlogs: [],
        collections: [],
    }
    

    async componentDidMount() {
        const blogsRes = await axios({
            method: 'GET',
            url: 'http://localhost:1337/blogs/'
        })
        .then(response => {
            // console.log("Pulled Blogs. Response: ",response.data)
            this.setState({featuredBlogs: response.data.slice(0, 2)})
            this.setState({fetchedBlogs: response.data.slice(2)})
        })
        .catch(error => {
            // console.log("Error While pulling blogs ",error)
        })

        const collectionsRes = await axios({
            method: 'GET',
            url: 'http://localhost:1337/collections/?_sort=parent_collection:ASC&_start=3'
        })
        .then(response => {
            // console.log("Pulled Collections. Response: ",response.data)
            this.setState({collections: response.data})
        })
        .catch(error => {
            // console.log("Error While pulling collections ",error)
        })
    }

    formatDate = async (date) => {
        const d = new Date(date);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()
    }

    render(){
        // Call the Blog API,
        // List the blogs
        const {featuredBlogs, fetchedBlogs, collections} = this.state

        // console.log(fetchedBlogs)

        return (
            <>
                <Head>
                    <title>Bizz Websites Blog | Creative Web Solutions</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Header />
                <BannerSmall
                    title="Blog"
                    subtitle="Next Level Web Development"
                    para="Something about Bloging"
                />


                <section className="featured">
                    <div className="page-container article">

                    {featuredBlogs.map((blog, index) => {
                        if (index == 1) {
                            var className = "featured--blog--two"
                        } else {
                            var className = "featured--blog"
                        }
                        return (
                            <BlogArticle
                                title={blog.title}
                                categories={blog.collections}
                                date={blog.publishdate}
                                image={blog.thumbnail.formats.small.url}
                                introText={blog.IntroText}
                                className={className}
                                slug={blog.slug}
                                index={index}
                                
                            />
                        )
                    })}

                    </div>
                </section>



                <section className="articles">
                    <div className="page-container">
                        <BlogCollectionsContainer
                            collections={collections}
                        />
                        <BlogArticlesContainer
                            blogs={fetchedBlogs} />
                    </div>
                </section>


                <FooterCta
                    class="light-blue-bg"
                />

                <Footer />

            </>
        )
    }
}


export default Blog