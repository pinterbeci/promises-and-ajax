let users = [];

users.push({ name: "Izsák", age: 15 });
users.push({ name: "Sanya", age: 20 });
users.push({ name: "Zsák", age: 25 });

console.log(users);

function getUsers(wait) {
  setTimeout(() => {
    let returValue = "";
    users.forEach((cuurentUser) => {
      returValue += `<li> ${cuurentUser.name} (${cuurentUser.age}) </li>`;
    });

    console.log(returValue);
    console.log('_______________');

    const renderThisDiv = document.querySelector(".datas");
    renderThisDiv.innerHTML = `<ul> ${returValue} </ul>`;
  }, wait);
}

let addUser = (pasteThisUser, callback) => {
  /*lejár a timeout utána hívódik meg a függvény*/
  setTimeout(() => {
    users.push(pasteThisUser);
    callback(1000);
  }, 3000);
};

/*itt a 'getUsers' metódus címe kerül átadásra*/
addUser({ name: "Joska", age: 19 }, getUsers);
/*
mivel a függvény vár a setTimeout miatt, ezért lépünk a következő függvény hívásra
a következő hívásnál jeleníti meg a tömb elemeit, az új elem nélkül.
miután lejárt a 2000 ms-m utána megjeleníti a újra tömb elemeit az új elemmel együtt.
De, mivel az új elem nélküli elemek már meg vannak jelenítve, ezért úgy tűnik, mintha csak a legújabban hozzáadott elem jellene csak meg.
Közben már megjelenített elemkre illeszkednek az újonnnan megjelenített elemek.
*/

getUsers(1000);
