function uppg7() {
  // skapa en funktion som tar in två tal som argument
  // funktionen ska returnera summan av talen
  // kalla på funktionen i en return statement och ge den parametrarna 5 och 10

  function sum(a, b) {
    return a + b;
  }
  console.log(sum(5, 10));
  return sum(5, 10);
}
//test
uppg7();
module.exports = { uppg7 };
