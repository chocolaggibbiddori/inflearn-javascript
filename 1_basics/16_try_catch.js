/**
 * try...catch
 */

(function runner() {
  try {
    console.log('hi');
    throw new Error('error message');
    console.log('chocola');
  } catch (e) {
    console.log('---catch---');
    console.log(e);
  } finally {
    console.log('---finally---');
  }
})();