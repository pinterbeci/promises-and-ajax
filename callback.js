let users = [];

users.push({ name: "Sanya", age: 25 });
users.push({ name: "Maja", age: 15 });
users.push({ name: "Fifó", age: 33 });
users.push({ name: "Lajos", age: 45 });

const getUsers = (wait) => {

    let renderThisItems = '';
    setTimeout(()=>{

        users.forEach( cuurentUser =>{

            renderThisItems += `<li>Ő itt, ${cuurentUser.name} és ${cuurentUser.age} éves a tag gecc </li>`
        });

        const divOfItems = document.querySelector('.datas');
        divOfItems.innerHTML = `<ul>${renderThisItems}</ul>`

    }, wait);

}

const addNewUser = ( (newUserItem, callback, delay) =>{

    setTimeout( () =>{
        users.push(newUserItem);
        getUsers(callback);
    
    }, delay );
});



addNewUser({name:"noname", age:0}, 1000, 2000);

/*míg a fenti metódusban meghatározott idő letelik, addig tovább lépünk a következő metódusra,
ami megjeleníti a tömb elemeit, miután letelik az idő az új elem is meg lesz jelenítve, úgy hogy 
a megjelenített elemekre lesznek ráhelyezve az már megjeleített elemek.
*/
getUsers();


/*ugyanígy itt is*/
addNewUser({name:"noname2", age:0+1}, 2000, 3000);
getUsers();
