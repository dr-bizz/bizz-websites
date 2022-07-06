import axios from 'axios'
import BlogArticle from './BlogArticleSmall'

class BlogTrendingArticles extends React.Component {
    state = {
        articles: []
    }
    async componentDidMount() {
        console.log("SLug:", this.props.currentBlog)
        await axios({
            method: 'GET',
            url: `http://localhost:1337/blogs?_sort=ViewCount:DESC&_limit=5&slug_ne=${this.props.currentBlog}`
        })
        .then(response => {
            this.setState({
                articles: response.data
            })

            console.log("BlogTreadingArticles data", response.data)
            console.log("Current blog", `http://localhost:1337/blogs?_sort=ViewCount:DESC&_limit=5&slug_ne=${this.props.currentBlog}`)
        })
    }
    render() {
        const {articles} = this.state
        return (
            <div className="feat-articles">
                <h4>Trending Articles</h4>
                {articles.map((blog, index) => {
                    return (
                        <BlogArticle
                            title={blog.title}
                            date={blog.publishdate}
                            image={blog.thumbnail.formats.small.url}
                            slug={blog.slug}
                            index={index}
                        />
                    )
                })}
            </div>
        )
    }
}

export default BlogTrendingArticles