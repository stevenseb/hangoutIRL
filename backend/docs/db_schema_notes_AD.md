# Schema notes
## schema wide notes
- Take a closer look at the api docs to see what columns and tables you need. The naming of your tables are different than what the api docs have, consistency is important. You may also have issues with matching your response bodies to your api docs when your tables have different names / columns.
- All columns need createdAt and updatedAt columns with a date data type.
- naming conventions for table should not be camel cased, they should be capital cased IE subscribedEvent -> SubscribedEvent.
- According to the api docs, it looks like Events have images too, you may need to create an EventImages table.

## Events table
- date columns should be a data type of date.
- no capacity column.

## subscribedEvent table
 - needs a status column, to tell if a member is either attending or waitlisted or pending.

## Member table (might want to change title of table to user to make it more general )
- need a password column.
- what are the organizer and organizes columns for?

## Hangout table
- Should have table relation to user, organizer column should be organizerId and have a relation to the member/user table.
- missing some columns, please take a look at the api docs for a hangout / group.

## Venue table
- needs more columns to provide more info. Address, city, state, lat, lng.
- consider connecting a specific hangout to the venue by id.

## memberHangout table
 - needs a status column, a member needs approval to join a group, when the record is created in the join table, there needs to be away to tell if that member is either a pending member or an approved member.
