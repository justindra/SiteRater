Meteor.methods({
	addNewWebsiteLink: function (options) {
		check(options, {
			url: String,
			title: Match.Optional(String),
			description: Match.Optional(String)
		});
		this.unblock();
		try {
		    var result = HTTP.call("GET", options.url);
		    var head = result.content.slice(result.content.search('<head>') + 6, result.content.search('</head>'));
		    var indexstart = head.search('<title>'),
		    	indexfin = head.search('</title>'),
		    	indexdesc = head.search('name="description"');
		    var title = head.slice(indexstart+7, indexfin);
		    var descStart = head.search(/<meta[^>]+name="description"/g),
		    	descFin = head.indexOf('>', descStart);
		    var description = head.slice(descStart, descFin);
		    descStart = description.search(' content="');
		    descFin = description.indexOf('"', descStart + 10);
		    description = description.slice(descStart + 10, descFin);
		    // return null, {
		    // 	title: title,
		    // 	description: description
		    // }
		} catch (e) {
		    // Got a network error, time-out or HTTP error in the 400 or 500 range.
		    console.log(e);
		    return false;
		}
		Websites.insert({
            url: options.url,
            title: !_.isEmpty(options.title) && options.title || title,
            description: !_.isEmpty(options.description) && options.description || description,
            createdOn: new Date()
        });

        return true;
	}
});