

# Demo Camera

Application consists of two web pages - tree.html and cam.html.
Tree shows a tree with 7 photos on its branches.
Photos can be updated by taking a phot with the cam view.

Live update is implemented using web socket.

The tree view is designed for ordinary workstation landscape screen.
The should work fine in the (Android) mobile device browser.


# Tech details

## Prerequisites & dev environment installation

Prerequisites:
- Node.js
````
$ node --version
v18.17.1
````
Installation

````npm install````

*Unless magically appearing, create "uploads" folder to the folder where running the code.*

Start:
````node server.js````

Configuration:
- Configuration parameters like PORT in .env

Test:
- Photos view: http://localhost:3002/tree.html
- Camera view: http://localhost:3002/cam.html (variations: cam-zoom.html, cam-basic.html)

# Links
- Source code: https://github.com/petteri-tuni-tla1/democam/edit/main/README.md (MIT Licence)
- Deployment for testing: TBD
 
# Improvement backlog

- Swapping between user and environment camera
- Web socket connection keep alive (disconnects at some point)
- Better mobile (portrait) support for the tree view
- Using some unique id to support multiuser usage

# History

## Initial version 10.12.2025


