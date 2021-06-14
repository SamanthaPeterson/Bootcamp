//after creating html doc make a line for your div id which in this 
//i am calling box and right in that same line we are listing its style

//then we tab down a few lines and create button 1 which will eventually 
//turn our orange box blue 
//for this particular button and to learn how to change colors
// i referenced youtube https://youtu.be/jznWWxPZkvQ https://github.com/learn-webdevYT/Javascript-Beginner-Tutorials/blob/master/README.md
//i have attached linked above to this gentelmans youtube and github. He has great videos and how-to tutorials 

//colors array
let colors = ['blue', 'orange', 'dark blue', 'dark orange', 'teal', 'light blue'];
//get button
let button = document.getElementById(button1);
//add event listener 
button.addEventListener('click',function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]    
//get container
let container = document.getElementById('box2')

container.style.background = randomColor
})


//I tried to throw this in after i was reading other things... didn't work... I have spent 3+ days just on this project now.... 
document.getElementById("button1").addEventListener("click", changeBackgroundcolor,);

(method) HTMLElement.addEventListener<"click">(type: "click", listener: (this: HTMLElement, ev: MouseEvent) => any, options?: boolean | AddEventListenerOptions): void (+1 overload)




// When the boxGrow button is clicked... 
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// When the boxShrink button is clicked...
$("#boxShrink").on("click", function() {
	// Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})
