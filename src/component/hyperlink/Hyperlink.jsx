import styles from './hyperlink.module.sass'

function Hyperlink(props) {
    return (
        <a className={styles.hyperlink} href={props.linkUrl}>{props.txt}</a>
    )
}

export default Hyperlink