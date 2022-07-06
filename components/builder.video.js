class BuilderVideo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            triggered: false,
            videoURL: ""
        }
    }
    componentDidMount(){
        let YTVideo = "https://www.youtube.com/embed/" + this.props.url + "?rel=0"

        this.setState({
            videoURL: YTVideo
        })
    }

    handleClick = (e) => {
        this.setState({
            triggered: !this.state.triggered
        })
    }

    closePopup = () => {
        this.setState({
            triggered: false
        })
    }

    render() {
        const {triggered, videoURL} = this.state
        let background = "url(" + this.props.thumbnail + ")"
        return(
            <section className="video">
                <div className="page-container">
                    <div
                    className="video-player-trigger"
                    onClick={this.handleClick}
                    style={{backgroundImage: background}}>
                        <img src="/icon-play-white.svg" alt="play button" />
                    </div>
                </div>
                <div className={triggered ? "video-player-fullscreen zoomed" : "video-player-fullscreen"}>
                    <div className="player-container">
                        <div className="player-inner-wrap">
                            <div className="iframe-wrapper">
                                {triggered &&
                                    <>
                                        <div className='close-btn' onClick={this.handleClick}></div>
                                        <iframe src={videoURL + "&HD=1&amp;autoplay=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;color=31A8DD"} width='100%' height='100%' frameborder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''></iframe>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BuilderVideo