

client:
	webpack
	cp src/index.html dist/


server:
	babel src/server.js --source-maps inline --out-file dist/server.bundle.js


.PHONY: *
