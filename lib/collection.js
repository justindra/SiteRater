Websites = new Mongo.Collection("websites");

Websites.allow({
    insert: function (userId, doc) {
        return userId ? true : false;
    },
    update: function (userId, doc, fields, modifier) {
        return userId ? true : false;
    },
    remove: function (userId, doc) {
        return false;
    }
});