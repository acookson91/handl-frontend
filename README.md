# handl-frontend

Handl is here to take the hastle out of sending parcels in the London area. Customers are able to input the pick-up and drop-off addresses and view the delivery route prior to confirmation.

Once confirmed the new delivery shows in the riders home screen. Riders can select which parcel they would like to pick up. They can see the details of all dliveries and identify which is closest and how to get to all of the pickup points. Once collected the app will direct the rider to the parcels final destination.

This is the repo for the frontend of the app. This is built using Angularjs, allowing us to connect to api's, updating information throughout the customer journey without refreshing the page. 

Using Angular also allowed us to intergrate google maps updating routes on the map and geolocating all on the same page with no reload. 

Below are some of our design steps and future innovation.

## ScreenShots

Customer Signup

<img src="http://i.imgur.com/loZblvA.jpg"  width="530" >

Request Delivery

<img src="http://i.imgur.com/zvgBSvs.jpg"  width="530" >

Check Delivery

<img src="http://i.imgur.com/uHCkJ10.jpg"  width="530" >

Courier Signin

<img src="http://i.imgur.com/SOwzQvn.jpg"  width="530" >

Courier check/accept Delivery

<img src="http://i.imgur.com/E4et9ri.jpg"  width="530" >


## MVP Requirements

CUSTOMER:

create a delivery
name
pick-up address
drop-off address

COURIER:

list all possible delivery requests
select a delivery
confirm selection

## Future improvements:

implement Paypal, much like the uber model, for quick payment – invoice generation, log, rating, speed, efficiency, community. Have QR code confirmation emails that the courier needs to scan when they pick up the parcel. Bidding system by proximity by time, so parcels are collected by the closest driver.

Once the driver has scaned the QA code we would then like the user to instantly recieve an email requesting a delivery rating rating 
