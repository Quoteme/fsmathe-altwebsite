#/usr/bin/env bash

# This script adds a notice text to the top of of each html or php file
# in the current directory and all subdirectories.

# The notice text is stored in the file archive_notice.js
# it is included by adding the script tag to the bottom of each file.
# We include the script by adding
# `<script src="archive_notice.js"></script>`
# to the bottom of each file.

for file in $(find . -type f -name "*.html" -o -name "*.php"); do
    # Add the script tag to the bottom of the file
    echo '<script src="archive_notice.js"></script>' >> $file
done
