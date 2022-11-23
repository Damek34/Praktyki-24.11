const zad9 = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        resolve("Udało się!");
    }, 5000);
});


zad9.then(() =>
{
    console.log(zad9);
});