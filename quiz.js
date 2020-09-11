const name = document.querySelector('#name')
const btn_resp = document.getElementsByName('btn_resp')
const quiz = {
    name: '',

    codigo_resp: [],

    quant_quest: 3,

    num_quest: {
        num_perg: (contador) => {
            if (contador === 1) {
                return quiz.quests.perguntas[0]
            } else if (contador === 2) {
                return quiz.quests.perguntas[1]
            } else {
                return quiz.quests.perguntas[2]
            }
        },

        num_resp: (contador) => {
            if (contador === 1) {
                return quiz.quests.respostas[0]
            } else if (contador === 2) {
                return quiz.quests.respostas[1]
            } else {
                return quiz.quests.respostas[2]
            }
        }
    },
    quests: {
        respostas: [
            [
                'Época dos Dinossauros',
                'Origem da Vida',
                'Idade da Pedra',
                'Idade Média'
            ],
            [
                'Antártida',
                'Monte Everest', 
                'Grand Canion', 
                'Havaí'
            ],
            [
                'Ir ao cinema', 
                'Passear de carro', 
                'Assistir TV', 
                'Dormir'
            ]
        ],
        perguntas: [
            'Se você pudesse voltar no tempo. Para qual época você iria?',
            'Qual lugar do mundo você prefere visitar?',
            'Numa tarde de Domingo você prefere:'
        ]
    },
    cod_resp: (cod) => {
        let p0 = cod[0]
        let p1 = cod[1]
        let p2 = cod[2]

        let array_combinations = [
            [//salgado 0
                [//frio 0
                    'um Peixe cru',//animal 0
                    'um Salame',//animal1
                    'um Tomate',//vegetal2
                    'um Alface'//vegetal3
                ],
                [//frio 1 
                    'uma Salsicha',//animal0
                    'um Presunto',//animal1
                    'um Repolho',//vegetal2
                    'um Brócolis'//vegetal3
                ],
                [//quente2
                    'um Frango',//animal0
                    'uma Feijoada',//animal1
                    'um Arroz',//vegetal2
                    'uma porção de Batata frita'//vegetal3
                ],
                [//quente3
                    'um Ovo frito',//animal0
                    'uma Picanha',//animal1
                    'uma Sopa de legumes',//vegetal2
                    'um saco de Pipoca'//vegetal3
                ]
            ],
            
            [//doce 1
                [//frio0
                    'um Pudim',//animal0
                    'um Bolo',//animal1
                    'um Arroz doce',//vegetal2
                    'uma Maçã'//vegetal3
                ],
                [//frio1
                    'uma Gelatina',//animal0
                    'um Sorvete',//animal1
                    'uma Cocada',//vegetal2
                    'uma Goiabada'//vegetal3
                ],
                [//quente2
                    'um Doce de leite',//animal0
                    'um Petit Gâteau',//animal1
                    'um Chocolate',//vegetal2
                    'um saco de Pipoca doce'//vegetal3
                ],
                [//quente3
                    'um Romeu e Julieta',//animal0
                    'uma Queijadinha',//animal1
                    'uma Paçoca',//vegetal2
                    'um Mel'//vegetal3
                ]
            ],
        
            [//amargo 2 
                [//frio0
                    'uma Ostra',//animal0
                    'um Polvo',//animal1
                    'um Espinafre',//vegetal2
                    'um Alho poró'//vegetal3
                ],
                [//frio1
                    'uma Lula',//animal0
                    'um Peixe venenoso',//animal1
                    'um Cogumelos',//vegetal2
                    'uma Amêndoa'//vegetal3
                ],
                [//quente2
                    'um Caviar',//animal0
                    'um Mexilhão',//animal1
                    'um Jiló',//vegetal2
                    'uma Rúcula'//vegetal3
                ],
                [//quente3
                    'um Chouriço',//animal0
                    'uma Sopa de morcego',//animal1
                    'um Café',//vegetal2
                    'um Chocolate amargo'//vegetal3
                ]
            ],
        
            [//azedo 3
                [//frio0
                    'uma Coalhada',//animal0
                    'um Iogurte',//animal1
                    'um Limão',//vegetal2
                    'um Kiwi'//vegetal3
                ],
                [//frio1
                    'uma Sardinha',//animal0
                    'um Camarão',//animal1
                    'um Abacaxi',//vegetal2
                    'um Maracujá'//vegetal3
                ],
                [//quente2
                    'um Cheddar',//animal0
                    'um Parmesão',//animal1
                    'uma Berinjela',//vegetal2
                    'uma Azeitona'//vegetal3
                ],
                [//quente3
                    'um Atum',//animal0
                    'um Bacalhau',//animal1
                    'uma Carambola',//vegetal2
                    'um Gengibre'//vegetal3
                ]
            ]
        ]
              return array_combinations[p0][p1][p2]  
    }
}

const array = []

function contador(n = 1) {
    let soma = 0
    let num = n
    array.push(num)
    for (let indice in array) {
        soma = soma + array[indice]
    }
    return soma
}

function iniciar_quiz() {
    //iniciar o quiz informando o nome do usuário e chamando o alter_layout.
    if (name.value == 0) {
        alert('Digite seu nome')
    } else {
        quiz.name = name.value
        console.log(quiz.name)
        alter_layout(0)
    }
}

function alter_layout(n) {
    //alterar o layout do quiz e chamar o alter_quest.
    if (n === 0) {
        console.log('layout de perguntas')
        alter_quest()
    } else {
        console.log('layout de resultado')
        calc_res(quiz.codigo_resp)
        document.querySelector('#reset_quiz').removeAttribute('hidden')
    }
}

function write_data(c) {
    //escrever as perguntas e as respostas de acordo com o numero da questão.
    const dados_perg_quiz = quiz.num_quest.num_perg(c)
    const dados_resp_quiz = quiz.num_quest.num_resp(c)

    if (c === quiz.quant_quest) {
        document.querySelector('#btn_mp').innerHTML = 'Mostrar resultado'
    }
    document.querySelector('p').innerHTML = dados_perg_quiz

    for (let nq = 0; nq < 4; nq++) {
        btn_resp[nq].innerHTML = dados_resp_quiz[nq]
    }
}
let cat_cod = ''
function catch_cod(n) {
    //Pegar as respostas.
    cat_cod = n
}

function send_cod() {
    //enviar em forma de cod em array.
    quiz.codigo_resp.push(cat_cod)
    console.log(quiz.codigo_resp)
}

function alter_quest() {
    //alterar as perguntas e respostas, enviar o cód para o quiz.cod_resp e chamar o calc_res.
    let c = contador()
    if (cat_cod.length === 0 && c>1) {
        alert('Escolha uma alternativa para continuar o quiz.')
        c = contador(-1)
    }else{
        if(c>1 && c<=4){
            send_cod()
            cat_cod = ''
        }
        if (c > quiz.quant_quest) {
            alter_layout()
        } else {
            write_data(c)
            console.log(`pergunta ${c}`)
        }
        
    }
    
}

function calc_res(cod) {
    //chama o alter_layout, calcula o resultado e mostra para o usuário.
    const cod_resp = quiz.cod_resp(cod)
    document.querySelector('#res').innerHTML = `${quiz.name} você é <strong>${cod_resp}</strong>`
}

