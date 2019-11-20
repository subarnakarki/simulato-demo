# The Simulato Demo for the meetup #

## Official Documentation Can Be Found Here
```
https://gannettdigital.github.io/simulato/documentation/
```

### Cloning The GitHub Repository
```
git clone git@github.com:subarnakarki/simulato-demo.git
```

## Prerequesites
- Have chrome driver installed and added to you PATH
  https://chromedriver.chromium.org/downloads

- In order for the pregenerate command in package.json to work you will need to be using a bash-like command line

  For windows users you replace the line with the following
  ```
  "pregenerate": "del .\tests\\*simulato-* /f /s"
  ```

### Installing Dependencies
```
$ npm install
```

### Before generating tests
remember to update components/signInPage.js line #25 to have the desired email in your environment variable

### Generating Tests
```
$ npm run generate
```

### Running Tests
```
$ npm run test
```
