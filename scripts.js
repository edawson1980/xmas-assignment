let sibs = [];
const randoms = 7;


function assignment(){

  for(let i=1;i<randoms;i++){
    sibs.push(i);
  }






 let index = Math.floor(Math.random()* sibs.length);
 let ranAss = sibs[index];

 sibs.splice(index,1);



  document.getElementById('number').innerHTML = ranAss;
  console.log(ranAss);
}
