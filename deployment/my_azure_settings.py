
# This is a python file to set up the environment variables you'll need for your deployment.
# The UPPER_CASE_VALUES will be sent as env vars to your deployment

# This will tell your deployed app to use the settings file in Sample/Azure.py (with your postgreSQL DB settings) 
# instead of the default Sample.settings.py
DJANGO_SETTINGS_MODULE='Sample.azure'

# This tells Azure App service to run this shell file after deployment
# By default, it contains a migrate command
POST_BUILD_COMMAND='deployment/post-build.sh'

# The Azure App name, Resource Group, and Location to use for you application.
# FILL IN THESE VALUES! THEY ARE REQUIRED
# app service app name should not include the https:// or the .azurewebsites.net portion (e.g., `example-domain` and not `example-domain.azurewebsites.net`)
APP_SERVICE_APP_NAME='https://d701apsi01-la03skc.azurewebsites.net'
AZ_RESOURCE_GROUP='P707RGSI01'
AZ_LOCATION='Southeast Asia'

# Server Name, Admin User and Admin Password for creating the PostgreSQL server on Azure, and the application DB name you want to use.
# FILL IN THESE VALUES! THEY ARE REQUIRED
POSTGRES_SERVER_NAME='skcone'
POSTGRES_ADMIN_USER='administrator'
POSTGRES_ADMIN_PASSWORD='Pass1234'
APP_DB_NAME='my-django-db'

# The Azure PostgreSQL server host.
# This will not be available until after creating the database server.
# (Will be output at end if running `createdb.py`)
# copy and paste the the "fully qualified domain name" here.
POSTGRES_FULLY_QUALIFIED_DOMAIN_NAME=''

# Public IP address of the machine you're working from
# This is required if you're looking to manage the Django database from your local machine's command line
# Find this by going to Bing search or Google search with the search term "What is my IP"
# This is REQUIRED if you plan on using manage.py commands on the PostgreSQL DB from your local machine.
MY_IP_ADDRESS='0.0.0.0'