

Assignment stage 1

3815 ICT Software Frameworks

Student name: Sarah Puglisi Student number: s2954938

Workshop: monday 8am

\1. Design

1.1- functional requirements

FRID# Functional requirements

1

Users can input text into a web browser

Users can login to a web browser page

User can enter text to a channel/group they are assigned to

Users can be assigned to groups

2

3

4

5

Users can be assigned to channels

6

Users can have account types

7

Users can have a profile image

8

Admin users can add users to channels and groups

Super admins can add users to channels and groups

Super admins, Admins, and Admin assis can create channels

Super admins can remove all users

9

10

11

12

13

14

15

Super admins can add users to super admin role

A group can have one or more rooms

A group has a list of users

A room has a list of users





16

17

18

A user can have a username, email, id, and role

A page called login should be the first page displayed

The login page should have fields for user login details which will be

stored in local storage, and a logout button which clears local storage

19

20

A page called groups should be displayed to a user who has logged in

The groups page for a user should display the groups that user has

been added to

21

22

23

24

When a user clicks a group it should display a chat page for that

group

When a Admin user views the groups page it should include a form to

add/remove a group/channel/ user

When an admin on the groups page selects a group or channel it

should display the chat history of that group/channel

When a user logs in their details should be authenticated and if found

invalid display an invalid message, and if found valid send the user to

the groups page

25

26

The application should use a node.js backend with a mongo.db

database

The mongo.db database should store all user and group information

as well as channel history

27

28

Chat functionality should be enabled using sockets

When a user logs in or enters chat into a group/channel it should be

visible to all other channel/group users

29

Channels/groups should enable a video chat feature

1.2 git organisation

• Describe the organization of your Git repository and how you used it during the development of

your solution

My git repository is just a readme and my angular project

<https://github.com/sarahlikesoranges/OrangesMessagingService>





1.3 data structures

• Description of data structures used in both the client and server sides to represent the various

entities, e.g.: users, groups, channels, etc.

Users

Groups

Channels

data

User

un+pw

name

string

string

string

number

email

A-z, @, a-z, .com

(0-3)

Acc type

1- user

2- admin

3-admin ass

4-super admin

groups

groups[]

Array of groups

group

Grp0, grp1, grp2,

grp3,

group

channels[]

members[]

Array of channels

Array of users

channel

user

ch0,ch1,ch2

user0,user1,user2

channel

members[]

Array of users

user

user0,user1,user2





history[]

Array of events

event

{user, event, time}

messages[]

Array of messages

Message: message

{user, message, time}

1.4 angular architecture

• Angular architecture: components, services, models, routes. • Node server architecture:

modules, functions, files, global variables.

Component

app

Function

connection

login

parameters

Un + pw

Display the app

Let a user login

login

groups

groups

Show user info and

groups and their

channels

Channel, profile, login Channel, username

profile

Update user info

Groups, login

Groups, login

Username, email,

account type

channel

Allow user to chat

messages

1.5 Server side

component

Server

datasource

verification

Serve data

Save data

Username, password

User info, messages

User info, events

