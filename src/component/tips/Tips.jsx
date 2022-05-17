import styles from './tips.module.sass'

function Tips(props) {
    return (
        <div className={styles.tips}>
            {props.txt}
        </div>
    )
}

export default Tips