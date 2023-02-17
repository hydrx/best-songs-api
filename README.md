
# Best of Warped Tour

A fun tool with its own band/song API to serve some nostalgia for Warped Tour fans



## Demo

[Try it here!](https://best-of-warped.cyclic.app/)
Band suggestion: Paramore


## Features

- Main page to fetch the API data
- Dev page to manage the API `/dev`



## API Reference

#### Get item

```http
  GET /api/${bandname}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `band`      | `string` | **Required**. Band name to fetch |



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_STRING` MongoDB

`PORT`



## Roadmap

- Better management functionality for dev page

- Suggest a band feature

- Contest the best song feature

