export function SignIn() {
    fetch('http://efrei-mystrois.herokuapp.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"email": "test@hotmail.fr","password": "test"})
      }).then((response) => {return response.json()})
      .then((data) => {console.log(data)})
}


export function SignUp() {
    fetch('http://efrei-mystrois.herokuapp.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"email": "test@hotmail.fr","password": "test"})
      }).then((response) => {return response.json()})
      .then((data) => {console.log(data)})
}