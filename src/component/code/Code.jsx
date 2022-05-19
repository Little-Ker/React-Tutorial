import ReactEmbedGist from 'react-embed-gist'
import React from "react"
import PropTypes from 'prop-types'
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

Code.propTypes = {
    codeUrl: PropTypes.string.isRequired,
}

export default Code