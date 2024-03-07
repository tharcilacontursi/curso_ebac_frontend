function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

function ProdutoEletronico (nome, preco, marca){
    Produto.call(this, nome, preco);
    this.marca = marca;

    
}

function ProdutoAlimenticio (nome, preco, marca, validade){
    Produto.call(this, nome, preco);
    this.marca = marca;
    this.validade = validade;

}

const eletronico1 = new ProdutoEletronico ("celular", 5000 , "samsung");
const eletronico2 = new ProdutoEletronico ("televisao", 10000, "LG");
const alimento1 = new ProdutoAlimenticio ("bala",3 , "Fini", "10/2028");
const alimento2 = new ProdutoAlimenticio ("chocolate", 8, "Garoto", "9/2030");

console.log(eletronico1);
console.log(eletronico2);


console.log(alimento1);
console.log(alimento2);



