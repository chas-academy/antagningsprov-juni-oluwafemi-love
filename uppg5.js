function uppg5(a, b) {
  // skriv en if-sats som jämför två tal
  // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
  // annars skriv ut "Det andra talet är större än det första"

  if (a > b) {
    console.log(`Det första talet är större än det andra`);
  } else {
    console.log(`Det andra talet är större än det första`);
  }
}
//test
uppg5(40, 20);
module.exports = { uppg5 };
