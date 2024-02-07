let botaoapertado = document.querySelectorAll(".btncodigos");
let descricao= document.getElementById("textoExplicacao");
let imagemDescricao = document.getElementById("imgExplicacao");
let texto = document.getElementById("textoInicio");
let botaoCodificar= document.getElementById("btncodificar");
let codificado = document.getElementById("respostaCodigo");

let textoExplicacao;


function descricaoCodigo(button){
     switch(button.id){
          case "emojiglota":
               textoExplicacao = "Trocar as palavras pelo emojis (a primeira letra do emoji representa a letra da palavra) \n Ex: 🐘✏️✏️🌬️ = ELLA";
               descricao.innerText=textoExplicacao;
               return "emojiglota" ;
               break;
          
          case "compor":
               textoExplicacao = "Ex: NICO \n N \n NI\n NIC\n NICO\n";
               descricao.innerText=textoExplicacao;
               return "compor" ;
               break;

          case "runas":
               textoExplicacao = "O código segue as regras da tabela abaixo: \n♌-A 🕉️-B ☪️-C ☯️- D \n♐-E ☦️-F ♋-G ♓-H\n♊-I  ☸️-J ♒-K 🛐-L \n♍-M ♑-N ☮️-O ♎-P\n♉-Q 🔯-R 🕎-S ✝️-T\n⛎-U ♈-V ♏-W ✡️-X \n⚛️-Y 🆔-Z"
               descricao.innerText=textoExplicacao;
               return "runas" ;
               break;

          case "decompor":
               textoExplicacao = "Ex: NICO \n NICO \n NIC\n NI\n N\n";
               descricao.innerText=textoExplicacao;
               return "decompor";
               break;

          case "erotes":
               textoExplicacao = "❤️ A ou F ou K ou Y\n🧡 B ou G ou L ou Z\n💛 C ou H ou M\n💚 D ou I ou N\n💘 E ou J ou O\n💜 P ou S ou V\n🖤 Q ou T ou W\n💟 R ou U ou X";
               descricao.innerText=textoExplicacao;
               return "erotes";
               break;

          case "t9": 
               textoExplicacao = "Trocar os números pelas letras de acordo com o telefone antigo para encontrar a resposta\n Ex: Percy Jackson = 73729 / 5225766";
               descricao.innerText=textoExplicacao;
               return "t9";
               break;

          case "gaderi": textoExplicacao = "Trocar as letras do código por sua correspondente. As outras permanecem as mesmas: \n G=A | A=G | D=E | E=D | R=I | I=R | P=O | O=P | L=U | U=L | T=Y | Y=T \n Ex: Mar de Monstros = Mgi ed mpnsyips";
               descricao.innerText=textoExplicacao;
               return "gaderi";
               break;
          
          case "tnao9":
               textoExplicacao = "Deverão desvendar, ou escrever, a palavra solicitada, usando o telefone antigo para “digitar” a resposta.\n Ex: Teste rápido = 8337777833 777274443666";
               descricao.innerText=textoExplicacao;
               return "tnao9";
               break;
          
     }
}

//determinar qual funcao

function qualFuncao(resposta){
     switch(resposta){
          case "emojiglota":
               return emojiglota();
               break;

          case "compor":
               return compor();
               break;

          case "runas":
               return runas();
               break;

          case "decompor":
               return decompor();
               break;

          case "erotes":
               return erotes();
               break;

          case "t9": 
               return t9();
               break;

          case "gaderi":
               return gaderi();
               break;
          
          case "tnao9":
               return tnao9();
               break;
     }
}


//funções de cada uma 

function emojiglota() {                                              
     let num = texto.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          num = num.replace( / /gi, "\n"); 
          num = num.replace( /a/gi, "✈️");
          num = num.replace( /b/gi, "🏀");
          num = num.replace( /c/gi, "🐶");
          num = num.replace( /d/gi, "🎲");
          num = num.replace( /e/gi, "🐘");
          num = num.replace( /f/gi, "🔪");
          num = num.replace( /g/gi, "🐈");
          num = num.replace( /h/gi, "🦛");
          num = num.replace( /i/gi, "⛪");
          num = num.replace( /j/gi, "🐗");
          num = num.replace( /k/gi, "🥝");
          num = num.replace( /l/gi, "🌕");
          num = num.replace( /m/gi, "🐒");
          num = num.replace( /n/gi, "🛳️");
          num = num.replace( /o/gi, "🦴");
          num = num.replace( /p/gi, "🦆");
          num = num.replace( /q/gi, "🧀");
          num = num.replace( /r/gi, "⚡");
          num = num.replace( /s/gi, "🐸");
          num = num.replace( /t/gi, "🐢");
          num = num.replace( /u/gi, "🍇");
          num = num.replace( /v/gi, "🐄");
          num = num.replace( /w/gi, "🧇");
          num = num.replace( /x/gi, "♟️");
          num = num.replace( /y/gi, "☯️");
          num = num.replace( /z/gi, "🦓");

          return num;
     }

function gaderi() {

     var aux = texto.value.normalize('NFD').replace(/[\u0301-\u037f]/g, '');

     aux = aux.replace(/g/gi, "♋");
     aux = aux.replace(/a/gi, "g");
     aux = aux.replace(/d/gi, "☯️");
     aux = aux.replace(/e/gi, "d");
     aux = aux.replace(/r/gi, "🔯");
     aux = aux.replace(/i/gi, "r");
     aux = aux.replace(/p/gi, "♎");
     aux = aux.replace(/o/gi, "p");
     aux = aux.replace(/l/gi, "🛐");
     aux = aux.replace(/u/gi, "l");
     aux = aux.replace(/t/gi, "✝️");
     aux = aux.replace(/y/gi, "t");

     var num = aux;
     
     num = num.replace(/♋/gi, "a");
     num = num.replace(/☯️/gi, "e");
     num = num.replace(/🔯/gi, "i");
     num = num.replace(/♎/gi, "o");
     num = num.replace(/🛐/gi, "u");
     num = num.replace(/✝️/gi, "y");

     return num;
 }

 function compor(){

     var paraCompor = texto.value;
     var aux = paraCompor.length;
     var textAux = "";

     for (i=1; i<=aux; i++){
         if (paraCompor.substring(i-1 , i) != " "  ){
             textAux = textAux +  "\n" + paraCompor.substring(0,i) ;
         }
     }
     return textAux;
 }

 function decompor(){

     var paraDecompor = texto.value;
     var aux = paraDecompor.length;
     var textAux = "";

     for( u = 0; u<=aux ; u++ ){
         if (paraDecompor.substring( aux - (u-1) , aux - u) != " "  ){
             textAux = textAux + paraDecompor.substring( 0 , aux-u) + "\n" ;
         }
     }
     return textAux;
 }

function t9() {
     let num = texto.value.normalize('NFD').replace(/[\u0301-\u037f]/g, '');

     num = num.replace( / /gi, " / ");
     num = num.replace( /a/gi, "2");
     num = num.replace( /c/gi, "2");
     num = num.replace( /d/gi, "3");
     num = num.replace( /e/gi, "3");
     num = num.replace( /f/gi, "3");
     num = num.replace( /g/gi, "4");
     num = num.replace( /h/gi, "4");
     num = num.replace( /i/gi, "4");
     num = num.replace( /j/gi, "5");
     num = num.replace( /k/gi, "5");
     num = num.replace( /l/gi, "5");
     num = num.replace( /m/gi, "6");
     num = num.replace( /n/gi, "6");
     num = num.replace( /o/gi, "6");
     num = num.replace( /p/gi, "7");
     num = num.replace( /q/gi, "7");
     num = num.replace( /r/gi, "7");
     num = num.replace( /s/gi, "7");
     num = num.replace( /t/gi, "8");
     num = num.replace( /u/gi, "8");
     num = num.replace( /v/gi, "8");
     num = num.replace( /w/gi, "9");
     num = num.replace( /x/gi, "9");
     num = num.replace( /y/gi, "9");
     num = num.replace( /z/gi, "9");

     return num;
}

function tnao9() {
                    
     var num = texto.value.normalize('NFD').replace(/[\u0302-\u038f]/g, '');

     num = num.replace( / /gi, " / ");
     num = num.replace( /a/gi, "2");
     num = num.replace( /b/gi, "22");
     num = num.replace( /c/gi, "222");
     num = num.replace( /d/gi, "3");
     num = num.replace( /e/gi, "33");
     num = num.replace( /f/gi, "333");
     num = num.replace( /g/gi, "4");
     num = num.replace( /h/gi, "44");
     num = num.replace( /i/gi, "444");
     num = num.replace( /j/gi, "5");
     num = num.replace( /k/gi, "55");
     num = num.replace( /l/gi, "555");
     num = num.replace( /m/gi, "6");
     num = num.replace( /n/gi, "66");
     num = num.replace( /o/gi, "666");
     num = num.replace( /p/gi, "7");
     num = num.replace( /q/gi, "77");
     num = num.replace( /r/gi, "777");
     num = num.replace( /s/gi, "7777");
     num = num.replace( /t/gi, "8");
     num = num.replace( /u/gi, "88");
     num = num.replace( /v/gi, "888");
     num = num.replace( /w/gi, "9");
     num = num.replace( /x/gi, "99");
     num = num.replace( /y/gi, "999");
     num = num.replace( /z/gi, "9999");

     return num;
}

function erotes() {
                    
     var num = texto.value.normalize('NFD').replace(/[\u0302-\u038f]/g, '');
    
     num = num.replace( / /gi, " / ");
     num = num.replace( /a/gi, "❤️");
     num = num.replace( /b/gi, "🧡");
     num = num.replace( /c/gi, "💛");
     num = num.replace( /d/gi, "💚");
     num = num.replace( /e/gi, "💘");
     num = num.replace( /f/gi, "❤️");
     num = num.replace( /g/gi, "🧡");
     num = num.replace( /h/gi, "💛");
     num = num.replace( /i/gi, "💚");
     num = num.replace( /j/gi, "💘");
     num = num.replace( /k/gi, "❤️");
     num = num.replace( /l/gi, "🧡");
     num = num.replace( /m/gi, "💛");
     num = num.replace( /n/gi, "💚");
     num = num.replace( /o/gi, "💘");
     num = num.replace( /p/gi, "💜");
     num = num.replace( /q/gi, "🖤");
     num = num.replace( /r/gi, "💟");
     num = num.replace( /s/gi, "💜");
     num = num.replace( /t/gi, "🖤");
     num = num.replace( /u/gi, "💟");
     num = num.replace( /v/gi, "💜");
     num = num.replace( /w/gi, "🖤");
     num = num.replace( /x/gi, "💟");
     num = num.replace( /y/gi, "❤️");
     num = num.replace( /z/gi, "🧡");

     return num;
}

function runas() {
                    
     var num = texto.value.normalize('NFD').replace(/[\u0302-\u038f]/g, '');

     num = num.replace( / /gi, "🈶");
     num = num.replace( /a/gi, "♌");
     num = num.replace( /b/gi, "🕉️");
     num = num.replace( /c/gi, "☪️");
     num = num.replace( /d/gi, "☯️");
     num = num.replace( /e/gi, "♐");
     num = num.replace( /f/gi, "☦️");
     num = num.replace( /g/gi, "♋");
     num = num.replace( /h/gi, "♓");
     num = num.replace( /i/gi, "♊");
     num = num.replace( /j/gi, "☸️");
     num = num.replace( /k/gi, "♒");
     num = num.replace( /l/gi, "🛐");
     num = num.replace( /m/gi, "♍");
     num = num.replace( /n/gi, "♑");
     num = num.replace( /o/gi, "☮️");
     num = num.replace( /p/gi, "♎");
     num = num.replace( /q/gi, "♉");
     num = num.replace( /r/gi, "🔯");
     num = num.replace( /s/gi, "🕎");
     num = num.replace( /t/gi, "✝️");
     num = num.replace( /u/gi, "⛎");
     num = num.replace( /v/gi, "♈");
     num = num.replace( /w/gi, "♏");
     num = num.replace( /x/gi, "✡️");
     num = num.replace( /y/gi, "⚛️");
     num = num.replace( /z/gi, "🆔");

     return num;
}

let respostaDoBotao;

botaoapertado.forEach(botao => {
     botao.addEventListener("click", ()=>{
          respostaDoBotao = descricaoCodigo(botao);
     })
});

botaoCodificar.addEventListener("click", ()=>{
     let text = qualFuncao(respostaDoBotao);
          // if(text!=compor){
              let copy = function (e) {
                    e.preventDefault();
                    console.log('copy');
                    
                    if (e.clipboardData) {
                        e.clipboardData.setData('text/plain', text);
                    } else if (window.clipboardData) {
                        window.clipboardData.setData('Text', text);
                    }
                }

                
           console.log(text);
           codificado.innerText= text;
           window.addEventListener('copy', copy);
           document.execCommand('copy');
           window.removeEventListener('copy', copy);
           console.log('ok 🐌');
           
          // }else{
          //      var paraCompor = texto.value;
          //      var aux = paraCompor.length;
          //      var textAux = "";
          
          //      for (i=1; i<=aux; i++){
          //          if (paraCompor.substring(i-1 , i) != " "  ){
          //              textAux = textAux +  "\n" + paraCompor.substring(0,i) ;
          //          }
          //      }
          //      codificado.innerText=textAux;
          // }
         

})
