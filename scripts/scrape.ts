import metascraper from 'metascraper';
import mTitle from 'metascraper-title';
import mDescription from 'metascraper-description';
import mImage from 'metascraper-image';
import mLogo from 'metascraper-logo';
import mLogoFavicon from 'metascraper-logo-favicon';
import mUrl from 'metascraper-url';

import fetch from 'node-fetch';
import { command } from 'bandersnatch';

export const scrape = command('scrape', { description: 'scrape HTML metadata' })
  .argument('url')
  .action(async ({ url }) => {
    const scraper = metascraper([
      mTitle(),
      mDescription(),
      mImage(),
      mLogo(),
      mLogoFavicon(),
      mUrl()
    ]);
    const resp = await fetch(url);

    if (!resp.ok) {
      console.error('Bad response');
      return;
    }

    const html = await resp.text();
    const data = await scraper({ html, url });
    console.log(data);
  });
