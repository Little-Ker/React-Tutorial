import ReactEmbedGist from 'react-embed-gist'
import styles from './code.module.sass'

function Code(props) {
    return (
        <div className={styles.code}>
            <ReactEmbedGist
                gist={`Little-Ker/${props.codeUrl}`}
            />
        </div>
    )
}

export default Code