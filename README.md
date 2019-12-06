# DEMO

## Step 1
Add this to your host file

```bash
127.0.0.1   web
```
## Step 2

Run

```
npm install

```

## Step 3

Run

```bash
docker-compose up --build
```

## Step 4

Open http://web:8080/


## Step 5

* You can simply add more html component in the components directory and you should be able to access it via the node api running on port 3000. E.g. http://localhost:3000/components/my-new-component.html

* You can then simply edit the index.html file in the root file and add your component via the esi tags by just adding this in the src attribute /components/my-new-component.html

## NOTE

This html components will obviously, ultimately be React components thats rendered server side. This is just demoing the Edge includes.
