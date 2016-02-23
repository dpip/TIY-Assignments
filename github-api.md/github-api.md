How does the API handle authentication?  
    The server you're trying to access wants to know who is accessing its information - or - when the client needs to know that the server is the system it claims to be. The user / computer has to prove its identity to the server / client. Usually, a server requests an username and/or password. A client, usually, requests a certificate.  
  Do I need to authenticate?
    Yes, but: Authentication does not determine what tasks an individual can or cant do or what files they can see. It merely identifies and verifies who / what the accessor is.
  What can I do with an unauthenticated request?
    Research the error number.
  How can I authenticate my request? (3 ways)
    -Basic.(curl -u "username" https://api.github.com).
    -OAuth2 Token. Set in a header.(curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com).
    -OAuth2 Key/Secret.(curl 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy').

How do i ask the api for.....

  The profile information for a specific user?

  The repository listing for a specific user?

  The recent, public activity for a specific user?

Is there a limit to the number of requests I can make?

  Is there a way of extending that limit?

  What happens when I hit the limit?

What if there is a lot of data returned?

  How can I ask for more (or less) data from a request?

  How do I know that there is more data available?

What are the endpoints for fetching...

  the profile data for a user?

  the organizations a user belongs to?

  the repositories a user has created?

  a filtered list of repositories?

  a sorted list of repositories?

  public events for a user?

When fetching public events for a user...

  How many results are returned by default?

  What limitations exist on fetching more results?

  What is the basic structure of the results?

  What fields are included in each result?

  What are the data types for each field?

  What are some of the different values for the type field?
