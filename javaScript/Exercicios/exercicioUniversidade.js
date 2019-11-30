class Funcionario {
    _nome;
    _cpf;
    _salario;
    _matricula;

    constructor(matricula) {
        this.matricula = matricula;
    }

    get nome() {
        return this._nome;
    };

    get salario() {
        return this._salario;
    };

    set nome(nome) {
        this._nome = nome;
    };

    set salario(salario) {
        this._salario = salario;
    };

    get cpf() {
        return this._cpf;
    };

    set cpf(numeroCPF) {
        this._cpf = numeroCPF;
    };

    get matricula() {
        return this._matricula;
    };

    set matricula(matricula) {
        this._matricula = matricula;
    };
}

class Professor extends Funcionario {
    anoDeAdmissao;

    constructor(matricula) {
        super(matricula);
    }

    getImpostoDeRenda = () => super.salario * 0.2;

    set setAnoDeAdmissao(ano) {
        this.anoDeAdmissao = ano;
    }
}

class Diretor extends Funcionario {
    _tempoDeCasa;

    constructor(matricula) {
        super(matricula);
    }

    getImpostoDeRenda = () => {
        return super.salario * 0.23;
    };

    set tempoDeCasa(tempo) {
        this._tempoDeCasa = tempo;
    }

    get tempoDeCasa() {
        return this._tempoDeCasa;
    }
}

let funcionarios = [];

const diretor = new Diretor(2073);
diretor.nome = "Wilson";
diretor.salario=1000;
funcionarios.push(diretor);

const professor= new Professor(123);
professor.anoDeAdmissao=2014;
professor.salario=900;
professor.cpf = '12345';
funcionarios.push(professor);

const professor2= new Professor(123);
professor2.anoDeAdmissao=2014;
professor2.salario=1100;
professor2.cpf = '123456';
professor2.nome='Carlos';
funcionarios.push(professor2);

function somarImpostosDeRenda() {
    let somaDosImpostosDeRenda=0;
    for (let i in funcionarios) {
        let funcionario = funcionarios[i];
        somaDosImpostosDeRenda += funcionario.getImpostoDeRenda();
    }
    return somaDosImpostosDeRenda;
}

const mediaDoImpostoDeRenda = (somarImpostosDeRenda()/ funcionarios.length );
console.log(mediaDoImpostoDeRenda);