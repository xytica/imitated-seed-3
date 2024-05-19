import { createreadstream, createWriteStream } from 'node:fs';

const updatedZipFileAddress = 'https://github.com/xytica/imitated-seed-3/archive/refs/heads/master.zip';

const updatedFiles = await fetch(updatedZipFileAddress);
