const url = 'https://words-of-wisdom-the-famous-quotes-api2.p.rapidapi.com/quotes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '96db86f5f1mshddf03195efca624p16ceb4jsna0615d5d6e25',
		'X-RapidAPI-Host': 'words-of-wisdom-the-famous-quotes-api2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}