// JavaScript source code

// Shim
////////
	if(!Date.now)
Date.now = function() { return (new Date()).getTime(); }

requestAnimationFrame = window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callbackFunction)
    {
        now = Date.now();
        delay = 16 - now % 16;
        return setTimeout(function(){callbackFunction(now + delay)}, delay);
    }

cancelAnimationFrame = window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    function(id) {
        clearTimeout(id);
    };

var drawingEnabled = true;
var notInitialized = true;



// Utility functions
////////////////////

function max(array){
    var temp = array[0];
    for(i = 1; i < array.length; ++i){
        if(array[i] > temp)
            temp = array[i];
    }
    return temp;
}

function min(array){
    var temp = array[0];
    for(i = 1; i < array.length; ++i){
        if(array[i] < temp)
            temp = array[i];
    }
    return temp;
}



// En statisk class kallad MeterBufferCanvas
var MeterBufferCanvas = new Object();

MeterBufferCanvas.canvas = document.createElement("canvas");
////MeterBufferCanvas.canvas.setAttribute("width", 720);
////MeterBufferCanvas.canvas.setAttribute("height", 20);

MeterBufferCanvas.canvas.setAttribute("width", 720);
MeterBufferCanvas.canvas.setAttribute("height", 20);

if(MeterBufferCanvas.canvas && MeterBufferCanvas.canvas.getContext)
    MeterBufferCanvas.canvasContext = MeterBufferCanvas.canvas.getContext("2d");
else
    drawingEnabled = false;
	
if(drawingEnabled){
    MeterBufferCanvas.canvasContext.fillStyle = "rgb(0, 255, 255)";
    MeterBufferCanvas.canvasContext.fillRect(0,0,720, 20);

    MeterBufferCanvas.canvasContext.lineWidth = 1;

    MeterBufferCanvas.canvasContext.translate(0, 0.5);

    MeterBufferCanvas.canvasContext.beginPath();
    MeterBufferCanvas.canvasContext.strokeStyle = "rgb(192, 255, 255)";
    MeterBufferCanvas.canvasContext.moveTo(0,0);
    MeterBufferCanvas.canvasContext.lineTo(720,0);
    MeterBufferCanvas.canvasContext.stroke();

    MeterBufferCanvas.canvasContext.beginPath();
    MeterBufferCanvas.canvasContext.strokeStyle = "rgb(160, 255, 255)";
    MeterBufferCanvas.canvasContext.moveTo(0,1);
    MeterBufferCanvas.canvasContext.lineTo(720,1);
    MeterBufferCanvas.canvasContext.stroke();

    MeterBufferCanvas.canvasContext.beginPath();
    MeterBufferCanvas.canvasContext.strokeStyle = "rgb(128, 255, 255)";
    MeterBufferCanvas.canvasContext.moveTo(0,2);
    MeterBufferCanvas.canvasContext.lineTo(720,2);
    MeterBufferCanvas.canvasContext.stroke();

    MeterBufferCanvas.canvasContext.beginPath();
    MeterBufferCanvas.canvasContext.strokeStyle = "rgb(0, 192, 192)";
    MeterBufferCanvas.canvasContext.moveTo(0, 18);
    MeterBufferCanvas.canvasContext.lineTo(720, 18);
    MeterBufferCanvas.canvasContext.stroke();

    MeterBufferCanvas.canvasContext.beginPath();
    MeterBufferCanvas.canvasContext.strokeStyle = "rgb(0, 160, 128)";
    MeterBufferCanvas.canvasContext.moveTo(0, 19);
    MeterBufferCanvas.canvasContext.lineTo(720, 19);
    MeterBufferCanvas.canvasContext.stroke();

    MeterBufferCanvas.canvasContext.beginPath();
    MeterBufferCanvas.canvasContext.strokeStyle = "rgb(0, 64, 64)";
    MeterBufferCanvas.canvasContext.moveTo(0, 20);
    MeterBufferCanvas.canvasContext.lineTo(720, 20);
    MeterBufferCanvas.canvasContext.stroke();



    MeterBufferCanvas.canvasContext.stroke();

		
}


        

// Grid Canvas Tool
////////////////////
var GridCanvasTool = new Object();

GridCanvasTool.canvas = document.createElement("canvas");
        

if (drawingEnabled) {
    GridCanvasTool.canvasContext = GridCanvasTool.canvas.getContext("2d");
}

// Draws the standard black grid with green lines
GridCanvasTool.drawStandardGrid = function () {
             
    GridCanvasTool.canvasContext.beginPath();

}


         

// Main Canvas
//////////////////
var MainBufferCanvas = new Object();

MainBufferCanvas.canvas = document.createElement("canvas");
MainBufferCanvas.canvas.setAttribute("width", 300);
MainBufferCanvas.canvas.setAttribute("height", 150);

//För att rutan överhuvudtaget ska kunna visas
if(drawingEnabled){
    MainBufferCanvas.canvasContext = MainBufferCanvas.canvas.getContext("2d");
}

MainBufferCanvas.ClickMe = function(){
    MainBufferCanvas.canvasContext.fillStyle = "rgb(255, 0, 0)";
    MainBufferCanvas.canvasContext.fillRect(0,0, 300, 150);

    MainBufferCanvas.canvasContext.fillStyle = "rgb(0, 255, 255)";
    MainBufferCanvas.canvasContext.textAlign = "center";
    MainBufferCanvas.canvasContext.font = "25px Arial, Arial, Geneva, sans-serif";
    MainBufferCanvas.canvasContext.fillText("Click Me 2 Play", 150, 80, 300);
}

MainBufferCanvas.dontClickYet = function(){
    MainBufferCanvas.canvasContext.fillStyle = "rgb(118, 142, 20)";
    MainBufferCanvas.canvasContext.fillRect(0,0, 300, 150);

    MainBufferCanvas.canvasContext.fillStyle = "rgb(0, 255, 255)";
    MainBufferCanvas.canvasContext.textAlign = "center";
    MainBufferCanvas.canvasContext.font = "25px Arial, Geneva, sans-serif";
    MainBufferCanvas.canvasContext.fillText("Don't Click Yet...", 150, 80, 300);
}

MainBufferCanvas.click = function(){
    MainBufferCanvas.canvasContext.fillStyle = "rgb(0, 255, 0)";
    MainBufferCanvas.canvasContext.fillRect(0,0, 300, 150);

    MainBufferCanvas.canvasContext.fillStyle = "rgb(0, 0, 0)";
    MainBufferCanvas.canvasContext.textAlign = "center";
    MainBufferCanvas.canvasContext.font = "25px Arial, Geneva, sans-serif";
    MainBufferCanvas.canvasContext.fillText("CLICK!", 150, 80, 300);
}

MainBufferCanvas.displayMilliseconds = function(milliseconds){
    MainBufferCanvas.canvasContext.fillStyle = "rgb(255, 0, 0)";
    MainBufferCanvas.canvasContext.fillRect(0,0, 300, 150);

    MainBufferCanvas.canvasContext.fillStyle = "rgb(0, 255, 255)";
    MainBufferCanvas.canvasContext.textAlign = "center";
    MainBufferCanvas.canvasContext.font = "25px Arial, Geneva, sans-serif";
    MainBufferCanvas.canvasContext.fillText(milliseconds + " milliseconds", 150, 80, 300);
}

MainBufferCanvas.clickedTooSoon = function(){
    MainBufferCanvas.canvasContext.fillStyle = "rgb(255, 0, 0)";
    MainBufferCanvas.canvasContext.fillRect(0,0, 300, 150);

    MainBufferCanvas.canvasContext.fillStyle = "rgb(255, 255, 0)";
    MainBufferCanvas.canvasContext.textAlign = "center";
    MainBufferCanvas.canvasContext.font = "25px Arial, Geneva, sans-serif";
    MainBufferCanvas.canvasContext.fillText("Clicked too soon!", 150, 80, 300);
}

MainBufferCanvas.dontClick = function(){
    MainBufferCanvas.canvasContext.fillStyle = "rgb(255, 255, 0)";
    MainBufferCanvas.canvasContext.fillRect(0,0, 300, 150);

    MainBufferCanvas.canvasContext.fillStyle = "rgb(0, 0, 0)";
    MainBufferCanvas.canvasContext.textAlign = "center";
    MainBufferCanvas.canvasContext.font = "25px Arial, Geneva, sans-serif";
    MainBufferCanvas.canvasContext.fillText("DON'T CLICK!", 150, 80, 300);
}


	
// Game State
/////////////
var gameState = { 
    clickable: "ClickMe",
    timerHasBegun: false,
    milliseconds: 0,
    start: 0,
    stop: 0,
    startAnimationTime: 0,
    endAnimationTime: 0,
    firstTimeInAnimation: true,
    time: 0,
    record: [],
    max_records: 1000,
    color: "false",
    requestId: 0,
    timeId: 0,
    increment: 0,
    gridIncrement: 0,
    lastX: 0,
    frameCount: 0,
    NO: 1,
    YES: 2,
    dontClickStartTime: Date.now(),

    addRecord: function(time){
        if (this.record.length >= this.max_records)
            this.record.pop();  //Delete oldest record

        this.record.unshift(time);
        //add the record
    },


    resetForNextTrial: function(){
        this.clickable = "ClickMe";
        this.milliseconds = 0;
        this.start = 0;
        this.stop = 0;
        this.lastX = 0;
        this.startAnimationTime = 0;
        this.endAnimationTime = 0;
        this.firstTimeInAnimation = true;
        this.timerHasBegun = false;
        this.frameCount = 0;
    },

    resetEntireGame: function(){
        this.clickable = "false";
        this.milliseconds = 0;
        this.start = 0;
        this.stop = 0;
        this.record = [];
        this.max_records = 1000;
        this.requestId = 0;
        this.color = "false";
        this.increment = 0;
        this.gridIncrement = 0;
        this.lastX = 0
        this.startAnimationTime = 0;
        this.endAnimationTime = 0;
        this.firstTimeInAnimation = true;
        this.timerHasBegun = false;
        this.frameCount = 0;
    },

}

	

function displayRecords(){
    var i, total = 0, iter = 1;

    var disp = document.getElementById("disp");
    var disp2 = document.getElementById("disp2");
    var disp3 = document.getElementById("disp3");
    var disp4 = document.getElementById("disp4");
    var disp5 = document.getElementById("disp5");

    var length = gameState.record.length;
    var string = "";
    for(i = 0; i < length ; ++i){
        string += iter + ". " + gameState.record[i] + " milliseconds \n";
        total += gameState.record[i];
        iter++;
    }

    disp.value = string;
    disp2.innerHTML = Math.round(total/length) + ' milliseconds';
    disp3.innerHTML = min(gameState.record) + ' milliseconds';
    disp4.innerHTML = max(gameState.record) + ' milliseconds';

    var time_array = gameState.record.sort(function(a,b){ return a-b; });
    if (length % 2 == 1)
        var median = Math.round(time_array[(length-1)/2]);
    else{
        var left = time_array[length/2 - 1];
        var right = time_array[length/2];
        var median = Math.round((left + right)/2);
    }
    disp5.innerHTML = median + ' milliseconds';
}


function checkClick(){

    if (gameState.timerHasBegun){
        //Användaren klickade på Grönt

        gameState.stop = Date.now();

        cancelAnimationFrame(gameState.requestId)

        gameState.time = gameState.stop - gameState.start;

                 
        //Visar tiden efter att man klickat
        MainBufferCanvas.displayMilliseconds(gameState.time);
        mainCanvasContext.drawImage(MainBufferCanvas.canvas, 0, 0);
			
			
        gameState.addRecord(gameState.time);


        var frameDisplay = document.getElementById("fpsDisplay");

        if(frameDisplay){
            frameDisplay.innerHTML = gameState.framesPerSecond();
        }

        gameState.resetForNextTrial();

        displayRecords();
    }
    else if (gameState.clickable == "false"){
        // The user clicked before it displayed green!

        clearTimeout(gameState.timeId);

        cancelAnimationFrame(gameState.requestId);

			
        // Display message informing the user they clicked too soon
        MainBufferCanvas.clickedTooSoon()
        mainCanvasContext.drawImage(MainBufferCanvas.canvas, 0, 0);

        gameState.resetForNextTrial();
    }
    else{
        //Next round

        var delay = Math.round(1000 + (Math.random() * 3000))
        gameState.clickable = "false";

        // Display, "Don't click yet..."
        MainBufferCanvas.dontClickYet()
        mainCanvasContext.drawImage(MainBufferCanvas.canvas, 0, 0);

        // Reset the Grid for the meter bar
        GridCanvasTool.drawStandardGrid();
        gridCanvasContext.drawImage(GridCanvasTool.canvas, 0, 0);

        MainBufferCanvas.click();

        gameState.dontClickStartTime = Date.now();

        gameState.timeId = setTimeout(greenLight, delay);
    }
}

//Tell the user to CLICK!
function greenLight(){

    gameState.gridIncrement = 0;
    gameState.timerHasBegun = true;


    if(gameState.gridHighlight == gameState.YES){
        GridCanvasTool.highlightBottomSquares();
        gridCanvasContext.drawImage(GridCanvasTool.canvas, 0, 0);
        gameState.requestId = requestAnimationFrame(updateMeter);
    }
            
    else {
        gameState.requestId = requestAnimationFrame(updateMeter);
    }
}

// Used in our first "requestAnimationFrame" call (we don't animate anything the first frame other than the "CLICK!" main canvas)
function initializeTrial(currentTimeStamp){
    gameState.start = Date.now(); //Time in milliseconds since epoch
    gameState.startTimeAnimation = currentTimeStamp;

    gameState.firstTimeInAnimation = false;
		
    // Draw "CLICK!"
    mainCanvasContext.drawImage(MainBufferCanvas.canvas, 0, 0);
}

function drawMeterAndGetLastXPosition(currentTimeStamp){
    gameState.stopTimeAnimation = currentTimeStamp;

    var xPosition = 0.5 + ((currentTimeStamp - gameState.startTimeAnimation)*.8) | 0;
    var width = xPosition - gameState.lastX;
		
    gridCanvasContext.drawImage(MeterBufferCanvas.canvas, 0, 0, width, 20, gameState.lastX, 50, width, 20);
		
    gameState.lastX = xPosition;
    gameState.frameCount++;

    return xPosition;
}


function updateMeter(currentTimeStamp){

    if(gameState.firstTimeInAnimation){
			
        initializeTrial(currentTimeStamp);

        gameState.requestId = requestAnimationFrame(updateMeter);
        return;
    }

    xPosition = drawMeterAndGetLastXPosition(currentTimeStamp);

    if(xPosition <= 720)
        gameState.requestId = requestAnimationFrame(updateMeter);
}

function updateMeterFinal(time){
    // Hack rounding: (0.5 + number) | 0
    gridCanvasContext.drawImage(MeterBufferCanvas.canvas, Math.min( 0.5 + ((time)*.8 - 720) | 0, 0), 50);
}




function displayTime(timeStamp){

}


var gridCanvas;
var mainCanvas;
var xValueDisplay;
var yValueDisplay;
var distanceFromCenterDisplay;
	
var showMilliseconds = false;
var showMeter = true;
var startXPosition = 150;
var startYPosition = 75;
var useTouch = false;


window.onload = function (){
    gridCanvas = document.getElementById("gridCanvas");
    mainCanvas = document.getElementById("mainCanvas");

    xValueDisplay = document.getElementById("xValueDisplay");
    yValueDisplay = document.getElementById("yValueDisplay");
    distanceFromCenterDisplay = document.getElementById("distanceFromCenterDisplay");
		
    if(drawingEnabled){
        gridCanvasContext = gridCanvas.getContext("2d");
        mainCanvasContext = mainCanvas.getContext("2d");

        GridCanvasTool.drawStandardGrid()
        gridCanvasContext.drawImage(GridCanvasTool.canvas, 0, 0);

        MainBufferCanvas.ClickMe();
        mainCanvasContext.drawImage(MainBufferCanvas.canvas, 0, 0);
    }
}

function turnOnLight(number){
    var obj = document.getElementById("light" + number);

    if(obj){
        obj.style.backgroundColor = "rgb(0, 255, 0)";
    }
}

function turnOffLight(number){
    var obj = document.getElementById("light" + number);

    if(obj){
        obj.style.backgroundColor = "rgb(255, 255, 255)";
    }
}


// Touch Event Handlers
///////////////////////

function touchStartHandler(e){
    e.preventDefault();

    var touch = e.touches[0]; 
    var node = touch.target;
    useTouch = true;

    startXPosition = touch.clientX - node.getBoundingClientRect().left;
    startYPosition = touch.clientY - node.getBoundingClientRect().top;

    /*
    if(xValueDisplay && yValueDisplay){
        xValueDisplay.value = startXPosition;

        yValueDisplay.value = startYPosition;
    }

    if(distanceFromCenterDisplay){
        distanceFromCenterDisplay.value = 0;
    }
    */

    checkClick();

    if(showTouchCircle){

        drawCircleOnMainCanvas(startXPosition, startYPosition, circleRadius);
    }

}

function touchEndHandler(e){
    if(gameState.clickable != "ClickMe" && (Date.now() - gameState.dontClickStartTime > 500))
    {
        e.preventDefault();
        checkClick();
    }
}

function onTouchMove(e){

    if(e.touches && e.touches.length >= 1){

        var preventDefault = (Date.now() - gameState.dontClickStartTime > 500) && gameState.clickable != "ClickMe"

        if(preventDefault)
            e.preventDefault();

        var touch = e.touches[0]; 
        var node = touch.target;

        var xPosition = touch.clientX - node.getBoundingClientRect().left;
        var yPosition = touch.clientY - node.getBoundingClientRect().top;

        var distanceFromCenter = Math.sqrt(Math.pow(xPosition - startXPosition, 2) + Math.pow(yPosition - startYPosition, 2))
			

        /*
        if(xValueDisplay && yValueDisplay){
            xValueDisplay.value = xPosition;

            yValueDisplay.value = yPosition;
        }

        if(distanceFromCenterDisplay){
            distanceFromCenterDisplay.value = distanceFromCenter;
        }
        */


        //If it's out of bounds...
        if(preventDefault && (xPosition > 300 || xPosition < 0 || yPosition > 150 || yPosition < 0 || (distanceFromCenter > circleRadius))){
            checkClick();
        }
    }
}



// Touch settings
/////////////////

function setShowTouchCircle(obj){
    if(obj.id != null && obj.id == "showCircle_yes"){
        showTouchCircle = true;
        showCircleAtCenter();
    }
    else {
        showTouchCircle = false;

        if (gameState.clickable == "ClickMe") {
            // Clear any circle that's on there.
            mainCanvasContext.drawImage(MainBufferCanvas.canvas, 0, 0);
        }
    }
}

function updateRadiusDisplayValue(obj){
    output1 = document.getElementById("output1");
    slider1 = document.getElementById("slider1");

    if(output1)
    {
        preliminaryCircleRadius = parseInt(obj.value);

        if(!(isNaN(preliminaryCircleRadius) || preliminaryCircleRadius < 0 || preliminaryCircleRadius > 300)) {

            output1.value = preliminaryCircleRadius;
            slider1.value = preliminaryCircleRadius;

            circleRadius = preliminaryCircleRadius;
        }
    }

    showCircleAtCenter();
}



function showCircleAtCenter(){
    if (showTouchCircle && gameState.clickable == "ClickMe") {

        // Clear any circle that's on there.
        mainCanvasContext.drawImage(MainBufferCanvas.canvas, 0, 0);

        drawCircleOnMainCanvas(Math.round(mainCanvas.width/2), Math.round(mainCanvas.height/2), circleRadius);
    }
}


function drawCircleOnMainCanvas(xPosition, yPosition, radius){
    mainCanvasContext.save();

    mainCanvasContext.fillStyle = "rgb(255, 255, 255)";
    mainCanvasContext.beginPath();
    mainCanvasContext.arc(xPosition, yPosition, 1, 0, 2*Math.PI);
    mainCanvasContext.fill();

    mainCanvasContext.beginPath();
    mainCanvasContext.strokeStyle = "rgb(255, 255, 255)";
    mainCanvasContext.lineWidth = 2;
    mainCanvasContext.arc(xPosition, yPosition, radius, 0, 2*Math.PI);
    mainCanvasContext.stroke();

    mainCanvasContext.restore();
}