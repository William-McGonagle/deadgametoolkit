# Dead Game Toolkit
### Created by [![William McGonagle](https://github.com/William-McGonagle.png =30x30)](https://github.com/William-McGonagle/)

An open source tool for creating community based games or reviving old communities that have lost developer support.

## How does it work?
The Dead Game Toolkit is built off of serveral modules. These modules can be run independently, or used as the backbone of a custom server configuration. If you want to run the modules independently, there is a full guide on it below, but the quick answer is you want to compile each module independently, and run them. Then, you can use a reverse proxy like NGINX or Apache to tie all of the modules together with one server. This is the quickest, but least modifyable setup. For the second setup, you are going to reference the C++ files from whatever language you are working in. From there, you can setup an HTTP server, and call the functions however you would like. 

## How to help the project?
If you submit pull requests, I will look through them and if they work well, I will add them to the project. If you create an issue on the Github page, I will also look through that and, in most cases, add the suggested features. 