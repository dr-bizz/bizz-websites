class Reviews extends React.Component {
    render(){
        return (
            <div className="reviews--quoted">
                <div className="reviews--quoted--inner">
                    <img src={this.props.image} alt={this.props.name} />
                    <div className="reviews--details">
                        <h6 className="reviews--details--company">{this.props.company}</h6>
                        <h4 className="reviews--details--author">{this.props.name}</h4>
                        {this.props.website &&
                            <a className="reviews--details--link" href={this.props.website} target="_blank">View Website</a>
                        }
                    </div>
                    <div className="reviews--content">
                        {this.props.review}
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews