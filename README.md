# Nosso

What is this anyway? Well I don't know yet.

But this is a learning experience building a monolith using a few technologies:

- SvelteKit frontend with NodeJs adapter.
- Protobufs and gRPC.
- Rust backend (tonic, sqlx).
- PostgresSQL
    * Authorization with Row Level Security and multi tenancy.
    * Some very naive idea of workers with Listen/Notify.
    
I love Python, but this is also fun. 

## A bit complicated, but it has some benefits.

Internal communication is done through several gRPC services defined in the **protobufs/** folder, the benefit from this is that
I can reason about the request/response flow more easily.

**SvelteKit** is handling a thin layer on the edge of HTTP to gRPC calls. Internally using protobufjs and grpc-js libraries.
The other benefit is that is so convenient to implement frontend stuff with svelte. 

**Rust** with tokio, tonic, prost, sqlx and a bunch other dependencies compose a nice backend
to safely handle enough connections with limited resources. Not to mention that the language and toolkit plays a 
fantastic role in everyday developer experience.

**Postgres** is more than a data store, I decided to use RLS and its pub/sub system, mainly to have some AuthZ and 
distributed workers without having to increase complexity of this pet project. I think it's good enough.  