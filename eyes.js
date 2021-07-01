const sizeEyes = 2;
const eyes = document.getElementsByClassName('eyes')[0];

function generateEyes(sizeEyes){

  for (let i = 0; i < sizeEyes; i++) {
    
    const eye = document.createElement('div');
    const ball = document.createElement('div');
    eye.className = 'eye';
    ball.className = 'ball';
    eyes.appendChild(eye);
    eye.appendChild(ball);
    
  }

}

generateEyes(sizeEyes);

ball = document.getElementsByClassName('ball');
document.onmousemove = (event) => {

  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  
  for (let i = 0; i < document.getElementsByClassName('eye').length; i++) {
    ball[i].style.left = x;
    ball[i].style.top = y;
    ball[i].transform = 'translate(-' + x + ',-' + y + ')';
  }

};


document.onclick = (event) => {

  const x =   '50%';
  const y =  '50%';
  
  for (let i = 0; i < document.getElementsByClassName('eye').length; i++) {
    ball[i].style.left = x;
    ball[i].style.top = y;
    ball[i].transform = 'translate(-' + x + ',-' + y + ')';
  }

};

function relocate_home()
{
     location.href = "https://danthb.github.io/";
} 