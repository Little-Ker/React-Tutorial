import styles from './dotItem.module.sass'

function DotItem(props) {
    return (
        <div className={styles.dotItem}>
            {props.txt}
        </div>
    )
}

export default DotItem