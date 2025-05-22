const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//se agrego un .
const $b = document.querySelector('.blog');//se quito el # y sea agrego un .
const $l = document.querySelector('.location');

async function displayUser(username) {  //Se agrego el async 
  $n.textContent = 'cargando...';
  try{
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  $n.textContent = `${data.name}`; //se cambiaron las comillas simples por backticks
  $b.textContent = `${data.blog}`; //se cambiaron las comillas simples por backticks
  $l.textContent = `${data.location}`; //se cambiaron las comillas simples por backticks
} catch(err){
  handleError (err)
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`//se agrego $ a la n
}
}

displayUser('stolinski').catch(handleError);