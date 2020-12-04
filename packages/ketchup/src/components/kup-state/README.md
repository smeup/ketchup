# Kup-State

KupState provides a way to interface with (but doesn't depend on) Stencil.js generated components.

## Goals

* Do not depend on any Stencil.js-specific logic
* Avoid third-party dependencies
* Unopinionated about the storage backend
* Prevent tightly-coupled integration
* Exploit the event-driven nature of javascript to avoid having to deal with DI's
* Exploit typescript generics and type system to avoid runtime overhead (type checking happens at build-time)
* Performance oriented (we should add some benchmarks to ensure the overhead is contained as this library evolves)

## TODO

- [ ] Move this to an appropriate location
- [ ] Implement redux-persist
- [ ] Define a way to inject the backend dynamically into KupStateManager
- [ ] Refactor the code to produce better structured sub-modules
- [ ] Tests!