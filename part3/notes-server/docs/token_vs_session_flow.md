# Token Expiration vs Server-side Sessions

```mermaid
flowchart TD
A[Short Expiration Time] --> B[Safer only valid for limited time]
A --> C["Requires frequent login (user inconvenience)"]

D[Server-side Sessions] --> E[Store token info in backend DB]
E --> F[Access rights can be revoked anytime]
E --> G[Token validation on each API request]

G --> H[Performance impact due to DB access]
H --> I[Solution: Use fast key-value DB like Redis]

D --> J[Token is usually a random string, not JWT]
J --> K[Server fetches user info from DB on each request]
J --> L[Token often sent via cookies instead of Authorization header]
```

---

**Explanation:**

- **Short expiration time:** Limits risk if token is stolen, but users log in more often.
- **Server-side sessions:** More flexible and revocable, but adds backend complexity and performance costs.
- **Optimization:** Use Redis or similar for fast session validation.
- **Token type:** Random string with server fetching user info on each request.
