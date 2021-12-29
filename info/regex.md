# regex

## start with end with

consider this regex to match any word joined by boolean operator "&" or "!" or "|"
ex: cat & mouse -> true
ex: cat -> true
ex: boy & girl & school -> true
ex: boy girl -> false

this regex start with word and end with word
the middle regex start with ("&" or "!" or "|") and word repeatedly

```
/^([a-z0-9\(\)])+(\s+[\!\&\|]\s+[a-z-0-9\(\)]+)*([a-z0-9\(\)])+$/
```

- string must be start with
  group 1 ^([a-z0-9\(\)])+
  any word which has letter "a" to "z" or "0" to "9" or "()"
- string must be end with
  group 3 ([a-z0-9\(\)])+$
