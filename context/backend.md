# Supabase Contact Form Backend — Production Implementation

## Role

Act as a senior full-stack engineer specializing in **Next.js + Supabase** applications, with a strong focus on compact architecture, security, performance, and production-ready implementation.

## Objective

Inspect the existing project and implement a compact backend system using **Supabase** to collect, store, retrieve, and manage all information submitted through the existing contact form.

Do not rebuild or unnecessarily modify unrelated parts of the application.

---

## 1. Inspect the Existing Project First

Before making changes:

* Identify the current framework and project structure.
* Locate the existing contact form.
* Identify every field currently present in the form.
* Check how the form currently handles submission.
* Check whether Supabase is already installed or configured.
* Check whether environment variables already exist.
* Check whether a database or backend API already exists.
* Reuse existing components and architecture wherever possible.

Do not create duplicate functionality.

---

## 2. Supabase Architecture

Use **Supabase PostgreSQL** as the primary database.

Use the official Supabase client appropriate for the existing application architecture.

Keep the architecture simple:

```text
Contact Form
    ↓
Server/API Layer
    ↓
Supabase
    ↓
PostgreSQL
```

Do not introduce a separate Express server, MongoDB, Firebase, Redis, microservices, or another backend unless there is a demonstrated technical requirement.

---

## 3. Contact Submission Database

Create a Supabase table for contact submissions.

Use a clear name such as:

`contact_submissions`

The schema should contain only fields actually required by the existing contact form.

Recommended structure:

```text
id
name
email
phone
subject
message
status
created_at
updated_at
```

Optional fields should only be added if they exist in the current contact form.

Use:

* UUID or Supabase-compatible primary key
* Appropriate PostgreSQL data types
* `created_at` with a sensible default
* `updated_at` where useful
* Appropriate indexes
* A simple status field

Suggested status values:

```text
new
read
replied
archived
```

---

## 4. Row Level Security

Enable **Row Level Security (RLS)** on the contact submissions table.

Design the policies carefully.

The public contact form should be able to submit a contact request without exposing existing submissions.

Do NOT allow anonymous users to freely:

* Read all submissions
* Update submissions
* Delete submissions

Administrative operations must be protected.

Never expose the Supabase service-role key to the browser.

---

## 5. Environment Variables

Use environment variables for Supabase configuration.

Example:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Only expose variables prefixed with `NEXT_PUBLIC_` to the client.

The service-role key must remain server-side only.

If environment variables already exist, reuse them rather than creating duplicates.

---

## 6. API / Server Layer

Implement the smallest appropriate server-side interface for the existing Next.js architecture.

At minimum support:

```text
POST   /api/contact
GET    /api/contact
GET    /api/contact/:id
PATCH  /api/contact/:id
DELETE /api/contact/:id
```

Adapt the route structure if the project already follows a different convention.

### POST /api/contact

Responsibilities:

1. Receive contact-form data.
2. Validate the request.
3. Sanitize appropriate input.
4. Insert the record into Supabase.
5. Return a small success response.
6. Handle database/API errors gracefully.

### GET /api/contact

Responsibilities:

* Retrieve submissions for authorized users only.
* Support pagination.
* Return only required fields.
* Avoid unnecessarily large responses.

### GET /api/contact/:id

Return a single authorized submission.

### PATCH /api/contact/:id

Allow authorized administrators to update fields such as:

```text
status
```

### DELETE /api/contact/:id

Allow authorized administrators to delete a submission.

---

## 7. Validation

Validate data on the server regardless of frontend validation.

Validate:

* Required fields
* Email format
* Maximum field lengths
* Empty/whitespace-only values
* Unexpected or malformed requests

Do not blindly trust client-provided data.

Return appropriate HTTP status codes and concise error messages.

---

## 8. Contact Form Integration

Connect the existing contact form to the Supabase-backed API.

Required flow:

```text
User
 ↓
Contact Form
 ↓
Client Validation
 ↓
POST /api/contact
 ↓
Server Validation
 ↓
Supabase
 ↓
PostgreSQL
 ↓
Success/Error Response
 ↓
User Feedback
```

The form should provide clear feedback for:

* Successful submission
* Validation errors
* Network errors
* Server errors

Prevent accidental duplicate submissions while the request is processing.

Preserve the existing UI and design.

---

## 9. Admin Data Management

If an existing admin/dashboard system exists, integrate contact submissions into it.

If no admin system exists, do not automatically build a large dashboard unless required.

The backend should nevertheless support:

* Listing submissions
* Viewing individual submissions
* Updating status
* Deleting submissions
* Pagination
* Basic filtering by status

Keep the management layer compact.

---

## 10. Image Performance

Optimize the existing application's images independently from the contact backend.

Where applicable:

* Use Next.js image optimization if the project uses Next.js.
* Prefer WebP or AVIF.
* Serve appropriately sized images.
* Avoid loading unnecessarily large originals.
* Lazy-load non-critical images.
* Prioritize critical/above-the-fold images.
* Use responsive image sizing.
* Avoid layout shifts caused by missing image dimensions.
* Use caching/CDN capabilities where available.

Do not add an image-processing service unless genuinely necessary.

If Supabase Storage is already being used for images:

* Reuse it.
* Optimize uploaded image sizes.
* Avoid serving unnecessarily large originals.
* Use appropriate caching and transformation capabilities where available.

---

## 11. Dependencies

Inspect the existing `package.json` before installing anything.

If Supabase is not installed, install the minimum required official Supabase package(s) compatible with the project.

Do not install redundant libraries.

Before installing a dependency, determine whether the project already provides equivalent functionality.

After installation:

* Configure the dependency.
* Update package configuration.
* Verify the application still builds.

---

## 12. Database Migration

Create a clean Supabase SQL migration/schema for the contact submissions table.

Include:

* Table creation
* Primary key
* Timestamps
* Required constraints
* Useful indexes
* RLS
* Appropriate policies

Keep the SQL minimal and production-safe.

Do not use overly complicated database architecture.

---

## 13. Security Requirements

Follow these rules strictly:

* Never expose the Supabase service-role key.
* Never put secrets in frontend code.
* Enable RLS.
* Validate server-side.
* Do not trust client input.
* Do not expose unauthorized submissions.
* Use parameterized/Supabase queries.
* Limit request payload sizes where appropriate.
* Avoid returning unnecessary database fields.
* Do not log sensitive information unnecessarily.

---

## 14. Performance Requirements

The backend should be compact and performant.

Prioritize:

1. Supabase PostgreSQL
2. Minimal API layer
3. Efficient queries
4. Pagination
5. Appropriate indexes
6. Small API responses
7. Minimal dependencies
8. No unnecessary infrastructure

Do not introduce:

* Microservices
* Redis
* Separate backend servers
* Message queues
* Complex caching systems

unless there is a clear requirement.

---

## 15. Error Handling

Implement predictable error handling.

Handle:

* Invalid input
* Missing fields
* Invalid email
* Supabase connection/database errors
* Unauthorized requests
* Missing records
* Duplicate submissions where applicable
* Unexpected server errors

Do not expose internal database errors or secrets to users.

---

## 16. Testing

Verify the complete workflow.

Test:

### Contact Submission

* Valid submission
* Missing name
* Missing email
* Invalid email
* Missing message
* Extremely long input
* Malformed request

### Database

* Successful insertion
* Record retrieval
* Record update
* Record deletion

### Security

* Anonymous user cannot retrieve all submissions.
* Unauthorized users cannot modify submissions.
* Service-role credentials are never exposed client-side.

### Frontend

* Loading state
* Success state
* Validation state
* Error state
* Duplicate-submit prevention

### Performance

* Images load efficiently.
* No unnecessary large image requests.
* API responses remain small.
* Contact submission does not block unrelated page content.

---

## 17. Implementation Rules

Follow these rules throughout the implementation:

* Inspect before modifying.
* Preserve the existing UI.
* Preserve existing functionality.
* Use Supabase as the backend database.
* Keep the implementation compact.
* Prefer existing project dependencies.
* Install only required packages.
* Avoid unnecessary abstractions.
* Avoid unnecessary infrastructure.
* Keep secrets server-side.
* Use RLS.
* Do not modify unrelated features.
* Do not claim something was implemented unless it was actually implemented.
* Do not claim something was tested unless it was actually tested.

---

# Final Response

After implementation, report the result using exactly this structure:

## 1. Architecture

Briefly explain:

```text
Frontend
   ↓
API / Server
   ↓
Supabase
   ↓
PostgreSQL
```

## 2. Files Changed

List every file created or modified and explain its purpose.

## 3. Supabase Schema

Show the final table structure.

## 4. API

List:

* Endpoint
* HTTP method
* Purpose
* Authentication requirement

## 5. Security

Explain:

* RLS
* Policies
* Environment variables
* Server/client key separation

## 6. Performance

Explain:

* Backend optimizations
* Database indexes
* Pagination
* Image optimizations
* Caching/CDN usage

## 7. Dependencies

List only newly installed dependencies and explain why each was required.

## 8. Testing

List the tests actually performed and their results.

## 9. Configuration Required

Clearly identify anything the developer still needs to configure manually, especially:

* Supabase project URL
* Supabase keys
* Environment variables
* Database migration
* Authentication/admin configuration, if required

Do not fabricate configuration values.

```

This version is much tighter for your **Supabase + Next.js** setup and avoids unnecessary backend infrastructure.
```
