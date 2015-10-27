# REST API & Frontend page for code_search Project

## Requirements

- Node and npm

## Installation

- Clone the repository
- Install dependencies: `npm install`, `bower install`
- Start the server: `node server.js`

## Testing the API
Test your API using [Postman]

##API Doc for Code_Search
### Getting Snippets
    Request:
        /snippets                                           GET
    Response 200:
        [
            {
                "_id": "5626714d3c5c075404000004",
                "code": "python_code",
                "title": "code_search_python",
                "__v": 0,
                "good_feed": 3,
                "bad_feed": 5,
                "views": 0,
                "language": Python,
                "Framework": Django,
                "created": "2015-10-20T16:46:58.686Z"
            },
            {
                "_id": "5626714f3c5c075404000005",
                "code": "laravel_code",
                "title": "code_search_laravel",
                "__v": 0,
                "good_feed": 4,
                "bad_feed": 2,
                "views": 0,
                "language": PHP,
                "Framework": Laravel,
                "created": "2015-10-20T16:46:58.686Z"
            },
            {
                "_id": "562671593c5c075404000006",
                "code": "angular_code",
                "title": "code_search_angular",
                "description": "based javascript",
                "__v": 0,
                "good_feed": 10,
                "bad_feed": 20,
                "views": 0,
                "language": Javascript,
                "Framework": Angular.js,
                "created": "2015-10-20T16:46:58.686Z"
            }
        ]
    Response 401:
        [{"No Sever"}]
### Creating New Snippet
    Request:
        /snippets/create/                                   PUT
            body:
            {
                code: {String}
                title: {String}
                description: {String}
                language: {String}
                framework: {String}
                bad_feed: {Number}
                good_feed: {Number}
            }
    Response 200:
        {"Snippets created!"}
    Response 401:
        {"Can't create Snippet"}
### Creating New Framework
    Request:
        /framework/create/                                   PUT
            body:
            {
                name: {String}
                version: {String}
                language: {String}
            }
    Response 200:
        {"Framework created!"}
    Response 401:
        {"Can't create Framework!"}
### Creating New Language
    Request:
        /language/create/                                    PUT
            body:
            {
               language: {String}
            }
    Response 200:
        {"Language created!"}
    Response 401:
        {"Can't create Language!"}
### Language Search
    Request:
        /snippets/language_search?{language}                 GET
        example:
            http://127.0.0.1:9000/snippets/language_search?Python
            Response 200:
                [
                    {
                        "_id": "5626714d3c5c075404000004",
                        "code": "aadsjlkfjlk;jelkrqwklrjlkqewjrlk;eqjwrlkwejlkrjewqlk;rjlqke;wjlk;jqew",
                        "title": "",
                        "__v": 0,
                        "good_feed": 0,
                        "bad_feed": 0,
                        "views": 0,
                        "created": "2015-10-20T16:46:58.686Z"
                    }
                ]
            Respones 401:
                    [{"Can't find snippets with that language"}
### Framework Search
    Request:
        /snippets/framework_search?{framework}              GET
        example:
            http://127.0.0.1:9000/snippets/language_search?Django
            Response 200:
                [
                    {
                            "_id": "5626fc85c9f1ddf40c000002",
                            "code": "ajfewlk",
                            "title": "fkljwel",
                            "description": "fjfkwelkrejlk",
                            "language": "Python",
                            "__v": 0,
                            "good_feed": 0,
                            "bad_feed": 0,
                            "views": 0,
                            "created": "2015-10-21T02:45:20.743Z"
                    },
                ]
            Respones 401:
                [{"Can't find snippets with that framework"}


## Each Sub directory's function
    /app/snippets: define data structure of each models
    /app/index.js: define api routes for code_search
    /app/routes.js: define api models for user authentication
    /views/index.ejs: frontend part for code_search
    /server.js: api models for code_search and integrating route.js

