const data = Deno.readTextFileSync('./finalSrk.csv');

const movieWhereSRKActed = (data) => data.match(/Actor/g).length;

console.log(movieWhereSRKActed(data));
