// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return;
};

// TODO: Create a function to generate markdown for README
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
 
![${data.imageName}](${data.image})

## Credits

My Information:

Github - ${data.github} 

E-mail - ${data.email}

Team members in collaboration:

${data.collab}

## License

${data.license}
  `;
};

module.exports = generateMarkdown;
