exports.explainString = async (req, res, next) => {
  const string = req.body.string;

  if(!string){
   return res.json({
        status: "Error",
        message : "Please insert a string"
      });
  }

  let letter_count = 0;
  let symbol_count = 0;
  let numeric_count = 0;

  for (var i = 0; i < string.length; i++) {

    if (/[a-zA-Z]/.test(string.charAt(i))) {
      letter_count = letter_count + 1;
    } else if (/[0-9]/.test(string.charAt(i))) {
      numeric_count = numeric_count + 1;
    } else {
      symbol_count = symbol_count + 1;
    }
  }


  res.json({
    status: "Success",
    result: {
      letters: letter_count,
      symbols: symbol_count,
      numeric: numeric_count,
    },
  });
};
