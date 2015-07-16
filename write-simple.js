//write-simple.js

const fs = require('fs');

fs.writeFile('target.txt', 'a witty message', function(err){
    if(err){
        throw err;
    }
    console.log('File saved!');
});


/*pay attention to the brackets...
read file doesnt care if your there
console log what we write on after

read and write files... if we can look at our database to JSON, can look inside the actual file or just
add a git request to put it there... created a database to create there own database.
as far as the client is concerned... they dont know where the file is stored.... mongoDB, but when('/really odnt', {
you dont know or care what the client end always  is...
mongoDB - use a few more manupulations to
have our file... JSON, read file, buffer, data, to JSON... as a callback.


teacher notes
This program writes “a witty message” to target.txt (creating it if it doesn’t exist, or overwriting it if it does).
If for any reason the file couldn’t be written, then the err parameter will contain an Error object.

Wilson, Jim R. (2013-11-25). Node.js the Right Way: Practical, Server-Side JavaScript That Scales (Kindle Locations 516-518).
 Pragmatic Bookshelf. Kindle Edition.



