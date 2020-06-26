# iroh-says

get some Uncle Iroh wisdom any time anywhere

## cli

```
npm install iroh-says [-g]
iroh-says [--all]
```

## javascript 

```
const quote = require('iroh-says');

console.log(quote()); // a random quote 
Perfection and power are overrated. I think you are very wise to choose happiness and love.

console.log(quote());
Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.

console.log(quote.quotes); // all quotes
[
  'Perfection and power are overrated. I think you are very wise to choose happiness and love.',
  'Sometimes life is like this dark tunnel, you can’t always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.',
  'It is important to draw wisdom from different places. If you take it from only one place it becomes rigid and stale.',
  'Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.',
  'Life happens wherever you are, whether you make it or not.',
  'While it is always best to believe in oneself, a little help from others can be a great blessing.',
  'A man needs his rest.',
  'It is usually best to admit mistakes when they occur, and to seek to restore honor.'
]
```


