import Link from 'next/link'

class BlogCollectionsContainer extends React.Component {
    state ={
        showCats: false,
    }
    render() {
        const {showCats} = this.state
        var webDevNum = 0
        var MarketingNum = 0
        return (
            <div className={showCats ? "sidebar show" : "sidebar hide"}> 
                <div class="toggle-categories"  id="catToogleJS" onClick={() => this.setState({showCats: !this.state.showCats})}>
                    <h4>{showCats ? "Hide Categories" : "Show Categories"}</h4>
                </div>
                <div className="sidebar--topics">
                    
                    <ul>
                        <li className="main-topic"><a>Design</a></li>
                        {this.props.collections.map(cat => {
                            {console.log("Categories",cat)}
                            if (webDevNum == 0 & cat.parent_collection == 7) {
                                webDevNum++
                                var headerHtml = <li className="main-topic"><a>Web Development</a></li>
                            }
                            if (MarketingNum == 0 & cat.parent_collection == 8) {
                                MarketingNum++
                                var headerHtml = <li className="main-topic"><a>Digital Marketing</a></li>
                            }
                            return (
                                <>
                                {headerHtml}
                                <li>
                                    <Link href={"/blog/category/" + cat.slug}>
                                        <a>{cat.name}</a>
                                    </Link>
                                </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BlogCollectionsContainer