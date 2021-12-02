import './App.css';
import React from "react";

import Card from './components/layout/Card';
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from './components/basicos/ComParametro';


export default (_) => (
    <div className="App">
        <h1>Fundamentos React!</h1>
        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente"color="#6433FF">
                <Primeiro />
            </Card>
        </div>
        <div className="Cards">
            <Card titulo="#02 - Com Parâmetro"color="#CD5C5C">
                <ComParametro
                titulo="Situação do aluno"
                aluno="Daniel"
                nota={8.3}
                />
            </Card>
            <Card titulo="#02 - Com Parâmetro"color="#FFBF00">
                <ComParametro
                titulo="Situação do aluno"
                aluno="Cure"
                nota={9.3}
                />
            </Card>
        </div>
    </div>
);
