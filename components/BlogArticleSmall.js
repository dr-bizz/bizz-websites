import Link from 'next/link'
function BlogArticle(props) {
    const {title, image, className, index, slug} = props
    return (
        <article className={ "feat-articles--article " + className} key={index}>
            <Link href="/blog/[pid]" as={`/blog/${slug}`} getServerSideProps={true} >
                <a>
                    <div  className="article--image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="article--inner">
                        <h3>{title}</h3>
                    </div>
                </a>
            </Link>
        </article>
    )
}

export default BlogArticle