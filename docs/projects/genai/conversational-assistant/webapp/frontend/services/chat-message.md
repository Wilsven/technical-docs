---
updated: 4 Aug 2024
authors:
  - Ong Tsien Jin
---

# Chat Message Service

This service is meant to handle persistence of conversation.

!!! WARNING "Foot gun"

    The current implementation is a "foot gun" implementation that was easy to put together and work for the limited
    use cases that were laid out. However, there are inheirent drawbacks that might induce silent failures in the expected
    behavior.

    Currently, only one chat history (defined by `Profile.id`) can be tracked at any one point of time. Calling `ChatMessageService.load()` will drop the reference to previously loaded chat histories. This means that previous `BehaviorSubject`s tracking the conversation will be orphaned and will not recieve any updates upon changes.

    ---

    **How to fix**

    This can be improved by memoizing the loaded chat history into a `Record<string, BehaviorSubject<Message[]>`, so all `BehaviorSubject`s can be tracked and updated as necessary. Calling `ChatMessageService.load()` can then return a reference to the memoized `BehaviorSubject`. This will allow multiple conversations to be loaded and updated simultaniously.

---

## @label(service) ChatMessageService

### Attributes

#### @label(private) @label(attr) $messages

`BehaviorSubject<Message[]>` tracking the currently active chat history.

!!! WARNING "Important"

    See the note above.

#### @label(private) @label(attr) $currentProfileId

`BehaviorSubject<string>` to keep track of the currently loaded conversation. Mainly used to print a warning in console.

### Methods

#### @label(meth) Load Messages

    async load(profileId: string): Promise<BehaviorSubject<Message[]>>

Description
: Method to load the conversation with a given profile into memory to be tracked for updates.

Parameters
: `profileId` (`string`): Profile ID of the conversation to load.

Returns
: `Promise<BehaviorSubject<Message[]>>`

!!! WARNING "Important"

    See the note above.

#### @label(meth) Static Load Messages

    async staticLoad(profileId: string): Promise<Message[]>

Description
: Method to fetch the current existing messages with a given profile. This does not induce any side effects.

Parameters
: `profileId` (`string`): ID of the profile to fetch for.

Returns
: `Promise<Message[]>`

#### @label(meth) Insert Message

    insert(message: Message): Promise<void>

Description
: Method to persist a message in `IndexedDb`.

Parameters
: `message` (`Message`): Message to be persisted

Returns
: `Promise<void>`

#### @label(meth) Upsert Message

    upsert(message: Message): Promise<void>

Description
: Method to update or create new message for persistence.

Parameters
: `message` (`Message`): Message to be updated or created.

Returns
: `Promise<void>`
