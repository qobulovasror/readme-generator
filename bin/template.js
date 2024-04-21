const makeReadme = (configs) => {
  const { name, type, decrip } = configs;
  let result = "";

  result = result + getName(name);
  result = result + getDescrip(decrip);
  result = result + forImg();

  return result;
};

const getName = (name) => {
  return `
<h1 style="font-size: 45px">
<center>${name}</center>
</h1> <hr>`;
};

const getDescrip = (desc) => {
  return `
<!-- Description -->
<h4 align="center">${desc}.</h4>
`;
};

const getMenu = (desc) => {
  return `
  <!--menu-->
  <p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>`;
};

const forImg = (desc) => {
  return `
  
<!-- You can put pictures, gifs, screenshots or videos for the program here  -->

  `;
};


export default makeReadme;