# Makefile for web deployment
# Must first:
# mkdir /var/www/html/calc
# sudo chown ubuntu /var/www/html/calc

all: PutHTML

PutHTML:
	cp calc.html /var/www/html/calc/
	cp calc.css /var/www/html/calc/
	cp calc.js /var/www/html/calc/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/calc/
