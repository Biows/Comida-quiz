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
            ['Época dos Dinossauros','Origem da Vida','Idade da Pedra','Idade Média'],

            ['Antártida','Monte Everest', 'Grand Canion', 'Havaí'],

            ['Ir ao cinema', 'Passear de carro', 'Assistir TV', 'Dormir']
        ],
        perguntas: [
            'Se você pudesse voltar no tempo para qual época você iria?',

            'Qual lugar do mundo você prefere visitar?',
            
            'Numa tarde de Domingo você prefere:'
        ]
    },
    cod_resp: (cod) => {
        let p0 = cod[0]
        let p1 = cod[1]
        let p2 = cod[2]

        let array_combinations = [
            [
                ['um Peixe cru','um Salame','um Tomate','um Alface'],
                
                ['uma Salsicha','um Presunto','um Repolho','um Brócolis'],
                
                ['um Frango','uma Feijoada','um Arroz','uma Batata frita'],
                
                ['um Ovo frito','uma Picanha','uma Sopa de legumes','um saco de Pipoca']
            ],
            
            [
                ['um Pudim','um Bolo','um Arroz doce','uma Maçã'],

                ['uma Gelatina','um Sorvete','uma Cocada','uma Goiabada'],
                
                ['um Doce de leite','um Petit Gâteau','um Chocolate','uma Pipoca doce'],
                
                ['um Romeu e Julieta','uma Queijadinha','uma Paçoca','um Mel']
            ],
        
            [
                ['uma Ostra','um Polvo','um Espinafre','um Alho poró'],
                
                ['uma Lula','um Peixe venenoso','um Cogumelos','uma Amêndoa'],
                
                ['um Caviar','um Mexilhão','um Jiló','uma Rúcula'],
          
                ['um Chouriço','uma Sopa de morcego','um Café','um Chocolate amargo']
            ],
        
            [
                ['uma Coalhada','um Iogurte','um Limão','um Kiwi'],

                ['uma Sardinha','um Camarão','um Abacaxi','um Maracujá'],

                ['um Cheddar','um Parmesão','uma Berinjela','uma Azeitona'],

                ['um Atum','um Bacalhau','uma Carambola','um Gengibre']
            ]
        ]
              return array_combinations[p0][p1][p2]  
    },
    image_quiz:(cod)=>{
        let pi0 = cod[0]
        let pi1 = cod[1]
        let pi2 = cod[2]

        let img_array = [
            [
                ['Salgado/Peixe cru.jpg','Salgado/Salame.jpg','Salgado/Tomate.jpg','Salgado/Alface.jpg'],
                ['Salgado/Salsicha.jpg','Salgado/Presunto.jpg','Salgado/Repolho.jpg','Salgado/Brócolis.jpg'],
                ['Salgado/Frango.jpg','Salgado/Feijoada.jpg','Salgado/Arroz.jpg','Salgado/Batata frita.jpg'],
                ['Salgado/Ovo frito.jpeg','Salgado/Picanha.jpg','Salgado/Sopa de legumes.jpg','Salgado/Pipoca.jpg']
            ],
            [
                ['Doce/Pudim.jpg','Doce/Bolo.jpg','Doce/Arroz doce.jpg','Doce/Maçã.jpg'],
                ['Doce/Gelatina.jpg','Doce/Sorvete.jpg','Doce/Cocada.jpg','Doce/Goiabada.jpg'],
                ['Doce/Doce de leite.jpeg','Doce/Petit Gateau.jpg','Doce/Chocolate.jpg','Doce/Pipoca doce.jpg'],
                ['Doce/Romeu e Julieta.jpg','Doce/Queijadinha.jpg','Doce/Paçoca.jpg','Doce/Mel.jpg']
            ],
            [
                ['Amargo/Ostra.jpg','Amargo/Polvo.jpeg','Amargo/Espinafre.jpeg','Amargo/Alho poro.jpg'],
                ['Amargo/Lula.jpg','Amargo/Peixe venenoso.jpg','Amargo/Cogumelos.jpg','Amargo/Amendoa.jpg'],
                ['Amargo/Caviar.jpg','Amargo/Mexilhão.jpg','Amargo/Jilo.jpg','Amargo/Rucula.jpg'],
                ['Amargo/Chouriço.jpg','Amargo/Sopa de morcego.jpg','Amargo/Café.jpg','Amargo/Chocolate amargo.jpg'],
            ],
            [
                ['Azedo/Coalhada.jpg','Azedo/Iogurte.jpg','Azedo/Limão.jpg','Azedo/Kiwi.jpg'],
                ['Azedo/Sardinha.jpg','Azedo/Camarão.jpg','Azedo/Abacaxi.jpg','Azedo/Maracuja.jpg'],
                ['Azedo/Cheddar.jpg','Azedo/Parmesão.jpg','Azedo/Berinjela.jpg','Azedo/Azeitona.jpeg'],
                ['Azedo/Atum.jpg','Azedo/Bacalhau.jpg','Azedo/Carambola.jpg','Azedo/Gengibre.jpg']
            ]
        ]
        return img_array[pi0][pi1][pi2]
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

let cat_cod = ''
function catch_cod(n) {
    cat_cod = n
    button_color(n)
}

function send_cod() {
    quiz.codigo_resp.push(cat_cod)
}

function alter_quest() {
    button_color()
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
        }
        
    }
    
}
const name = document.querySelector('#name')
const btn_resp = document.getElementsByName('btn_resp')
const img = document.querySelector('#img')
function iniciar_quiz() {
    if (name.value == 0) {
        alert('Digite seu nome')
    } else {
        quiz.name = name.value
        alter_layout(0)
    }
}
function alter_layout(n) {
    if (n === 0) {
        document.querySelector('#inicio').setAttribute('hidden','')
        document.querySelector('#quiz').removeAttribute('hidden')
        alter_quest()
    } else {
        document.querySelector('#quiz').setAttribute('hidden','')
        document.querySelector('#result').removeAttribute('hidden')
        Show_res(quiz.codigo_resp)
        document.querySelector('#reset_quiz').removeAttribute('hidden')
    }
}

function write_data(c) {
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

function Show_res(cod) {
    const cod_resp = quiz.cod_resp(cod)
    const img_src = quiz.image_quiz(cod)
    document.querySelector('#res').innerHTML = `${quiz.name} você é <strong>${cod_resp}</strong>`
    let image = document.createElement('img')
    img.appendChild(image)
    image.setAttribute('src',`Atum.jpg`)
}

function button_color(n=''){
    for(let n_b = 0;n_b < 4; n_b++){
       btn_resp[n_b].style.backgroundColor =''
    }
    if(n.length != ''){
        btn_resp[n].style.backgroundColor = 'rgb(0 , 150, 10 , .2)'
    }   
    
}

