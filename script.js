var app = Application.currentApplication();
app.includeStandardAdditions = true;

var word = app.displayDialog('What word would you like to add to Evernote?', {
    withTitle: 'Add Word to Evernote',
    defaultAnswer: ''
}).textReturned;

var command = "/usr/local/bin/sdcv -n " + word + " | tail -n +6";

var evernote = Application('Evernote');

evernote.createNote({
	title: word,
	withText: app.doShellScript(command).replace(/ \[syn: (.|\s)*\]/g, ''),
	notebook: "Words"
});

