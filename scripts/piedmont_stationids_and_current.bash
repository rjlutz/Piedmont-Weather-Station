#!/bin/bash


SVC=https://api.weatherlink.com/v2

KEY=c5hl3euhqgih7xk5yonp6uch8apbojmb
SECRET="" # SET LOCALLY!
STATION=48e9f1e1-108e-449d-a8bb-18126f248576

curl ${SVC}/stations?api-key=${KEY} -H "X-Api-Secret: ${SECRET}"

echo ""
echo ""
echo ${SVC}/current/${STATION}?api-key=${KEY}
curl ${SVC}/current/${STATION}?api-key=${KEY} -H "X-Api-Secret: ${SECRET}"
