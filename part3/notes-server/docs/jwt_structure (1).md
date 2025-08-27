# JWT Structure

A JWT (JSON Web Token) is divided into **three parts**, separated by dots (`.`):

```
Header.Payload.Signature
```

## Example (Encoded)

```
xxxxx.yyyyy.zzzzz
```

- **Header (xxxxx)** → Algorithm & Token Type
- **Payload (yyyyy)** → Claims (user data, expiry, etc.)
- **Signature (zzzzz)** → Verifies the token hasn’t been altered

## Example (Decoded)

### Header

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": 1516239022
}
```

### Signature

```
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```
