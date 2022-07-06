export default function Wysiwyg (props) {
    return (
        <section className={"wysiwyg " + props.pageWidth}>
            <div className="page-container">
                {props.code}
            </div>
        </section>
    )

}


