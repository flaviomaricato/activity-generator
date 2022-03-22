const newActivityButton = document.querySelector('#js-new-activity');
const spinner = document.querySelector('#js-spinner');
const twitterButton = document.querySelector('#js-tweet');

newActivityButton.addEventListener('click', getActivity);

const endpoint = 'https://www.boredapi.com/api/activity';

async function getActivity() {
    // remove the "hidden" class on the spinner
    spinner.classList.remove('hidden');
    // disable the activity button
    newActivityButton.disabled = true;

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
        displayActivity(json.activity);
        setTweetButton(json.activity);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new activity');
    } finally {
        // enable the activity button
        newActivityButton.disabled = false;
        // add the "hidden" class back again
        spinner.classList.add('hidden')
    }
}

function displayActivity(activity) {
    const activityText = document.querySelector('#js-activity-text')
    activityText.textContent = activity
}

function setTweetButton(activity) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${activity}`);
}

getActivity();