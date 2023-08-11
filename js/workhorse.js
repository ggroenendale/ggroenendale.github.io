/**
 * @file Workhorse.js
 * @author Geoff Groenendale
 * @since 5/8/2018
 * @desc This is a collection of utility functions for the portfolio website.
 */

/**
 * @name first_l_UP
 * @desc Takes a string and capitalizes the first letter and returns that new string.
 * @param {String} string
 * @returns {String}
 */
function first_l_UP(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}