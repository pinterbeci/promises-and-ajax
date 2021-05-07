let responseFromServer = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    /*itt a response-unk egy újabb Promise lesz*/
    return response.json();
  })
  /*itt pedig lekezeljük, hogy a kapott Promise-t reeolve ágából kapott adatot jelenítjük meg*/
  .then((data) => console.log(data))
  .catch((error) => {
    //ha kivétel lépne életbe, akkor pedig itt egy hibaüzenetet küldve jelezzüök, azt
    console.log(`ERROR: ${error}`);
  });

async function fetchData(){

    //await-el megvárjuk, míg végrehajtódik az utasítás és NEM lépünk a következőre.
    //miután végrehajtódott, akkor lépünk a következő utasításra. ITT egy 'Response' elemet kapunk meg,
    //amit újra le kell kezelni
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    /*
        itt is türelemre lesz szükség, mivel meg kell várni míg JSON formátumba alakul át
    */
    const returnData = await response.json();

    console.log(returnData);

}

fetchData();

  /*
  nyyl függvény
  ugyanaz mindkettő:

    xy => {
        return zw;
    }
    xy => zw;

  */
