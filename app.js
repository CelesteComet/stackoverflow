var express = require('express');
var app = express();
var Globalize = require( "globalize" );

Globalize.load( require( "cldr-data" ).entireSupplemental() );
Globalize.load( require( "cldr-data" ).entireMainFor( "en", "es" ) );

app.set('view engine', 'ejs');

app.get('/', function(req, res){
 Globalize.load({
      "supplemental": {
          "parentLocales": {
              "parentLocale": {
                  "en": "en-US",
                  "ja": "ja-JP"
              }
          },
          "likelySubtags": {
              "de": "de",
              "en": "en",
              "fr": "fr",
              "ja": "ja"
          }
      }
  });
  Globalize.locale("en");
  var formatter;
  formatter = Globalize.numberFormatter();
  console.log(formatter(3.141592));
  res.render('stuff');
})

app.listen(4000, function(){
  console.log("app is listening on localhost:4000")
});