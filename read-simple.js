//read-simple.js

const fs = require('fs');

fs.readFile('target.txt', function(err, data){
    if(err){
        throw err;
    }
    console.log(data.toString());
});

/*read in or write out the entire file at once...
alot  ways to skin the cat.
take the whole file...
create a new stream
OPTIONS - at once -whole file, or new stream, or the BUFFER/BLOB
read file will give us the stream- zeros and ones...(data.toString) convertion.
Decoding.... not encoding...
BLOB/Buffer itself is a large mass of data... stream is where you take your time to pipe it someplace else
readfile is the same way - once.
node --harmony read-simple.js

if not (err)read file is succeful then that will be false.
whats the diff of buffer/stream?
buffer whole thing... stream is like bits along the way...river.

teahcer notes:
There are a few different approaches to reading and writing files in Node. The simplest way is to read in or write out the entire
file at once. This technique works well for small files. Other approaches read and write by creating Streams or staging content in a
buffer. Here’s an example of the whole-file-at-once approach:

$ node --harmony read-simple.js

You’ll see the contents of target.txt echoed to the command line. If the file is empty, all you’ll see is a blank line.

Notice how the first parameter to the readFile() callback handler is err. If readFile() is successful, then err will be false.
Otherwise the err parameter will contain an Error object. This is a common error-reporting pattern in Node, especially for
built-in modules. In our example’s case, we throw the error if there was one. Recall that an uncaught exception in Node will
 halt the program by escaping the event loop.

The second parameter to our callback, data, is a buffer; the same kind that was passed to our various callbacks in previous sections.

Writing a file using the whole-file approach is similar.

