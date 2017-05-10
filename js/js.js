var allStories = [];

////WORLD NEWS
// BBC
var bbcxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=bbc-news");
bbcxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#BBCnewsContent').append($el);
    }
  }
});

// Associated Press
var associatedpressxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=associated-press");
associatedpressxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#APnewsContent').append($el);
    }
  }
});

// Reuters
var reutersxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=reuters");
reutersxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#ReutersnewsContent').append($el);
    }
  }
});

// WashingtonPost
var washingtonpostxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=the-washington-post");
washingtonpostxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#WashingtonpostnewsContent').append($el);
    }
  }
});
////TECHNOLOGY
//Hacker News
var hackernewsxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=hacker-news");
hackernewsxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#HackernewsContent').append($el);
    }
  }
});
//The Next Web
var thenextwebxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=the-next-web");
thenextwebxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#NextWebContent').append($el);
    }
  }
});
//Tech Crunch
var techcrunchxhr = $.getJSON(" https://g-newsapi.herokuapp.com/v1/articles?source=techcrunch");
techcrunchxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#TechcrunchContent').append($el);
    }
  }
});
//Engadget
var engadgetxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=engadget");
engadgetxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#EngadgetContent').append($el);
    }
  }
});

////SPORTS
//Fox Sports
var foxsportsxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=fox-sports");
foxsportsxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#FoxnewsContent').append($el);
    }
  }
});
//NFL News
var nflnewsxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=nfl-news");
nflnewsxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#NFLnewsContent').append($el);
    }
  }
});
//BBC Sports
var bbcsportsxhr = $.getJSON(" https://g-newsapi.herokuapp.com/v1/articles?source=bbc-sport");
bbcsportsxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#BBCSportContent').append($el);
    }
  }
});
//ESPN Sport
var espnsportsxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=espn");
espnsportsxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#ESPNsportContent').append($el);
    }
  }
});

////SCIENCE
//National Geographic
var nationalgeographicxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=national-geographic");
nationalgeographicxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#NationalgeographicContent').append($el);
    }
  }
});
//New Scientist
var newscientistxhr = $.getJSON("https://g-newsapi.herokuapp.com/v1/articles?source=new-scientist");
newscientistxhr.done(function(data) {
  var newsArray = [];
  for (var i = 0; i < data.articles.length; i++) {
    let newsObject = {
      title: data.articles[i].title,
      imageURL: data.articles[i].urlToImage,
      url: data.articles[i].url,
      description: data.articles[i].description,
      source: data.source
    }
    newsArray.push(newsObject);
    allStories.push(newsObject);
  }
  populateNews(newsArray);

  function populateNews(newsArray) {
    for (article of newsArray) {
      let $el = $('<a href="#" class="linkthumb">' + '<div class="col-sm-6 col-md-12 newsCard">' + '<div class="thumbnail">' + '<div class="caption">' + '<img src="" class="articleImage"></img>' +
        '<h3 class="articleTitle"></h3>' +
        '<p class="articleDescription"></p>' + '</a>');
      $el.find(".articleTitle").text(article.title);
      $el.find(".articleImage").attr("src", article.imageURL);
      $el.find(".linkthumb").attr('href', article.url);
      $el.find(".articleDescription").text(article.description);

      $('#NewscientistContent').append($el);
    }
  }
});

console.log(allStories);
