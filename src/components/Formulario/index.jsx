import { useState, useEffect } from "react"

const Formulario = () => {
    let [getMateriaA, setMateriaA] = useState(0)
    let [getMateriaB, setMateriaB] = useState(0)
    let [getMateriaC, setMateriaC] = useState(0)
    let [nome, setNome] = useState('')

    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, []) // quando está vazio, executa apenas no início

    useEffect(() => {
        console.log("O estado nome mudou")
    }, [nome]) // a lista é a condição de execução

    useEffect(() => {
        console.log("Matéria A mudou para " + getMateriaA)
    }, [getMateriaA])

    const alterarNome = (evento) => {
        //setNome(evento.target.value)
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = getMateriaA + getMateriaB + getMateriaC
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado!</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado!</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            {/*recebe os valores*/}
            <input type="text" placeholder="Seu nome" onChange={alterarNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={({target}) => setMateriaB(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={({target}) => setMateriaC(parseInt(target.value))}/>
            {renderizaResultado()}

            {/*mostra os valores em tempo real*/}
            {getMateriaA}
            {getMateriaB}
            {getMateriaC}
        </form>
    )
}

export default Formulario