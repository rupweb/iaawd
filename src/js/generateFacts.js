/*
 * Run using `node generateFacts.js`
 */

import fs from 'fs/promises';
import path from 'path';

const itemsDir = './public/items';
const outputDir = './public/output';

async function generateFacts() {
  try {
    const files = await fs.readdir(itemsDir);

    const factsByDecade = files.reduce((acc, file) => {
      const year = file.substring(0, 4);
      const decade = year.substring(0, 3) + "0s"; // e.g., 1980s, 1990s

      if (!acc[decade]) {
        acc[decade] = [];
      }

      acc[decade].push({
        title: '',
        url: `items/${file}`
      });

      return acc;
    }, {});

    for (const [decade, facts] of Object.entries(factsByDecade)) {
      const content = `export const facts${decade} = ${JSON.stringify(facts, null, 2)};\n`;

      try {
        await fs.access(outputDir);
      } catch {
        await fs.mkdir(outputDir);
      }

      await fs.writeFile(path.join(outputDir, `facts${decade}.js`), content);
      console.log(`File written for ${decade}`);
    }
  } catch (err) {
    console.error("Error occurred", err);
  }
}

generateFacts();

