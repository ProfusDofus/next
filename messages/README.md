## Description

This folder holds the strings translated in every language supported by Profus.

## Adding a new language

When adding a new language, add it first in the [next.config.js](../next.config.js) file, then create a new file with the name of the language in this folder.

## Note on the strings

We should be using the strings coming from the game files (stored in the database, and fetched when needed). Only the strings specific to this website should be put here.

## Note on translation

All strings should be translated, otherwise the website will fail to build. Note that it is possible to fallback to the default language (French) if a string is missing in a language.
