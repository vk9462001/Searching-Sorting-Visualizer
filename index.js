const container1 = document.querySelector(".data-container1");
const container2 = document.querySelector(".data-container2");
const container3 = document.querySelector(".data-container3");
const container4 = document.querySelector(".data-container4");
const bubble = document.getElementById("bubble");
const selection = document.getElementById("selection");
const insertion = document.getElementById("insertion");
const linear = document.getElementById("linear");

// Function to generate bars
function generatebars1(num = 20) {
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100) + 1;

     // To create element "div"
    const bar = document.createElement("div");

    // To add class "bar" to "div"
    bar.classList.add("bar1");

     // Provide height to the bar
    bar.style.height = `${value * 3}px`;
    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;

    // To create element "label"
    const barLabel = document.createElement("label");

    // To add class "bar_id" to "label"
    barLabel.classList.add("bar__id1");

    // Assign value to "label"
    barLabel.innerHTML = value;

    // Append "Label" to "div"
    bar.appendChild(barLabel);

    // Append "div" to "data-container div"
    container1.appendChild(bar);
  }
}

function generatebars2(num = 20) {
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100) + 1;

     // To create element "div"
    const bar = document.createElement("div");

    // To add class "bar" to "div"
    bar.classList.add("bar2");

     // Provide height to the bar
    bar.style.height = `${value * 3}px`;
    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;

    // To create element "label"
    const barLabel = document.createElement("label");

    // To add class "bar_id" to "label"
    barLabel.classList.add("bar__id2");

    // Assign value to "label"
    barLabel.innerHTML = value;

    // Append "Label" to "div"
    bar.appendChild(barLabel);

    // Append "div" to "data-container div"
    container2.appendChild(bar);
  }
}

function generatebars3(num = 20) {
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100) + 1;

     // To create element "div"
    const bar = document.createElement("div");

    // To add class "bar" to "div"
    bar.classList.add("bar3");

     // Provide height to the bar
    bar.style.height = `${value * 3}px`;
    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;

    // To create element "label"
    const barLabel = document.createElement("label");

    // To add class "bar_id" to "label"
    barLabel.classList.add("bar__id3");

    // Assign value to "label"
    barLabel.innerHTML = value;

    // Append "Label" to "div"
    bar.appendChild(barLabel);

    // Append "div" to "data-container div"
    container3.appendChild(bar);
  }
}

function generatebars4(num = 20) {
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100) + 1;

     // To create element "div"
    const bar = document.createElement("div");

    // To add class "bar" to "div"
    bar.classList.add("bar4");

     // Provide height to the bar
    bar.style.height = `${value * 3}px`;
    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;

    // To create element "label"
    const barLabel = document.createElement("label");

    // To add class "bar_id" to "label"
    barLabel.classList.add("bar__id4");

    // Assign value to "label"
    barLabel.innerHTML = value;

    // Append "Label" to "div"
    bar.appendChild(barLabel);

    // Append "div" to "data-container div"
    container4.appendChild(bar);
  }
}




// Asynchronous function to perform "Insertion Sort"
  async function InsertionSort(delay = 600) {
  let bars = document.querySelectorAll(".bar3");

  // Provide lightgreen colour to 0th bar
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {

    // Assign i-1 to j
    var j = i - 1;

    // To store the integer value of ith bar to key
    var key = parseInt(bars[i].childNodes[0].innerHTML);

    // To store the ith bar height to height
    var height = bars[i].style.height;

    // For selecting section having id "ele"
    var barval=document.getElementById("ele3")

    // For dynamically Updating the selected element
      barval.innerHTML=`<h3>Element Selected is :${key}</h3>`;

    //Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );

    // For placing selected element at its correct position
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {

      // Provide darkblue color to the jth bar
      bars[j].style.backgroundColor = "darkblue";

      // For placing jth element over (j+1)th element
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
      j = j - 1;// Assign j-1 to j

      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );

      // Provide lightgreen color to the sorted part
      for(var k=i;k>=0;k--){
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }
    // Placing the selected element to its correct position
    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  barval.innerHTML="<h3>Sorted!!!</h3>";

  // To enable the button
  // "Generate New Array" after final(sorted)
  document.getElementById("Buttoni")
  .disabled = false;
  document.getElementById("Buttoni")
  .style.backgroundColor = rgb(20, 183, 255);

  // To enable the button
  // "Insertion Sort" after final(sorted)
  document.getElementById("Buttoni2")
  .disabled = false;
  document.getElementById("Buttoni2")
  .style.backgroundColor = rgb(20, 183, 255);
}


// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 300) {
  let bars = document.querySelectorAll(".bar2");
   var min_idx = 0;
   for (var i = 0; i < bars.length; i += 1) {
    min_idx = i;
    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
      bars[j].style.backgroundColor = "red";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
      if (val1 < val2) {
        if (min_idx !== i) {
          bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
        bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
      }
    }
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );
    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
  document.getElementById("Buttons").disabled = false;
  document.getElementById("Buttons").style.backgroundColor = "rgb(24, 190, 255)";
  document.getElementById("Buttons2").disabled = false;
  document.getElementById("Buttons2").style.backgroundColor = "rgb(24, 190, 255)";
}


function swap(el1, el2) {
    return new Promise((resolve) => {
        // For exchanging styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
        window.requestAnimationFrame(function() {
            // For waiting for .25 sec
            setTimeout(() => {
                container1.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}
// asynchronous function to perform "Selection Sort"
async function BubbleSort(delay = 300) {
  let bars = document.querySelectorAll(".bar1");
   for (var i = 0; i < bars.length; i += 1) {
    for (var j = 0; j < bars.length-i-1; j += 1) {
      bars[j].style.backgroundColor = "#FF4949";
            bars[j + 1].style.backgroundColor = "#FF4949";
            // To wait for .1 sec
            await new Promise((resolve) =>setTimeout(() => {
                    resolve();
                }, delay)
            );
            console.log("run");
            var value1 = Number(bars[j].childNodes[0].innerHTML);
            var value2 = Number(bars[j + 1]
                        .childNodes[0].innerHTML);
            if (value1 > value2) {
                await swap(bars[j], bars[j + 1]);
                bars = document.querySelectorAll(".bar1");
            }
            bars[j].style.backgroundColor = "rgb(20, 183, 255)";
                        bars[j + 1].style.backgroundColor = "rgb(20, 183, 255)";
                    }
                    bars[bars.length - i - 1]
                            .style.backgroundColor = "rgb(49, 226, 13)";
                          }
document.getElementById("Buttonb").disabled = false;
document.getElementById("Buttonb").style.backgroundColor = "rgb(24, 190, 255)";
document.getElementById("Buttonb2").disabled = false;
document.getElementById("Buttonb2").style.backgroundColor = "rgb(24, 190, 255)";
}


// Asynchronous LinearSearch function
async function LinearSearch(delay = 300) {
  var bars = document.querySelectorAll(".bar4");
  var output = document.getElementById("text");
  var num = document.getElementById("fname").value;
  for (var i = 0; i < bars.length; i += 1) {
    bars[i].style.backgroundColor = "rgb(20, 183, 255)";
  }
  output.innerText = "";
  var flag = 0;
  for (var i = 0; i < bars.length; i += 1) {
    bars[i].style.backgroundColor = "#FF4949";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    var value = Number(bars[i].childNodes[0].innerHTML);
    if (value == num) {
      flag = 1;
      output.innerText = "Element Found";
      bars[i].style.backgroundColor = "#13CE66";
      break;
    } else {
      bars[i].style.backgroundColor = "rgb(20, 183, 255)";
    }
  }
  //When element is not found in the array
  if (flag == 0) {
    output.innerText = "Element Not Found";
  }
  document.getElementById("Buttonl").disabled = false;
  document.getElementById("Buttonl").style.backgroundColor = "rgb(24, 190, 255)";
  document.getElementById("Buttonl2").disabled = false;
  document.getElementById("Buttonl2").style.backgroundColor = "rgb(24, 190, 255)";
}


// Call "generatebars()" function
generatebars1();
generatebars2();
generatebars3();
generatebars4();

// Function to generate new random array
function generate1()
{
  document.querySelector(".data-container1").innerHTML="";
  generatebars1();
}
function generate2()
{
  document.querySelector(".data-container2").innerHTML="";
  generatebars2();
}
function generate3()
{
  document.querySelector(".data-container3").innerHTML="";
  generatebars3();
}
function generate4()
{
  document.querySelector(".data-container4").innerHTML="";
  generatebars4();
}

// Function to disable the button
function disable1()
{
  // To disable the button "Generate New Array"
  document.getElementById("Buttonb")
  .disabled = true;
  document.getElementById("Buttonb")
  .style.backgroundColor = "#d8b6ff";

  // To disable the button "Insertion Sort"
  document.getElementById("Buttonb2")
  .disabled = true;
  document.getElementById("Buttonb2")
  .style.backgroundColor = "#d8b6ff";
}

function disable2()
{
  // To disable the button "Generate New Array"
  document.getElementById("Buttons")
  .disabled = true;
  document.getElementById("Buttons")
  .style.backgroundColor = "#d8b6ff";

  // To disable the button "Selection Sort"
  document.getElementById("Buttons2")
  .disabled = true;
  document.getElementById("Buttons2")
  .style.backgroundColor = "#d8b6ff";
}

function disable3()
{
  // To disable the button "Generate New Array"
  document.getElementById("Buttoni")
  .disabled = true;
  document.getElementById("Buttoni")
  .style.backgroundColor = "#d8b6ff";

  // To disable the button "Insertion Sort"
  document.getElementById("Buttoni2")
  .disabled = true;
  document.getElementById("Buttoni2")
  .style.backgroundColor = "#d8b6ff";
}

function disable4()
{
  // To disable the button "Generate New Array"
  document.getElementById("Buttonl")
  .disabled = true;
  document.getElementById("Buttonl")
  .style.backgroundColor = "#d8b6ff";

  // To disable the button "Linear Search"
  document.getElementById("Buttonl2")
  .disabled = true;
  document.getElementById("Buttonl2")
  .style.backgroundColor = "#d8b6ff";
}

function showbubble()
{
  bubble.style.display="block";
  selection.style.display="none";
  insertion.style.display="none";
  linear.style.display="none";
}

function showselection()
{
  bubble.style.display="none";
  selection.style.display="block";
  insertion.style.display="none";
  linear.style.display="none";
}

function showinsertion()
{
  bubble.style.display="none";
  selection.style.display="none";
  insertion.style.display="block";
  linear.style.display="none";
}

function showlinear()
{
  bubble.style.display="none";
  selection.style.display="none";
  insertion.style.display="none";
  linear.style.display="block";
}