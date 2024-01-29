This repo is all about inserting and reseting password email Id , Password and main purpose of this repo is  password will be hashed and saved into database with added feature as authorisation after reset password is processed

# API Endpoints

# Insert Email Id , Password

 To insert Email Id, password use the endpoint /user/addUser

# To reset password

 To reset the password and to generate the token link use endpoint  /user/forgottenPass

# Implement validation token matches

 Implement validation to ensure that the token provided by the user matches the token stored in the database, and utilize the  /user/checkPass endpoint to dynamically generate a password reset form

