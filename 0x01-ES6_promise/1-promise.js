export default function getFullResponseFromAPI(success) {
	return new Promise(function(resolve, reject) {
		if (success) {
			let truth = {
				status: 200,
				body: 'Success',
			};
			resolve(truth);
		} else {
			let falsehood = new Error('The fake API is not working currently');
			reject(falsehood);
		}
	});
}


