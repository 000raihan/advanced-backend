
exports.getFakePerson = async (req, res, next)=>{
    const personInput = req?.body.person

    if(!personInput){
        return res.json({
            status: "Error",
            message : "Please insert a person array"
          });
    }

    const firstNames = ['Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Garcia', 'Martinez', 'Miller', 'Jackson', 'Lee', 'Wilson'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
    
    const firstName =  firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]

    const fakeObject = {
     firstName : firstName,
     lastName : lastName,
     email : `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
     phone : `(+88) 01${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900000) + 100000}`,
     city : cities[Math.floor(Math.random() * cities.length)],
     zipCode : `${Math.floor(Math.random() * 90000) + 10000}`,
     streetNumber : `${Math.floor(Math.random() * 10000) + 1}`,
     streetName : `${Math.floor(Math.random() * 100)}th St`, // for simplicity, we'll just use a random street number and "th St" for the street name
     birthday : new Date(Math.floor(Math.random() * (new Date().getTime()))) // generate a random date of birth
    }



    const fakePerson = {}

    personInput.forEach((property) => {
        if (fakeObject.hasOwnProperty(property)) {
          fakePerson[property] = fakeObject[property];
        }else{
            console.log("This property isn't exist")
        }
      });

    res.json({
        status:"Success",
        result:{
            fakePerson : fakePerson
        }
    })

}