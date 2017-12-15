/**
 * @param {Promise} promise
 * @param {function(*)} action - action to be performed
 * @param {function(*)} cleanup - cleanup to be done
 * @return {Promise} - result of action
 */
module.exports = function(promise, action, cleanup) {
	const result = promise.then(action)
	return result.then(
		() => promise.then(cleanup).then(() => result),
		() => promise.then(cleanup).then(() => result)
	)
}
