import styles from './crucial.module.sass'

function Crucial(props) {
    return (
        <span className={styles.crucial}>{props.txt}</span>
    )
}

export default Crucial