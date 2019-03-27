

//função que converte o valor dos preço e desconto(float) para o valor monetária (String)
function converteFloatMoeda(valor){

      let inteiro, decimal, aux1, aux2;
      let vetor = [];
      valor = "" + valor;
      aux1 = valor.indexOf(".", 0);
      //encontrou o ponto na string
      if(aux1 > 0){
         //separa as partes em inteiro e decimal
         inteiro = valor.substring(0, aux1);
         decimal = valor.substring(aux1 + 1, valor.length);
      }else{
         inteiro = valor;
      }
      
      //pega a parte inteiro de 3 em 3 partes
      for (aux2 = inteiro.length, aux1 = 0; aux2 > 0; aux2 -= 3, aux1++){
         vetor[aux1] = inteiro.substring(aux2 - 3, aux2);
      }
      
      //percorre a string acrescentando os pontos
      inteiro = "";
      for(aux1 = vetor.length - 1; aux1 >= 0; aux1--){
         inteiro += vetor[aux1] + '.';
      }
      //retirando o ultimo ponto e finalizando a parte inteiro
      
      inteiro = inteiro.substring(0, inteiro.length - 1);
      
      decimal = parseInt(decimal);
      if(isNaN(decimal)){
         decimal = "00";
      }else{
         decimal = "" + decimal;
         if(decimal.length === 1){
            decimal = decimal + "0";
         }
      }
      
      
      valor = "R$ " + inteiro + "," + decimal;
      
      
      return valor;

   }

//função responsavel por fechar o rodapé
function fechar(){
    container.style.display = 'none';
}

let index = product.name.indexOf('-')
let Produto = {
        ref: product_sku,	 
	nome : product.name.substring(0, index).toUpperCase(),
	imagem : product.img,
	preco : product.price,
	desconto : product.price - product.price * 0.1
	}

function botaoCompra(){
   
document.querySelector('.product__add-to-cart').click();

}





Produto.desconto=converteFloatMoeda(Produto.desconto);
Produto.preco=converteFloatMoeda(Produto.preco);

//criaçao do link do bootstrap
let link = document.createElement('link');
document.head.appendChild(link);
link.setAttribute('rel','stylesheet');
link.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');

//Divs para o grid

let container = document.createElement('div');
container.id = 'div-container';
document.body.appendChild(container);
container.setAttribute('class', 'container');

//let rodape = document.createElement('rodape');
//rodape.id = 'rodape';
//container.appendChild(rodape);
//rodape.setAttribute('class', 'row');

function criarTag(idTag, classTag, tagAppend, tipoTag){

nomeTag = document.createElement(tipoTag);
nomeTag.id = idTag;
tagAppend.appendChild(nomeTag);
nomeTag.setAttribute('class', classTag);
return nomeTag;

}


let rodape = criarTag('rodape', 'row', container, 'footer');
let divImg = criarTag('div-imagem', 'col-1', rodape, 'figure');
let divInf = criarTag('div-infProd', 'col-7', rodape, 'aside');
let divBt = criarTag('div-button', 'col-3', rodape, 'div');
let divBt2 = criarTag('div-button-close', 'col-1', rodape, 'div');




//Conteudo Rodapé
let imagem = document.createElement('img');
imagem.setAttribute('src', Produto.imagem);
divImg.appendChild(imagem);

let nome = document.createElement('p');
nome.id = 'nome';	
divInf.appendChild(nome); 
document.getElementById('nome').innerText = Produto.nome;

let precoReal = document.createElement('p');
precoReal.id = 'precoReal';
divInf.appendChild(precoReal);
precoReal.innerText = "Preço: " + Produto.preco;

let desconto = document.createElement('p');
desconto.id = 'desconto';
divInf.appendChild(desconto);
desconto.innerText = "Preço com Desconto: " + Produto.desconto;

let botao  = document.createElement('button');
botao.id = 'botao';
divBt.appendChild(botao);
botao.setAttribute('class', 'button');
botao.setAttribute('onclick', 'botaoCompra()');
botao.innerText = 'Adicionar à Sacola';

let close = document.createElement('button');
close.id = 'button-close';
divBt2.appendChild(close);
close.innerText = 'X'
close.setAttribute('onclick','fechar()');
close.style.marginRight = '40px'
close.style.marginBotton = '50px';



//CSS

imagem.style.margin = '10px 0px 10px 0px';
container.style.position = 'fixed';
container.style.bottom = 0;
container.style.zIndex=10000;
container.style.backgroundColor = 'white';
container.style.borderTop = '1px solid';
precoReal.style.fontSize = '12px';
desconto.style.fontSize = '12px';
divInf.style.marginTop = '15px';
botao.style.marginTop = '30px';
botao.style.width = '300px';
close.style.marginLeft = '50px'
close.style.marginBotton = '50px';
