let credentials = {
    username: 'mscott',
    password: 'worldsbestboss'
}
module.exports = (req, res, next) => {
    let {username, password} = req.body;
    if(username === credentials.username && password === credentials.password) {
        next();
    } else {
        res.status(403).json('Only Mr. Scott can have this data.')
    }
}