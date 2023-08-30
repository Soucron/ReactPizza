import  styles from './NotFoundBlock.module.scss'
export const NotFoundBlock = () => {
    return (
        <h1 className={styles.root}>
            <br/>
            <h1>Ничего не найдено</h1>
            <p className={styles.description}>К сожалению данная страница отсутствует в нашем магазине</p>
        </h1>
    )
}