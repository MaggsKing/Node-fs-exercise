//read-stream.js

const
fs = require(' fs'),
stream = fs.createReadStream( process.argv[ 2]);
stream.on(' data', function( chunk) {
process.stdout.write( chunk);
});
stream.on(' error', function( err) {
process.stderr.write(" ERROR: " + err.message + "\ n");
});


/*stream on... think "call"
subscription to error
if writing your own eventEmitter... will produce a duality, and a possbile error event
youll need ot handle sending out a 2nd event... which is an error
if you dont listen for the errr- server will stop
Tool -Nodemon
while profomign I/O duties... then still doing other things... some of the Node system has single opperations... syncromyns
SYNC - think... thats Syncromnis... is one single will block so you cant to  anything else... WAIT
they are simpilar method.. no callbacks.. then it's just done.
there are no call backs.. not needed.
write and console log... console dir... (all end up in the same places... same behaivors
process..own house.. stdout... stream.. write... (returns value of read value.... )

encoding and decoding like diff here

other file sys operations:
copy, unlink, delete, files, chmod command, mkdir...
specify location of file, full file or root dir...
require... we dont include extentions.
anything you can do with lunix we get access to.

teahcer notes:
Here we use process.stdout.write() to echo data, rather than console.log().
The incoming data chunks already contain any newline characters from the input file.
We don’t need the extra line that console.log() would add.

When working with an EventEmitter, the way to handle errors is to listen for error events. Let’s trigger an error to see what happens.
Run the program, but specify a file that doesn’t exist:

$ node --harmony read-stream.js no-such-file

ERROR: ENOENT, open 'no-such-file'

Since we’re listening for error events, Node invokes our handler (and then proceeds to exit normally).
If you don’t listen for error events, but one happens anyway, Node will throw an exception.
And as we saw before, an uncaught exception will cause the process to terminate.


