function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (icense === 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }

};

function showImage(data) {
  if (data.imageConfirm) {
    return `<img src='${data.image}' alt = '${data.imageName}'/>`;
  } else {
    return '';
  }
};

function generateMarkdown(data) {
  return `# ${data.title}

## Decription





What was the motivation behind this project?

${data.motivation}

Why did you build this?

${data.why}

What problem does it solve?

${data.problem}

What did you learn from this experience?

${data.learned}

## Installation

Project Link - ${data.link}

${data.install}

## Usage

${data.use}
 
${showImage(data)}

## Credits

My Information:

Github - ${data.github} 

E-mail - ${data.email}

Team members in collaboration:

${data.collab}

## License

${renderLicenseBadge(data.license)}
  `;
};

module.exports = generateMarkdown;
