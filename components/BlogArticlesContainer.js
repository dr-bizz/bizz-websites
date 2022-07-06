import BlogArticle from './BlogArticle'

function BlogArticlesContainer(props) {
    const {blogs} = props
    return (
        <div className="article">
            {blogs.map((blog, index) => {
                return (
                    <BlogArticle
                        title={blog.title}
                        categories={blog.collections}
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
export default BlogArticlesContainer