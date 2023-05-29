function relogio() {

    var img = document.getElementById("imagem")


    const espacoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();

    const horas = horaAgora.getHours();
    const minutos = horaAgora.getMinutes();
    const segundos = horaAgora.getSeconds();

     const formatoHora = horas.toString().padStart(2, "0");

    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora}:${formatoMinutos}:${formatoSegundos}`;

    const frase = document.querySelector('.frase');

    dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado');

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date()

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`


    if (formatoHora >= 00 && formatoHora < 12) {
        document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/10/ea/49/10ea49a7218d7a9ddfeec8c6b1217891.gif)'
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        

    }

    else if (formatoHora >= 12 && formatoHora < 18) {
        document.body.style.backgroundImage = 'url(https://png.pngtree.com/background/20220729/original/pngtree-sunrise-landscape-of-morning-scene-mountains-picture-image_1876984.jpg)'
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
       
       
    }
    else {
        document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/d0/23/8c/d0238cb99f92497664a3988818e7a157.jpg)'
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
       

    }










}




setInterval(relogio, 1000)

//a cosnt horaAgora tem a função de new date que definiu que a const horaAgora abastece com informaçoes referete ao tempo
//

//toString uma funçao que transforma as const de tempo em string//

//padstart preenche uma string com outra string até um certo comprimento desde que o início da string e retorna uma string resultante que atinge um determinado comprimento.//


//setInterval ativa uma contagem em relação ao tempo//

//array uma var (arranjo), ou estrutura de dados onde armazenamos uma coleção de elementos. (que guarda um monte informaçoes) , se chama com [] e quando quiser um numero não precisa de array só com texto//