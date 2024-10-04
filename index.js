
document.querySelector(".translateBtn").addEventListener('click', translateText);

async function translateText() {
    const inputText = document.getElementById('inputText').value;
    const translatedTextElement = document.getElementById('translatedText');

    if (!inputText) {
        translatedTextElement.textContent = 'Please enter text to translate.';
        return;
    }

    try {
        const response = await fetch('https://api.vocabulary.az/api/cloud/translate/get-translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '46PCPSORE95s7G0FzX1qfzI6YfIQs9tszS5eFCNzdnIOuYraz6y6MPlpuYbcOkvC',
            },
            body: JSON.stringify(
                {
                    "word": inputText,
                }
            )
        });

        if (!response.ok) {
            alert('Translation failed');
        }

        const result = await response.json();
        translatedTextElement.textContent = result.data.translate;
    } catch (error) {
        translatedTextElement.textContent =  error.message;
    }
}

