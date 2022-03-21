const newJokeButton = document.querySelector('#js-new-joke');
const spinner = document.querySelector('#js-spinner');

newJokeButton.addEventListener('click', getJoke);

const endpoint = 'https://api.chucknorris.io/jokes/random';

async function getJoke() {
    // remove the "hidden" class on the spinner
    spinner.classList.remove('hidden');
    // disable the joke button
    newJokeButton.disabled = true;

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
        displayJoke(json.value);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new joke');
    } finally {
        // enable the joke button
        newJokeButton.disabled = false;
        // add the "hidden" class back again
        spinner.classList.add('hidden')
    }
}

function displayJoke(joke) {
    const jokeText = document.querySelector('#js-joke-text')
    jokeText.textContent = joke
}