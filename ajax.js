/*
    Az AJAX kérés

    - aszinkron kérés 
    - szerveroldai kérés
    - JSOn formátumú adattípus lesz a kérés eredménye, azt is lehet mondani, hogy
        az AJAX request-ünkre a response egy JSON formátumú fájl lesz. 
*/

const buttonElement = document.querySelector("#fetch-posts");

buttonElement.addEventListener("click", () => {
  //szerver oldali kérést reprezentál az 'XMLHttpRequest', szerverrel való interakcióba, kapcsolatba lépésre használandó
  let xhr = new XMLHttpRequest();

  /*ha a kérés életciklusában, valamilyen változás történik, akkor fut le, a readyState visszatérési értékei
        négy értékkel térhet vissza:
        0 - ha a kérés nem iniciálizált, nem kapott értéket
        1 - ha a kapcsolat létrejött a szerverrel
        2 - ha a kérés fogadva
        3 - a kérés feldolgozása folyamatban
        4 - ha a kérés kész, válasz kész
    */

    //az 'onreadystatechange' property egy olyan függvény definiál, mely akkor hajtódik végre, ha a 'readyState' értéke változik
  xhr.onreadystatechange = () => {
    //response status az 200, sikeres a kérés
    
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));

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
  };

  //hova küldje ki a kérést, request method-ját(GET, POST) és url-jét
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.send();
});




