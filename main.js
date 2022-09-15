console.log("main.js")

const btn = document.getElementById('btn')
const sceneEl = document.getElementById('a-scene')

btn.addEventListener('click',()=>{
    //draw aframe 
    let canvasImage;
    console.log('click')
    const w = document.querySelector('.a-canvas').clientWidth
    const h = document.querySelector('.a-canvas').clientHeight
    sceneEl.setAttribute('screenshot',`width:1200;height:630;`)
    canvasImage = sceneEl.components.screenshot.getCanvas('perspective').toDataURL('image/png')

    //draw domEl
    const options = {backgroundColor: 'null'};
    const captureElement = document.querySelector('#capture')
    let balloonImage;
    html2canvas(captureElement, options)
    .then(canvas => {
        document.body.appendChild(canvas)
        balloonImage = canvas.toDataURL("image/png");
        console.log(balloonImage)
    })


    setTimeout(drawImage,1000)
    //draw two images
    function drawImage(){
        //create getContext('2d')
        const newCanvas = document.getElementById('board')
        const ctx = newCanvas.getContext("2d")
        //create Image Object
        let imgObj01 = new Image();
        imgObj01.src = canvasImage;
        let imgObj02 = new Image();
        imgObj02.src = balloonImage;
        //draw Image
        imgObj01.onload = function(){
            ctx.drawImage(imgObj01,0,0,1200,630)
        }
        imgObj02.onload = function(){
            ctx.drawImage(imgObj02,0,0,1200,630)
        }
        setTimeout(downloadImage,1000)
        function downloadImage(){
            let link = document.createElement("a");
            link.href = newCanvas.toDataURL("image/png");
            link.download = "test.png";
            link.click();
        }
    }
})