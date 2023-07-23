# Server components lol?! 🙃

## `useRouter`, `createContext` etc. can only be used in client components

`useRouter`, `useSearchParams` and `createContext` can only be used in client
components. Currently we're wrapping everything in a `RoutingContext`, and
using it to pass down path params, search params and the navigate function,
which all come from those hooks. All of those things can only be done in a
client component. So the Page component would have to be a client component.
Which means its children, i.e. everything, would have to be client components.

## Can't pass functions from server to client component

The boundary between server components and client components is also the
network boundary. That means that anything you pass down as a prop from a
server component to a client component has to be serializable. Functions are
not serializable. (See here: [passing-props]) That means that you can't, e.g.,
pass the `useRouter` or `useSearchParams` or any other hook down into a client
component from a server component as a prop. So since they can only be used in
client components, you would have to pass them down from a client component,
which means you would have to make the Page component, and hence everything, a
client component.

This also goes for passing e.g. the Next.js `Link` component down - you can
pass it OK from a server to a server component, but not from a server to a
client component.

## You can of course just use them in the normal way

You can of course just declare a component in your Next.js app to be a
client component, and then call the `useRouter` or `useSearchParams` hook
directly, the way you're supposed to. But to do that, your components have
to be part of the Next.js app in order to be able to import the hooks.

## Also... shallow routing doesn't work right now

Check this comment on this GitHub
thread: https://github.com/vercel/next.js/discussions/48110#discussioncomment-6481618

Lots of people complaining that shallow routing doesn't work, and then
someone from Vercel acknowledging the issue and saying they "won't be able
to get around to it for a bit" as they're focussing on other things.

[passing-props]: https://nextjs.org/docs/getting-started/react-essentials#passing-props-from-server-to-client-components-serialization
