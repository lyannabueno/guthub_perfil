import styles from './Perfil.module.css'

// export default function() {}
//export default () => {
const Perfil = ({ nomeUsuario }) => {// desestruturação
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/> 
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil