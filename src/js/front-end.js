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
    image.setAttribute('src',`/img/${img_src}`)
}

function button_color(n=''){
    for(let n_b = 0;n_b < 4; n_b++){
       btn_resp[n_b].style.backgroundColor =''
    }
    if(n.length != ''){
        btn_resp[n].style.backgroundColor = 'rgb(0 , 150, 10 , .2)'
    }   
    
}

