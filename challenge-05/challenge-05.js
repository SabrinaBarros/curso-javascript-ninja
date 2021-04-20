/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var newvar = [
    13,
    'sasa',
    false,
    null,
    2 + 5
];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function newfun (ary) {
    return ary 
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
//console.log(newfun(newvar)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function fun1 (ary, numero) {

    return ary[numero]
}

//console.log(fun1(newvar, 2));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newary = [
    'olleh',
    13,
    true,
    null,
    function () {}
]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

//console.log(fun1(newary, 0));
//console.log(fun1(newary, 1));
//console.log(fun1(newary, 2));
//console.log(fun1(newary, 3));
//console.log(fun1(newary, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (bookname) {
     var obj = {
        'book1':{
            quantidadeDePaginas: 200,
            autor: 'Jaco',
            editora: 'numZei'
        },
        'book2':{
            quantidadeDePaginas: 300,
            autor: 'Jesus',
            editora: 'SaveUs'

        },
        'book3':{
            quantidadeDePaginas: 400,
            autor: 'Sasa',
            editora: 'So Foda Na Cama Te Esculacho'
        }
    };


    return !bookname ? obj : obj[bookname];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
//console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookThree  = 'book3'
console.log('O livro ' + bookThree + ' tem ' + book(bookThree).quantidadeDePaginas + ' paginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O nome do autor do livro ' + bookThree + ' é ' + book(bookThree).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookThree + ' foi publicado pela editora ' + book(bookThree).editora);
