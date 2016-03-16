// Write a javascript function that returns a passed string with letters in alphabetical order.
// Example String : 'webmaster'
// Example Output : 'abeemrstw'

var word = "webmaster";
 function arrange() {
    for( i=0; i.length > 1; i++) {
        word = word.split('');
        word = word.sort();
        word = word.join('');
        allert(word);

    }
}
