function make2Darray(row,col){
    let grid = new Array(row);
    for (let i=0;i<row;i++){
        let temp = new Array(col);
        for (let j=0;j<col;j++){
            temp[j] = (Math.floor(Math.random()*2));
        }
        grid[i] = temp;
    }
    return grid;
}

let grid;

let ROW;
let COL;

let resolution = 20;

function setup(){
    console.log()
    let xx = screen.width;
    let yy = screen.height;
    let wid = Math.floor((xx)/100)*100;
    let hei = Math.floor((yy)/100)*100;
    console.log(hei,wid)
    createCanvas(wid,hei);
    COL = hei / resolution;
    ROW = wid / resolution;

    grid = make2Darray(ROW,COL);
    console.log(grid);
}


function draw(){
    background(30);
    
    for (let i=0;i<ROW;i++){
        for (let j=0;j<COL;j++){
            if (grid[i][j]==1){
                fill(255);
                rect(i*resolution,j*resolution,resolution-1,resolution-1);
            }
        }
    }
    
    let next = make2Darray(ROW,COL);
    
    for (let i=0;i<ROW;i++){
        for (let j=0;j<COL;j++){
            let neighbours = 0;
            neighbours += grid[(i-1+ROW)%ROW][j];
            
            neighbours += grid[(i-1+ROW)%ROW][(j-1+COL)%COL];
            
            
            neighbours += grid[(i-1+ROW)%ROW][(j+1+COL)%COL];
            
            
            
            neighbours += grid[i][(j+1+COL)%COL];
            neighbours += grid[i][(j-1+COL)%COL];
            neighbours += grid[(i+1+ROW)%ROW][j];
            
            neighbours += grid[(i+1+ROW)%ROW][(j+1+COL)%COL];
            
            
            neighbours += grid[(i+1+ROW)%ROW][(j-1+COL)%COL];
            next[i][j] = grid[i][j];
            if (grid[i][j]==0 && neighbours==3){
                next[i][j] = 1;
            } else if (grid[i][j]==1 && (neighbours<2 || neighbours>3)){
                next[i][j] = 0;
            }
        }
    }
    if (mouseIsPressed) {
        let i = Math.floor(mouseX/resolution);
        let j = Math.floor(mouseY/resolution);
        next[i][j] = abs(next[i][j]-1);
        // stop();
        // exit();
        // fill(0);
        // ellipse(mouseX, mouseY, 80, 80);
    }
    grid = next;
}

