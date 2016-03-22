Resources:
http://www.gcflearnfree.org/access2010/queries-how-to-create-a-parameter-query

https://learn.fotoware.com/02_FotoWeb_8.0/Developing_with_the_FotoWeb_API/The_FotoWeb_RESTful_API/03_API_Authentication

http://www.yiiframework.com/doc-2.0/guide-rest-resources.html



Etsy Api
____________________


How do I make API requests?
- Gain an access token / key and obtain account management privileges.
- Obtain the json url.
- Make an ajax call or...
- You can make these requests with:
jQuery.get( "http://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/", function( response ) {
    // response contains site information
} );

- Also with Angular:
$http.get('/someUrl', config).then(successCallback, errorCallback);
$http.post('/someUrl', data, config).then(successCallback, errorCallback);
__________________________

*What is the base URL for all requests?
- The url that's in the search-bar while on the front page of a website.
*Are there any headers or query parameters required?
- A parameter query is one of the simplest and most useful advanced queries you can create. It allows you to create a query that can be updated easily to reflect a new search term. When you open a parameter query, Access will prompt you for a search term and then show you query results that reflect your search.
*What kind of response should I expect?
- You should expect a Json response(list/ array of objects), XML return, or possibly an error.

How does the API handle authentication?

- A developer is given an API key (typically an ID and Secret). A developer is responsible for storing this API key in a secure place on their server, in a place that nobody else can access it. The developer makes API requests to the API service by putting the API key he was given into the HTTP Authorization header.
_____________________________________

Do I need to authenticate? with user credentials?
  -In most cases, yes. Some Api's are public / allow unauthenticated requests.
  -In most cases: You retrieve the user account from your database by username or email.
  You compare the password hash from your database to the password received from the incoming API request. If the credentials are valid (the user exists, and the password matches), then you can move onto the next step. If not, you’ll return an error response to the app, letting it know that either the username or email and password are invalid.
What can I do with an unauthenticated request?
  -

How can I authenticate my request? (what methods)

  - Curl prompts you for a username and/or password
  - Other times you must provide a personal access token.
  - An api token / key is.... key.
  Sometimes the key is found inside the query string.
  You can use a 'GET' command :

            GET full_api_descriptor['tokens']
          FWAPIToken: Full API key
          Accept: application/vnd.fotoware.api-token-info+json
          Content-Type: application/vnd.fotoware.api-token-request+json


What Resource in the API represents...

 - A resource is an object with a type, associated data, relationships to other resources, and a set of methods that operate on it.
______________________________________

*an individual product?
- Data associated with an individual resource is modeled as key.
*a group or collection of products?
- Groups are represented as an array of obects.
*images associated with a product?
- Ive seen &source, &image ... Images are represented by a Uniform Resource Identifier.
*sizes and colors for a product?
- Color is represented as a 4-element array. The 4 elements represent values for red, green, blue and alpha in that order. Values range from 0 through 255. If color is undefined for a symbol, then color value is null.

    What actions and endpoints exist for each of these Resources?
      - An endpoint by itself is just a reference to a uri that accepts web requests that may or may not be RESTful.
    What parameters do each endpoint require or accept?
      - A forward slash or dot domain.
What fields are returned for each Resource, specifically:
*an individual product?
- When including a resource in a RESTful API response, the resource needs to be serialized into a string.
*a group or collection of products?
- Each collection contains a list of resource objects of the same type. While collections can be represented as arrays, it is usually more desirable to represent them as data providers. This is because data providers support sorting and pagination of resources, which is a commonly needed feature for RESTful APIs returning collections.

What additional fields can be requested for each?
X-Pagination-Total-Count: The total number of resources;
X-Pagination-Page-Count: The number of pages;
X-Pagination-Current-Page: The current page (1-based);
X-Pagination-Per-Page: The number of resources in each page;
Link: A set of navigational links allowing client to traverse the resources page by page.
