import { load } from 'js-yaml';
import { transforms, parse } from 'json2csv';
import fs from 'fs';

function main() {
  const file = {
    yaml: './src/lib/data/projects.yaml',
    csv: './src/lib/data/projects.csv'
  };
  const data = load(fs.readFileSync(file.yaml, 'utf-8')) as unknown[];
  const csv = parse(data, {
    transforms: [transforms.flatten({ arrays: true })]
  });
  fs.writeFileSync(file.csv, csv);
}

main();
