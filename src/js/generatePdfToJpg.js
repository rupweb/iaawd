/*
 * Run using `node generatePdfToJpg.js`
 */

import fs from 'fs/promises';
import path from 'path';

async function convertPdfToImages(pdfPath, outputPath) {
    const pdfPoppler = await import('pdf-poppler');

    try {
        const files = await fs.readdir(pdfPath);

        for (const file of files) {
            if (path.extname(file).toLowerCase() === '.pdf') {
                const filePath = path.join(pdfPath, file);
                const opts = {
                    format: 'jpeg',
                    out_dir: outputPath,
                    out_prefix: path.basename(file, path.extname(file)),
                    // The 'page' option is omitted to process all pages
                };

                try {
                    await pdfPoppler.convert(filePath, opts);
                    console.log('Successfully converted:', file);
                } catch (error) {
                    console.error('Error converting file:', file, error);
                }
            }
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

const pdfPath = './public/crpd/items';
const outputPath = './public/output';

convertPdfToImages(pdfPath, outputPath);

