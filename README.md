# Fakir MonoRepo for Webapps

This repository is our basic boilerplate to start new webapplications in the following modern webstack:

* node/nestjs backend
* fullstack typescript
* react (vite)
* nx
* docker/kubernetes deployment


# Development

## run dev env



    npm run dev

    http://localhost:4200/    # frontend
    
    http://localhost:3333/api # backend


# Addtional recommendations

We use vscode with this stack.

## how to add a new nestjs microservice?


    nx g @nrwl/nest:app microserviceName

## how to add a new reactjs project

    nx g @nrwl/react:app appName


# Helpful commands


    nx graph # shows dependency graph



# Todo

[] nestjs
[] react build
[] production setup
[] docker container


# files info

* workspace.json -> for  nx
* .vscode -> settings for vscode
* apps folder -> contains one folder per project
