import Link from 'next/link'
function BlogArticle(props) {
    const {title, categories, date, image, introText, className, index, slug} = props
    return (
        <article class={className} key={index}>
            <Link href="/blog/[pid]" as={`/blog/${slug}`} getServerSideProps={true} >
                <a>
                    <div className="article--categories">
                        {categories.map(cat => {
                            return (<span>{cat.name}</span>)
                        })}
                    </div>
                    <div  className="article--image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="article--inner">
                        <h3>{title}</h3>
                        <span className="article--date">{FormatDate(date)}</span>
                        {introText &&
                            <p>{introText}</p>
                        }
                    </div>
                </a>
            </Link>
        </article>
    )
}

function FormatDate(datetime) {
    const newDate = new Date(datetime)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return Number.isNaN(newDate) ? "" : newDate.toLocaleDateString('en-US', options)
}
export default BlogArticle