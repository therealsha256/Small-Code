// let user1 = {
// name: ' Mike',
// userName: 'Mike2002', 
// password: '1234'
// }
// console.log(user1);

// let user2 = {
//     name: 'john',
//     userName: ' john2002', 
//     password: '54566'
//  }
//     console.log(user2.userName);
//  let usersArr = [user1, user2];


 //alternate way:

//  let user3 = {};
//  user3.name = 'Susan';
//  user3.password = 'password';

//  connnnnnsole.log(user3);


 let user3 = {};
 user3['name'] = 'Susan';
 user3.age = 25;
 user3.age = 45;                                                                   
 user3.password = 'password123';

 //console.log(user3[age]);

 let arr = Object.entries(user3);
 console.log(user3);