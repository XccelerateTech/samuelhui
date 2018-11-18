const AuthChallenger = function(knex){
    
    return function (username, password, callback){
        let query = knex.select('my_user')
            .from('users')
            .where('my_user', username)
            .where('password', password);

            query.then((rows)=>{
                if(rows.length ===1){
                    callback(null, true);

                    //we have found the user with this username and password.

                } else {
                    callback (null, false);
                    //no such user....
                }
            }).catch((err)=>{
                callback(err);
            })
    }
}

module.exports = AuthChallenger;