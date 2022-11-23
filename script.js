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
    });


    zad10.then(() =>
    {
        console.log(zad10);
    });

}


console.log("Zad10");
console.log(multiplyAsync(3, 4));

