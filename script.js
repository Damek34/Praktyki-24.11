const zad9 = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        resolve("Udało się!");
    }, 5000);
});


zad9.then(() =>
{
    console.log("Zad9")
    console.log(zad9);
});


function multiplyAsync(x,y)
{
    const zad10 = new Promise((resolve, reject) =>
    {
        if(isNaN(x) || isNaN(y))
        {
            reject("Argument nie jest liczbą");
        }
        else
        {
            resolve(x*y);
        }
    })


    zad10.then(() =>
    {
      console.log(zad10);
    });

}


/*function zad11()
{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((Response) => Response.blob())
    .then((myBlob))
    .catch(error() =>{
        console.error("Wystąpił błąd");
    })
}*/


console.log("Zad10");
console.log(multiplyAsync("i", "kj"));

