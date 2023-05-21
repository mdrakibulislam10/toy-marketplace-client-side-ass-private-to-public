import useTitle from "../../hooks/useTitle";

const Blogs = () => {
    useTitle("Blogs");

    return (
        <section className="lg:w-3/4 mx-auto my-12">
            <article>
                <h2 className="text-2xl md:text-3xl font-semibold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p># An access token and refresh token is authorization system for personal(sensitive) data. After a user is authenticate he is given an access token. Data access is allowed by checking token validation on the server side. The access token has an expiration date, after the date expired the user cannot access the data. When the date expired, another access token is issued with a refresh token. If the refresh token becomes invalid or expired, the user has to login or authenticate again. Client-side tokens are stored in local storage or session storage or HttpOnly cookie in cookies. HttpOnly cookie are more secure than others.</p>
            </article>
            <article className="my-5">
                <h2 className="text-2xl md:text-3xl font-semibold">2. Compare SQL and NoSQL databases?</h2>
                <p># SQL(Structured Query Language) and NoSQL(Not Only SQL) are two broad categories of database management systems. SQL store data in table format and NoSQL store data in document(object) format. SQL databases use a standardized query language(SQL) for defining and manipulating data. NoSQL databases may have different query interfaces depending on their data model. NoSQL has more flexibility than SQL. NoSQL is easy to use than SQL.</p>
            </article>
            <article className="mb-5">
                <h2 className="text-2xl md:text-3xl font-semibold">3. What is express js? What is Nest JS?</h2>
                <p>
                    # <b>Express.js:</b> Express.js is web application framework for server side. Express.js focuses on providing a lightweight and flexible foundation for web applications.  Express.js allows developers to handle HTTP requests and responses easily with routes. Express.js allows us to exchange data through the Restful API. Express.js is easy to use than Next.js. If we develop small and medium complex web application than we used Express.js.
                    <br />
                    # <b>Next.js:</b> Nest.js is web application framework for server side. Nest.js used for builds larger and more organized projects. We can use Next.js for modern web applications. Next.js can RESTful APIs, but Next.js is primarily designed for server-side rendering(SSR) and building frontend applications. If we develop more complex web application than we used Next.js.
                </p>
            </article>
            <article>
                <h2 className="text-2xl md:text-3xl font-semibold">4. What is MongoDB aggregate and how does it work?</h2>
                <p># MongoDB aggregate function is used to perform advanced data analysis and manipulation operations on collections. The aggregate function allows to process data using a pipeline of stages. Each stage represents a specific operation that is applied to the data sequentially. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                </p>
            </article>
        </section>
    );
};

export default Blogs;