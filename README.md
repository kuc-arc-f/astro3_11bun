# astro3_11bun 

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2023/09/21

 update  : 2023/09/23 
***
### Summary

bun + Astro 3 + tailwindcss + Cloudflare pages, sample

***
### API Server

https://github.com/kuc-arc-f/bun_5d1

***
### setup
* .env

```
PUBLIC_SYSTEM_NAME = "astro3_11bun"

PUBLIC_USER_ID=100
PUBLIC_API_URL=https://hoge
PUBLIC_API_KEY="123"
```

***
### Start

```
bun install

#start-dev

bun --bun astro dev

#build
bun --bun astro build

#deploy
bunx wrangler pages deploy dist
```

***
### blog


***

