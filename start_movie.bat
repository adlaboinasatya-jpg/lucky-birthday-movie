@echo off
title The Birthday Cinematic Movie - Leela
echo ===================================================
echo     STARTING THE BIRTHDAY CINEMATIC MOVIE
echo     Starring: LEELA - Happy Birthday!
echo ===================================================
echo.
echo Launching movie server on http://localhost:8085 ...
start "" "http://localhost:8085/"
node server.js
pause
