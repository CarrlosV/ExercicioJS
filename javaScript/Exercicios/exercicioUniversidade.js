function Professor() {
    let nome;
    let matrícula;
    let cpf;
    let salario;

    this.getImpostoDeRenda = () =>{
        return salario*0.2;
    };

    this.getNome = () => {
        return nome
    };

    this.setNome = n => {
        nome = n;
    };

    this.getSalario = () => {
        return salario
    };

    this.setSalario = s => {
        salario = s;
    };
}
function Diretor(){
    let nome;
    let matricula;
    let cpf;
    let salario;
    let tempoDeCasa;

    this.getImpostoDeRenda = () =>{
        return salario*0.23;
    }

    this.getNome = () => {
        return nome
    };

    this.setNome = n => {
        nome = n;
    };

    this.getSalario = () => {
        return salario
    };

    this.setSalario = s => {
        salario = s;
    };
}

const p1 = new Professor();
p1.setNome('Fulano');
p1.setSalario(100);
console.log(p1);
console.log(p1.getImpostoDeRenda());

const d1 = new Diretor();
d1.setNome('Fulano');
d1.setSalario(1000);
console.log(d1);
console.log(d1.getImpostoDeRenda());



