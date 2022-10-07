const block = document.querySelector(`#block`);

const getRandomIntInclusive = (min=0, max=255) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomColor = () => {
    let colors = [];
    for(let i=0; i<=2; i++){
        colors.push(getRandomIntInclusive());
    }

    return `rgb(${colors.join(`,`)})`;
}

setInterval(() => block.style.backgroundColor = getRandomColor(), 500);  

block.style.left = 0;
block.style.top = 0

const blockMoving = setInterval(() => {

    let blockWidth = block.offsetWidth;
    let blockHeight = block.offsetHeight;
   
    let bodyWidth = document.body.offsetWidth;
    let bodyHight = document.body.offsetHeight;

    let maxLeftPosition = bodyWidth-blockWidth;
    let maxTopPosition = bodyHight-blockHeight;

    let randomLeftPosition = getRandomIntInclusive(0,maxLeftPosition);
    let randomTopPosition = getRandomIntInclusive(0,maxTopPosition);

    console.log(bodyWidth, randomLeftPosition);
    console.log(bodyHight, randomTopPosition);

    block.style.left = randomLeftPosition+`px`;
    block.style.top = randomTopPosition+`px`;
    
}, 1000);