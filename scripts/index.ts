import { program } from 'bandersnatch';

// import commands
import { tocsv } from './tocsv';
import { scrape } from './scrape';

program()
  .add(tocsv)
  .add(scrape)
  .run()
  .catch((err) => {
    console.error(`There was a problem running this command:\n${String(err)}`);
    process.exit(1);
  });
