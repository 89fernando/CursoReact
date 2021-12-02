import React from "react"

export default function (props){
    const status = props.nota >=7 ? 'Aprovado' : 'Reprovado'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h1>{ props.titulo}</h1>
            <p>
                <strong>{props.aluno} </strong> 
                tem nota 
                <strong> { notaInt } </strong>
                e está
                <strong> {status} </strong>
            </p>
        </div>
    )
}