const then = new Date();
const now = () => new Date();
let count = 0;

console.log(`then: ${then.getSeconds()}`);
console.log(`now: ${now().getSeconds()}`);


const timer = setInterval(function() {
	count++;	
  console.log('Two seconds later...');
	console.log(`then: ${then.getSeconds()}`);
	console.log(`now: ${now().getSeconds()}`);
  console.log('----------');
	if (count === 10) clearInterval(timer);
}, 2000);