import styles from './subTitle.module.sass'

function SubTitle(props) {
    return (
        <div className={styles.subTitle}>
            {props.txt}
        </div>
    )
}

export default SubTitle