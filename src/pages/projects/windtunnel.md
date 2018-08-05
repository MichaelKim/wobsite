---
layout: project
title: 1315-MH Wind Tunnel
description: Fully-functioning wind tunnel and analyzer
tools: Java, Arduino, C++, Matlab, LaTeX
github: AP-Physics
date: 2015-09-26
---

### About

The 1315-MH Wind Tunnel was the final project to my AP Physics C high school course. It could accurately measure and display the lift and drag forces on an airfoil placed inside via sensors and digital displays. To control the wind tunnel, it can be connected to a computer and monitored using a GUI which communicates with the wind tunnel.

### Development

The brain of the wind tunnel is an Arduino Mega, which was responsible for running and controlling all the individual parts of the tunnel, from the fan motor to the load cell sensors. A Java/Arduino library called Ardulink allowed for communication between the onboard Arduino and the Java GUI. I wrote a custom protocol which used Ardulink and was uploaded to the Arduino. It handled several message cases for controlling the fan and power to pins, and requesting values from the sensors.

To provide ample airflow, a powerful brushless DC motor (used in RC aircraft) was used. This proved to be a challenging task as it requires a separate power supply, an electronic speed controller (ESC) which needs specific programming to use, and pulse width modulation to control the speed of the fan.

The body of the wind tunnel was constructed from laser-cut pieces: the skeleton from MDF board, and the skin with Bristol board. Each piece was designed extensively and 3D-modeled to perfect the overall construction and functionality of the tunnel. This included the overall design, venture, viewing port, ESC module, and the electronics module. In addition, the airfoils were tested in a flow simulator to compare flow characteristics such as similitude. Along with the load cell components, they were 3D printed.

Each module was individually tested, such as the anemometer, the seven segment displays, the load cells, and most importantly, the fan. Further testing was done to make sure the fan worked in conjunction with the other components.

This project required months of planning and designing, which was all packaged into a prospectus prior to construction. The prospectus outlined the design of each section of the tunnel, all the electronic components such as the DC motor and the force sensors, and the software components. It also included 3D models of the necessary parts for the frame, and explained the theory of the airflow and the airfoils.

The [final Java GUI](https://github.com/LenKagamine/AP-Physics/tree/master/Summative) (source + executable), along with the Arduino protocol and testing code, are all available in the repo. The prospectus is available upon request.

{% include imagebox.html name="1315-mh-wind-tunnel" titles="
	Initial assembly of parts
" %}