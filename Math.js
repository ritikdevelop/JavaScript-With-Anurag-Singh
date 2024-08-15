// let check = Boolean(NaN);
// console.log(check);



const user = {
    firstName: 'Ritik',
    lastName: 'Rana',
    age:21,
    house:'Rented',
    address: {
        city: 'Delhi',
        state: 'Delhi',
        country: 'India'
    },
    moreDetails: {
        isMarried: false,
        isIndian: true
    },
};

user.mobileNumber = 9431559854;

// console.log(user);
// console.log(user.mobileNumber);


// Object.seal(user);

// delete user.mobileNumber;


Object.freeze(user);

user.firstName = 'Hello';

console.log(user)