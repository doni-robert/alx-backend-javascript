export default function getFullResponseFromAPI(success) {
  return new Promise(((resolve, reject) => {
    if (success) {
      const truth = {
        status: 200,
        body: 'Success',
      };
      resolve(truth);
    } else {
      const falsehood = new Error('The fake API is not working currently');
      reject(falsehood);
    }
  }));
}
