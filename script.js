async function getHoroscope() {
    let sign = document.getElementById('zodiacSign').value.toLowerCase().trim();

    if (sign === "") {
        alert("Please enter a valid zodiac sign!");
        return;
    }

    const apiKey = "Gs8FkAgIjvWalBhnAbDUFQ==K9uI0ObnUCOKYoIX"; // Replace with your API key
    const url = `https://api.api-ninjas.com/v1/horoscope?sign=${sign}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { 'X-Api-Key': apiKey }
        });

        if (!response.ok) {
            throw new Error("Invalid Response");
        }

        const data = await response.json();

        document.getElementById('result').innerHTML = `
            <strong>${sign.toUpperCase()} Horoscope:</strong> <br>
            ${data.horoscope}
        `;

    } catch (error) {
        document.getElementById('result').innerHTML = "Error fetching data!";
        console.error(error);
    }
}
