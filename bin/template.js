// pro type, name, desictip, tools (techno), url , licen
const makeReadme = (configs) => {
  const { type, name, decrip, techno, url, licen } = configs;
  let result = "";

  result = result + getName(name);
  result = result + getDescrip(decrip);
  result = result + getMenu();
  result = result + forImg();
  result = result + forAbout();
  result = result + forFeature();
  if(techno)
    result = result + forTools(techno);
  result = result + forGetStarted(type, url, techno, name);
  result = result + forContributing(url);
  result = result + forLicense(licen);
  result = result + forConclusion();

  return result;
};

const getName = (name) => {
  return `
<!-- Project name -->
<h1 style="font-size: 45px">
<center>${name}</center>
</h1>
<hr>`;
};

const getDescrip = (desc) => {
  return `
<!-- Description -->
<h4 align="center">${desc}</h4>
`;
};

const getMenu = () => {
  return `
  <!--menu-->
  <p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#technologies-used">Technologies Used</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a> •
  <a href="#conclusion">Conclusion</a> •
</p>`;
};

const forImg = () => {
  return `
  
<!-- You can put pictures, gifs, screenshots or videos for the program here  -->

  `;
};

const forAbout = () => {
  return `
  <!-- About -->

  ## About 📖
  
  Explain briefly what your project is about, its main features, and why it's useful.

  `;
};

const forFeature = () => {
  return `
  <!-- Key Features -->

  ## Key Features ✨
  
  ---
  
  - Feature 1
  - Feature 2
  - Feature 3
  - Emoji support in preview 🎉`;
};

const forTools = (tools) => {
  let  toolStr = `
  <!-- Technologies Used -->

## Technologies Used 🤖

---

`;
  for(let i of tools){
    toolStr += ` - **${i}**\n\n`
  }
  return toolStr;
};


const forGetStarted = (type, url, techno, name) => {
  if(!url) url = "https://github.com/yourusername/yourproject"

  let toolStr = ""
  for(let i of techno){
    toolStr += `  - **${i}**\n`
  }


  let result =  `## Getting Started 👨🏻‍💻
  ---
  
  These instructions will help you to get a copy of the project up and running on your local machine for development and testing purposes.
  
  ### Prerequisites
  
  Before you begin, ensure you have met the following requirements:
  ${toolStr}
  
  ### Installation and Configuration 🎯

  Follow these steps to get the project up and running on your local machine:

  1. **Clone the repository:**
  `;

  result = result + `
  \`\`\`bash
  git clone ${url}.git
  \`\`\` `;

  result = result + `
  2. Navigate to the project directory:

  \`\`\`bash
  cd ${name}
  \`\`\` `;

  if(type=="f"){
    result = result + `
  3. **Install Dependencies:**
  
  \`\`\`bash
  npm install
  \`\`\`
  
  4. **Start the Development Server:**
  
  \`\`\`bash
  npm start
  \`\`\`
  
  5. **Open in Browser:**
  Open your web browser and navigate to http://localhost:3000 to view the application.
  
  `;
  }else if(type=="b"){
    if(techno.includes("python") || techno.includes("Python")){
      result = result + `
        
  3. Create a virtual environment (optional but recommended):

  \`\`\`bash
  virtualenv venv
  \`\`\`

  Activate the virtual environment:

    - On Windows:
    \`\`\`cmd
    venv\Scripts\activate
    \`\`\`
    - On macOS and Linux:
     \`\`\`bash
     source venv/bin/activate
     \`\`\`

  4. Install dependencies:

  \`\`\`bash
  pip install -r requirements.txt
  \`\`\`

  5. Set up environment variables:Copy the example environment file and modify it according to your configuration:

  \`\`\`bash
  cp .env.example .env
  \`\`\`

  Update the .env file with your database credentials, API keys, etc.

  6. Run migrations:

  \`\`\`bash
  python manage.py migrate
  \`\`\`

  7. Start the development server:

  \`\`\`bash
  python manage.py runserver
  \`\`\`

  8. Visit http://localhost:8000 in your browser to view the application.You can now begin interacting with the API or accessing the application's endpoints.
  
  `;
    }else{

    result = result + `
  3. **Install Dependencies:**
    
  \`\`\`bash
  npm install
  \`\`\`
    
  4. Set up environment variables:Copy the example environment file and modify it according to your configuration:

  \`\`\`bash
  cp .env.example .env
  \`\`\`

  6. **Start the Development Server:**
    
  \`\`\`bash
  npm start 
  \`\`\`
  or
  \`\`\`bash
  npm run dev 
  \`\`\`
    
  5. **Open in Browser:**
  Visit http://localhost:8000 in your browser to view the application.You can now begin interacting with the API or accessing the application's endpoints..
    
  `;
    }
  }else{
    result = result + `
  3. **Open code editor**
  
  4. **Run it using the code editor**

  `;
  }

  return result;
};



const forContributing = (url) => {
  if(!url) url = "https://github.com/yourusername/yourproject"
  return `
  
<!-- Contributing -->

## Contributing 🤝

---

We welcome contributions from the community to improve the project. To contribute, follow these steps:

1. **Fork the repository:**
   Click the "Fork" button in the upper-right corner of the repository's page on GitHub. This will create a copy of the repository in your GitHub account.

2. **Clone the forked repository:**
   \`\`\`bash
   git clone ${url}.git
   \`\`\`
3. **Create a new branch:**
   \`\`\`bash
   git checkout -b feature/new-feature
   \`\`\`
   Replace feature/new-feature with a descriptive branch name related to the feature or issue you're working on.
4. **Make your changes: **Implement your changes and ensure they follow the project's coding style and guidelines.
5. **Commit your changes:**
   \`\`\`bash
   git commit -m "Add new feature or fix issue"
   \`\`\`
6. **Push your changes to GitHub:**
   \`\`\`bash
   git push origin feature/new-feature
   \`\`\`
7. **Create a Pull Request**:Go to the GitHub page of your forked repository. Click on the **"Compare & pull request"** button next to your branch. Fill in the necessary details and submit the pull request.
8. **Review and address feedback**:Your pull request will be reviewed by the project maintainers. Address any feedback or comments provided during the review process.
9. **Merge your Pull Request:**Once your pull request has been approved and all checks pass, it will be merged into the main branch by a project maintainer.

Thank you for your contribution!
`;
};

const forLicense = (licen) => {
  return `
  
<!-- License -->

## License 🧾

This project is licensed under the ${(licen=="mit" || licen=="MIT")? "[MIT License](LICENSE)": "[YOUR_PROJECT_LICENCE](LICENSE)"}

You are free to:

- Use the code for personal or commercial purposes.
- Modify, distribute, and sublicense the code.

Under the following conditions:

- You must include the original copyright notice in all copies or substantial portions of the software.

This project is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software

  `;
};


const forConclusion = () => {
  return `
  
<!-- Conclusion -->

## Conclusion 🔚

Congratulations! You've reached the end of the README file for our project 😊. We hope this documentation has provided you with all the necessary information to understand, install, and contribute to the project effectively.

If you have any questions, feedback, or suggestions, please don't hesitate to reach out to us. Your input is valuable and helps us improve the project for everyone.

Thank you for your interest and support in our project. Happy coding! 🎉

  `;
};

export default makeReadme;
