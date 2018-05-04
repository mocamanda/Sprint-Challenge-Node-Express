# Review Questions

## What is Node.js?
    It is an environment that lets us run JavaScript outside of the browser.

## What is Express?
    Minimalistic framework for Node.js that gives developers HTTP utilities for building backend of applications. It helps handle functionality, including routes and CRUD methods to a server.

## Mention two parts of Express that you learned about this week.
    Express Router
    Middleware

## What is Middleware?
    Software that runs between the request & response. It can alter the data itself or adding a layer of security to requests.

## What is a Resource?
    An identifiable part of an app, that should have its own endpoint.

## What can the API return to help clients know if a request was successful?
    Return status in 200 range.

## How can we partition our application into sub-applications?
    Break off end point into different routers. For example, /api/users with userRouter and /api/posts with postRouter.

## What is CORS and why do we need it?
    Cross Origin Resource Sharing that allows us to request information across different domains. We can implement by installing the CORS middleware since it is not default for security reasons.