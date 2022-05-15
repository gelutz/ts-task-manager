INSTALLER=pnpm
install:
	$(INSTALLER) install; \
	for file in $$(ls ./app); do \
        echo "./app/$$file" && cd ./app/$$file && $(INSTALLER) i && cd ../..; \
    done

.PHONY: start
start:
	make install; \
	docker-compose up --build -d; \
	# cd app/desktop && yarn start & \
	docker-compose logs -f;

down:
	docker-compose down -v --rmi local
#

restart:
	docker-compose restart && docker-compose logs -f
