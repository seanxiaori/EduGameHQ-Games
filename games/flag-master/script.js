// countries data with their names and two digit codes!
const countries = [
      { code: 'AF', name: 'Afghanistan' },
      { code: 'AL', name: 'Albania' },
      { code: 'DZ', name: 'Algeria' },
      { code: 'AD', name: 'Andorra' },
      { code: 'AO', name: 'Angola' },
      { code: 'AG', name: 'Antigua and Barbuda' },
      { code: 'AR', name: 'Argentina' },
      { code: 'AM', name: 'Armenia' },
      { code: 'AU', name: 'Australia' },
      { code: 'AT', name: 'Austria' },
      { code: 'AZ', name: 'Azerbaijan' },
      { code: 'BS', name: 'Bahamas' },
      { code: 'BH', name: 'Bahrain' },
      { code: 'BD', name: 'Bangladesh' },
      { code: 'BB', name: 'Barbados' },
      { code: 'BY', name: 'Belarus' },
      { code: 'BE', name: 'Belgium' },
      { code: 'BZ', name: 'Belize' },
      { code: 'BJ', name: 'Benin' },
      { code: 'BT', name: 'Bhutan' },
      { code: 'BO', name: 'Bolivia' },
      { code: 'BA', name: 'Bosnia and Herzegovina' },
      { code: 'BW', name: 'Botswana' },
      { code: 'BR', name: 'Brazil' },
      { code: 'BN', name: 'Brunei' },
      { code: 'BG', name: 'Bulgaria' },
      { code: 'BF', name: 'Burkina Faso' },
      { code: 'BI', name: 'Burundi' },
      { code: 'CV', name: 'Cabo Verde' },
      { code: 'KH', name: 'Cambodia' },
      { code: 'CM', name: 'Cameroon' },
      { code: 'CA', name: 'Canada' },
      { code: 'CF', name: 'Central African Republic' },
      { code: 'TD', name: 'Chad' },
      { code: 'CL', name: 'Chile' },
      { code: 'CN', name: 'China' },
      { code: 'CO', name: 'Colombia' },
      { code: 'KM', name: 'Comoros' },
      { code: 'CD', name: 'Congo, Democratic Republic of the' },
      { code: 'CG', name: 'Congo, Republic of the' },
      { code: 'CR', name: 'Costa Rica' },
      { code: 'CI', name: 'Cote d\'Ivoire' },
      { code: 'HR', name: 'Croatia' },
      { code: 'CU', name: 'Cuba' },
      { code: 'CY', name: 'Cyprus' },
      { code: 'CZ', name: 'Czechia' },
      { code: 'DK', name: 'Denmark' },
      { code: 'DJ', name: 'Djibouti' },
      { code: 'DM', name: 'Dominica' },
      { code: 'DO', name: 'Dominican Republic' },
      { code: 'EC', name: 'Ecuador' },
      { code: 'EG', name: 'Egypt' },
      { code: 'SV', name: 'El Salvador' },
      { code: 'GQ', name: 'Equatorial Guinea' },
      { code: 'ER', name: 'Eritrea' },
      { code: 'EE', name: 'Estonia' },
      { code: 'SZ', name: 'Eswatini' },
      { code: 'ET', name: 'Ethiopia' },
      { code: 'FJ', name: 'Fiji' },
      { code: 'FI', name: 'Finland' },
      { code: 'FR', name: 'France' },
      { code: 'GA', name: 'Gabon' },
      { code: 'GM', name: 'Gambia' },
      { code: 'GE', name: 'Georgia' },
      { code: 'DE', name: 'Germany' },
      { code: 'GH', name: 'Ghana' },
      { code: 'GR', name: 'Greece' },
      { code: 'GD', name: 'Grenada' },
      { code: 'GT', name: 'Guatemala' },
      { code: 'GN', name: 'Guinea' },
      { code: 'GW', name: 'Guinea-Bissau' },
      { code: 'GY', name: 'Guyana' },
      { code: 'HT', name: 'Haiti' },
      { code: 'VA', name: 'Holy See' },
      { code: 'HN', name: 'Honduras' },
      { code: 'HU', name: 'Hungary' },
      { code: 'IS', name: 'Iceland' },
      { code: 'IN', name: 'India' },
      { code: 'ID', name: 'Indonesia' },
      { code: 'IR', name: 'Iran' },
      { code: 'IQ', name: 'Iraq' },
      { code: 'IE', name: 'Ireland' },
      { code: 'IL', name: 'Israel' },
      { code: 'IT', name: 'Italy' },
      { code: 'JM', name: 'Jamaica' },
      { code: 'JP', name: 'Japan' },
      { code: 'JO', name: 'Jordan' },
      { code: 'KZ', name: 'Kazakhstan' },
      { code: 'KE', name: 'Kenya' },
      { code: 'KI', name: 'Kiribati' },
      { code: 'KW', name: 'Kuwait' },
      { code: 'KG', name: 'Kyrgyzstan' },
      { code: 'LA', name: 'Laos' },
      { code: 'LV', name: 'Latvia' },
      { code: 'LB', name: 'Lebanon' },
      { code: 'LS', name: 'Lesotho' },
      { code: 'LR', name: 'Liberia' },
      { code: 'LY', name: 'Libya' },
      { code: 'LI', name: 'Liechtenstein' },
      { code: 'LT', name: 'Lithuania' },
      { code: 'LU', name: 'Luxembourg' },
      { code: 'MG', name: 'Madagascar' },
      { code: 'MW', name: 'Malawi' },
      { code: 'MY', name: 'Malaysia' },
      { code: 'MV', name: 'Maldives' },
      { code: 'ML', name: 'Mali' },
      { code: 'MT', name: 'Malta' },
      { code: 'MH', name: 'Marshall Islands' },
      { code: 'MR', name: 'Mauritania' },
      { code: 'MU', name: 'Mauritius' },
      { code: 'MX', name: 'Mexico' },
      { code: 'FM', name: 'Micronesia' },
      { code: 'MD', name: 'Moldova' },
      { code: 'MC', name: 'Monaco' },
      { code: 'MN', name: 'Mongolia' },
      { code: 'ME', name: 'Montenegro' },
      { code: 'MA', name: 'Morocco' },
      { code: 'MZ', name: 'Mozambique' },
      { code: 'MM', name: 'Myanmar' },
      { code: 'NA', name: 'Namibia' },
      { code: 'NR', name: 'Nauru' },
      { code: 'NP', name: 'Nepal' },
      { code: 'NL', name: 'Netherlands' },
      { code: 'NZ', name: 'New Zealand' },
      { code: 'NI', name: 'Nicaragua' },
      { code: 'NE', name: 'Niger' },
      { code: 'NG', name: 'Nigeria' },
      { code: 'MK', name: 'North Macedonia' },
      { code: 'NO', name: 'Norway' },
      { code: 'OM', name: 'Oman' },
      { code: 'PK', name: 'Pakistan' },
      { code: 'PW', name: 'Palau' },
      { code: 'PS', name: 'Palestine' },
      { code: 'PA', name: 'Panama' },
      { code: 'PG', name: 'Papua New Guinea' },
      { code: 'PY', name: 'Paraguay' },
      { code: 'PE', name: 'Peru' },
      { code: 'PH', name: 'Philippines' },
      { code: 'PL', name: 'Poland' },
      { code: 'PT', name: 'Portugal' },
      { code: 'QA', name: 'Qatar' },
      { code: 'RO', name: 'Romania' },
      { code: 'RU', name: 'Russia' },
      { code: 'RW', name: 'Rwanda' },
      { code: 'KN', name: 'Saint Kitts and Nevis' },
      { code: 'LC', name: 'Saint Lucia' },
      { code: 'VC', name: 'Saint Vincent and the Grenadines' },
      { code: 'WS', name: 'Samoa' },
      { code: 'SM', name: 'San Marino' },
      { code: 'ST', name: 'Sao Tome and Principe' },
      { code: 'SA', name: 'Saudi Arabia' },
      { code: 'SN', name: 'Senegal' },
      { code: 'RS', name: 'Serbia' },
      { code: 'SC', name: 'Seychelles' },
      { code: 'SL', name: 'Sierra Leone' },
      { code: 'SG', name: 'Singapore' },
      { code: 'SK', name: 'Slovakia' },
      { code: 'SI', name: 'Slovenia' },
      { code: 'SB', name: 'Solomon Islands' },
      { code: 'SO', name: 'Somalia' },
      { code: 'ZA', name: 'South Africa' },
      { code: 'KR', name: 'South Korea' },
      { code: 'ES', name: 'Spain' },
      { code: 'LK', name: 'Sri Lanka' },
      { code: 'SD', name: 'Sudan' },
      { code: 'SR', name: 'Suriname' },
      { code: 'SE', name: 'Sweden' },
      { code: 'CH', name: 'Switzerland' },
      { code: 'SY', name: 'Syria' },
      { code: 'TW', name: 'Taiwan' },
      { code: 'TJ', name: 'Tajikistan' },
      { code: 'TZ', name: 'Tanzania' },
      { code: 'TH', name: 'Thailand' },
      { code: 'TL', name: 'Timor-Leste' },
      { code: 'TG', name: 'Togo' },
      { code: 'TO', name: 'Tonga' },
      { code: 'TT', name: 'Trinidad and Tobago' },
      { code: 'TN', name: 'Tunisia' },
      { code: 'TR', name: 'Turkey' },
      { code: 'TM', name: 'Turkmenistan' },
      { code: 'TV', name: 'Tuvalu' },
      { code: 'UG', name: 'Uganda' },
      { code: 'UA', name: 'Ukraine' },
      { code: 'AE', name: 'United Arab Emirates' },
      { code: 'GB', name: 'United Kingdom' },
      { code: 'US', name: 'United States' },
      { code: 'UY', name: 'Uruguay' },
      { code: 'UZ', name: 'Uzbekistan' },
      { code: 'VU', name: 'Vanuatu' },
      { code: 'VE', name: 'Venezuela' },
      { code: 'VN', name: 'Vietnam' },
      { code: 'YE', name: 'Yemen' },
      { code: 'ZM', name: 'Zambia' },
      { code: 'ZW', name: 'Zimbabwe' },
      { code: 'XK', name: 'Kosovo' }
    ];

  let currentQuestionIndex = 0; //before start, question index = 0 
  let correctAnswers = 0; //before game, no correct answers yet, so 0
  let mistakes = 0; //the same 
  let gameTimer; //the same
  let startTime; //the same
  
  //Start game
  document.getElementById('startGame').addEventListener('click', function() {
      document.querySelector('.hero').style.display = 'none'; // Hide the hero section since game is started
      loadGame();
  });

  //function to randomize the correct answer on left or right 
  //also to randomize questions not A-Z as dataset
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // ES6 destructuring assignment to swap elements
      }
  }
  
  // function for loading game
  function loadGame() {
      shuffleArray(countries); // Shuffle countries at the start of the game
      resetGame();
      displayNextQuestion();
  }

  //function to reset game by make everyhting 0 
  function resetGame() {
      correctAnswers = 0;
      mistakes = 0;
      currentQuestionIndex = 0;
      startTime = Date.now();
      gameTimer = setInterval(updateTimer, 1000);
  }
  
  //function for next questions
  function displayNextQuestion() {
      if (currentQuestionIndex < countries.length) {
          const questionCountry = countries[currentQuestionIndex];
          const wrongCountry = getRandomCountry(questionCountry.code);
          const correctFirst = Math.random() < 0.5; // Randomly decide if correct flag should be first
  
          const firstCountry = correctFirst ? questionCountry : wrongCountry;
          const secondCountry = correctFirst ? wrongCountry : questionCountry;
  
          document.body.innerHTML += `
              <div id="gameArea">
                  <h2>Which flag belongs to ${questionCountry.name}?</h2>
                  <div class="cards">
                      <div class="card" onclick="checkAnswer('${firstCountry.code}', '${questionCountry.code}')">
                          <img src="assets/img/flags/${firstCountry.code.toLowerCase()}.png" alt="Find the correct answer!">
                      </div>
                      <div class="card" onclick="checkAnswer('${secondCountry.code}', '${questionCountry.code}')">
                          <img src="assets/img/flags/${secondCountry.code.toLowerCase()}.png" alt="Find the correct answer!">
                      </div>
                  </div>
              </div>
          `;
      } else {
          endGame(true); // User has gone through all countries
      }
  }
  
  //function for randomizing country for questions from dataset to avoid A-Z order
  function getRandomCountry(excludeCode) {
      let randomCountry;
      do {
          randomCountry = countries[Math.floor(Math.random() * countries.length)];
      } while (randomCountry.code === excludeCode);
      return randomCountry;
  }
  
  //function to check answer
  function checkAnswer(selectedCode, correctCode) {
      if (selectedCode === correctCode) {
          correctAnswers++;
          alert('Correct!');
      } else {
          mistakes++;
          alert('Wrong!');
          if (mistakes === 3) {
              endGame(false);
              return;
          }
      }
      currentQuestionIndex++;
      document.getElementById('gameArea').remove();
      displayNextQuestion();
  }
  
  //function for time and its update
  function updateTimer() {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      console.log(`Time elapsed: ${elapsed} seconds`);
  }
  
  //function to win or lose game/end game
  function endGame(won) {
    clearInterval(gameTimer);
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    document.body.innerHTML = `
        <div id="resultScreen">
            <h1>${won ? 'Congratulations, you won!' : 'Game Over!'}</h1>
            <p>Your score: ${correctAnswers}</p>
            <p>Time spent: ${timeSpent} seconds</p>
            <p>Mistakes: ${mistakes}</p>
            <button onclick="location.reload()">Restart</button>
            <a href="index.html" class="button">Main Menu</a>
        </div>
    `;
}