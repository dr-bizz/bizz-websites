import showdown from 'showdown'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 
class BuilderTextArea extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content: ""
        }
    }
    componentDidMount(){
        let converter = new showdown.Converter()
        let formattedCode = converter.makeHtml(this.props.code)

        this.setState({
            content: formattedCode
        })
    }

    render() {
        return(
            <section className="wysiwyg ">
                { ReactHtmlParser(this.state.content) }
            </section>
        )
    }
}

export default BuilderTextArea