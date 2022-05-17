import styles from './menu.module.sass'
import clsx from 'clsx'

function Menu(props) {
    const preData = props.data.prev
    const nextData = props.data.next

    return (
        <div className={styles.menu}>
            <div className={clsx(styles.btn, preData.title === '' && styles.btnHide)}>
                <div className={styles.arrow}>
                    <p>Prev</p>
                </div>
                <p className={styles.txt}>{preData.title}</p>
            </div>
            <div className={clsx(styles.btn, styles.rightBtn, nextData.title === '' && styles.btnHide)}>
                <div className={styles.arrow}>
                    <p>Next</p>
                </div>
                <p className={styles.txt}>{nextData.title}</p>
            </div>
        </div>
    )
}

export default Menu