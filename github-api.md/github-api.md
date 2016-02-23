How does the API handle authentication?  
    The server you're trying to access wants to know who is accessing its information - or - when the client needs to know that the server is the system it claims to be. The user / computer has to prove its identity to the server / client. Usually, a server requests an username and/or password. A client, usually, requests a certificate.  
  Do I need to authenticate?
    Yes, but: Authentication does not determine what tasks an individual can or cant do or what files they can see. It merely identifies and verifies who / what the accessor is.
  What can I do with an unauthenticated request?
    View a restricted set of data.
  How can I authenticate my request? (3 ways)
    -Basic.(curl -u "username" https://api.github.com).
    -OAuth2 Token. Set in a header.(curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com).
    -OAuth2 Key/Secret.(curl 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy').

How do i ask the api for.....

  The profile information for a specific user?
    GET /info/user
  The repository listing for a specific user?
    Get /repo/user
  The recent, public activity for a specific user?

Is there a limit to the number of requests I can make?
    For Oauth you can make 5,000 requests an hour and only 60 unauthenticated requests an hour.
  Is there a way of extending that limit?
    Yes. But it's important to stay with-in the rate limit. You can extend unauthenticated requests by passing your app's client ID and secret as part of the query string starting with curl -i ".......".
  What happens when I hit the limit?
    You are notified with a 403 forbidden and an explanation at the bottom of the response. If you abuse the limit you could be temporarily blocked from content creation.
What if there is a lot of data returned?
    It will be paginated to 30 items by default.
  How can I ask for more (or less) data from a request?
    Pass in a per_page parameter
    "&per_page=#ofpages"
  How do I know that there is more data available?

What are the endpoints for fetching...

  the profile data for a user?
    /user
  the organizations a user belongs to?
    /orgs/organizationName/repos
  the repositories a user has created?
    /users/userName/repos
  a filtered list of repositories?
    /users/userName/repos?type=owner
  a sorted list of repositories?

  public events for a user?

When fetching public events for a user...

  How many results are returned by default?
    The fixed page size is 30 items. Fetching up to ten pages is supported, totaling 300 events.
  What limitations exist on fetching more results?
    Only events created within the past 90 days will be included in timelines.
  What is the basic structure of the results?
    A ------
      Status:
      Link:
      x-RateLimit-Limit:
      x-RateLimit-Remaining:
      An array of objects.
  What fields are included in each result?
      The: Type, repository info, input, organization, time and date created.
  What are the data types for each field?
      The id's, names and links of each.
  What are some of the different values for the type field?
      Booleans, numerals, strings and links.
