
# Best of Warped Tour

A fun tool with its own band/song API to serve some nostalgia for Warped Tour fans



## Features

- Main page to fetch the API data
- Dev page to manage the API `/dev`
- Bands page to see the current bands `/bands`



## Demo

[Try it here!](https://best-of-warped.cyclic.app/)
Band suggestion: Paramore

![demo image](/static/img/demo.gif)



## API Reference

#### Get item

```http
  GET /api/${bandname}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `band`      | `string` | **Required**. Band name to fetch |


#### Example

![api example](/static/img/api-example.png)



## Install

Clone reposity files, then use npm / Node.js

`npm start`



## Environment Variables

`DB_STRING` MongoDB

`PORT`



## Roadmap

- Better management functionality for dev page

- Suggest a band feature

- Contest the best song feature

- Possible embedded video/audio

## License

[GNU GPLv3](license\gnu-gpl-v3.txt)