Yesod Template
-------------

This is a basic [Yesod](http://yesodweb.com) template for use with [Postgres](http://www.postgresql.org), [Email-auth](http://hackage.haskell.org/package/yesod-auth-0.5.0/docs/Yesod-Auth-Email.html)
and [Zurb Foundation](http://foundation.zurb.com/) 5.4.0 for public peruse. This might get out of date, so
if it doesn't build, let me know.

Should you need to adjust the name of the project, this might help:

```sh
$ grep -rl 'YesodTemplate' * | xargs sed -i 's/YesodTemplate/MyCoolApp/g' 
$ vim config/database.yml
$ mv YesodTemplate.cabal MyCoolApp.cabal
```

Enjoy.
