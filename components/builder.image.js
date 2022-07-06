class BuilderImage extends React.Component {
    render() {
        return(
            <section className="image ">
                <div className="page-container">
                    <img src={this.props.src} alt={this.props.alt} />
                    <span className="image--caption">{this.props.alt}</span>
                </div>
            </section>
        )
    }
}

export default BuilderImage