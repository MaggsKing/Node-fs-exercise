//watcher-spawn-parse.js
"use strict";
const
    fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[ 2];
if (!filename) {
    throw Error(" A file to watch must be specified!");
}
fs.watch( filename, function() {
    let
        ls = spawn('ls', ['-lh', filename]),
      output = '';
    ls.stdout.on('data', function(chunk){
        output += chunk.toString();
    });

    ls.on('close', function(){
        let parts = output.split(/\s+/);
        console.dir([parts[ 0], parts[ 4], parts[ 8]]);
    });
});

console.log(" Now watching " + filename + " for changes...");


/*ls is like a list file, child process in this case... standard output and piped it last page
this time we are using an .on .....broadcasting out a string of (I have notifications comeing in... we can use the event
admitter like a broadcast) like a facebook notification - then anyone would need to just subscribe.
within Node this one is built in.. (also called an EVENT LISTENER...or ".ls.ON")
someone bradcasted on data.. call this data..like promises. ON DATA... (ls.on) broadcasting, publishing, new user, login..
pubsub... public subscription.
Events can send along additional info... "chunk" of information.
have to convert it to string to use it.
buffer object - when transmitting, its not JSON, its pipeing or buffing through a converter.
simple message or string.. NODE dumbs it down to converting it back to a string.. it's cheaper, or more consumable.
buffer-what we get back "chuck of information" -
just broadcast
Nodes way of pointing to a blog of memory - native core(needed)
V8 and other stuff that is seperate form the interperter.
buffers - broadcasing - chunk.toString
buffers - broadcasting -
BLOB = Bionary Large Object.
have to make it cheap to send it.. dumb it down to ship... 0,1 (zeros and ones)
costs alot of energy - someone has to decode it... so Node makes us do it.
write it into the file. we do the work to the similiest form through node - or BLOB.
its built for Highspeed and Outut and input.. I/O. Node wants the fastest code.
alot going on behind the sceens.. close event -
after all the streams have been exited and flushed...

standard in and out is a STREAM... stdout.pipe, stdin.pipe
flushed - its finsished.
regular expression(/\ s + /); parsing strings - split event.
looking for one or more white spaces. Nighga foo... hold it, we are swtiching... space= more,
console.dir - logging it back to console .
rw(read and write)
permission, size and filename

**********key Node... Event emitter, stream, child process and Buffer.
powerful pieces of Node.

All tasks have been Acsynonomis tasks in this exercise.  What to do when the task finshes... be a good secretaray.
can use promises in Node.  Libray is slower, have to include it.. Ecma Script6 you have promises in Javascript.. so could.
Q - 'promise library' -for Angular.
Devs - core libarys- supporting libraries.. can build your own.
RW files acynnonosly - when we touch the file we go to our callback
2 common patterns for errors... Error Eventmitters and err callbacks ang arguments
broadcasting info, injecting dependencies, simliar to angular
require (entire library someone wrote)
code comming in that doesnt exist on your current file.. how are they doing that... Node... think


teacher notes:

Save this updated file as watcher-spawn-parse.js. Run it as usual, then touch the target file in a separate terminal.
You should see output something like this:

$ node --harmony watcher-spawn-parse.js target.txt
Now watching target.txt for changes... [ '-rw-r--r--', '0B', 'target.txt' ]

The new callback starts out the same as before, creating a child process and assigning it to a variable called ls.
It also creates an output variable, which will buffer the output coming from the child process.

Next we add event listeners. An event listener is a callback function that is invoked when an event of a specified type is dispatched.
 Since the Stream class inherits from EventEmitter, we can listen for events from the child process’s standard output stream.

ls.stdout.on(' data', function( chunk){
output + = chunk.toString();
 });

The on() method adds a listener for the specified event type. We listen for data events because we’re interested in data coming
 out of the stream.

Events can send along extra information, which arrives in the form of parameters to the callbacks. Data events in particular
pass along a buffer object.[ 12] Each time we get a chunk of data, we append it to our output.

A Buffer is Node’s way of representing binary data. It points to a blob of memory allocated by Node’s native core,
outside of the JavaScript engine. Buffers can’t be resized and they require encoding and decoding to convert to and from JavaScript
 strings.

Calling toString() explicitly converts the buffer’s contents to a JavaScript string using Node’s default encoding (UTF-8).
This means copying the content into Node’s heap, which can be a slow operation, relatively speaking. If you can,
it’s better to work with buffers directly, but strings are more convenient.

Like Stream, the ChildProcess class extends EventEmitter, so we can add listeners to it, as well.

ls.on(' close', function(){
let parts = output.split(/\ s +/);
console.dir([ parts[ 0], parts[ 4], parts[ 8]]);
 });

After a child process has exited and all its streams have been flushed, it emits a close event.
When the callback printed here is invoked, we parse the output data by splitting on sequences of one or more whitespace characters
(using the regular expression /\ s +/). Finally, we use console.dir() to report on the first, fifth, and ninth fields
 (indexes 0, 4, and 8), which correspond to the permissions, size, and file name, respectively.

We’ve seen a lot of Node’s features in this small problem space of file-watching. You now know how to use key Node classes,
 including EventEmitter, Stream, ChildProcess, and Buffer. You also have firsthand experience writing asynchronous call-back functions
 and coding for the event loop.














