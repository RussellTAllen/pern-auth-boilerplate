const Fn = {
    register: user => {
        return fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => data)
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
    }
}

export default Fn