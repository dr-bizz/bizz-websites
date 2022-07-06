import Wysiwyg from './builder.text-area'
import Video from './builder.video'
import Image from './builder.image'
function BlogContent(props){
    const {content} = props
    return (
        content.map((section, index) => {

            if (section.__component == "builder.text-area") {
                return (
                    <Wysiwyg
                        code={section.wysiwyg}
                    />
                )
            }
            if (section.__component == "builder.video") {
                return (
                    <Video
                        url={section.youtubelink}
                        thumbnail={section.thumbnail[0].formats.medium.url}
                    />
                )
            }

            if (section.__component == "builder.image") {
                let altText
                if (section.alt_text != "") {
                    altText = section.alt_text
                } else {
                    altText = section.picture[0].alternativeText
                }
                return (
                    <Image
                        src={section.picture[0].formats.medium.url}
                        alt={altText}
                    />
                )
            }
        
        })
    )
}

export default BlogContent