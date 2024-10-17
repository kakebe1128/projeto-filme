//fantasia, aventura, drama

// a viagem do chihiro, LIVRE, fantasia, aventura
// as aventuras de pi,10, drama, fantasia, aventura 
// gardioes da galixia, 12, fantasia, aventura 
// o menino que descobrio o vento, 14, drama


let compoldade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade){
  if (idade>= 10){
     if (idade>= 14){
       return "o menino que descobrio o vento";
       } else {
  return "As aventura de Pi";
       }
  } else {
  return "A viagem de Chihiro";
}
}
