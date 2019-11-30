let sibs = [];
let randoms = 6;

function assignment(){

  for(let i = 0; i < randoms.length; i++){
    sibs.push(i);
  }

 let random = Math.floor((Math.random()*6)+1);



  document.getElementById('number').innerHTML = random;
  console.log(random);
}
