
const Login = document.querySelector('.login');

const database = [
  { username: 'user1', password: 'pass1', name: 'User One', tag: 'tag1' },
  { username: 'user2', password: 'pass2', name: 'User Two', tag: 'tag2' },
  { username: 'user3', password: 'pass3', name: 'User Three', tag: 'tag3' },
  { username: 'user4', password: 'pass4', name: 'User four', tag: 'tag4' },
];

Login.addEventListener('click', (event)=>{
  event.preventDefault();

  const enteredUsername = document.querySelector('.input_username').value;
  const enteredPassword = document.querySelector('.input_password').value;

  checkCredentials(enteredUsername, enteredPassword);
})


function checkCredentials(enteredUsername, enteredPassword) {
  let userFound = false;
  let userData;

  for (let i = 0; i < database.length; i++) {
    if (database[i].username === enteredUsername && database[i].password === enteredPassword) {
      userFound = true;
      userData = database[i];
      break;
    }
  }


  if (userFound) {
    alert(userData); 
  } else {
    alert('Please enter the correct details'); 
  }
}

