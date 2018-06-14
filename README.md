# League of Legends bot for Discord by Scuro Guardiano
# WORK IN PROGRESS
## Features
+ Check summoner info
+ Check summoner match history
+ Check livegame info
## Commands
* ```.sg-check <summoner nickname> <region>``` - displays info about summoner
* ```.sg-checkhistory <summoner nickname> <region>``` - displays summoner history
* ```.sg-checklive <summoner nickname> <region>``` - display summoner live game info
* ```.sg-useregion <region>``` - set default region
* ```.sg-alias <alias> <command>``` - Allow to assign alias to command  
For example: ```.sg-alias check sg-check``` will allow to use command .check instead .sg-check
## Regions
- eune - Europe Nordic & East
- euw - Europe West
- na - North America
- kr - Korea
- br - Brazil
- lan - Latin America North
- las - Latin America South
- oce - Oceania
- ru - Russia
- tr - Turkey
- jp - Japan
## How to run
1. Download Node.js from https://nodejs.org/en/
2. Download this bot  
    1. via git:
        ```sh
            git clone https://github.com/ScuroGuardiano/lol-discord-bot.git
        ```
    2. Or simply click Download on the top of this page
3. Create file config.json and write this:
    ```json
        {
            "riotAPIKey": "<Your riot api key here>",
            "discordBotToken": "<Your Discord Bot Token here>"
        }
    ```
4. Run:
    ```sh
        npm install
        npm install -g typescript
        npm run build
        npm run start
    ```


## LICENSE
Copyright 2018 Scuro Guardiano

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.