import styles from './title.module.sass'

function Title(props) {
    return (
        <div className={styles.title}>
            {props.txt}
        </div>
    )
}

export default Title