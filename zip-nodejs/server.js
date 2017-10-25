const fs = require('fs');
const zlib = require('zlib');

const inp = fs.ReadStream(process.argv[2]);
const zipper = zlib.createGzip();
const out = fs.createWriteStream(process.argv[3]);

inp.pipe(zipper).pipe(out);
