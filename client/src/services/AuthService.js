const Fn = {
    register: user => {
        return fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
    },
    login: user => {
        return fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(user)
        })
        .then(res => {
            if (res.status !== 401)
                return res.json().then(data => data)
            else{
                return res.json('Email or password incorrect')
            }
        })
    }, 
    isVerify: () => {
        return fetch('/api/auth/is-verify', {
            method: 'GET',
            headers: { token: localStorage.token }
        })
        .then(res => {
            if (res.status !== 401)
                return res.json().then(data => data)
            else{
                return res.json('Not Authorized')
            }
        })
  
        // data === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
      }
}

export default Fn