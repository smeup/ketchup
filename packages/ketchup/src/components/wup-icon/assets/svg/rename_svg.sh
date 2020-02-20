#!/bin/bash
for file in ic_*.svg
do
    mv -i "${file}" "${file/ic_/}"
done

FOURTYEIGHT='_48px'
for file in *${FOURTYEIGHT}.svg
do
    mv -i "${file}" "${file/$FOURTYEIGHT.svg/.svg}"
done


