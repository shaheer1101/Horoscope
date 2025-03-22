async function getHoroscope() {
    let sign = document.getElementById('zodiacSign').value.toLowerCase().trim();
    
    if (sign === "") {
        alert("Please enter a valid zodiac sign!");
        return;
    }

    const apiKey = "Gs8FkAgIjvWalBhnAbDUFQ==K9uI0ObnUCOKYoIX"; // Replace with your actual API key
    const url = `https://api.prokerala.com/v1/astrology/horoscope/${sign}`;

    try {
        const response = await fetch(url, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });

        const data = await response.json();

        if (data.horoscope) {
            document.getElementById('result').innerHTML = `<strong>${sign.toUpperCase()}:</strong> ${data.horoscope}`;
        } else {
            document.getElementById('result').innerHTML = "Invalid sign or API limit reached!";
        }

    } catch (error) {
        document.getElementById('result').innerHTML = "Error fetching data!";
        console.error(error);
    }
}
