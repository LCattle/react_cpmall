module.exports = {
	generateForm: function(formId, serverUrl, fields) {
		var form = '<form id="'+ formId + '" action="' + serverUrl + '" method="post">'
		for (var key in fields) {
			form += '<input type="text" name="' + key + '" value="' + fields[key] + '" />'
		}
    form += '<input type="submit" value="Submit" /></form>'
    return form
	}
}
