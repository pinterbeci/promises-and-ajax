/*
const buttonElement = document.querySelector("#fetch-posts");

buttonElement.addEventListener("click", () => {
  
    let myPromise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();
    
    xhr.onload = () => {

      if (xhr.status === 200) {
      
        resolve(xhr.response);

        let xhrResponseJSON = JSON.parse(xhr.responseText);
        let renderJSONinHtml = "";
  
        for (currentJsonElment in xhrResponseJSON) {
          renderJSONinHtml += `
                      <ul>
                          <li> userId: ${xhrResponseJSON[currentJsonElment].userId}</li>
                          <li> id: ${xhrResponseJSON[currentJsonElment].id}</li>
                          <li> title: ${xhrResponseJSON[currentJsonElment].title}</li>
                          <li> body: ${xhrResponseJSON[currentJsonElment].body}</li>
                  </ul>
                  `;
        }
  
        document.querySelector(".json-posts").innerHTML = renderJSONinHtml;
      
    } 
      else {
            reject(`Error: ${xhr.status}`);
        }
    };
  });

  document.querySelector('.helpdesk').innerHTML = `<h1> Helpdesk</h1>`;

});

*/
/*
let p = new Promise((resolve, reject) => {
  let a = 3;

  if (a === 2) {
    /*az itt átadott érték, a 'then' keretei belül jeleník majd meg*/
/* resolve("Success");
  } else {
    /*az itt átadott érték, a 'catch' keretei belül jeleník majd meg*/
/* reject("Failed");
  }
});

p.then((message) => {
  console.log(message);
}).catch((message) => console.log(message));
*/

const userLeft = false;
const userWatchingCatMemes = true;

let watchTutorialPromise = () => {
    //resolve = megoldás, megoldva;  reject = elutasítva
    return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "user left",
        message: ":(",
      });
    } else if (userWatchingCatMemes) {
      reject({
        name: "User watching cat meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
};

watchTutorialPromise()
  .then((message) => {
    console.log(`Success: ${message}`);
  })
  .catch((error) => {
    console.log(`${error.name} ${error.message}`);
  });



const recordVideoOne = new Promise((resolve, reject) => {

    resolve(`Video 1 is recorded!`);
});

const recordVideoTwo = new Promise((resolve, reject) => {

    resolve(`Video 2 is recorded!`);
});
const recordVideoThree = new Promise((resolve, reject) => {

    resolve(`Video 3 is recorded!`);
});
const recordVideoFour = new Promise((resolve, reject) => {

    resolve(`Video 4 is recorded!`);
});

/*
Promise.all([
    recordVideoOne,
    recordVideoThree,
    recordVideoTwo,
    recordVideoFour
]).then( (message) =>{
    console.log(message);
})
*/

Promise.race([
    recordVideoOne,
    recordVideoThree,
    recordVideoTwo,
    recordVideoFour
]).then( (message) =>{
    console.log(message);
})
