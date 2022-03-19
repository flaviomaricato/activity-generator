const newJokeButton = document.querySelector('#js-new-joke');

newJokeButton.addEventListener('click', getJoke);

const endpoint = 'https://api.chucknorris.io/jokes/random';

async function getJoke() {
    // The `try` block executes the statements within it as usual.
    // If an exception is thrown, the statements defined in
    // the `catch` block will be executed.
    // Learn more here: https://javascript.info/try-catch
    try {
        const response = await fetch(endpoint)
        // If the response is not 200 OK...
        if (!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new joke');
    }
}