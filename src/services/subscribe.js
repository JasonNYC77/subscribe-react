export const subscribe = (subscriptionDetails, newsLetters) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(newsLetters, "submitted");
      console.log(subscriptionDetails, "submitted");
      const check = Math.floor(Math.random() * 10) + 1;
      if (check % 3 === 0) {
        reject("Random Failure !!!");
      } else {
        resolve();
      }
    }, 100);
  });
};
