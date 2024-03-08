const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const { SentimentAnalyzer, PorterStemmer } = natural;
const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');

// Function to analyze sentiment of a given text
function analyzeSentiment(text) {
  const result = analyzer.getSentiment(tokenizer.tokenize(text));
  return result;
}

// Function to analyze word frequency in a given text
function analyzeWordFrequency(text) {
  const tokens = tokenizer.tokenize(text);
  const frequencyMap = {};
  tokens.forEach(token => {
    const word = token.toLowerCase();
    if (frequencyMap[word]) {
      frequencyMap[word]++;
    } else {
      frequencyMap[word] = 1;
    }
  });
  return frequencyMap;
}

// Export functions
module.exports = {
  analyzeSentiment,
  analyzeWordFrequency
};