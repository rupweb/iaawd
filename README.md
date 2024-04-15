# International Association for Agricultural Workers with Disabilities (IAAWD)

![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)

## Description

It's about a legal case in the UK on the above

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

`npm install`
`npm start`

Then install to Netlify

## Usage

It's a website. It has basic intro page, a 5 minute page, a 10 minute page and an evidence page.
The evidence page uses jpg and mp4 to show evidence for the treatment.

## License

This project is licensed under the Apache License.

## Contributing

Shared Repository

## Tests

jest test

## Pdf to jpg

Use the following to convert pdf to jpg
`node src/js/generatePdfToJpg.js`
This converts all pdf in the public/items directory to public/output directory as jpg

Likewise `node src/js/generateFacts.js`
This creates the facts arrays out of all the jpg in the public/items directory

## Mov to mp4

Use the following to convert mov to mp4
`ffmpeg -i input.mp4 -c:v libx264 -c:a aac output.mp4`

## Questions

For any questions, please contact me at [rupert@webstersystems.co.uk](mailto:rupert@webstersystems.co.uk) or visit my [GitHub profile](https://github.com/rupweb).
  