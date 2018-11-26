export const x = 5;
export default () => {
  console.log('test');
  console.log(`Variable x is ${x}`);

  new Promise((resolve, reject) => {
    resolve('Resolved');
  }).then((res) => console.log(res));
};
