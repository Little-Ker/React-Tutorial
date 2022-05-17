import styles from './img.module.sass'

function Img(props) {
    return (
        <div className={styles.img}>
            <img src={props.imgUrl} alt="" />
        </div>
    )
}

export default Img