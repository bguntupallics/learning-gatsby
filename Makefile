start:
	docker-compose up -d
	sleep 10
	npm run develop

stop:
	docker-compose down
