function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument

  let FivePeople = [
    { name: "Bori", age: 1 },
    { name: "Ire", age: 3 },
    { name: "Tolu", age: 6 },
    { name: "Ini", age: 10 },
    { name: "Charles", age: 35 },
  ];

  function GetFivePeople(fivepeople) {
    for (const someone of fivepeople) {
      if (someone.age > 30) {
        console.log(someone.name);
      }
    }
  }

  GetFivePeople(FivePeople)
}
uppg8();
module.exports = { uppg8 };
