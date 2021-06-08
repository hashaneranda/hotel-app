# Apollo Federation: Microservices with authentication

A simple blog api with authentication made using apollo federation as an api gateway for the microservices. <br />

This project has been made for learning purposes. I'll need to work on a personnal
project based on microservices using `graphql` and `apollo`. <br />
It is a simple introduction to `Apollo Federation`. <br />
I honestly love it and think it's really really easy to understand and it helps me with
the problem I had with authentication in microservices. <br />
I used to make http requests for token validation through my microservices and with
`Federation`, it's just a lot easier with its context and request headers. <br />.

### Installation
This project does not need database as I'm using hard coded data in arrays to replace it. <br />
You can run this project on your machine by running this command below on your terminal:<br/>
`git clone https://github.com/apollo-federation-example.git <YOUR_PROJECT_NAME>`<br/>
Or just download this repository on your local machine.

###### The authentication part
Each service here is a normal `apollo` & `graphql` project. I usually handle authentication by
putting the current user in the context and that's what I'm doing here. <br>
```js
const server = new ApolloServer({
    gateway,
    subscriptions: false,
    context: async ({req}) => {
        let token = req.headers.authorization || null;
        if(token) {
            try {
                const {id} = await jwt.verify(token, "secret");
                const user = users.find(u => u.id === id);
                return { user };
            } catch(ex) {
                return {user: null};
            }
        }
    }
});
```
If there is an authentication (here I'm calling it `authorization` even if it's not really an authorization token) token, I just need to get the id inside the token and fetch the user who is matching the given id and then inject it into the context. <br/>

In my api gateway, I then need to inject the user inside each request's headers. Here I've choosen to fetch it from the
database and stringify it instead of just passing the user's id into the request. This will prevent fetching the user from
the database again when we will need it.<br/>

```js
const gateway = new ApolloGateway({
    serviceList: [
        {name: "users",     url: "http://localhost:4001/graphql"},
        {name: "posts",     url: "http://localhost:4002/graphql"},
        {name: "comments",  url: "http://localhost:4003/graphql"}
    ],
    buildService: ({url}) => new RemoteGraphQLDataSource({
        url,
        willSendRequest: ({request, context}) => {
            if(context.user) request.http.headers.set("user", JSON.stringify(context.user));
        }
    })
});
```

To use it inside a resolver, I have to put the user inside the context of each service again as in every `graphql` project.
```js
context: ({req}) => {
    // Fetching the user from the headers.
    const { user } = req.headers;

    if(user) {
        return { user: JSON.parse(user) };
    }
}
```

And we can call it now from every resolver.

```js
Query: {
    // To get the current user,
    // We return the user inside the context :) :)
    me: (_parent, _args, {user}) => user
}
```

It is that simple, I personnaly love `@apollo/federation` and the `@apollo` team.
They just made me love `graphql`.

<strong>LOVE EVERYONE...</strong>