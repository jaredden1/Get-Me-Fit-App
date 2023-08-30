Project Title: Get Me Fit

Project Summary:


Fitness app that allows users to record individual workouts. The user may choose between cardio or strength training workouts. The user will have the ability to customize their workouts to achieve their fitness goals. Secondary use will be user referencing past workouts to gauge progress.
Trello Board- https://trello.com/b/q0CkniDD/p2-workflow
App Link- https://get-me-fit-dev-2b4dfc1e9975.herokuapp.com/

Team members:
Dustin, James, JT, Harry

Roles: 
- frontend - 
JT, Dustin

- backend - 
James, Harry, Dustin, JT

- git wrangler - 
Dustin

- design lead - 
Harry/James

- research / documentation lead - 
JT

Link to Github Repo : https://github.com/jaredden1/Get-Me-Fit-App
Link To Trello: https://trello.com/invite/b/q0CkniDD/ATTI4d798b6f83e6bd20c68cd3a5db0f14f965F8C42B/p2-workflow
Link to wireframe(s): https://drive.google.com/drive/folders/1alAJvDHQasePSXT7b0BfiDrRbbEUvmFj?usp=sharing





Wireframe:

HEADER - link to new workout, link to progress, link to home
INDEX – Welcome Get me fit (icons that link to strength or cardio pages, links to new workout page)
NEW WORKOUT – input fields for workout (exercise, weight, reps)

Primary Model / Schema  ***  WORKOUT TRACKER

Property
Datatype
_id
Objectid
exercise
String (pre-populated list of exercises)
weight
Number ( weight > 0)
reps
Number


Secondary Model / Schema  ***  Stats

Property
Datatype
_id
Objectid
weight
String
reps
String
notes
[objectID]
Entry Id
[objectID]
workout
String


MVP CRUD / Restful routes

Route name
CRUD operation
URL endpoint
Module name
Controller Action
POST
Create
/workouts/new
Create
workoutsCtrl.new
GET
Read
/workouts
Show
workoutsCtrl.show
PUT
Update
/workouts/:id
Update, EditWorkout
workoutsCtrl.update
DELETE
Delete
/workouts/:id
DeleteCardio & DeleteWorkout
workoutsCtrl.delete



ERD link or embed for ERD 



User Story:

MVP:
As a user, I want an organized way to keep track of my workouts (exercise, weight, reps), because I want to see my progress.
As a user, I would like an area to note how I felt about my workout, because I would like to be able to add comments about my workout.


User Flow:
When user chooses the strength training page they will have the ability to:
 choose between body parts that will be part of their exercise and the date of workout.
Customize each section with type, weight, reps, and notes 
delete and edit options are available users will be able to access this data for repetition of workouts and to track progress 

When user chooses the Cardio section page they will have the ability to: 
choose between the activities of running, cycling, jump rope, swimming, treadmill, stairmaster, and elliptical 
(optional)Add the time duration that goes from 15-60 minutes 
(optional) Distance 1-5 miles Add date ability to access the data to update and delete if needed



Optional Ice Box 
Ice Box Features:
As a user, I would like to track the length of my workouts, because I want to see progress. 
As a user, I would like to have a comparison between my previous workouts, again to see progress. 
Display stored data (last 7 workouts?)
