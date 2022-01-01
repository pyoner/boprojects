import { load } from 'js-yaml';
import { transforms, parse } from 'json2csv';
import fs from 'fs';

import { command } from 'bandersnatch';

export const tocsv = command('tocsv', {
  description: 'convert YAML file to CSV'
}).action(() => {
  const file = {
    yaml: './src/lib/data/projects.yaml',
    csv: './src/lib/data/projects.csv'
  };
  const data = load(fs.readFileSync(file.yaml, 'utf-8')) as unknown[];
  const csv = parse(data, {
    transforms: [
      transforms.flatten({ arrays: true }),
      (item) => {
        const d = item.published_at as Date;
        return {
          ...item,
          published_at: `${d.toISOString().split('T')[0]}`
        };
      }
    ]
  });
  fs.writeFileSync(file.csv, csv);
});
