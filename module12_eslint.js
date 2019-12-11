// config is in .eslintrc
// eslint needs env you work in + rules
// rules can be off (0), warn (1), error(2)

// can extend other peoples lints
// "extends":"eslint:recommended" or "airbnb"

// define globals used by external files so eslint doesnt throw error
/* globals ga */

/* eslint-disable spaced-comment */
//used to disable space after comment rule only in this file
/* eslint-enable spaced-comment */
// here rule is enabled again
const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds' });
  }, 2000);
});

const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});

Promise
  .all([weather, tweets])
  .then((responses) => {
    const [weatherInfo, tweetInfo] = responses;
    console.log(weatherInfo, tweetInfo);
  });

/* eslint-disable*/
//here all rules are disabled for next 2 lines
const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');
/* eslint-enable */

Promise
  .all([postsPromise, streetCarsPromise])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((responses) => {
    console.log(responses);
  });

ga.track(); // google anayltics funciton
