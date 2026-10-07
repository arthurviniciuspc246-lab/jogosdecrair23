import fs from 'node:fs';
import path from 'node:path';

const dir=path.join(process.cwd(),'public','assets');
for(const name of ['home','party','cafe','contracts','gym']){
  const src=path.join(dir,name+'.b64');
  if(!fs.existsSync(src)) continue;
  const encoded=fs.readFileSync(src,'utf8').trim();
  fs.writeFileSync(path.join(dir,name+'.webp'),Buffer.from(encoded,'base64'));
}
