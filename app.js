// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/riddles',
//     headers: { 'X-Api-Key': '1HOYIGSOwCDEKP4clkz1Xw==8LfTQzgPIqElBbMg'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });


// let a = document.getElementById("test");

// async function getting(){

//     let b = await fetch(url)

//     let c = await b.json();

//     console.log(c);




// }

let url = 'https://api.api-ninjas.com/v1/riddles';
 // Add the correct URL here

let a = document.getElementById("test");
let button = document.getElementById("get-answer");
let buttonSubmit = document.getElementById("submit-answer");
let answerBox = document.querySelector(".answer-box");

async function getting() {
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': '1HOYIGSOwCDEKP4clkz1Xw==8LfTQzgPIqElBbMg',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }


}

// Call the function
let ac = getting();

ac.then(res =>{
    console.log( res[0].question)
    a.innerText =  res[0].question 

buttonSubmit.addEventListener("click",()=>{
    
   if(answerBox.value === res[0].answer){
    answerBox.value = "You Win "
   }
   else{
    answerBox.value = "Click on Get Answer Button ";
}
   

   
    
})


    button.addEventListener("click",()=>{
    
    
        answerBox.value = res[0].answer;

       

    })
    

})

