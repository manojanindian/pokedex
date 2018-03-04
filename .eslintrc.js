module.exports = {
    parser: "babel-eslint",
    "extends": ["airbnb"],
    "rules": {
        "indent": [2, "tab"],
        "no-tabs": 0,
        "react/prop-types": 0,
        "react/jsx-indent": [2, "tab"],
        "react/jsx-indent-props": [2, "tab"],
	},
	"globals": {
		"document": true,
		"window": true
	}
};