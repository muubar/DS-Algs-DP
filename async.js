//generator + promise with runner pattern
function* gen() {
  const promiseVal = yield new Promise((resolve) => setTimeout(() => resolve(5), 2000));
  console.log(promiseVal);
  const val = yield "hello";
  console.log(val);
  const promiseVal2 = yield new Promise((resolve) => setTimeout(() => resolve(10), 2000));
  console.log(promiseVal2);
  return promiseVal + promiseVal2;
}

function runner(genFn) {
  const iterator = genFn();
  return run();

  function run(arg) {
    const result = iterator.next(arg);
    if (result.done) return Promise.resolve(result.value);
    return Promise.resolve(result.value).then(run);
  }
}

runner(gen).then(console.log);



//async await
async function equivalent() {
  const promiseVal = await new Promise((resolve) => setTimeout(() => resolve(5), 2000));
  const val = await promiseVal + 1;
  return val;
}

equivalent().then(console.log);