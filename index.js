const sum = (function() {
    "use strict";
    return function sum( ...args) {
      
      return args.reduce((a, args) => a + args, 0);
    };
  })();
  console.log(sum(1,2,3,4)); // 6

