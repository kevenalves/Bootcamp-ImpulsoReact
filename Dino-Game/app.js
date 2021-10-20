const DINO = document.querySelector('.dino');
const BACKGROUND = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if(!isJumping){
            jump();
        }
    }
}

//Funcao pular
function jump(){
    isJumping = true;

    let upInterval = setInterval(() => {  
        if(position >= 150) {
            clearInterval(upInterval);

            //descendo
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);  
                    isJumping = false;  
                } else {
                    position -= 20;
                    DINO.style.bottom = position + 'px';
                }
            }, 20)
        } else {
            //subindo
            position += 20;
            DINO.style.bottom = position + 'px';
        }

    }, 20);
}

function createCactus(){
    const CACTUS = document.createElement('div');
    let cactusPosition = 2000;
    let randomTime = Math.random() * 6000;

    CACTUS.classList.add('cactus');
    CACTUS.style.left = 2000 + 'px';
    BACKGROUND.appendChild(CACTUS);

    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            BACKGROUND.removeChild(CACTUS);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //GameOver
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">GAME OVER!</h1>'
        } else {
            cactusPosition -=10;
            CACTUS.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime)
}

createCactus();
document.addEventListener('keyup', handleKeyUp);