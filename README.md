# watchtf

"Watch the files", a CLI program to watch glob patterns and run a command on changes

It uses chokidar just like gulp-watch 


## usage

```bash
$ watchtf -h

Options:
  -f, --files    one or more glob patterns to watch           [array] [required]
  -c, --command  the command to run                          [string] [required]

$ watchtf -f "**/*.m" -c "mmc --make hello"
```


## what the name?

There's maybe a couple of hundred watch programs on npm that pretty much do the same thing. I looked and couldn't find anything that does something like this, but all of the names were taken... w(atch)tf indeed.
