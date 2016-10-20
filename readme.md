# Know Your Code
 - By Burlywood

##Level subjects:
- HTML ✅
- CSS ✅
- JavaScript
- jQuery
- Node
- Mongo
- Mongoose


```javascript
levels = [ {level} ]

level = {title: "level 1",
         question: "string",
         options: [{option}]
       }

option = {content: "string",
           isCorrect: boolean}
```
## The JSON:
```json
{"title": "Level 1: HTML",
"question": "question_content",
"options": [{"content": "option_1_content",
           "isCorrect": true},
           {"content": "option_2_content",
           "isCorrect": false},
           {"content": "option_3_content",
           "isCorrect": false}]
}
```
## Instructions for setting up Know Your Code full-stack application development environment
1. Initialize node application
2. Install express, body-parser and mongoose
3. Make a directory for data
4. Start mongodb poitnted to data directory
```bash
npm init
npm install --save express body-parser mongoose
mkdir data
mongod --dbpath ./data
```

