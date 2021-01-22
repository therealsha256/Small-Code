// function user(name, userName, passWord){
// let user = {
//     name, 
//     userName, 
//     passWord
// }
// return user;
// }

// let user1 = user('john', 'J200', 'Password');
// let user2 = user('juan', 'Jo200', 'Password');
// let user3 = user('jorge', 'Joh200', 'Password');
// let user4 = user('javi', 'John200', 'Password');


//classes are templates or blueprints provides initial values for the state of an object. 

class post{
    constructor(title, content, author){  //this will define 'Post' Class object

    this.title = title;
    this.content = content;
    this.author = author; 
    }
}
let newPost = new Post('New Post'. 'New Post Content', 'Jon Doe');
console.log(newPost.title);