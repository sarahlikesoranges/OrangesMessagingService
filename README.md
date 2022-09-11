# OrangesMessagingService

Assignment stage 1
3815 ICT Software Frameworks
Student name: Sarah Puglisi Student number: s2954938
Workshop: monday 8am
1. Design
1.1- functional requirements
FRID# Functional requirements
1 
Users can input text into a web browser
2 
Users can login to a web browser page
3 
User can enter text to a channel/group they are assigned to
4 
Users can be assigned to groups
5 
Users can be assigned to channels
6 
Users can have account types
7 
Users can have a profile image
8 
Admin users can add users to channels and groups
9 
Super admins can add users to channels and groups
10 
Super admins, Admins, and Admin assis can create channels
11 
Super admins can remove all users
12 
Super admins can add users to super admin role
13 
A group can have one or more rooms
14 
A group has a list of users
15 
A room has a list of users
16 
A user can have a username, email, id, and role
17 
A page called login should be the first page displayed
18 
The login page should have fields for user login details which will be
stored in local storage, and a logout button which clears local storage
19 
A page called groups should be displayed to a user who has logged in
20 
The groups page for a user should display the groups that user has
been added to
21 
When a user clicks a group it should display a chat page for that
group
22 
When a Admin user views the groups page it should include a form to
add/remove a group/channel/ user
23 
When an admin on the groups page selects a group or channel it
should display the chat history of that group/channel
24 
When a user logs in their details should be authenticated and if found
invalid display an invalid message, and if found valid send the user to
the groups page
25 
The application should use a node.js backend with a mongo.db
database
26 
The mongo.db database should store all user and group information
as well as channel history
27 
Chat functionality should be enabled using sockets
28 
When a user logs in or enters chat into a group/channel it should be
visible to all other channel/group users
29 
Channels/groups should enable a video chat feature
1.2 git organisation
• Describe the organization of your Git repository and how you used it during the development of
your solution
My git repository is just a readme and my angular project
https://github.com/sarahlikesoranges/OrangesMessagingService
1.3 data structures
• Description of data structures used in both the client and server sides to represent the various
entities, e.g.: users, groups, channels, etc.
Users
Groups
Channels
data
User
un+pw 
string
name 
string
email 
string 
A-z, @, a-z, .com
Acc type 
number 
(0-3) 
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
Array of channels 
channel 
ch0,ch1,ch2
members[] 
Array of users 
user 
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
Function 
connection 
parameters
app 
Display the app 
login
login 
Let a user login 
groups 
Un + pw
groups 
Show user info and
groups and their
channels
Channel, profile, login Channel, username
profile 
Update user info 
Groups, login 
Username, email,
account type
channel 
Allow user to chat 
Groups, login 
messages
1.5 Server side
component
Server
datasource
verification 
Username, password
Serve data 
User info, messages
Save data 
