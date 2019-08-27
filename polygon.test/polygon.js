let dibujo = document.querySelector('.dibujo')
let count = 0
setInterval(()=>{

    count++
    count%=500

    let factorX = Math.sin(count/500)*4
    let factorY = Math.cos(count/500)

    // let vertices = [
    //     {
    //         x: 100 * factorX * 0.1,
    //         y: 100 * factorY * 0.1
    //     },
    //     {
    //         x: 100 * factorX * 0.2,
    //         y: 0 * factorY * 0.2
    //     },
    //     {
    //         x: 0 * factorX * 0.3,
    //         y: 100 * factorY * 0.3
    //     },
    //     {
    //         x: -100 * factorX * 0.4,
    //         y: 0 * factorY * 0.4
    //     },
    // ]

    let vertices = []
    let radio = 50;

    for( let i = 0; i<10; i++ ) {
        
        let theta = (2*Math.PI) / 10;
        
        let vertice = {
            x: radio * Math.cos(i*theta)*factorX*(i/4),
            y: radio * Math.sin(i*theta)*factorY*(i/4),
        }

        vertices.push(vertice)
    }

    console.log(vertices);
    

    let str = ""
    let offsetX = 150;
    let offsetY = 150;
    vertices.forEach(vertice=>{
        str += "L " + (offsetX + vertice.x) + " " + (offsetY + vertice.y) + " "
    }) 
    str = str.substr(1)

    dibujo.setAttribute('d',"M"+str)

}, 30)