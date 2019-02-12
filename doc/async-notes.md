# Notes on Asynchronous JS

## Fetch and Promises

- Don't make fetch requests in the global space
  - kind of dumb to have to put this here, but if you do that, you'll end up reading for that *ONE* Promise's body.
  - i.e don't do this:
  ```js
  const fetchMe = fetch('https://baconipsum.com/api', {method: 'GET', mode:'cors'});
  ```
  - see [MDN Response interface](https://developer.mozilla.org/en-US/docs/Web/API/Response) for more
- To check:
  - [Fetch and TypeScript](https://stackoverflow.com/questions/52717937/fetch-written-in-typescript)


## Other

- `for...` in expression was made to work on Objects
  - [MDN docs on for... in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
  - example below:
  ```js
    const users = JSON.parse(xhr.responseText);

    const output = '';
    for(var i in users){
      output +=
        '<div class="user">' +
        '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
        '<ul>' +
        '<li>ID: '+users[i].id+'</li>' +
        '<li>Login: '+users[i].login+'</li>' +
        '</ul>' +
        '</div>';
    }
  ```