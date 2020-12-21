# Mithyalabs CLI
A command-line-interface(cli) for project management.



## Create new project
1. New **web** project
	```js
	mithya new web <project-name>
	```
2. New **admin** project
	```js
	mithya new admin <project-name>
	```

## Generate project files
### Web Projects
1. Base models
	```js
	mithya gen models
	```
	or
	```js
	mithya gen models --out-dir='src/base'
	```
2. Redux store
	```js
	mithya gen store <store-name>
	```