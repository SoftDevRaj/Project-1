const url = 'https://icanhazdadjoke.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '96db86f5f1mshddf03195efca624p16ceb4jsna0615d5d6e25',
		'X-RapidAPI-Host': 'words-of-wisdom-the-famous-quotes-api2.p.rapidapi.com'
	}
};

try {
	const response = fetch(url, options);
	const result = response.text();
	console.log(result);
} catch (error) {
	
}

$(document).ready(function () {
    $("#button-16-mantragenerator").click(function () {
    generateQuote();
    });
});

async function generateQuote() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/');
        const phrase = await response.text();

        $("#inspirationalquote").html(phrase).fadeIn();
        console.log(phrase);

        } catch (error) {
            console.log('Error:', error);
        }

    }