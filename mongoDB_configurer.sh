echo "Welcome to the MongoDB Configurer"
echo "The Script will automate the creation of the database on your mongo server and setting up a DB user account for your backend"
read -n 1 -r -s -p $'Press enter to continue...\n'
echo -e " \n\n "
echo -e "you will need the following information \nabout your Mongo Instance:\n-Local IP address\n-Port - if not the default of:27017\n-Root Username\n-Root Password"
read -n 1 -r -s -p $'Press enter to continue...\n'
echo -e "Please enter the Local IP address in the using the style:\n(10.0.0.0 or 192.168.1.1)"
read localIP
echo "Port:"
read port
echo "R-username"
read username
echo "R-Password"
read password
echo -e "Local-IP: $localIP\nPort: $port\nR-Username: $username\nR-Password: $password"
# take the user entered information and use the mongo shell to initalize the database and user account

# {
#   user: "doe_backend",
#   pwd: passwordPrompt(),      
#   roles: [
#     { role: "readWrite", db: "dusk_of_empires" }
#   ]
# }