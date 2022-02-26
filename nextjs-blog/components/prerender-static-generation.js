// If a page uses Static Generation, the page HTML is generated 
// at build time. That means in production, the page HTML is 
// generated when you run next build . This HTML will then be 
// reused on each request. It can be cached by a CDN.

// With data

/*
Some pages require fetching external data for pre-rendering. 
There are two scenarios, and one or both might apply. In each case, 
you can use these functions that Next.js provides:

Your page content depends on external data: Use getStaticProps.
Your page paths depend on external data: Use getStaticPaths 
(usually in addition to getStaticProps).

*/

// Without data

// By default, Next.js pre-renders pages using Static Generation without fetching data.