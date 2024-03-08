# Text Analysis Library Package

This is a simple JavaScript library for text analysis, providing functionalities such as sentiment analysis and word frequency analysis.

## Installation

Install the package via npm:

```bash
npm install natural text-analysis
```

## Usage

1. Require the `text-analysis` package in your Node.js application:

```javascript
const { analyzeSentiment, analyzeWordFrequency } = require('text-analysis');
```

2. Use the provided functions to analyze text:

```javascript
const text = "I love coding and programming!";
const sentimentScore = analyzeSentiment(text);
console.log('Sentiment score:', sentimentScore);

const frequencyMap = analyzeWordFrequency(text);
console.log('Word frequency:', frequencyMap);
```

## Functions

### `analyzeSentiment(text)`

Analyzes the sentiment of the given text and returns a sentiment score.

### `analyzeWordFrequency(text)`

Analyzes the frequency of words in the given text and returns a map with words as keys and their frequencies as values.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
