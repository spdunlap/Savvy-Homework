// CallBack Example
function logQuote(quote) {
  console.log(quote);    // this prints the quote passed as a param
}
function createQuote(quote, someFunction) {
  let myQuote = "Like I always say, " + quote;
  someFunction(myQuote);  // invoke the callback function passed in as a param
};
// Below, invoke function createQuote with 2 params --
// first param is a quote string, second param is the function logQuote
createQuote("eat your vegetables!", logQuote);
createQuote();

/*
  You don't have to use the word "callback" as the name of your argument.
  Javascript just needs to know that it's the correct argument name.
